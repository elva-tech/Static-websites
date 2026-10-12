import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Illustrative } from "./site";

import {
  Bell,
  BookOpen,
  CalendarCheck,
  ChevronRight,
  ClipboardList,
  Clock,
  FileText,
  Flag,
  GraduationCap,
  LayoutDashboard,
  MessageSquare,
  PlayCircle,
  Sparkles,
  Users,
  Video,
} from "lucide-react";


const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Window({ title, children, className, dark }: { title: string; children: ReactNode; className?: string; dark?: boolean }) {
  return (
    <div className={cn("w-full min-w-0 max-w-full overflow-hidden rounded-2xl border shadow-float", dark ? "border-ink-border bg-ink-2" : "border-border bg-card", className)}>
      <div className={cn("flex min-w-0 items-center justify-between gap-2 border-b px-4 py-2.5 sm:gap-3", dark ? "border-ink-border" : "border-border bg-surface")}>
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <span className="flex gap-1.5" aria-hidden>
            <i className="size-2.5 rounded-full bg-input" />
            <i className="size-2.5 rounded-full bg-input" />
            <i className="size-2.5 rounded-full bg-input" />
          </span>
          <span className={cn("ml-2 truncate text-xs font-medium", dark ? "text-ink-muted" : "text-muted-foreground")}>{title}</span>
        </div>
        <Illustrative tone={dark ? "dark" : "light"} className="max-w-[9rem] shrink truncate sm:max-w-none sm:whitespace-normal" />
      </div>
      {children}
    </div>
  );
}

function Stat({ label, value, sub, delay = 0 }: { label: string; value: string; sub: string; delay?: number }) {
  return (
    <div className="rounded-xl border border-border bg-card p-3">
      <p className="text-[0.68rem] text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-xl font-semibold">{value}</p>
      <div className="mt-2 h-1 rounded-full bg-muted">
        <div className="bar-x h-1 rounded-full bg-primary" style={{ width: sub, ...d(delay) }} />
      </div>
    </div>
  );
}

