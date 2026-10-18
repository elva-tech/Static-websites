import { useState } from "react";
import {
  ArrowRight, BarChart3, Bell, BookOpen, Building2, CalendarCheck, CheckCircle2, ChevronDown, ClipboardCheck, CreditCard, FileSpreadsheet,
  FolderOpen, GraduationCap, KeyRound, Layers, Lock, MessageCircle, Phone, Globe, MapPin, ScrollText, Server, ShieldCheck, Sparkles, Users,
  Video, Brain, Lightbulb, Target, FileText, HeartHandshake, X,
} from "lucide-react";
import { Reveal, SectionHead, btn, Illustrative } from "./site";
import {
  AdminDashboard, AttendanceGrid, DoubtSolver, LectureSummary, ParentReport, QuizGenerator, ResultView, StudentPhone, TeacherPanel, TestPlayer, Window,
} from "./mockups";
import { DemoForm } from "./demo-form";
import { cn } from "@/lib/utils";

/* ---------------- Hero ---------------- */
export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden />
      <div className="container-x relative grid min-w-0 items-center gap-14 pb-20 pt-14 lg:grid-cols-[1fr_1.15fr] lg:pb-28 lg:pt-20">
        <div className="min-w-0">
          <p className="eyebrow animate-rise text-primary">AI-powered LMS for coaching institutes</p>
          <h1 className="mt-5 animate-rise text-[2.4rem] font-semibold leading-[1.02] [animation-delay:80ms] sm:text-5xl lg:text-[3.7rem]">
            Run your entire coaching institute from <span className="text-primary">one intelligent platform.</span>
          </h1>
          <p className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-muted-foreground [animation-delay:160ms]">
            ELVA LMS brings learning, student management, assessments, attendance, content, communication and AI-powered insights together in one powerful platform built for modern coaching institutes.
          </p>
          <div className="mt-8 flex animate-rise flex-wrap gap-3 [animation-delay:240ms]">
            <a href="#demo" className={btn({ size: "lg" })}>Book a Demo <ArrowRight className="size-4" /></a>
            <a href="#features" className={btn({ variant: "outline", size: "lg" })}>Explore ELVA LMS</a>
          </div>
          <p className="mt-8 animate-rise border-l-2 border-primary pl-4 text-sm text-muted-foreground [animation-delay:320ms]">
            Built for coaching institutes. Designed for teachers. Loved by students.
          </p>
        </div>
        <Reveal delay={200} className="relative min-w-0 w-full max-w-full">
          <AdminDashboard />
          <div className="absolute -bottom-10 -left-6 hidden w-64 xl:block">
            <div className="rounded-xl border border-border bg-card p-3 text-xs shadow-float">
              <p className="flex items-center gap-1.5 font-medium"><Bell className="size-3.5 text-primary" />Parent update sent</p>
              <p className="mt-1 text-muted-foreground">Weekly progress report · Batch A</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Problem ---------------- */
const scattered = [
  [FileSpreadsheet, "Student information in spreadsheets"],
  [FolderOpen, "Course material in Google Drive"],
  [Video, "Classes on different meeting platforms"],
  [ClipboardCheck, "Tests through forms"],
  [CalendarCheck, "Attendance tracked manually"],
  [BarChart3, "Performance analysed manually"],
  [MessageCircle, "Parents updated through WhatsApp"],
  [CreditCard, "Fee information kept separately"],
] as const;

