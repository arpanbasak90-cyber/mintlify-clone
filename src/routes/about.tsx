import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — Docly" }, { name: "description", content: "Our mission is to make great documentation a winning advantage." }] }),
  component: () => (
    <PageShell kicker="About" title="Documentation as a winning advantage">
      <p>We're a small, focused team building the documentation platform we always wished existed — fast to set up, beautiful by default, and ready for the AI-first era.</p>
    </PageShell>
  ),
});
