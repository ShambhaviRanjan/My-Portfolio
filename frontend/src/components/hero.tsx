"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Download, Mail } from "lucide-react";

const roles = [
    "Full Stack Developer",
    "Software Development Engineer",
    "Python & Data Analyst",
    "MCA Scholar @ SRM University",
];

export function Hero() {
    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                const nextText = currentRole.slice(0, text.length + 1);
                setText(nextText);

                if (nextText === currentRole) {
                    setTimeout(() => setIsDeleting(true), 1200);
                }
            } else {
                const nextText = currentRole.slice(0, text.length - 1);
                setText(nextText);

                if (nextText === "") {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 70 : 110);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    return (
        <section id="home" className="pt-10 sm:pt-14">
            <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af7a]/30 bg-[#101827]/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f7d7a3]">
                        <span className="h-2 w-2 rounded-full bg-[#d4af7a] shadow-[0_0_12px_rgba(212,175,122,0.9)]" />
                        Available for work & collaborations
                    </div>

                    <div className="space-y-5">
                        <p className="text-xs uppercase tracking-[0.3em] font-medium text-[#d4af7a]/90 font-mono">
                            WELCOME TO MY PORTFOLIO
                        </p>
                        <h1 className="max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Hi, I&apos;m{" "}
                            <span className="bg-gradient-to-r from-[#f5d6a0] via-[#d4af7a] to-[#aa8048] bg-clip-text text-transparent">
                                Shambhavi Ranjan
                            </span>
                        </h1>
                        <div className="flex min-h-[3rem] items-center text-xl font-medium text-[#d4af7a] sm:text-2xl">
                            <span>{text}</span>
                            <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-[#d4af7a]" />
                        </div>
                        <p className="max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                            Engineering high-performance web applications and data-driven systems. Blending scalable full-stack architectures (Next.js, Node.js) with Python data analytics to solve enterprise-level challenges.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d4af7a] px-6 py-3 text-sm font-semibold text-[#111827] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#e0bb84]"
                        >
                            Explore Projects
                            <ArrowRight size={18} />
                        </a>
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-600 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-100 transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#d4af7a]/60 hover:text-[#f7d7a3]"
                        >
                            <Download size={18} />
                            Download CV
                        </a>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                        <a
                            href="https://github.com/ShambhaviRanjan"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-slate-100 transition-all duration-200 hover:border-[#d4af7a]/70 hover:text-[#d4af7a]"
                        >
                            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/shambhavi-ranjan-001a7927b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-slate-100 transition-all duration-200 hover:border-[#d4af7a]/70 hover:text-[#d4af7a]"
                        >
                            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a
                            href="https://leetcode.com/u/ShambhaviRanjan03/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LeetCode"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-slate-100 transition-all duration-200 hover:border-[#d4af7a]/70 hover:text-[#d4af7a] hover:shadow-[0_0_18px_rgba(212,175,122,0.28)]"
                        >
                            <Code2 size={19} />
                        </a>
                        <a
                            href="mailto:shambhaviranjan088@gmail.com"
                            aria-label="Email"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-slate-100 transition-all duration-200 hover:border-[#d4af7a]/70 hover:text-[#d4af7a]"
                        >
                            <Mail size={18} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                    className="relative mx-auto w-fit"
                >
                    <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-[#d4af7a]/20 blur-3xl" />
                    <div className="absolute -right-6 bottom-10 h-36 w-36 rounded-full bg-[#22d3ee]/15 blur-3xl" />

                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-3 -right-6 z-20 whitespace-nowrap rounded-xl border border-[rgba(212,175,122,0.3)] bg-[#12161f]/85 px-4 py-2 text-[11px] font-mono text-[#f7d7a3] shadow-lg backdrop-blur-md"
                    >
                        <span className="mr-2">⚡</span>
                        Full Stack &amp; Next.js
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-4 -right-10 z-20 whitespace-nowrap rounded-xl border border-[rgba(212,175,122,0.3)] bg-[#12161f]/85 px-4 py-2 text-[11px] font-mono text-[#f7d7a3] shadow-lg backdrop-blur-md"
                    >
                        <span className="mr-2">📊</span>
                        Python • SQL • Power BI
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-3 -left-10 z-20 whitespace-nowrap rounded-xl border border-[rgba(212,175,122,0.3)] bg-[#12161f]/85 px-4 py-2 text-[11px] font-mono text-[#f7d7a3] shadow-lg backdrop-blur-md"
                    >
                        <span className="mr-2">🎓</span>
                        MCA Scholar (SRM)
                        <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">2025–2027</div>
                    </motion.div>

                    <div className="relative z-10 flex items-center justify-center">
                        <motion.div
                            aria-hidden="true"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 18, ease: "linear", repeat: Infinity }}
                            className="absolute h-[335px] w-[335px] rounded-full border border-dashed border-amber-400/30"
                        />
                        <motion.div
                            aria-hidden="true"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 24, ease: "linear", repeat: Infinity }}
                            className="absolute h-[286px] w-[286px] rounded-full border border-dashed border-[#f2ead9]/20"
                        />
                        <div className="relative h-72 w-72 overflow-hidden rounded-full ring-1 ring-[rgba(212,175,122,0.35)] shadow-[0_0_45px_rgba(212,175,122,0.18)] md:h-80 md:w-80">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,122,0.22),_rgba(17,24,39,0.18)_48%,_rgba(17,24,39,0.55)_100%)]" />
                            <Image
                                src="/profile.jpeg"
                                alt="Shambhavi Ranjan"
                                fill
                                priority
                                className="h-full w-full object-cover object-top"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