export function Problem() {
  return (
    <section className="border-y border-border bg-surface py-20 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr]">
        <SectionHead eyebrow="The problem" title="Your institute shouldn't run on WhatsApp, spreadsheets and scattered tools." intro="Managing a coaching institute often means juggling disconnected tools — each holding a fragment of the picture. ELVA LMS brings these workflows together." />
        <div>
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {scattered.map(([Icon, t], i) => (
              <Reveal as="li" key={t} delay={i * 50} className="flex min-w-0 items-center gap-3 bg-card px-4 py-4 text-sm">
                <Icon className="size-4 shrink-0 text-muted-foreground" />
                <span className="min-w-0 flex-1">{t}</span>
                <X className="size-3.5 text-destructive/70" aria-label="disconnected" />
              </Reveal>
            ))}
          </ul>
          <Reveal delay={300} className="mt-6 rounded-2xl bg-ink p-6 text-ink-foreground">
            <p className="font-display text-2xl font-semibold leading-tight">One institute. One platform. <span className="text-chart-2">One source of truth.</span></p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Overview + Features ---------------- */
const overview = [
  [BookOpen, "Learning management", "Courses, lessons, recorded classes and study material in one structured place."],
  [Users, "Student management", "Profiles, enrolments, batches, parent details and complete academic history."],
  [GraduationCap, "Teacher management", "Subject allocation, timetables, batch assignments and teaching activity."],
  [Layers, "Courses & batches", "Model your academic structure — courses, subjects, chapters and batches."],
  [ClipboardCheck, "Assessments", "Quizzes, tests, mock exams and assignments with automatic evaluation."],
  [FolderOpen, "Content management", "Videos, PDFs, notes, presentations, links and question banks."],
  [CalendarCheck, "Attendance", "Daily, class, batch and subject attendance with trends and alerts."],
  [Bell, "Communication", "Announcements, reminders and parent updates across channels."],
  [BarChart3, "Analytics", "Institute, teacher and student performance at a glance."],
  [Sparkles, "AI learning assistance", "Doubt solving, quiz generation, summaries and recommendations."],
] as const;

export function Overview() {
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="container-x">
        <SectionHead eyebrow="Product overview" title="Everything your institute needs to teach, manage and grow." />
        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {overview.map(([Icon, t, dsc], i) => (
            <Reveal key={t} delay={(i % 5) * 60} className="border-t border-border pt-5">
              <Icon className="size-5 text-primary" />
              <h3 className="mt-4 text-base font-semibold">{t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{dsc}</p>
            </Reveal>
          ))}
        </div>
        <FeatureDepth />
      </div>
    </section>
  );
}

const featureTabs = [
  { id: "admin", label: "Institute administration", points: ["Institute profile & settings", "Roles and permissions", "Branch-ready structure", "Student onboarding & profiles", "Parent information", "Enrolments & batch allocation"] },
  { id: "teachers", label: "Teachers & timetables", points: ["Teacher profiles", "Subject allocation", "Teacher timetables", "Batch assignments", "Teaching activity", "Content contributions"] },
  { id: "content", label: "Content library", points: ["Videos & recorded classes", "PDFs, documents & images", "Notes & presentations", "Links & assignments", "Question banks", "Draft / published states with controlled access"] },
  { id: "fees", label: "Fees & payments", points: ["Fee structures", "Student fee records", "Instalments", "Payment status & history", "Receipts & reminders", "Online payments via a supported, enabled gateway"] },
] as const;

function FeatureDepth() {
  const [tab, setTab] = useState<(typeof featureTabs)[number]["id"]>("admin");
  const current = featureTabs.find((t) => t.id === tab)!;
  return (
    <div className="mt-20 grid min-w-0 gap-10 rounded-3xl border border-border bg-card p-6 shadow-card sm:p-10 lg:grid-cols-[1fr_1.1fr]">
      <div className="min-w-0">
        <p className="eyebrow text-primary">Complete LMS</p>
        <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">Structured the way your institute already works.</h3>
        <div role="tablist" aria-label="Feature areas" className="mt-6 flex flex-wrap gap-2">
          {featureTabs.map((t) => (
            <button key={t.id} role="tab" aria-selected={tab === t.id} aria-controls="feature-panel" onClick={() => setTab(t.id)} className={cn("rounded-full border px-3.5 py-1.5 text-sm transition-colors", tab === t.id ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary")}>
              {t.label}
            </button>
          ))}
        </div>
        <ul id="feature-panel" role="tabpanel" key={tab} className="mt-6 grid animate-fade gap-2.5 sm:grid-cols-2">
          {current.points.map((p) => (
            <li key={p} className="flex items-start gap-2 text-sm"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />{p}</li>
          ))}
        </ul>
        {tab === "fees" && <p className="mt-5 text-xs text-muted-foreground">The fees module is optional — institutes can use ELVA LMS with or without it. Online collection requires a supported payment gateway to be enabled.</p>}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium">Content hierarchy</p>
        <ol className="mt-4 space-y-2">
          {["Institute", "Course", "Subject", "Chapter", "Lesson"].map((l, i) => (
            <Reveal as="li" key={l} delay={i * 90} className="flex min-w-0 items-center gap-3" >
              <span
                className="block w-full min-w-0 rounded-xl border border-border bg-surface px-4 py-3 text-sm max-sm:ml-0 sm:ml-[var(--indent)]"
                style={{ "--indent": `${i * 1.25}rem` } as React.CSSProperties}
              >
                <span className="mr-2 font-mono text-xs text-muted-foreground">0{i + 1}</span>{l}
                {l === "Lesson" && (
                  <span className="mt-2 flex flex-wrap gap-1.5 text-[0.65rem] sm:mt-0 sm:float-right sm:max-w-[55%] sm:justify-end">
                    <span className="rounded-full bg-muted px-2 py-0.5">Draft</span>
                    <span className="rounded-full bg-primary-soft px-2 py-0.5 text-accent-foreground">Published</span>
                  </span>
                )}
              </span>
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  );
}

/* ---------------- Classes lifecycle ---------------- */
export function Classes() {
  const steps = ["Schedule", "Notify students", "Conduct class", "Capture attendance", "Save recording", "Attach to lesson", "Track learning"];
  return (
    <section id="classes" className="bg-ink py-20 text-ink-foreground lg:py-28">
      <div className="container-x">
        <SectionHead tone="dark" eyebrow="Live & recorded classes" title="Every class, from schedule to revision." intro="Schedule classes, share meeting links through supported meeting-provider integrations, store recordings and attach them to lessons — with attendance and learning activity tracked along the way." />
        <ol className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-7">
          {steps.map((s, i) => (
            <Reveal as="li" key={s} delay={i * 80} className="relative min-w-0 rounded-2xl border border-ink-border bg-ink-2 p-4">
              <span className="font-mono text-xs text-chart-2">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-3 text-sm font-medium sm:mt-6">{s}</p>
              {i < steps.length - 1 && <ArrowRight className="absolute -right-2.5 top-1/2 z-10 hidden size-4 -translate-y-1/2 text-ink-muted lg:block" aria-hidden />}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Audiences ---------------- */
function Bullets({ items, tone }: { items: string[]; tone?: "dark" }) {
  return (
    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
      {items.map((i) => (
        <li key={i} className={cn("flex items-start gap-2 text-sm", tone === "dark" ? "text-ink-muted" : "text-muted-foreground")}>
          <CheckCircle2 className={cn("mt-0.5 size-4 shrink-0", tone === "dark" ? "text-chart-2" : "text-primary")} />{i}
        </li>
      ))}
    </ul>
  );
}

export function Audiences() {
  return (
    <>
      <section id="for-institutes" className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHead eyebrow="Four experiences · one platform" title="Built for everyone in your institute." align="center" />
          <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <p className="eyebrow text-primary">For institutes</p>
              <h3 className="mt-3 text-3xl font-semibold">Complete operational control.</h3>
              <p className="mt-4 text-muted-foreground">Admins run institute operations from a single view — people, academics, assessments and communication.</p>
              <Bullets items={["Users, students & teachers", "Courses & batches", "Assessments & attendance", "Fees & communications", "Reports across the institute", "Roles & permissions"]} />
            </Reveal>
            <Reveal delay={150}><AttendanceGrid /></Reveal>
          </div>
        </div>
      </section>

      <section id="for-teachers" className="border-y border-border bg-surface py-20 lg:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal className="order-2 lg:order-1"><TeacherPanel /></Reveal>
          <Reveal delay={120} className="order-1 lg:order-2">
            <p className="eyebrow text-primary">For teachers</p>
            <h3 className="mt-3 text-3xl font-semibold">Less admin. More teaching.</h3>
            <p className="mt-4 text-muted-foreground">Teachers see their classes, batches and pending work — and use AI to prepare faster, with every output under their review.</p>
            <Bullets items={["Classes & assigned batches", "Content uploads", "Tests & assignments", "AI quiz generation", "Evaluation & feedback", "Student performance"]} />
          </Reveal>
        </div>
      </section>

      <section id="for-students" className="py-20 lg:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_auto_1fr]">
          <Reveal>
            <p className="eyebrow text-primary">For students</p>
            <h3 className="mt-3 text-3xl font-semibold">A personal learning space, mobile-first.</h3>
            <p className="mt-4 text-muted-foreground">Everything a student needs for the day — and help the moment they get stuck.</p>
          </Reveal>
          <Reveal delay={120}><StudentPhone /></Reveal>
          <Reveal delay={200}>
            <Bullets items={["Courses & classes", "Notes & recordings", "Tests & assignments", "Attendance & results", "Revision & recommendations", "AI doubt-solving"]} />
          </Reveal>
        </div>
      </section>

      <section id="for-parents" className="bg-primary-soft py-20 lg:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <p className="eyebrow text-primary">For parents</p>
            <h3 className="mt-3 text-3xl font-semibold">Clear progress, without the chasing.</h3>
            <p className="mt-4 text-muted-foreground">A simplified view designed for parents — available subject to institute permissions and configuration.</p>
            <Bullets items={["Attendance", "Test results", "Academic progress", "Announcements", "Notifications", "Progress reports"]} />
          </Reveal>
          <Reveal delay={150}><ParentReport /></Reveal>
        </div>
      </section>
    </>
  );
}

/* ---------------- Differentiator system flow ---------------- */
const flow = [
  ["Institute"],
  ["Courses", "Batches", "Teachers", "Classes"],
  ["Students", "Learning", "Tests", "Assignments"],
  ["Attendance", "Performance", "Analytics"],
  ["AI Insights", "Recommendations", "Parent Updates"],
];
export function Differentiator() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHead eyebrow="Why ELVA" title="More than an LMS. An operating system for your institute." intro="Traditional LMS platforms focus on delivering content. ELVA LMS connects the complete learning ecosystem — so every part of the journey operates from a single source of truth." />
        </div>
        <div className="relative">
          <div className="absolute bottom-6 left-6 top-6 w-px bg-border" aria-hidden />
          <ol className="space-y-5">
            {flow.map((row, i) => (
              <Reveal as="li" key={i} delay={i * 100} className="relative pl-14">
                <span className={cn("absolute left-[0.85rem] top-3 flex size-6 items-center justify-center rounded-full border-2 text-[0.6rem] font-mono", i === flow.length - 1 ? "border-primary bg-primary text-primary-foreground" : "border-primary bg-card text-primary")}>{i + 1}</span>
                <div className="flex flex-wrap items-center gap-2">
                  {row.map((n, j) => (
                    <span key={n} className="flex items-center gap-2">
                      <span className={cn("rounded-lg border px-3.5 py-2 text-sm font-medium", i === flow.length - 1 ? "border-primary/30 bg-primary-soft text-accent-foreground" : "border-border bg-card shadow-card")}>{n}</span>
                      {j < row.length - 1 && <ArrowRight className="size-3.5 text-muted-foreground" aria-hidden />}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- AI ---------------- */
const aiItems = [
  { id: "doubt", icon: Brain, title: "AI Doubt Solver", desc: "Contextual explanations, examples, simplified concepts, guided problem-solving and follow-up questions — grounded in institute material when configured.", view: <DoubtSolver /> },
  { id: "quiz", icon: ClipboardCheck, title: "AI Quiz Generator", desc: "MCQs, subjective, practice, revision and difficulty-based questions from approved content. Teachers review and approve before publishing.", view: <QuizGenerator /> },
  { id: "summary", icon: FileText, title: "AI Lecture Summaries", desc: "Structured summaries with key concepts, definitions, formulas, takeaways, revision notes and question prompts.", view: <LectureSummary /> },
  { id: "gaps", icon: Target, title: "Learning Gap Detection", desc: "Evidence-based signals: weak subjects and concepts, repeated mistakes, performance trends and attendance concerns.", view: <ResultView /> },
  { id: "recs", icon: Lightbulb, title: "Study Recommendations", desc: "Suggested lessons, videos, tests, revision material and follow-up practice based on each student's results.", view: <ResultView /> },
  { id: "parents", icon: HeartHandshake, title: "AI Parent Reports", desc: "Readable summaries of attendance, recent results, strengths, areas needing attention and recommended action.", view: <ParentReport /> },
] as const;

export function AI() {
  const [active, setActive] = useState<(typeof aiItems)[number]["id"]>("doubt");
  const item = aiItems.find((a) => a.id === active)!;
  return (
    <section id="ai" className="relative overflow-hidden bg-ink py-20 text-ink-foreground lg:py-28">
      <div className="container-x">
        <SectionHead tone="dark" eyebrow="ELVA AI" title="AI that actually helps teachers and students." intro="Practical assistance woven into everyday workflows. AI outputs support teachers and students — they are reviewed, not blindly trusted." />
        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div role="tablist" aria-label="AI capabilities" aria-orientation="vertical" className="space-y-1">
            {aiItems.map((a) => (
              <button
                key={a.id}
                role="tab"
                aria-selected={active === a.id}
                aria-controls="ai-panel"
                onClick={() => setActive(a.id)}
                className={cn("flex w-full items-start gap-4 rounded-xl border p-4 text-left transition-colors", active === a.id ? "border-ink-border bg-ink-2" : "border-transparent hover:bg-ink-2/60")}
              >
                <a.icon className={cn("mt-0.5 size-5 shrink-0", active === a.id ? "text-chart-2" : "text-ink-muted")} />
                <span>
                  <span className="block font-medium">{a.title}</span>
                  {active === a.id && <span className="mt-1.5 block animate-fade text-sm leading-relaxed text-ink-muted">{a.desc}</span>}
                </span>
              </button>
            ))}
          </div>
          <div id="ai-panel" role="tabpanel" key={active} className="animate-rise lg:pt-2">
            {item.view}
            <p className="mt-4 text-xs text-ink-muted">AI responses may contain errors and should be reviewed. Grounding in institute content depends on configuration.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Assessments ---------------- */
export function Assessments() {
  const types = ["MCQ", "Multiple select", "True / False", "Fill in the blanks", "Subjective", "Assignments", "Practice tests", "Mock exams"];
  const config = [["Duration", "180 min"], ["Questions", "90"], ["Marks", "+4 / −1"], ["Negative marking", "On"], ["Difficulty", "Mixed"], ["Attempts", "1"], ["Window", "10:00 – 13:00"], ["Batches", "JEE A, JEE B"], ["Randomise", "On"], ["Results", "After window"]];
  const flowSteps = ["Start test", "Read instructions", "Answer", "Navigate", "Mark for review", "Submit", "View result", "Review mistakes", "Get recommendations"];
  return (
    <section id="assessments" className="py-20 lg:py-28">
      <div className="container-x">
        <SectionHead eyebrow="Assessment engine" title="Turn every test into actionable insight." />
        <Reveal className="mt-8 flex flex-wrap gap-2">
          {types.map((t) => <span key={t} className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm">{t}</span>)}
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <Window title="Test configuration">
              <dl className="grid grid-cols-2 gap-px bg-border text-sm">
                {config.map(([k, v]) => (
                  <div key={k} className="bg-card px-4 py-3"><dt className="text-xs text-muted-foreground">{k}</dt><dd className="mt-0.5 font-medium">{v}</dd></div>
                ))}
              </dl>
            </Window>
          </Reveal>
          <Reveal delay={120}><TestPlayer /></Reveal>
        </div>
        <Reveal className="mt-12">
          <p className="text-sm font-medium">Student workflow</p>
          <ol className="no-scrollbar mt-4 flex gap-2 overflow-x-auto pb-2">
            {flowSteps.map((s, i) => (
              <li key={s} className="flex shrink-0 items-center gap-2">
                <span className={cn("rounded-lg px-3 py-2 text-sm", i >= 6 ? "bg-primary text-primary-foreground" : "bg-surface")}><span className="mr-1.5 font-mono text-xs opacity-60">{i + 1}</span>{s}</span>
                {i < flowSteps.length - 1 && <ArrowRight className="size-3.5 text-muted-foreground" aria-hidden />}
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-3xl text-sm text-muted-foreground">Results can show score, percentage, rank, correct, incorrect and unanswered questions, time taken, and subject-, topic- and difficulty-wise performance.</p>
        </Reveal>
        <div className="mt-16 grid gap-8 rounded-3xl border border-border bg-surface p-6 sm:p-10 lg:grid-cols-2">
          <Reveal>
            <h3 className="text-xl font-semibold">Attendance that flags problems early</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Daily, class, batch and subject attendance with percentages and trends. Configurable alerts detect repeated absence, low attendance and declining attendance.</p>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="text-xl font-semibold">Assignments, end to end</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Create, allocate to batches, set deadlines and notify. Students submit files or text; late submissions are handled, teachers add marks and feedback, results are published and performance recorded.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Analytics ---------------- */
const analytics = {
  Institute: { kpis: [["Active students", "1,240"], ["Active batches", "32"], ["Attendance", "89%"], ["At-risk students", "27"]], series: [64, 70, 68, 74, 77, 75, 81, 84], label: "Average test performance" },
  Student: { kpis: [["Avg. score", "76%"], ["Attendance", "93%"], ["Tests taken", "18"], ["Weak areas", "3"]], series: [58, 61, 66, 63, 70, 72, 78, 76], label: "Score trend" },
  Teacher: { kpis: [["Classes conducted", "46"], ["Content uploaded", "112"], ["Tests conducted", "14"], ["Assignments", "22"]], series: [6, 8, 7, 9, 8, 10, 9, 11], label: "Classes per week" },
} as const;
type AKey = keyof typeof analytics;

export function Analytics() {
  const [k, setK] = useState<AKey>("Institute");
  const data = analytics[k];
  const max = Math.max(...data.series);
  const min = Math.min(...data.series) * 0.85;
  const pts = data.series.map((v, i) => `${(i / (data.series.length - 1)) * 300},${100 - ((v - min) / (max - min)) * 85}`).join(" ");
  return (
    <section id="analytics" className="border-y border-border bg-surface py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHead eyebrow="Analytics" title="Replace assumptions with data." intro="Institute, student and teacher analytics — from total enrolments and engagement to topic-level weak areas." />
          <div role="tablist" aria-label="Analytics view" className="flex shrink-0 rounded-full border border-border bg-card p-1">
            {(Object.keys(analytics) as AKey[]).map((key) => (
              <button key={key} role="tab" aria-selected={k === key} onClick={() => setK(key)} className={cn("rounded-full px-4 py-1.5 text-sm transition-colors", k === key ? "bg-ink text-ink-foreground" : "text-muted-foreground hover:text-foreground")}>{key}</button>
            ))}
          </div>
        </div>
        <Reveal className="mt-12">
          <Window title={`${k} analytics`}>
            <div key={k} className="grid animate-fade gap-6 p-5 lg:grid-cols-[1fr_1.6fr]">
              <div className="grid grid-cols-2 gap-3">
                {data.kpis.map(([l, v]) => (
                  <div key={l} className="rounded-xl border border-border p-4"><p className="text-xs text-muted-foreground">{l}</p><p className="mt-1 font-display text-2xl font-semibold">{v}</p></div>
                ))}
              </div>
              <div className="rounded-xl border border-border p-4">
                <p className="text-sm font-medium">{data.label}</p>
                <svg viewBox="0 0 300 100" className="mt-4 h-40 w-full overflow-visible" preserveAspectRatio="none" aria-label={`${data.label} chart, sample data`} role="img">
                  {[25, 50, 75].map((y) => <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="var(--border)" strokeDasharray="3 4" />)}
                  <polyline points={`0,100 ${pts} 300,100`} fill="var(--primary-soft)" />
                  <polyline points={pts} fill="none" stroke="var(--primary)" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </Window>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Notifications + Security ---------------- */
export function Platform() {
  const notes = ["Class reminders", "Test reminders", "Assignment deadlines", "Attendance alerts", "Published results", "Announcements", "Parent updates"];
  const channels = ["In-app", "Push", "Email", "SMS", "WhatsApp"];
  const security = [
    [KeyRound, "Role-based access", "Admins, teachers, students and parents see only what their role allows."],
    [Lock, "Secure authentication", "Designed around secure sign-in and session handling."],
    [Building2, "Tenant isolation", "Each institute's users, courses, students and content are isolated."],
    [ShieldCheck, "Encrypted transport", "HTTPS for all traffic and secure file storage."],
    [ScrollText, "Audit logs", "Record of important actions for accountability."],
    [Server, "Built to scale", "Multiple institutes and branches, large content libraries, concurrent assessments, video delivery, AI processing and background jobs."],
  ] as const;
  return (
    <section id="security" className="py-20 lg:py-28">
      <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <SectionHead eyebrow="Communication" title="The right message, at the right moment." intro="Configurable notification workflows. Channels depend on which integrations your institute enables." />
          <Reveal className="mt-8 space-y-2">
            {notes.map((n) => (
              <div key={n} className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-2.5 text-sm"><span className="flex items-center gap-2"><Bell className="size-3.5 text-primary" />{n}</span><span className="text-xs text-muted-foreground">Configurable</span></div>
            ))}
            <div className="flex flex-wrap gap-1.5 pt-3">{channels.map((c) => <span key={c} className="rounded-full bg-surface px-3 py-1 text-xs">{c}</span>)}</div>
          </Reveal>
        </div>
        <div>
          <SectionHead eyebrow="Security & scalability" title="Designed multi-tenant from day one." intro="These are the platform's design principles. They are not third-party certifications or performance guarantees." />
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {security.map(([Icon, t, dsc], i) => (
              <Reveal key={t} delay={i * 60} className="bg-card p-5">
                <Icon className="size-5 text-primary" />
                <h3 className="mt-3 font-semibold">{t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{dsc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pricing ---------------- */
const plans = [
  { name: "Starter", lead: "Core LMS for a single institute.", items: ["Core LMS", "Student & teacher management", "Courses & content", "Assessments", "Attendance", "Basic analytics"], cta: "Talk to ELVA", href: "#contact" },
  { name: "Professional", lead: "Everything in Starter, plus:", items: ["Advanced analytics", "AI features", "Parent portal", "Communication automation", "Advanced assessments", "More integrations"], cta: "Book a Demo", href: "#demo", featured: true },
  { name: "Enterprise", lead: "For multi-branch institutes.", items: ["Multi-branch support", "Advanced permissions", "Custom integrations", "Advanced AI", "Custom workflows", "Dedicated onboarding", "Enterprise support"], cta: "Contact ELVA", href: "#contact" },
];
export function Pricing() {
  return (
    <section id="pricing" className="bg-ink py-20 text-ink-foreground lg:py-28">
      <div className="container-x">
        <SectionHead tone="dark" align="center" eyebrow="Pricing" title="Choose the setup that fits your institute." intro="Pricing is tailored to your institute's size and requirements. Talk to us for a quote." />
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 100} className={cn("flex flex-col rounded-2xl border p-7", p.featured ? "border-primary bg-ink-2" : "border-ink-border")}>
              <h3 className="text-2xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-ink-muted">{p.lead}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.items.map((it) => <li key={it} className="flex items-start gap-2.5 text-sm"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-chart-2" />{it}</li>)}
              </ul>
              <a href={p.href} className={cn("mt-8", btn({ variant: p.featured ? "primary" : "inkOutline" }))}>{p.cta}</a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Demo + Contact ---------------- */
export function Demo() {
  return (
    <section id="demo" className="py-20 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHead eyebrow="Demo & purchase" title="Bring ELVA LMS to your institute." intro="Share your requirements and our team will walk through your academic structure, batches, students and learning workflows." />
          <Reveal className="mt-10">
            <div id="contact" className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-xl font-semibold">Let's build a better learning experience.</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Whether you are evaluating ELVA LMS for a single coaching centre or a multi-branch institute, talk to our team about your requirements.</p>
              <ul className="mt-5 space-y-3 text-sm">
                <li className="flex items-center gap-3"><Building2 className="size-4 text-primary" />ELVA Tech</li>
                <li className="flex items-center gap-3"><MapPin className="size-4 text-primary" />Bangalore, India</li>
                <li className="flex items-center gap-3"><Phone className="size-4 text-primary" /><a className="hover:text-primary" href="tel:+919611149957">+91-96111 49957</a></li>
                <li className="flex items-center gap-3"><Phone className="size-4 text-primary" /><a className="hover:text-primary" href="tel:+919972304620">+91-99723 04620</a></li>
                <li className="flex items-center gap-3"><Globe className="size-4 text-primary" /><a className="hover:text-primary" href="https://www.elvatech.in/" target="_blank" rel="noopener noreferrer">www.elvatech.in</a></li>
              </ul>
              <a href="tel:+919611149957" className={cn("mt-6", btn({ variant: "outline" }))}>Talk to ELVA</a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={120}><DemoForm /></Reveal>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
export const faqs: [string, string][] = [
  ["What is ELVA LMS?", "ELVA LMS is an AI-powered Learning Management System built specifically for coaching institutes to manage learning, students, teachers, assessments, attendance, content, communication and performance."],
  ["Is ELVA LMS only for online coaching?", "No. It is designed for both offline and online coaching institutes."],
  ["Can we manage multiple batches?", "Yes. Institutes can create and manage multiple batches and assign students, teachers, subjects, classes and assessments."],
  ["Can teachers create tests?", "Yes. Teachers can create tests and quizzes and evaluate student performance."],
  ["Can AI create tests?", "Yes. AI can generate questions and quizzes from approved educational content. Teachers should review and approve AI-generated questions before publishing."],
  ["Can students ask questions to AI?", "Yes. ELVA LMS can provide an AI-powered doubt-solving experience."],
  ["Can AI answer from our institute's content?", "Yes. ELVA LMS can use a retrieval-based (RAG) architecture to provide contextual answers from institute-provided learning content, when configured."],
  ["Can parents see student performance?", "Yes, subject to institute permissions and configuration."],
  ["Can we upload recorded classes?", "Yes. Videos and other educational resources can be uploaded and organised."],
  ["Can we conduct tests online?", "Yes. ELVA LMS includes an assessment and quiz engine."],
  ["Does ELVA LMS support mobile?", "The product is designed for mobile-first student experiences and can support Android and iOS applications."],
  ["Is ELVA LMS multi-tenant?", "Yes. The platform is designed as a multi-tenant SaaS system with isolated institute environments."],
  ["Can ELVA LMS support multiple branches?", "Yes. The architecture can support multi-branch institutes and branch-level access and reporting."],
  ["Can we integrate WhatsApp?", "WhatsApp integration can be enabled for supported notification and communication workflows."],
  ["Can we integrate a payment gateway?", "Yes. Supported payment gateway integrations can be added for fee collection workflows."],
  ["Can the platform be customised?", "Yes. Enterprise and institute-specific workflows can be configured based on requirements."],
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-t border-border bg-surface py-20 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <SectionHead eyebrow="FAQ" title="Questions institutes ask us." />
        <div className="divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q}>
                <h3>
                  <button id={`faq-q-${i}`} aria-expanded={isOpen} aria-controls={`faq-a-${i}`} onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-sans text-[0.95rem] font-medium tracking-normal">
                    {q}
                    <ChevronDown className={cn("size-4 shrink-0 text-muted-foreground transition-transform duration-300", isOpen && "rotate-180 text-primary")} />
                  </button>
                </h3>
                <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className={cn("grid transition-[grid-template-rows] duration-300", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <div className="overflow-hidden"><p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ClosingCTA() {
  return (
    <section className="py-20">
      <div className="container-x">
        <Reveal className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-primary p-8 text-primary-foreground sm:p-12 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Teach better. Manage smarter. Understand every student.</h2>
            <p className="mt-3 opacity-85">See ELVA LMS configured around your institute.</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a href="#demo" className={btn({ variant: "light", size: "lg" })}>Book a Demo</a>
            <a href="#demo" className={cn(btn({ size: "lg" }), "border border-primary-foreground/40 shadow-none")}>Get ELVA LMS</a>
          </div>
        </Reveal>
        <p className="mt-4 text-center"><Illustrative /></p>
      </div>
    </section>
  );
}
