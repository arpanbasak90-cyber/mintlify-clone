import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/changelog")({
  head: () => ({ meta: [{ title: "Changelog — Docly" }, { name: "description", content: "What's new in Docly." }] }),
  component: () => (
    <PageShell kicker="Changelog" title="What's new">
      <h3>v2.4 — Workflows</h3>
      <p>Self-updating knowledge management is now generally available.</p>
      <h3>v2.3 — Ask AI</h3>
      <p>A context-aware assistant lives inside every doc site.</p>
    </PageShell>
  ),
});
