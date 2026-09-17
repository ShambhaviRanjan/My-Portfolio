import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Sparkles, BadgeCheck } from "lucide-react";

const experienceCards = [
    {
        company: "Naad Wellness Private Limited (New Delhi)",
        role: "Telesales Executive",
        duration: "04-April-2026 – 08-Aug-2026",
        badge: "Performance: Rated Excellent",
        badgeTone: "gold",
        description: [
            "Managed inbound and outbound client communication, consultations, and program coordination.",
            "Handled lead qualification, prospective client follow-ups, and booking reservations.",
            "Maintained organized customer records and cross-departmental operations with precision.",
        ],
        actionText: "View Experience Letter ->",
        href: "/experience-naad.jpg",
    },
    {
        company: "Arnav Inspiring Pathways Pvt Ltd (Bangalore)",
        role: "Data Aggregation & Operations Intern",
        duration: "15-Jan-2025 – 30-Apr-2025",
        badge: "Completed Internship",
        badgeTone: "emerald",
        description: [
            "Led platform data aggregation, verifying and structuring practitioner and therapist profiles.",
            "Spearheaded therapist platform onboarding workflows, documentation, and stakeholder outreach.",
            "Recognized by executive leadership as an asset to core operational scaling.",
        ],
        actionText: "View Certificate ->",
        href: "/certificate-arnav.pdf",
    },
];

const certificationCards = [
    {
        title: "30-Days SQL Micro Course",
        issuer: "Learn More Pro / Skill Course (ISO 9001:2015 Certified)",
        instructor: "Satish Dhawale",
        date: "June 2, 2025",
        topics: ["Relational Queries", "Joins", "Aggregations", "Schema Design", "Data Manipulation"],
        href: "/cert-sql.jpg",
        actionText: "View Certificate ->",
        badge: "Verified Credential",
    },
    {
        title: "Power BI Comprehensive Analytics",
        issuer: "Learn More Pro / Skill Course (ISO 9001:2015 Certified)",
        instructor: "Satish Dhawale",
        date: "June 1, 2025",
        topics: ["Interactive Dashboards", "KPI Tracking", "Data Transformation", "Visual Modeling"],
        href: "/cert-powerbi.jpg",
        actionText: "View Certificate ->",
        badge: "Verified Credential",
    },
];

export function CodeChronicles() {
    return (
        <section id="chronicles" className="pt-24 sm:pt-28">
            <div className="mb-8 max-w-2xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af7a]">EXPERIENCE & CERTIFICATIONS</p>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Professional milestones and industry contributions.</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-6">
                    {experienceCards.map((item, index) => (
                        <motion.article
                            key={item.role}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
                            className="group transform-gpu rounded-[30px] border border-[rgba(212,175,122,0.2)] bg-[linear-gradient(180deg,rgba(16,23,34,0.92),rgba(11,15,23,0.9))] p-6 shadow-[0_20px_45px_rgba(3,7,18,0.42)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#d4af7a]/50 hover:shadow-[0_24px_60px_rgba(212,175,122,0.12)]"
                        >
                            <div className="mb-5 flex items-start justify-between gap-3">
                                <div className="rounded-2xl border border-[rgba(212,175,122,0.25)] bg-[#12161f]/80 p-3 text-[#f7d7a3] shadow-[0_0_20px_rgba(212,175,122,0.08)]">
                                    <BriefcaseBusiness size={18} />
                                </div>
                                <span
                                    className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${item.badgeTone === "gold"
                                        ? "border-[#d4af7a]/35 bg-[#d4af7a]/10 text-[#f7d7a3]"
                                        : "border-emerald-500/25 bg-emerald-500/10 text-emerald-300"
                                        }`}
                                >
                                    {item.badge}
                                </span>
                            </div>

                            <div className="mb-4 space-y-2">
                                <p className="text-sm uppercase tracking-[0.18em] text-[#d4af7a]">{item.duration}</p>
                                <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
                                <p className="text-base font-medium text-slate-200">{item.company}</p>
                            </div>

                            <ul className="space-y-3 text-sm leading-6 text-slate-300">
                                {item.description.map((point) => (
                                    <li key={point} className="flex gap-3">
                                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af7a] shadow-[0_0_10px_rgba(212,175,122,0.8)]" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#d4af7a]/50 bg-[linear-gradient(135deg,rgba(212,175,122,0.12),rgba(245,214,160,0.06))] px-4 py-2.5 text-sm font-semibold text-[#f5d6a0] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#f5d6a0]/80 hover:bg-[linear-gradient(135deg,rgba(212,175,122,0.18),rgba(245,214,160,0.12))]"
                            >
                                <span>{item.actionText}</span>
                                <ArrowUpRight size={16} />
                            </a>
                        </motion.article>
                    ))}
                </div>

                <div className="space-y-6">
                    {certificationCards.map((item, index) => (
                        <motion.article
                            key={item.title}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
                            className="group transform-gpu rounded-[30px] border border-[rgba(212,175,122,0.2)] bg-[linear-gradient(180deg,rgba(17,22,31,0.92),rgba(11,15,23,0.9))] p-6 shadow-[0_20px_45px_rgba(3,7,18,0.42)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#d4af7a]/50 hover:shadow-[0_24px_60px_rgba(212,175,122,0.12)]"
                        >
                            <div className="mb-5 flex items-start justify-between gap-3">
                                <div className="rounded-2xl border border-[rgba(212,175,122,0.25)] bg-[#12161f]/80 p-3 text-[#f7d7a3] shadow-[0_0_20px_rgba(212,175,122,0.08)]">
                                    <BadgeCheck size={18} />
                                </div>
                                <span className="inline-flex rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
                                    {item.badge}
                                </span>
                            </div>

                            <div className="mb-4 space-y-2">
                                <p className="text-sm uppercase tracking-[0.18em] text-[#d4af7a]">{item.date}</p>
                                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                                <p className="text-sm font-medium text-slate-200">{item.issuer}</p>
                                <p className="text-sm text-slate-300">Instructor: {item.instructor}</p>
                            </div>

                            <div className="mb-5 rounded-2xl border border-slate-700/80 bg-slate-950/40 p-3">
                                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Focus topics</p>
                                <div className="flex flex-wrap gap-2">
                                    {item.topics.map((topic) => (
                                        <span
                                            key={topic}
                                            className="rounded-full border border-slate-700/80 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-slate-200"
                                        >
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-[#d4af7a]/50 bg-[linear-gradient(135deg,rgba(212,175,122,0.12),rgba(245,214,160,0.06))] px-4 py-2.5 text-sm font-semibold text-[#f5d6a0] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#f5d6a0]/80 hover:bg-[linear-gradient(135deg,rgba(212,175,122,0.18),rgba(245,214,160,0.12))]"
                            >
                                <span>{item.actionText}</span>
                                <ArrowUpRight size={16} />
                            </a>
                        </motion.article>
                    ))}
                </div>
            </div>

            <div className="mt-8 flex items-center justify-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af7a]/25 bg-[#d4af7a]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f7d7a3]">
                    <Sparkles size={12} />
                    Verified learning milestones
                </div>
            </div>
        </section>
    );
}
