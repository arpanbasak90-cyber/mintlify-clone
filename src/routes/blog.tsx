import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Docly" },
      { name: "description", content: "Thoughts on documentation, AI, and developer experience." },
    ],
  }),
  component: () => (
    <PageShell kicker="Blog" title="Workflows for self-updating knowledge management">
      <p>The best documentation is the documentation you don't have to write twice. We're building tools that turn knowledge upkeep into a background process — so your team can focus on what they're actually building.</p>
      <p>More posts coming soon.</p>
    </PageShell>
  ),
});
