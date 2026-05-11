import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { DocsMockup } from "@/components/site/DocsMockup";
import heroBg from "@/assets/hero-clouds.jpg";
import { ArrowRight, Sparkles, Bot, ShieldCheck, Zap, Globe2, Layers } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Docly — The Intelligent Knowledge Platform" },
      { name: "description", content: "Helping teams create and maintain world-class documentation built for both humans and AI." },
      { property: "og:title", content: "Docly — The Intelligent Knowledge Platform" },
      { property: "og:description", content: "World-class documentation built for both humans and AI." },
    ],
  }),
  component: Index,
});

const logos = ["Anthropic", "Coinbase", "HubSpot", "Zapier", "AT&T", "Vercel", "Replit"];

const customers = [
  { name: "Perplexity", quote: "Transformed our documentation into an AI-native developer experience that matches the pace of our product." },
  { name: "X", quote: "Powering the developer experience for the global town square." },
  { name: "Kalshi", quote: "Helping developers discover what's possible faster, driving broader adoption." },
  { name: "Cognition", quote: "Scaled our documentation to mirror our product ethos." },
  { name: "Together AI", quote: "A developer experience that mirrors our own ethos." },
  { name: "Laravel", quote: "World-class documentation across 10+ products." },
];

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-32 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur border border-white/20 px-4 py-1.5 text-sm text-white mb-10 hover:bg-white/20 transition"
          >
            <span className="rounded-full bg-mint text-mint-foreground px-2 py-0.5 text-xs font-semibold">NEW</span>
            Workflows for self-updating knowledge management
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <h1 className="text-5xl md:text-7xl font-semibold text-white text-balance leading-[1.05] tracking-tight max-w-4xl mx-auto">
            The Intelligent Knowledge Platform
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto text-balance">
            Helping teams create and maintain world-class documentation built for both humans and AI.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 mx-auto max-w-md flex items-center gap-2 rounded-full bg-white/15 backdrop-blur border border-white/30 p-1.5 pl-5"
          >
            <input
              type="email"
              required
              placeholder="Email address"
              className="flex-1 bg-transparent text-white placeholder:text-white/60 outline-none text-sm"
            />
            <button className="rounded-full bg-white text-ink px-5 py-2 text-sm font-medium hover:bg-white/90 transition">
              Start now
            </button>
          </form>

          <div className="mt-20 max-w-5xl mx-auto px-2">
            <DocsMockup />
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="border-y bg-background">
        <div className="mx-auto max-w-7xl px-6 py-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-muted-foreground">
          {logos.map((l) => (
            <span key={l} className="text-lg font-semibold tracking-tight opacity-70">{l}</span>
          ))}
        </div>
      </section>

      {/* Built for intelligence age */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-mint font-medium text-sm uppercase tracking-wider mb-3">Built for the intelligence age</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-balance">
              Integrate AI into every part of your docs lifecycle
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Woven into how knowledge is written, maintained, and understood by both users and LLMs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={Globe2}
              kicker="LLMs.txt & MCP"
              title="Built for both people and AI"
              desc="Show up in the AI workflows your users already rely on. We support llms.txt, MCP, and whatever comes next."
              accent
            />
            <FeatureCard
              icon={Bot}
              kicker="Agent"
              title="Self-updating knowledge management"
              desc="Draft, edit, and maintain content with a context-aware agent. Move faster — without the documentation debt."
            />
            <FeatureCard
              icon={Sparkles}
              kicker="Assistant"
              title="Intelligent assistance for your users"
              desc="Turn every documentation visit into a guided conversation. Your AI assistant understands context."
            />
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section className="py-28 bg-ink text-white">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-mint font-medium text-sm uppercase tracking-wider mb-3">Enterprise reinvention</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-balance">
              Bring intelligence to enterprise knowledge
            </h2>
            <p className="mt-4 text-white/70 text-lg">
              Modernize without the rebuild — with enterprise-grade professional service and security.
            </p>
            <Link
              to="/enterprise"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
            >
              Explore for enterprise <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4">
            <EnterpriseCard
              icon={Zap}
              title="Build with partnership"
              desc="Direct, white-glove access to documentation experts. Dedicated migration support and elevated SLAs."
            />
            <EnterpriseCard
              icon={ShieldCheck}
              title="Compliance and access control"
              desc="SOC 2 compliant; ISO/27001 and GDPR in progress. Secure SSO and provisioning via SAML."
            />
            <EnterpriseCard
              icon={Layers}
              title="Scale across teams"
              desc="Granular permissions, multi-product workspaces, and audit logs to keep large orgs in sync."
            />
          </div>
        </div>
      </section>

      {/* Customers */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-balance">
              Loved by your favorite companies
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              From frontier AI companies to consumer brands, leaders across industries scale knowledge with Docly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customers.map((c) => (
              <Link
                key={c.name}
                to="/customers"
                className="group rounded-2xl border bg-card p-8 hover:shadow-elegant transition"
              >
                <div className="h-32 rounded-xl bg-mint-grad mb-6 flex items-center justify-center">
                  <span className="text-2xl font-semibold text-ink">{c.name}</span>
                </div>
                <p className="text-foreground/80">{c.quote}</p>
                <p className="mt-4 text-sm text-mint font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read story <ArrowRight className="h-3.5 w-3.5" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-sky py-28 text-white">
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-semibold text-balance">
            Make documentation your winning advantage
          </h2>
          <p className="mt-5 text-white/80 text-lg">
            Join the leaders of tomorrow to future-proof your documentation today.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/signup" className="rounded-full bg-white text-ink px-7 py-3 text-sm font-medium hover:bg-white/90 transition">
              Get started for free
            </Link>
            <Link to="/contact" className="rounded-full bg-white/15 backdrop-blur border border-white/30 text-white px-7 py-3 text-sm font-medium hover:bg-white/25 transition">
              Get a demo
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-24 border-t">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl border bg-card p-10">
            <p className="text-mint text-sm font-medium uppercase tracking-wider mb-2">Pricing on your terms</p>
            <h3 className="text-3xl font-semibold mb-3">Pick the plan that works best for you</h3>
            <Link to="/pricing" className="inline-flex items-center gap-1 text-mint font-medium hover:gap-2 transition-all">
              Pricing details <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-2xl bg-mint-grad p-10 text-ink">
            <p className="text-sm font-medium uppercase tracking-wider mb-2 opacity-80">Start building</p>
            <h3 className="text-3xl font-semibold mb-3">Deploy your documentation in minutes</h3>
            <Link to="/signup" className="inline-flex items-center gap-1 font-medium hover:gap-2 transition-all">
              Get started <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeatureCard({
  icon: Icon, kicker, title, desc, accent,
}: { icon: React.ComponentType<{ className?: string }>; kicker: string; title: string; desc: string; accent?: boolean }) {
  return (
    <div className={`rounded-2xl border p-8 ${accent ? "bg-mint-grad text-ink" : "bg-card"}`}>
      <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg mb-5 ${accent ? "bg-ink/10" : "bg-mint/15"}`}>
        <Icon className={`h-5 w-5 ${accent ? "text-ink" : "text-mint"}`} />
      </div>
      <p className={`text-xs font-medium uppercase tracking-wider mb-2 ${accent ? "text-ink/70" : "text-muted-foreground"}`}>{kicker}</p>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className={accent ? "text-ink/80" : "text-muted-foreground"}>{desc}</p>
    </div>
  );
}

function EnterpriseCard({
  icon: Icon, title, desc,
}: { icon: React.ComponentType<{ className?: string }>; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
      <div className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-lg bg-mint/20 flex items-center justify-center shrink-0">
          <Icon className="h-5 w-5 text-mint" />
        </div>
        <div>
          <h4 className="font-semibold mb-1">{title}</h4>
          <p className="text-white/70 text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
}
