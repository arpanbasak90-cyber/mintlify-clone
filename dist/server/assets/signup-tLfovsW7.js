import { r as reactExports, V as jsxRuntimeExports } from "./server-CxKg7rx9.js";
import { L as Link } from "./router-BVMEbMWL.js";
import { H as Header, F as Footer } from "./Footer-CuzfH98q.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Signup() {
  const [done, setDone] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 pt-32 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-md px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-semibold tracking-tight mb-2 text-center", children: "Start for free" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-center mb-8", children: "Create a workspace in seconds. No credit card required." }),
      done ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border bg-mint/10 p-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mb-2", children: "Workspace created 🎉" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Check your email to finish setup." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mt-4 inline-block text-mint font-medium", children: "Back home →" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setDone(true);
      }, className: "grid gap-4 rounded-2xl border bg-card p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Work email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, className: "rounded-md border bg-background px-3 py-2 text-sm focus:ring-2 focus:ring-mint outline-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Workspace name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, className: "rounded-md border bg-background px-3 py-2 text-sm focus:ring-2 focus:ring-mint outline-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-full bg-ink text-white py-2.5 text-sm font-medium hover:bg-ink/90", children: "Create workspace" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center", children: "By signing up you agree to our terms and privacy policy." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Signup as component
};
