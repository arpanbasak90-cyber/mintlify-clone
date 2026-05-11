import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Docly" },
      { name: "description", content: "Pick the plan that works best for you. Free, Pro, and Enterprise tiers." },
    ],
  }),
  component: Pricing,
});

const tiers = [
  {
    name: "Free",
    price: "$0",
    desc: "For personal projects and exploration.",
    features: ["Unlimited public docs", "Community support", "Basic AI search", "1 editor"],
    cta: "Start free",
  },
  {
    name: "Pro",
    price: "$120",
    desc: "For growing teams shipping serious docs.",
    features: ["Custom domain", "AI assistant", "Analytics", "Up to 10 editors", "Priority support"],
    cta: "Start Pro trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Security, scale, and white-glove service.",
    features: ["SSO / SAML", "SOC 2 + audit logs", "Dedicated success manager", "Unlimited editors", "Custom SLAs"],
    cta: "Contact sales",
  },
];

function Pricing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-mint font-medium uppercase tracking-wider text-sm mb-3">Pricing</p>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-balance">
              Pricing on your terms
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">Pick the plan that works best for your team.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`rounded-2xl p-8 border ${t.featured ? "bg-ink text-white border-ink shadow-soft scale-[1.02]" : "bg-card"}`}
              >
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className={`text-sm mt-1 ${t.featured ? "text-white/70" : "text-muted-foreground"}`}>{t.desc}</p>
                <div className="my-6">
                  <span className="text-5xl font-semibold tracking-tight">{t.price}</span>
                  {t.price !== "Custom" && <span className={t.featured ? "text-white/60" : "text-muted-foreground"}>/mo</span>}
                </div>
                <Link
                  to="/signup"
                  className={`block text-center w-full rounded-full py-2.5 text-sm font-medium transition ${
                    t.featured ? "bg-mint text-ink hover:bg-mint/90" : "bg-ink text-white hover:bg-ink/90"
                  }`}
                >
                  {t.cta}
                </Link>
                <ul className="mt-8 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className={`h-4 w-4 mt-0.5 shrink-0 ${t.featured ? "text-mint" : "text-mint"}`} />
                      <span className={t.featured ? "text-white/90" : ""}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
