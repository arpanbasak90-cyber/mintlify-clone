import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/customers")({
  head: () => ({
    meta: [
      { title: "Customers — Docly" },
      { name: "description", content: "How leading teams scale knowledge with Docly." },
    ],
  }),
  component: () => (
    <PageShell kicker="Customers" title="Trusted by teams shipping the future">
      <p>From frontier AI labs to consumer brands, the world's most ambitious teams choose Docly to power their documentation experience.</p>
      <ul>
        <li>Perplexity — AI-native developer experience that matches product velocity.</li>
        <li>X — powering the developer experience for the global town square.</li>
        <li>Laravel — world-class documentation across 10+ products.</li>
        <li>Vercel — scaled API references for a growing developer community.</li>
      </ul>
    </PageShell>
  ),
});
