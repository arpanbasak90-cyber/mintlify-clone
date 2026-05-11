import { V as jsxRuntimeExports } from "./server-CxKg7rx9.js";
import { H as Header, F as Footer } from "./Footer-CuzfH98q.js";
function PageShell({ children, title, kicker }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 pt-32 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6", children: [
      kicker && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-mint text-sm font-medium uppercase tracking-wider mb-3", children: kicker }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-6xl font-semibold tracking-tight text-balance mb-6", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-lg max-w-none text-muted-foreground", children })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  PageShell as P
};
