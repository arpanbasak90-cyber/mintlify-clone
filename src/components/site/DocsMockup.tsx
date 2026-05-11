import { BookOpen, Settings, Sparkles, Component, Palette, Navigation, GitBranch, Globe, Code, FileCode, Image as ImageIcon, Search } from "lucide-react";
import { Logo } from "./Logo";

const sidebar = [
  { icon: Sparkles, label: "Ask Assistant" },
  { icon: BookOpen, label: "Quickstart", active: true },
  { icon: Settings, label: "Global Settings" },
  { icon: Sparkles, label: "AI Optimization" },
  { icon: Component, label: "Components" },
  { icon: Palette, label: "Themes" },
  { icon: Navigation, label: "Navigation" },
  { icon: GitBranch, label: "Versioning" },
  { icon: Globe, label: "Custom Domain" },
  { icon: Code, label: "Web Editor" },
  { icon: FileCode, label: "Markdown Syntax" },
  { icon: ImageIcon, label: "Media Embeds" },
];

const cards = [
  { title: "Quickstart", desc: "Deploy your first docs site in minutes with our step-by-step guide" },
  { title: "Installation", desc: "Install the CLI to preview and develop your docs locally" },
  { title: "Web editor", desc: "Edit, preview, and publish content directly from the browser" },
  { title: "Components", desc: "A growing library of beautiful, accessible building blocks" },
];

export function DocsMockup() {
  return (
    <div className="rounded-2xl bg-card shadow-soft border overflow-hidden text-left">
      <div className="grid grid-cols-[240px_1fr] min-h-[520px]">
        <aside className="border-r bg-muted/30 p-4">
          <div className="px-2 mb-5"><Logo /></div>
          <div className="relative mb-4 px-2">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <input className="w-full rounded-md border bg-background pl-7 pr-2 py-1.5 text-xs" placeholder="Search" />
          </div>
          <ul className="space-y-0.5">
            {sidebar.map((s) => (
              <li
                key={s.label}
                className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-xs ${
                  s.active ? "bg-mint/15 text-mint-foreground font-medium" : "text-foreground/70"
                }`}
              >
                <s.icon className={`h-3.5 w-3.5 ${s.active ? "text-mint" : ""}`} />
                {s.label}
              </li>
            ))}
          </ul>
        </aside>
        <div className="p-8">
          <div className="flex items-center justify-between text-xs border-b pb-3 mb-6">
            <div className="flex gap-6">
              <span className="text-mint border-b-2 border-mint pb-2 -mb-3 font-medium">Guides</span>
              <span className="text-muted-foreground">API Reference</span>
              <span className="text-muted-foreground">Changelog</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-md border px-3 py-1 text-muted-foreground flex items-center gap-2">
                <Search className="h-3 w-3" /> Search or ask
              </div>
              <div className="rounded-md bg-mint/15 text-mint px-2 py-1 flex items-center gap-1">
                <Sparkles className="h-3 w-3" /> Ask AI
              </div>
            </div>
          </div>
          <p className="text-xs uppercase tracking-wider text-mint font-medium mb-2">Getting Started</p>
          <h3 className="text-2xl font-semibold mb-1">Quickstart Guide</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Start building intelligent documentation in under five minutes.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {cards.map((c) => (
              <div key={c.title} className="rounded-xl border p-4 hover:border-mint transition cursor-pointer">
                <div className="h-10 w-10 rounded-lg bg-mint/15 mb-3 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-mint" />
                </div>
                <p className="text-sm font-medium mb-1">{c.title}</p>
                <p className="text-xs text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
