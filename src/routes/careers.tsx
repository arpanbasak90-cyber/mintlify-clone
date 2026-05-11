import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [{ title: "Careers — Docly" }, { name: "description", content: "Join our team." }] }),
  component: () => (
    <PageShell kicker="Careers" title="Join us">
      <p>We're hiring across engineering, design, and customer success. If great documentation excites you, we want to hear from you.</p>
    </PageShell>
  ),
});
