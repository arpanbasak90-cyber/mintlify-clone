import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/documentation")({
  head: () => ({
    meta: [
      { title: "Documentation — Docly" },
      { name: "description", content: "Everything you need to ship beautiful, AI-native documentation." },
    ],
  }),
  component: () => (
    <PageShell kicker="Documentation" title="Build docs developers love">
      <p>From quickstarts to API references, Docly gives you the building blocks to ship beautiful, AI-native documentation in minutes — not months.</p>
      <h2>Get started in 3 steps</h2>
      <ol>
        <li>Install the CLI with <code>npm i -g docly</code>.</li>
        <li>Initialize a docs project with <code>docly init</code>.</li>
        <li>Preview locally with <code>docly dev</code>, then push to deploy.</li>
      </ol>
      <h2>Components</h2>
      <p>Cards, tabs, accordions, callouts, code groups, OpenAPI, Mermaid — every primitive you need is built in.</p>
    </PageShell>
  ),
});
