import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Docly" },
      { name: "description", content: "Guides, templates, and resources to help your team write better docs." },
    ],
  }),
  component: () => (
    <PageShell kicker="Resources" title="Guides for shipping great docs">
      <p>Templates, playbooks, and tutorials to help your team write documentation that scales with your product.</p>
    </PageShell>
  ),
});
