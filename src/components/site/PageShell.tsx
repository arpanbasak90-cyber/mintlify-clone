import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children, title, kicker }: { children: React.ReactNode; title: string; kicker?: string }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="mx-auto max-w-5xl px-6">
          {kicker && <p className="text-mint text-sm font-medium uppercase tracking-wider mb-3">{kicker}</p>}
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-balance mb-6">{title}</h1>
          <div className="prose prose-lg max-w-none text-muted-foreground">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
