import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useState } from "react";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Get started — Docly" },
      { name: "description", content: "Create your free Docly workspace." },
    ],
  }),
  component: Signup,
});

function Signup() {
  const [done, setDone] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="mx-auto max-w-md px-6">
          <h1 className="text-4xl font-semibold tracking-tight mb-2 text-center">Start for free</h1>
          <p className="text-muted-foreground text-center mb-8">Create a workspace in seconds. No credit card required.</p>
          {done ? (
            <div className="rounded-2xl border bg-mint/10 p-8 text-center">
              <h2 className="text-xl font-semibold mb-2">Workspace created 🎉</h2>
              <p className="text-muted-foreground">Check your email to finish setup.</p>
              <Link to="/" className="mt-4 inline-block text-mint font-medium">Back home →</Link>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="grid gap-4 rounded-2xl border bg-card p-8">
              <label className="grid gap-2 text-sm">
                <span className="font-medium">Work email</span>
                <input type="email" required className="rounded-md border bg-background px-3 py-2 text-sm focus:ring-2 focus:ring-mint outline-none" />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="font-medium">Workspace name</span>
                <input type="text" required className="rounded-md border bg-background px-3 py-2 text-sm focus:ring-2 focus:ring-mint outline-none" />
              </label>
              <button className="rounded-full bg-ink text-white py-2.5 text-sm font-medium hover:bg-ink/90">Create workspace</button>
              <p className="text-xs text-muted-foreground text-center">By signing up you agree to our terms and privacy policy.</p>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
