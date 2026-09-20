import Image from "next/image";
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
        image: "/projects/analytics.png",
    },
    {
        title: "Astera Luxe Rentals",
        category: "Full Stack / Luxury Real Estate",
        description:
            "A premier high-end residential rental platform featuring curated luxury property showcases, intuitive booking inquiry flows, and an interactive dark-mode user experience.",
        stack: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "UI/UX"],
        github: "https://github.com/ShambhaviRanjan/Astera-Luxe-Rentals",
        demo: "https://astera-luxury-rentals.vercel.app/",
        image: "/projects/astera-rentals.png",
    },
    {
        title: "Student AI Chatbot",
        category: "AI / Python",
        description:
            "An interactive chatbot interface built to assist students with quick automated queries and academic guidance.",
        stack: ["Python", "NLP Basics", "API Integration"],
        github: "https://github.com/ShambhaviRanjan/student_chatbot",
        demo: "#contact",
        image: "/projects/student-chatbot.png",
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

            <div className="space-y-8">
                {projects.map((project, index) => (
                    <motion.article
                        key={project.title}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
                        className="group transform-gpu bg-[#0c1017]/90 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md hover:border-[#d4af7a]/40 transition-all duration-300 shadow-xl"
                    >
                        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-12">
                            <div
                                className={
                                    index % 2 === 1
                                        ? "lg:order-2 lg:col-span-6"
                                        : "lg:order-1 lg:col-span-6"
                                }
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
                                            target={project.demo.startsWith("http") ? "_blank" : undefined}
                                            rel={project.demo.startsWith("http") ? "noreferrer" : undefined}
                                            className="rounded-full border border-slate-700 p-2 transition-colors hover:border-[#d4af7a]/70 hover:text-[#d4af7a]"
                                            aria-label={`Open ${project.title} demo`}
                                        >
                                            <ArrowUpRight size={16} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="mb-3 text-2xl font-semibold text-white sm:text-[2rem]">{project.title}</h3>
                                <p className="mb-5 text-base leading-7 text-slate-300">{project.description}</p>

                                <div className="mb-6 flex flex-wrap gap-2">
                                    {project.stack.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-slate-700 bg-slate-900/70 px-2.5 py-1 text-xs font-medium text-slate-200"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full border border-[#d4af7a]/30 bg-[#d4af7a]/10 px-4 py-2 text-sm font-medium text-[#f5d6a0] transition-colors hover:border-[#d4af7a]/60 hover:text-white"
                                    >
                                        GitHub
                                        <GitBranch size={16} />
                                    </a>
                                    <a
                                        href={project.demo}
                                        target={project.demo.startsWith("http") ? "_blank" : undefined}
                                        rel={project.demo.startsWith("http") ? "noreferrer" : undefined}
                                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition-colors hover:text-white"
                                    >
                                        Demo
                                        <ArrowUpRight size={16} />
                                    </a>
                                </div>
                            </div>

                            <div
                                className={
                                    index % 2 === 1
                                        ? "lg:order-1 lg:col-span-6"
                                        : "lg:order-2 lg:col-span-6"
                                }
                            >
                                <div className="relative w-full h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden border border-white/10 bg-[#161b26]">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        priority
                                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
