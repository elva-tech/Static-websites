import { chromium } from "playwright";

const widths = [320, 360, 375, 390, 430, 768, 1024, 1440];
const url = process.env.BASE_URL || "http://localhost:8080/";

const browser = await chromium.launch();
const page = await browser.newPage();

for (const w of widths) {
  await page.setViewportSize({ width: w, height: 800 });
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(500);
  const { sw, cw, offenders } = await page.evaluate(() => {
    const sw = document.documentElement.scrollWidth;
    const cw = document.documentElement.clientWidth;
    const offenders = [];
    for (const el of document.querySelectorAll("body *")) {
      const r = el.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) continue;
      if (r.right > cw + 1 || r.left < -1) {
        const tag = el.tagName.toLowerCase();
        const cls = typeof el.className === "string" ? el.className.slice(0, 80) : "";
        offenders.push({ tag, cls, left: Math.round(r.left), right: Math.round(r.right), cw });
      }
    }
    offenders.sort((a, b) => b.right - a.right);
    return { sw, cw, offenders: offenders.slice(0, 8) };
  });
  const overflow = sw > cw;
  console.log(`${w}px: scroll=${sw} client=${cw} overflow=${overflow}`);
  if (overflow && offenders.length) {
    for (const o of offenders) console.log(`  ${o.tag}.${o.cls} L${o.left} R${o.right}`);
  }
}

await browser.close();
