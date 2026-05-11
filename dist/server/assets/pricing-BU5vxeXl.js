import { V as jsxRuntimeExports } from "./server-CxKg7rx9.js";
import { L as Link } from "./router-BVMEbMWL.js";
import { c as createLucideIcon, H as Header, F as Footer } from "./Footer-CuzfH98q.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode);
const tiers = [{
  name: "Free",
  price: "$0",
  desc: "For personal projects and exploration.",
  features: ["Unlimited public docs", "Community support", "Basic AI search", "1 editor"],
  cta: "Start free"
}, {
  name: "Pro",
  price: "$120",
  desc: "For growing teams shipping serious docs.",
  features: ["Custom domain", "AI assistant", "Analytics", "Up to 10 editors", "Priority support"],
  cta: "Start Pro trial",
  featured: true
}, {
  name: "Enterprise",
  price: "Custom",
  desc: "Security, scale, and white-glove service.",
  features: ["SSO / SAML", "SOC 2 + audit logs", "Dedicated success manager", "Unlimited editors", "Custom SLAs"],
  cta: "Contact sales"
}];
function Pricing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 pt-32 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-mint font-medium uppercase tracking-wider text-sm mb-3", children: "Pricing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-6xl font-semibold tracking-tight text-balance", children: "Pricing on your terms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Pick the plan that works best for your team." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: tiers.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl p-8 border ${t.featured ? "bg-ink text-white border-ink shadow-soft scale-[1.02]" : "bg-card"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm mt-1 ${t.featured ? "text-white/70" : "text-muted-foreground"}`, children: t.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl font-semibold tracking-tight", children: t.price }),
          t.price !== "Custom" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: t.featured ? "text-white/60" : "text-muted-foreground", children: "/mo" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", className: `block text-center w-full rounded-full py-2.5 text-sm font-medium transition ${t.featured ? "bg-mint text-ink hover:bg-mint/90" : "bg-ink text-white hover:bg-ink/90"}`, children: t.cta }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-3", children: t.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: `h-4 w-4 mt-0.5 shrink-0 ${t.featured ? "text-mint" : "text-mint"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: t.featured ? "text-white/90" : "", children: f })
        ] }, f)) })
      ] }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Pricing as component
};
