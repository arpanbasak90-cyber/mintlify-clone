import { r as reactExports, V as jsxRuntimeExports } from "./server-CxKg7rx9.js";
import { L as Link } from "./router-BVMEbMWL.js";
import { H as Header, F as Footer } from "./Footer-CuzfH98q.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Contact() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 pt-32 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-mint font-medium uppercase tracking-wider text-sm mb-3", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-semibold tracking-tight mb-4", children: "Let's talk" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mb-10", children: "Tell us about your team and what you're working on. We'll get back within one business day." }),
      sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border bg-mint/10 p-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold mb-2", children: "Thanks! We'll be in touch." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "A member of our team will reach out shortly." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mt-6 inline-block text-mint font-medium", children: "Back home →" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      }, className: "grid gap-5 rounded-2xl border bg-card p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", name: "name", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Work email", name: "email", type: "email", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company", name: "company" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Team size", name: "size" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "What are you looking to solve?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 5, className: "rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-mint" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "rounded-full bg-ink text-white px-6 py-3 text-sm font-medium justify-self-start hover:bg-ink/90", children: "Send message" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-2 text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, required, className: "rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-mint" })
  ] });
}
export {
  Contact as component
};
