import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sales — Docly" },
      { name: "description", content: "Talk to our team about an enterprise deployment of Docly." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-mint font-medium uppercase tracking-wider text-sm mb-3">Contact</p>
          <h1 className="text-5xl font-semibold tracking-tight mb-4">Let's talk</h1>
          <p className="text-lg text-muted-foreground mb-10">Tell us about your team and what you're working on. We'll get back within one business day.</p>

          {sent ? (
            <div className="rounded-2xl border bg-mint/10 p-8 text-center">
              <h2 className="text-2xl font-semibold mb-2">Thanks! We'll be in touch.</h2>
              <p className="text-muted-foreground">A member of our team will reach out shortly.</p>
              <Link to="/" className="mt-6 inline-block text-mint font-medium">Back home →</Link>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="grid gap-5 rounded-2xl border bg-card p-8"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Full name" name="name" required />
                <Field label="Work email" name="email" type="email" required />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Company" name="company" />
                <Field label="Team size" name="size" />
              </div>
              <label className="grid gap-2 text-sm">
                <span className="font-medium">What are you looking to solve?</span>
                <textarea
                  required
                  rows={5}
                  className="rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-mint"
                />
              </label>
              <button type="submit" className="rounded-full bg-ink text-white px-6 py-3 text-sm font-medium justify-self-start hover:bg-ink/90">
                Send message
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="font-medium">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-mint"
      />
    </label>
  );
}
