import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch } from "lucide-react";

const projects = [
    {
        title: "Power BI Analytics Dashboard",
        category: "Data Analytics & Visualization",
        description:
            "Interactive business dashboard performing end-to-end data cleaning, transformation, and visual reporting using slicers, dynamic KPIs, and trend charts.",
        stack: ["Power BI", "Advanced Excel", "Data Modeling", "KPI Analytics"],
        github: "https://github.com/ShambhaviRanjan/powerbi-mobile-sales-dashboard",
        demo: "#contact",
    },
    {
        title: "MCA Resource Hub",
        category: "Full Stack / Academic Platform",
        description:
            "Centralized academic portal built to organize, categorize, and structure MCA study resources and course materials for peer collaboration.",
        stack: ["React.js", "Node.js", "Web Technologies", "UI/UX"],
        github: "https://github.com/ShambhaviRanjan/MCA-Study-Resource-Hub",
        demo: "#contact",
    },
    {
        title: "Student Chatbot",
        category: "AI / Python",
        description:
            "An interactive chatbot interface built to assist students with quick automated queries and academic guidance.",
        stack: ["Python", "NLP Basics", "API Integration"],
        github: "https://github.com/ShambhaviRanjan/student_chatbot",
        demo: "#contact",
    },
];

export function Projects() {
    return (
        <section id="projects" className="pt-24 sm:pt-28">
            <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af7a]">Projects</p>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Selected work.</h2>
                </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                {projects.map((project, index) => (
                    <motion.article
                        key={project.title}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
                        className="glass-panel group transform-gpu rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1.5 hover:border-[#d4af7a]/50 hover:shadow-[0_0_30px_rgba(212,175,122,0.12)]"
                    >
                        <div className="mb-5 flex items-center justify-between gap-3">
                            <span className="rounded-full border border-[#d4af7a]/25 bg-[#d4af7a]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f7d7a3]">
                                {project.category}
                            </span>
                            <div className="flex items-center gap-2 text-slate-200">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full border border-slate-700 p-2 transition-colors hover:border-[#d4af7a]/70 hover:text-[#d4af7a]"
                                    aria-label={`View ${project.title} on GitHub`}
                                >
                                    <GitBranch size={16} />
                                </a>
                                <a
                                    href={project.demo}
                                    className="rounded-full border border-slate-700 p-2 transition-colors hover:border-[#d4af7a]/70 hover:text-[#d4af7a]"
                                    aria-label={`Open ${project.title} demo`}
                                >
                                    <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </div>

                        <h3 className="mb-3 text-2xl font-semibold text-white">{project.title}</h3>
                        <p className="mb-5 text-base leading-7 text-slate-300">{project.description}</p>

                        <div className="mb-5 flex flex-wrap gap-2">
                            {project.stack.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-slate-700 bg-slate-900/70 px-2.5 py-1 text-xs font-medium text-slate-200"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center justify-between border-t border-slate-700/80 pt-4">
                            <span className="text-sm text-slate-400">Code repository</span>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-medium text-[#f5d6a0] transition-colors hover:text-white"
                            >
                                Open project
                                <ArrowUpRight size={16} />
                            </a>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
