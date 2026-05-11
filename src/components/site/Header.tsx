import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/resources", label: "Resources" },
  { to: "/documentation", label: "Documentation" },
  { to: "/customers", label: "Customers" },
  { to: "/blog", label: "Blog" },
  { to: "/pricing", label: "Pricing" },
] as const;

export function Header({ transparent = false }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 ${transparent ? "" : "bg-background/80 backdrop-blur border-b"}`}>
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className={transparent ? "text-white" : "text-foreground"}>
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`${transparent ? "text-white/90 hover:text-white" : "text-foreground/80 hover:text-foreground"} transition-colors`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className={`text-sm ${transparent ? "text-white/90 hover:text-white" : "text-foreground/80 hover:text-foreground"}`}
          >
            Contact sales
          </Link>
          <Link
            to="/signup"
            className="rounded-full bg-white text-ink px-5 py-2 text-sm font-medium shadow-sm hover:bg-white/90 transition"
          >
            Start for free
          </Link>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t">
          <div className="px-6 py-4 flex flex-col gap-4">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-foreground/80">
                {n.label}
              </Link>
            ))}
            <Link to="/signup" className="rounded-full bg-ink text-white px-4 py-2 text-sm text-center">
              Start for free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
