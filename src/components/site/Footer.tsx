import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const cols = [
  {
    title: "Product",
    links: [
      { to: "/documentation", label: "Documentation" },
      { to: "/pricing", label: "Pricing" },
      { to: "/customers", label: "Customers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/blog", label: "Blog" },
      { to: "/resources", label: "Guides" },
      { to: "/changelog", label: "Changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact" },
      { to: "/careers", label: "Careers" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            The intelligent knowledge platform for modern teams.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-sm font-semibold mb-4">{c.title}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {c.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-foreground transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-muted-foreground flex justify-between">
          <span>© {new Date().getFullYear()} Docly, Inc.</span>
          <span>Built for the intelligence age.</span>
        </div>
      </div>
    </footer>
  );
}
