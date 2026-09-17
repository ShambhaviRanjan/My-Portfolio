"use client";

import { motion } from "framer-motion";

const academicEntries = [
    {
        level: "Master of Computer Applications (MCA)",
        institution: "SRM University, Sonipat-Delhi NCR",
        duration: "2025 – 2027",
        status: "Pursuing",
        statusType: "active",
        description: "Focused on advanced software engineering, full-stack development, data systems, and emerging technology practices.",
        badge: "university",
    },
    {
        level: "Bachelor of Computer Applications (BCA)",
        institution: "LN Mishra Institute, Patna",
        duration: "2022 – 2025",
        status: "Completed",
        statusType: "done",
        description: "Built a strong base in programming fundamentals, databases, web technologies, and analytical problem-solving.",
        badge: "college",
    },
    {
        level: "Senior Secondary (Class XI – XII) / Secondary (Class X)",
        institution: "DAV Public School, WALMI, Patna",
        duration: "2020 – 2022",
        status: "COMPLETED",
        statusType: "done",
        description: "Foundational coursework in Science and Mathematics, fostering problem-solving and analytical thinking.",
        badge: "school",
    },
];

function UniversityBadge() {
    return (
        <svg viewBox="0 0 64 64" className="h-7 w-7 fill-[#d4af7a]" aria-hidden="true">
            <path d="M10 24.5 32 13l22 11.5L32 36 10 24.5Zm-2 4.6v11.3c0 1.3 1.4 2.5 3.3 3.3L31 50.6c.7.4 1.5.4 2.2 0l19.7-8.9c1.9-.8 3.3-2 3.3-3.3V29.1l-4.3 2.2v8.4c0 .8-.8 1.8-2 2.5l-17.1 7.7c-.7.3-1.5.3-2.2 0L16.3 42.2c-1.2-.7-2-1.7-2-2.5v-8.4L8 29.1Zm23.5 4.6 10.5-5.5-10.5-5.5-10.5 5.5 10.5 5.5Z" />
        </svg>
    );
}

function CollegeBadge() {
    return (
        <svg viewBox="0 0 64 64" className="h-7 w-7 fill-[#d4af7a]" aria-hidden="true">
            <path d="M10 23.5 32 12l22 11.5L32 35 10 23.5Zm19 6.8v12.2c0 1.7-2.6 2.8-5.8 2.8S17 44.2 17 42.5v-8.8l-3.8 2v8.7c0 4.6 6.8 7.5 18.8 7.5s18.8-2.9 18.8-7.5v-8.7L47 33.7v8.8c0 1.7-2.6 2.8-5.8 2.8s-5.8-1.1-5.8-2.8V30.3Zm8.1-11.2 14.1 7.4-14.1 7.4-14.1-7.4 14.1-7.4Z" />
        </svg>
    );
}

function SchoolBadge() {
    return (
        <svg viewBox="0 0 64 64" className="h-7 w-7 fill-[#d4af7a]" aria-hidden="true">
            <path d="M32 9.5 14 18.5v8.3c0 11.7 7.6 20.1 18 24.2 10.4-4.1 18-12.5 18-24.2v-8.3L32 9.5Zm0 7.1 10.7 5.7-10.7 5.6L21.3 22.3 32 16.6Zm-12.5 9.2 9.2 4.7v9.5c-5.2-2.6-8.8-7.1-9.2-14.2Zm12.5 14.2v-10.2l12.5-6.6v10.2c-.4 7.1-4 11.6-9.2 14.2L32 40Zm-2.3-14.4 2.3 1.2 2.3-1.2v-2.4L32 25l-2.3 1.2v2.4Z" />
        </svg>
    );
}

function renderBadge(type: string) {
    if (type === "university") return <UniversityBadge />;
    if (type === "college") return <CollegeBadge />;
    return <SchoolBadge />;
}

export function Journey() {
    return (
        <section id="journey" className="pt-24 sm:pt-28">
            <div className="mb-8 max-w-2xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af7a]">Education</p>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Academic journey and growth.</h2>
            </div>

            <div className="relative space-y-6 before:absolute before:left-[27px] before:top-2 before:h-[calc(100%-18px)] before:w-px before:bg-gradient-to-b before:from-[#d4af7a]/80 before:via-[#d4af7a]/35 before:to-transparent">
                {academicEntries.map((entry, index) => (
                    <motion.div
                        key={entry.level}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
                        className="group relative grid transform-gpu grid-cols-[56px_1fr] items-start gap-4 transition-transform duration-200 hover:-translate-y-0.5"
                    >
                        <div className="relative flex justify-center pt-2">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(212,175,122,0.25)] bg-[#12161f]/80 shadow-[0_0_18px_rgba(212,175,122,0.12)] transition-all duration-200 group-hover:border-[#d4af7a]/60 group-hover:shadow-[0_0_22px_rgba(212,175,122,0.18)]">
                                {renderBadge(entry.badge)}
                            </div>
                            {entry.statusType === "active" ? (
                                <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]">
                                    <span className="h-1.5 w-1.5 animate-ping rounded-full bg-emerald-200" />
                                </span>
                            ) : null}
                        </div>

                        <div className="glass-panel rounded-[28px] p-6">
                            <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                <h3 className="text-lg font-semibold text-white sm:text-xl">{entry.level}</h3>
                                <span
                                    className={`inline-flex w-fit rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${entry.statusType === "active"
                                        ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-300"
                                        : "border-[#d4af7a]/25 bg-[#d4af7a]/10 text-[#f7d7a3]"
                                        }`}
                                >
                                    {entry.duration}
                                </span>
                            </div>

                            <div className="mb-3 flex items-center justify-between gap-3">
                                <p className="text-base font-medium text-slate-200">{entry.institution}</p>
                                <span className="rounded-full border border-slate-700/80 bg-slate-900/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-200">
                                    {entry.status}
                                </span>
                            </div>

                            <p className="text-sm leading-6 text-slate-300">{entry.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
