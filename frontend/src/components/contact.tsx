"use client";

import { useState } from "react";
import { ArrowRight, Check, Code2, Copy, GitBranch, Mail, MapPin, Phone } from "lucide-react";

const ACCESS_KEY = "cee66b72-7f2d-4fb4-93cc-b55280ab33a0";

const initialForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

export function Contact() {
    const [form, setForm] = useState(initialForm);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [copied, setCopied] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setForm((current) => ({ ...current, [name]: value }));
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText("shambhaviranjan088@gmail.com");
            setCopied(true);
            setTimeout(() => setCopied(false), 1400);
        } catch {
            setCopied(false);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: ACCESS_KEY,
                    name: form.name,
                    email: form.email,
                    subject: form.subject || "New Portfolio Inquiry",
                    message: form.message,
                }),
            });

            let result: { success?: boolean; message?: string } = {};

            try {
                result = await response.json();
            } catch {
                result = { success: false, message: "Invalid response from server" };
            }

            if (result.success) {
                setSubmitStatus("success");
                setForm(initialForm);
            } else {
                console.error("Web3Forms error:", result);
                setSubmitStatus("error");
            }
        } catch (error) {
            console.error("Submission failed:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="pt-24 sm:pt-28">
            <div className="mb-8 max-w-2xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af7a]">Contact</p>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Let&apos;s build something meaningful.</h2>
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
                <form
                    suppressHydrationWarning
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0c1017]/90 p-8 shadow-2xl backdrop-blur-md lg:col-span-7"
                >
                    <div className="mb-6">
                        <p className="mb-2 text-xs font-medium uppercase tracking-[0.28em] text-[#d4af7a]">Start a conversation</p>
                        <h3 className="text-2xl font-semibold text-white">Tell me about your project</h3>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <label className="text-sm font-medium text-slate-200">
                            Name
                            <input
                                suppressHydrationWarning
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                autoComplete="off"
                                className="mt-2 w-full rounded-xl border border-white/10 bg-[#141a24]/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-[#d4af7a] focus:outline-none focus:ring-1 focus:ring-[#d4af7a]/30 transition-all"
                                placeholder="Your name"
                                disabled={isSubmitting}
                            />
                        </label>

                        <label className="text-sm font-medium text-slate-200">
                            Email
                            <input
                                suppressHydrationWarning
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                autoComplete="off"
                                className="mt-2 w-full rounded-xl border border-white/10 bg-[#141a24]/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-[#d4af7a] focus:outline-none focus:ring-1 focus:ring-[#d4af7a]/30 transition-all"
                                placeholder="you@example.com"
                                disabled={isSubmitting}
                            />
                        </label>
                    </div>

                    <label className="mt-4 block text-sm font-medium text-slate-200">
                        Subject
                        <input
                            suppressHydrationWarning
                            type="text"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            required
                            autoComplete="off"
                            className="mt-2 w-full rounded-xl border border-white/10 bg-[#141a24]/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-[#d4af7a] focus:outline-none focus:ring-1 focus:ring-[#d4af7a]/30 transition-all"
                            placeholder="Project inquiry"
                            disabled={isSubmitting}
                        />
                    </label>

                    <label className="mt-4 block text-sm font-medium text-slate-200">
                        Message
                        <textarea
                            suppressHydrationWarning
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            autoComplete="off"
                            rows={4}
                            className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[#141a24]/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-[#d4af7a] focus:outline-none focus:ring-1 focus:ring-[#d4af7a]/30 transition-all"
                            placeholder="Tell me about your idea, role, or project."
                            disabled={isSubmitting}
                        />
                    </label>

                    <div className="mt-6 space-y-4">
                        {submitStatus === "success" ? (
                            <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200 shadow-[0_0_18px_rgba(16,185,129,0.12)]">
                                Message sent successfully! I&apos;ll get back to you within 24 hours.
                            </div>
                        ) : null}

                        {submitStatus === "error" ? (
                            <div className="rounded-2xl border border-amber-500/25 bg-amber-500/10 px-4 py-3 text-sm text-amber-200 shadow-[0_0_18px_rgba(245,158,11,0.12)]">
                                Failed to send. Please reach out directly at shambhaviranjan088@gmail.com
                            </div>
                        ) : null}

                        <button
                            suppressHydrationWarning
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d4af7a] to-[#c59a5b] px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(212,175,122,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(212,175,122,0.45)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isSubmitting ? "Sending message..." : "Send Message"}
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </form>

                <aside className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[rgba(212,175,122,0.2)] bg-[#0e131d]/90 p-8 shadow-2xl backdrop-blur-md lg:col-span-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,122,0.12),_transparent_35%)]" />
                    <div className="relative z-10">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.18em] text-emerald-400">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                            Available for Full-Time SDE &amp; Software Roles
                        </div>

                        <div className="mb-8">
                            <p className="mb-2 text-xs font-medium uppercase tracking-[0.28em] text-[#d4af7a]">Direct channels</p>
                            <h3 className="text-2xl font-semibold text-white">Prefer direct outreach?</h3>
                            <p className="mt-2 text-sm text-slate-300">Reach out anytime — I&apos;ll respond as quickly as possible.</p>
                        </div>

                        <div className="space-y-0 divide-y divide-white/10">
                            <div className="flex items-center gap-3 py-4">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af7a]/30 bg-[#d4af7a]/10 text-[#f7d7a3]">
                                    <Mail size={16} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Email</p>
                                    <a href="mailto:shambhaviranjan088@gmail.com" className="mt-1 block truncate text-sm font-medium text-slate-100 hover:text-[#f7d7a3]">
                                        shambhaviranjan088@gmail.com
                                    </a>
                                </div>
                                <button
                                    suppressHydrationWarning
                                    type="button"
                                    onClick={handleCopy}
                                    aria-label="Copy email"
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition-all hover:border-[#d4af7a]/40 hover:text-[#f7d7a3]"
                                >
                                    {copied ? <Check size={14} /> : <Copy size={14} />}
                                </button>
                            </div>

                            <div className="flex items-center gap-3 py-4">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af7a]/30 bg-[#d4af7a]/10 text-[#f7d7a3]">
                                    <Phone size={16} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Phone</p>
                                    <a href="tel:+919801235570" className="mt-1 block text-sm font-medium text-slate-100 hover:text-[#f7d7a3]">
                                        +91 9801235570
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 py-4">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af7a]/30 bg-[#d4af7a]/10 text-[#f7d7a3]">
                                    <MapPin size={16} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Location</p>
                                    <p className="mt-1 text-sm font-medium text-slate-100">Sonipat, Delhi NCR</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 mt-8">
                        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">Social profiles</p>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="https://github.com/ShambhaviRanjan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#131a22]/80 px-3 py-2 text-sm text-slate-100 transition-all duration-200 hover:border-[#d4af7a]/40 hover:text-[#f7d7a3]"
                            >
                                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    />
                                </svg>
                                GitHub
                                <ArrowRight size={14} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/shambhavi-ranjan-001a7927b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#131a22]/80 px-3 py-2 text-sm text-slate-100 transition-all duration-200 hover:border-[#d4af7a]/40 hover:text-[#f7d7a3]"
                            >
                                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                LinkedIn
                                <ArrowRight size={14} />
                            </a>
                            <a
                                href="https://leetcode.com/u/ShambhaviRanjan03/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#131a22]/80 px-3 py-2 text-sm text-slate-100 transition-all duration-200 hover:border-[#d4af7a]/40 hover:text-[#f7d7a3]"
                            >
                                <Code2 size={16} />
                                LeetCode
                                <ArrowRight size={14} />
                            </a>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
}
