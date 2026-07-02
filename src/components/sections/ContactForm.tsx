"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form");
      }

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "An unexpected error occurred.");
    }
  }

  return (
    <section id="contact" className="w-full py-24 bg-[#050505]">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Initiate Contact
            </h2>
            <p className="text-gray-400 mb-8">
              Discuss how self-powered sensing can transform your operational capabilities. 
              Our engineering team is ready to evaluate your requirements.
            </p>
            <div className="space-y-4 text-sm text-gray-500">
              <p>📍 Matrix Industries HQ<br/>101 Energy Way, Innovation District</p>
              <p>✉️ engineering@matrixindustries.com</p>
            </div>
          </div>

          <div className="bg-panel border border-panel-border rounded-xl p-6 md:p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12 space-y-4 animate-in fade-in zoom-in duration-300">
                <CheckCircle2 className="h-12 w-12 text-accent" />
                <h3 className="text-xl font-bold">Transmission Received</h3>
                <p className="text-gray-400 text-sm">
                  Our systems have logged your inquiry. An engineer will respond within 24 hours.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-sm text-accent hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot Field for Bot Protection */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="botcheck">Do not fill this out</label>
                  <input type="text" name="botcheck" id="botcheck" tabIndex={-1} />
                </div>

                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full h-10 px-3 rounded-md border border-panel-border bg-background text-sm text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full h-10 px-3 rounded-md border border-panel-border bg-background text-sm text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-gray-300">Company (Optional)</label>
                  <input
                    id="company"
                    name="company"
                    className="w-full h-10 px-3 rounded-md border border-panel-border bg-background text-sm text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    className="w-full min-h-[120px] p-3 rounded-md border border-panel-border bg-background text-sm text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-y"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-500 text-sm p-3 rounded-md bg-red-500/10 border border-red-500/20">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full h-10 inline-flex items-center justify-center rounded-md bg-foreground text-background text-sm font-medium transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50 mt-2"
                >
                  {status === "loading" ? "Transmitting..." : "Send Message"}
                  {!status && <Send className="ml-2 h-4 w-4" />}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
