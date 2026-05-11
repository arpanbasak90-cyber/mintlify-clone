import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/enterprise")({
  head: () => ({
    meta: [
      { title: "Enterprise — Docly" },
      { name: "description", content: "Enterprise-grade security, SSO, and dedicated support." },
    ],
  }),
  component: () => (
    <PageShell kicker="Enterprise" title="Bring intelligence to enterprise knowledge">
      <p>Modernize without the rebuild. Docly Enterprise pairs the modern docs experience your users expect with the security and service your IT team requires.</p>
      <h2>What's included</h2>
      <ul>
        <li>SOC 2 Type II, GDPR, and ISO/27001 (in progress)</li>
        <li>SAML SSO and SCIM provisioning</li>
        <li>White-glove migration support</li>
        <li>Elevated SLAs and a dedicated CSM</li>
      </ul>
    </PageShell>
  ),
});