export function AdminDashboard() {
  const bars = [62, 74, 58, 81, 77, 88, 84];
  return (
    <Window title="Admin Dashboard — Sample Institute">
      <div className="grid min-w-0 grid-cols-[3.25rem_minmax(0,1fr)] sm:grid-cols-[10rem_minmax(0,1fr)]">
        <aside className="border-r border-border bg-surface p-2 sm:p-3" aria-hidden>
          {[
            [LayoutDashboard, "Overview"],
            [Users, "Students"],
            [GraduationCap, "Teachers"],
            [BookOpen, "Courses"],
            [ClipboardList, "Tests"],
            [CalendarCheck, "Attendance"],
            [Bell, "Notices"],
          ].map(([Icon, l], i) => {
            const I = Icon as typeof Users;
            return (
              <div key={l as string} className={cn("mb-1 flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs", i === 0 ? "bg-primary-soft text-accent-foreground" : "text-muted-foreground")}>
                <I className="size-3.5 shrink-0" />
                <span className="hidden sm:inline">{l as string}</span>
              </div>
            );
          })}
        </aside>
        <div className="min-w-0 space-y-3 p-3 sm:p-4">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <Stat label="Active students" value="1,240" sub="78%" />
            <Stat label="Active batches" value="32" sub="64%" delay={100} />
            <Stat label="Attendance today" value="91%" sub="91%" delay={200} />
            <Stat label="Avg. test score" value="72%" sub="72%" delay={300} />
          </div>
          <div className="grid gap-3 sm:grid-cols-[1.4fr_1fr]">
            <div className="rounded-xl border border-border p-3">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium">Test performance · last 7 tests</p>
                <span className="text-[0.65rem] text-muted-foreground">All batches</span>
              </div>
              <div className="mt-3 flex h-24 items-end gap-2">
                {bars.map((b, i) => (
                  <div key={i} className="flex-1 rounded-t-md bg-primary-soft">
                    <div className="bar-y rounded-t-md bg-primary" style={{ height: `${b}px`, ...d(i * 70) }} />
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-border p-3">
              <p className="text-xs font-medium">Today's classes</p>
              <ul className="mt-2 space-y-2 text-[0.72rem]">
                {[
                  ["09:30", "Physics · JEE Batch A", "Live"],
                  ["11:00", "Chemistry · NEET B", "Next"],
                  ["16:00", "Maths · Class 10", "Scheduled"],
                ].map(([t, n, s]) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="font-mono text-muted-foreground">{t}</span>
                    <span className="flex-1 truncate">{n}</span>
                    <span className={cn("rounded-full px-1.5 py-0.5 text-[0.6rem]", s === "Live" ? "bg-success/15 text-success" : "bg-muted text-muted-foreground")}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary-soft p-3">
            <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" />
            <div className="text-[0.75rem] leading-relaxed">
              <p className="font-medium text-accent-foreground">AI insight</p>
              <p className="text-muted-foreground">14 students in NEET B show declining scores in Organic Chemistry. Suggested: revision test + recorded lesson 4.2.</p>
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
}

export function DoubtSolver() {
  return (
    <Window title="AI Doubt Solver" dark>
      <div className="space-y-3 p-4 text-[0.8rem]">
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-3.5 py-2.5 text-primary-foreground">Why does the time period of a pendulum not depend on its mass?</div>
        <div className="max-w-[92%] rounded-2xl rounded-bl-sm border border-ink-border bg-ink px-3.5 py-3 text-ink-foreground">
          <p className="flex items-center gap-1.5 text-[0.68rem] text-chart-2"><Sparkles className="size-3" /> Based on: Physics › Oscillations › Lesson 3 notes</p>
          <p className="mt-2 leading-relaxed text-ink-muted">For small angles, T = 2π√(L/g). Mass cancels because the restoring force (mg sinθ) and inertia (m) both scale with mass…</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {["Simplify this", "Show an example", "Try a practice question"].map((c) => (
              <span key={c} className="rounded-full border border-ink-border px-2.5 py-1 text-[0.68rem] text-ink-foreground">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </Window>
  );
}

export function QuizGenerator() {
  return (
    <Window title="AI Quiz Generator">
      <div className="space-y-3 p-4 text-[0.78rem]">
        <div className="flex flex-wrap gap-2">
          {[["Source", "Chapter 6 · Thermodynamics"], ["Type", "MCQ"], ["Difficulty", "Mixed"], ["Count", "15"]].map(([k, v]) => (
            <span key={k} className="rounded-lg border border-border bg-surface px-2.5 py-1.5"><span className="text-muted-foreground">{k}: </span>{v}</span>
          ))}
        </div>
        {["Which process occurs at constant temperature?", "First law of thermodynamics expresses conservation of…"].map((q, i) => (
          <div key={q} className="rounded-xl border border-border p-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.65rem] text-muted-foreground">Q{i + 1} · {i ? "Easy" : "Medium"}</span>
              <span className="rounded-full bg-warning/15 px-2 py-0.5 text-[0.62rem] text-foreground">Needs teacher review</span>
            </div>
            <p className="mt-1.5 font-medium">{q}</p>
          </div>
        ))}
        <div className="flex justify-end gap-2">
          <span className="rounded-full border border-border px-3 py-1.5 text-xs">Edit</span>
          <span className="rounded-full bg-primary px-3 py-1.5 text-xs text-primary-foreground">Approve &amp; add to test</span>
        </div>
      </div>
    </Window>
  );
}

export function LectureSummary() {
  return (
    <Window title="AI Lecture Summary">
      <div className="grid gap-3 p-4 text-[0.78rem] sm:grid-cols-[9rem_1fr]">
        <div className="flex aspect-video items-center justify-center rounded-xl bg-ink sm:aspect-auto"><PlayCircle className="size-8 text-ink-muted" /></div>
        <div className="space-y-2">
          <p className="font-medium">Organic Chemistry · Lecture 12 (recorded)</p>
          {[["Key concepts", "SN1 vs SN2 mechanisms, carbocation stability"], ["Formulae", "Rate = k[RX] · Rate = k[RX][Nu⁻]"], ["Revision prompts", "3 questions generated"]].map(([k, v]) => (
            <div key={k} className="rounded-lg bg-surface px-3 py-2"><span className="text-muted-foreground">{k} — </span>{v}</div>
          ))}
        </div>
      </div>
    </Window>
  );
}

export function ParentReport() {
  return (
    <Window title="Parent Dashboard · Monthly report">
      <div className="space-y-3 p-4 text-[0.78rem]">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary-soft font-display text-sm font-semibold text-accent-foreground">S</span>
          <div><p className="font-medium">Sample Student · Class 11 PCM</p><p className="text-muted-foreground">Report for the selected month</p></div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          {[["Attendance", "94%"], ["Avg. score", "76%"], ["Tests", "6"]].map(([k, v]) => (
            <div key={k} className="rounded-lg bg-surface p-2"><p className="font-display text-lg font-semibold">{v}</p><p className="text-[0.65rem] text-muted-foreground">{k}</p></div>
          ))}
        </div>
        <p className="rounded-lg border border-border p-3 leading-relaxed text-muted-foreground"><span className="font-medium text-foreground">Summary: </span>Strong progress in Mathematics. Physics — Rotational Motion needs attention; two practice sets recommended.</p>
      </div>
    </Window>
  );
}

export function TestPlayer() {
  return (
    <Window title="Mock Test · JEE Physics">
      <div className="grid gap-4 p-4 text-[0.78rem] sm:grid-cols-[1fr_9.5rem]">
        <div>
          <div className="flex items-center justify-between text-muted-foreground"><span>Question 7 of 30 · +4 / −1</span><span className="flex items-center gap-1 font-mono"><Clock className="size-3.5" />42:18</span></div>
          <p className="mt-3 font-medium leading-relaxed">A body moving in a circle at constant speed has…</p>
          <ul className="mt-3 space-y-2">
            {["Constant velocity", "Constant acceleration", "Changing velocity, constant speed", "Zero acceleration"].map((o, i) => (
              <li key={o} className={cn("flex items-center gap-2 rounded-lg border px-3 py-2", i === 2 ? "border-primary bg-primary-soft" : "border-border")}>
                <span className={cn("flex size-5 items-center justify-center rounded-full border text-[0.6rem]", i === 2 ? "border-primary bg-primary text-primary-foreground" : "border-input")}>{"ABCD"[i]}</span>{o}
              </li>
            ))}
          </ul>
          <div className="mt-3 flex gap-2"><span className="flex items-center gap-1 rounded-full border border-border px-3 py-1.5"><Flag className="size-3" />Mark for review</span><span className="rounded-full bg-primary px-3 py-1.5 text-primary-foreground">Save &amp; next</span></div>
        </div>
        <div>
          <p className="text-muted-foreground">Question palette</p>
          <div className="mt-2 grid grid-cols-5 gap-1.5">
            {Array.from({ length: 30 }, (_, i) => (
              <span key={i} className={cn("flex aspect-square items-center justify-center rounded-md text-[0.6rem]", i < 6 ? "bg-success/20" : i === 6 ? "bg-primary text-primary-foreground" : i === 3 || i === 9 ? "bg-warning/25" : "bg-muted text-muted-foreground")}>{i + 1}</span>
            ))}
          </div>
        </div>
      </div>
    </Window>
  );
}

export function ResultView() {
  const topics = [["Kinematics", 88], ["Laws of Motion", 74], ["Work & Energy", 61], ["Rotation", 42]] as const;
  return (
    <Window title="Test Result" dark>
      <div className="grid gap-4 p-4 text-[0.78rem] text-ink-foreground sm:grid-cols-[8rem_1fr]">
        <div className="flex flex-col items-center justify-center rounded-xl border border-ink-border p-3">
          <svg viewBox="0 0 80 80" className="size-20 -rotate-90" aria-hidden>
            <circle cx="40" cy="40" r="32" fill="none" stroke="var(--ink-border)" strokeWidth="8" />
            <circle cx="40" cy="40" r="32" fill="none" stroke="var(--chart-2)" strokeWidth="8" strokeDasharray="201" strokeDashoffset="56" strokeLinecap="round" />
          </svg>
          <p className="mt-2 font-display text-lg font-semibold">72%</p>
          <p className="text-[0.65rem] text-ink-muted">Rank 14 · 38:12</p>
        </div>
        <div className="space-y-2.5">
          <p className="text-ink-muted">Topic-wise performance</p>
          {topics.map(([t, v], i) => (
            <div key={t}>
              <div className="flex justify-between"><span>{t}</span><span className="font-mono text-ink-muted">{v}%</span></div>
              <div className="mt-1 h-1.5 rounded-full bg-ink"><div className={cn("bar-x h-1.5 rounded-full", v < 50 ? "bg-warning" : "bg-chart-2")} style={{ width: `${v}%`, ...d(i * 120) }} /></div>
            </div>
          ))}
          <p className="flex items-center gap-1.5 pt-1 text-chart-2"><Sparkles className="size-3.5" />Recommended: Rotation practice set + Lesson 8 video</p>
        </div>
      </div>
    </Window>
  );
}

export function AttendanceGrid() {
  const pattern = "PPPAPPPPPAPPPPPPAPPPPPPPPAAPPP";
  return (
    <Window title="Attendance · NEET Batch B">
      <div className="p-4 text-[0.75rem]">
        <div className="space-y-2">
          {["Student 01", "Student 02", "Student 03", "Student 04"].map((s, r) => (
            <div key={s} className="flex items-center gap-3">
              <span className="w-16 shrink-0 text-muted-foreground">{s}</span>
              <div className="flex flex-1 gap-1">
                {pattern.slice(0, 20).split("").map((c, i) => {
                  const absent = r === 2 ? i > 14 || c === "A" : c === "A" && (i + r) % 3 === 0;
                  return <span key={i} className={cn("h-4 flex-1 rounded-sm", absent ? "bg-destructive/70" : "bg-primary/70")} />;
                })}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 rounded-lg bg-destructive/10 px-3 py-2 text-foreground">Alert: Student 03 — repeated absence (5 consecutive classes). Parent notification queued.</p>
      </div>
    </Window>
  );
}

export function TeacherPanel() {
  return (
    <Window title="Teacher Dashboard">
      <div className="space-y-2 p-4 text-[0.78rem]">
        {[
          [Video, "Physics · Batch A", "Live class at 09:30", "Start"],
          [FileText, "Assignment: Vectors", "18 of 42 submitted", "Review"],
          [Sparkles, "Generate quiz", "From Lesson 5 notes", "Open"],
          [MessageSquare, "Doubts flagged by AI", "6 need teacher input", "View"],
        ].map(([Icon, a, b, c]) => {
          const I = Icon as typeof Video;
          return (
            <div key={a as string} className="flex items-center gap-3 rounded-xl border border-border p-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary-soft"><I className="size-4 text-primary" /></span>
              <div className="min-w-0 flex-1"><p className="font-medium">{a as string}</p><p className="text-muted-foreground">{b as string}</p></div>
              <span className="flex items-center text-primary">{c as string}<ChevronRight className="size-3.5" /></span>
            </div>
          );
        })}
      </div>
    </Window>
  );
}

// export function StudentPhone() {
//   return (
//     <div className="mx-auto w-[17rem] rounded-[2.25rem] border-[6px] border-ink bg-card p-4 shadow-float">
//       <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-muted" />
//       <p className="text-[0.7rem] text-muted-foreground">Good evening</p>
//       <p className="font-display text-lg font-semibold">Your day</p>
//       <div className="mt-3 rounded-2xl bg-primary p-3 text-primary-foreground">
//         <p className="text-[0.65rem] opacity-80">Next class · 6:00 PM</p>
//         <p className="text-sm font-medium">Chemistry — Equilibrium</p>
//       </div>
//       <div className="mt-3 space-y-2 text-[0.72rem]">
//         {[[ClipboardList, "Weekly test", "Due tomorrow"], [FileText, "Notes: Lesson 7", "PDF · 12 pages"], [Sparkles, "Revise: Ionic equilibrium", "Recommended for you"], [CheckCircle2, "Attendance", "93% this month"]].map(([Icon, a, b]) => {
//           const I = Icon as typeof Video;
//           return (
//             <div key={a as string} className="flex items-center gap-2.5 rounded-xl border border-border p-2.5">
//               <I className="size-4 text-primary" />
//               <div><p className="font-medium">{a as string}</p><p className="text-muted-foreground">{b as string}</p></div>
//             </div>
//           );
//         })}
//       </div>
//       <p className="mt-3 text-center"><Illustrative /></p>
//     </div>
//   );
// }


export function StudentPhone() {
  return (
    <div className="relative mx-auto w-full max-w-[17.5rem] px-1">
      {/* Side hardware buttons */}
      <span className="absolute -left-[3px] top-24 h-6 w-[3px] rounded-l-sm bg-ink max-sm:hidden" aria-hidden />
      <span className="absolute -left-[3px] top-36 h-10 w-[3px] rounded-l-sm bg-ink max-sm:hidden" aria-hidden />
      <span className="absolute -left-[3px] top-50 h-10 w-[3px] rounded-l-sm bg-ink max-sm:hidden" aria-hidden />
      <span className="absolute -right-[3px] top-36 h-14 w-[3px] rounded-r-sm bg-ink max-sm:hidden" aria-hidden />

      {/* Phone body: fixed 9:19 aspect ratio so it always looks like a phone */}
      <div className="aspect-[9/19] w-full rounded-[2.5rem] border-[7px] border-ink bg-ink shadow-float">
        <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-background">
          {/* Dynamic island */}
          <div className="absolute left-1/2 top-1.5 z-10 h-[1.1rem] w-16 -translate-x-1/2 rounded-full bg-ink" />

          {/* Status bar */}
          <div className="flex shrink-0 items-center justify-between px-5 pt-2 text-[0.58rem] font-semibold text-foreground">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span className="flex items-end gap-0.5">
                <span className="h-1 w-0.5 rounded-full bg-foreground" />
                <span className="h-1.5 w-0.5 rounded-full bg-foreground" />
                <span className="h-2 w-0.5 rounded-full bg-foreground" />
                <span className="h-2.5 w-0.5 rounded-full bg-foreground" />
              </span>
              <span className="h-2 w-3.5 rounded-sm border border-foreground/70 p-0.5">
                <span className="block h-full w-3/4 rounded-[1px] bg-foreground" />
              </span>
            </div>
          </div>

          {/* Scrollable-looking content area (clipped, never stretches the phone) */}
          <div className="relative min-h-0 flex-1 overflow-hidden">
            {/* App header */}
            <div className="flex items-center justify-between px-3.5 pb-2 pt-3">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <GraduationCap className="size-4" />
                </div>
                <div>
                  <p className="text-[0.55rem] text-muted-foreground">ELVA LEARN</p>
                  <p className="text-xs font-bold text-foreground">Student Portal</p>
                </div>
              </div>
              <div className="relative flex size-8 items-center justify-center rounded-full border border-border bg-card">
                <Bell className="size-3.5 text-foreground" />
                <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-primary" />
              </div>
            </div>

            {/* Greeting */}
            <div className="px-3.5">
              <p className="text-[0.6rem] text-muted-foreground">Monday, 12 October</p>
              <h3 className="text-lg font-bold leading-tight tracking-tight text-foreground">
                Good morning!
              </h3>
              <p className="text-[0.65rem] text-muted-foreground">
                Ready to make today count?
              </p>
            </div>

            {/* Learning streak */}
            <div className="mx-3.5 mt-2.5 flex items-center justify-between rounded-xl border border-primary/10 bg-primary/5 px-2.5 py-1.5">
              <div className="flex items-center gap-2">
                <div className="flex size-7 items-center justify-center rounded-lg bg-card text-primary shadow-sm">
                  <Sparkles className="size-3.5" />
                </div>
                <div>
                  <p className="text-[0.65rem] font-semibold text-foreground">
                    Keep it going!
                  </p>
                  <p className="text-[0.55rem] text-muted-foreground">
                    Learning journey
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold leading-tight text-foreground">7 days</p>
                <p className="text-[0.52rem] text-muted-foreground">Streak</p>
              </div>
            </div>

            {/* Continue learning */}
            <div className="mt-3 px-3.5">
              <div className="mb-1.5 flex items-center justify-between">
                <h4 className="text-xs font-bold text-foreground">Continue learning</h4>
                <span className="text-[0.58rem] font-medium text-primary">View all</span>
              </div>

              <div className="overflow-hidden rounded-xl bg-ink text-ink-foreground shadow-md">
                <div className="flex items-start justify-between px-3 pb-2 pt-2.5">
                  <div className="min-w-0">
                    <span className="rounded-md bg-white/10 px-1.5 py-0.5 text-[0.52rem] font-medium text-white/80">
                      PHYSICS
                    </span>
                    <p className="mt-1.5 text-xs font-semibold text-white">Laws of Motion</p>
                    <p className="mt-0.5 text-[0.58rem] text-white/60">
                      Chapter 04 · Lesson 08
                    </p>
                  </div>
                  <div className="ml-2 flex size-8 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <BookOpen className="size-4 text-white" />
                  </div>
                </div>

                <div className="px-3 pb-2.5">
                  <div className="mb-1 flex items-center justify-between text-[0.58rem]">
                    <span className="text-white/60">Course progress</span>
                    <span className="font-semibold text-white">68%</span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-white/15">
                    <div className="h-full w-[68%] rounded-full bg-chart-2" />
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-[0.55rem] text-white/60">12 of 18 lessons</span>
                    <div className="flex items-center gap-1 rounded-lg bg-white px-2 py-1 text-[0.58rem] font-semibold text-ink">
                      <PlayCircle className="size-3" />
                      Resume
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Today's schedule */}
            <div className="mt-3 px-3.5">
              <div className="mb-1.5 flex items-center justify-between">
                <h4 className="text-xs font-bold text-foreground">Today's schedule</h4>
                <CalendarCheck className="size-3.5 text-muted-foreground" />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 rounded-xl border border-border bg-card p-1.5">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Video className="size-3.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[0.65rem] font-semibold text-foreground">
                      Chemistry
                    </p>
                    <p className="truncate text-[0.55rem] text-muted-foreground">
                      Equilibrium · Live class
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-[0.55rem] font-semibold text-foreground">10:30 AM</p>
                    <span className="inline-block rounded-full bg-success/10 px-1.5 py-0.5 text-[0.5rem] font-medium text-success">
                      Upcoming
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-border bg-card p-1.5">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <ClipboardList className="size-3.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[0.65rem] font-semibold text-foreground">
                      Weekly assessment
                    </p>
                    <p className="truncate text-[0.55rem] text-muted-foreground">
                      Mathematics · 20 questions
                    </p>
                  </div>
                  <ChevronRight className="size-3.5 shrink-0 text-muted-foreground" />
                </div>
              </div>
            </div>

            {/* Soft fade so any overflow looks like natural scroll */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-background to-transparent" />
          </div>

          {/* Bottom navigation: pinned to the bottom of the screen */}
          <div className="shrink-0 border-t border-border bg-card px-1.5 pb-1.5 pt-2">
            <div className="grid grid-cols-4">
              {[
                { icon: LayoutDashboard, label: "Home", active: true },
                { icon: BookOpen, label: "Courses", active: false },
                { icon: CalendarCheck, label: "Schedule", active: false },
                { icon: Users, label: "Profile", active: false },
              ].map(({ icon: Icon, label, active }) => (
                <div
                  key={label}
                  className={`flex flex-col items-center gap-0.5 ${
                    active ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <Icon className="size-3.5" />
                  <span className="text-[0.52rem] font-medium">{label}</span>
                  {active && <span className="h-0.5 w-3 rounded-full bg-primary" />}
                </div>
              ))}
            </div>
            {/* Home indicator */}
            <div className="mx-auto mt-1.5 h-1 w-12 rounded-full bg-foreground/80" />
          </div>
        </div>
      </div>
    </div>
  );
}
