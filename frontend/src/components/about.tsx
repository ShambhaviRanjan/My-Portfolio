import { Mail, MapPin, Sparkles } from "lucide-react";

const profileTags = ["⚡ Full Stack Ready", "🐍 Python & Data", "🚀 4+ Projects"];

const skillGroups = [
    {
        title: "Frontend",
        skills: ["React", "Tailwind CSS", "JavaScript (ES6+)", "HTML5/CSS3"],
    },
    {
        title: "Backend & DB",
        skills: ["Node.js", "Express.js", "Flask", "MongoDB", "MySQL"],
    },
    {
        title: "Data & Analytics",
        skills: ["Python", "Power BI", "Advanced Excel"],
    },
];

const timezoneTags = ["Remote-ready", "Internship", "Full-time"];

const sparklePositions = [
    { left: "12%", top: "18%", delay: "0s", size: "2.5px" },
    { left: "30%", top: "26%", delay: "0.7s", size: "2px" },
    { left: "54%", top: "18%", delay: "1.4s", size: "2.5px" },
    { left: "78%", top: "30%", delay: "0.4s", size: "2px" },
    { left: "18%", top: "72%", delay: "1.1s", size: "2px" },
    { left: "44%", top: "66%", delay: "0.9s", size: "2.5px" },
    { left: "68%", top: "74%", delay: "1.8s", size: "2px" },
    { left: "88%", top: "60%", delay: "1.3s", size: "2.5px" },
];

export function About() {
    return (
        <section id="about" className="pt-24 sm:pt-28">
            <div className="mb-8 max-w-2xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af7a]">About</p>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Building thoughtful digital experiences.</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="glass-panel rounded-[28px] p-6">
                    <div className="mb-6 flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">Profile</h3>
                        <span className="rounded-full border border-[#d4af7a]/25 bg-[#d4af7a]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#f5d6a0]">
                            MCA Scholar
                        </span>
                    </div>

                    <div className="mb-6 flex flex-col items-center text-center">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4af7a]/40 bg-[#d4af7a]/10 px-4 py-2 shadow-[0_0_18px_rgba(212,175,122,0.24)]">
                            <span className="h-2 w-2 rounded-full bg-[#d4af7a] shadow-[0_0_12px_rgba(212,175,122,0.9)]" />
                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f7d7a3]">
                                MCA Scholar @ SRM University
                            </span>
                        </div>

                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-300">
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]">
                                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
                            </span>
                            2025–2027
                        </div>

                        <div className="flex flex-wrap justify-center gap-2">
                            {profileTags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-slate-700/80 bg-slate-900/60 px-2.5 py-1 text-[10px] font-medium text-slate-200"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <p className="text-base leading-7 text-slate-300">
                        Detail-oriented <span className="font-semibold text-[#f5d6a0]">MCA scholar</span> focused on building clean, impactful experiences across frontend, backend, and data-driven products. I enjoy turning ideas into practical digital solutions with a strong attention to usability, performance, and user value.
                    </p>
                </div>

                <div className="glass-panel rounded-[28px] p-5">
                    <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">Tech stack</h3>
                        <span className="rounded-full border border-[#d4af7a]/30 bg-[#d4af7a]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#f5d6a0]">
                            Core stack
                        </span>
                    </div>

                    <div className="space-y-3">
                        {skillGroups.map((group) => (
                            <div
                                key={group.title}
                                className="rounded-2xl border border-slate-700/80 bg-slate-950/40 p-3 transition-all duration-200 hover:border-[#d4af7a]/50 hover:bg-[#111827]/80"
                            >
                                <div className="mb-2 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-[#d4af7a] shadow-[0_0_10px_rgba(212,175,122,0.8)]" />
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200">{group.title}</p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-200 transition-all duration-200 hover:border-[#d4af7a]/50 hover:bg-[#d4af7a]/10 hover:text-[#f7d7a3]"
                                        >
                                            <span className="h-1.5 w-1.5 rounded-full bg-[#d4af7a]" />
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-panel rounded-[28px] p-6">
                    <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="rounded-full border border-[#d4af7a]/30 bg-[#d4af7a]/10 p-2 text-[#f7d7a3]">
                                <MapPin size={18} />
                            </div>
                            <h3 className="text-lg font-semibold text-white">Timezone</h3>
                        </div>
                        <span className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald-300">
                            IST
                        </span>
                    </div>

                    <div className="mb-4 flex items-center gap-2.5">
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]">
                            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/80" />
                        </span>
                        <p className="text-sm font-medium text-slate-200">
                            Active Timezone: <span className="text-[#f5d6a0]">IST (India Standard Time)</span>
                        </p>
                    </div>

                    <p className="mb-5 text-base text-slate-300">I&apos;m very flexible with timezone communications and happy to collaborate globally.</p>

                    <div className="flex flex-wrap gap-2">
                        {timezoneTags.map((badge) => (
                            <span
                                key={badge}
                                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-200"
                            >
                                {badge}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="glass-panel relative overflow-hidden rounded-[28px] p-6">
                    <div className="pointer-events-none absolute inset-0 opacity-80">
                        {sparklePositions.map((sparkle, index) => (
                            <span
                                key={`${sparkle.left}-${sparkle.top}`}
                                className="absolute block rounded-full bg-[#d4af7a]/80 shadow-[0_0_10px_rgba(212,175,122,0.8)] animate-pulse"
                                style={{
                                    left: sparkle.left,
                                    top: sparkle.top,
                                    width: sparkle.size,
                                    height: sparkle.size,
                                    animationDelay: sparkle.delay,
                                    opacity: 0.25 + (index % 4) * 0.18,
                                }}
                            />
                        ))}
                    </div>

                    <div className="relative z-10">
                        <div className="mb-4 flex items-center gap-3">
                            <div className="rounded-full border border-[#d4af7a]/30 bg-[#d4af7a]/10 p-2 text-[#f7d7a3]">
                                <Sparkles size={18} />
                            </div>
                            <h3 className="text-lg font-semibold text-white">Quick connect</h3>
                        </div>

                        <h3 className="max-w-sm text-2xl font-semibold leading-tight text-white sm:text-[2rem]">
                            Let&apos;s work together on your next project
                        </h3>

                        <a
                            href="mailto:shambhaviranjan088@gmail.com"
                            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#d4af7a]/50 bg-[linear-gradient(135deg,rgba(212,175,122,0.18),rgba(245,214,160,0.12))] px-5 py-3 text-sm font-semibold text-[#f5d6a0] shadow-[0_0_20px_rgba(212,175,122,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#f5d6a0]/80 hover:bg-[linear-gradient(135deg,rgba(212,175,122,0.25),rgba(245,214,160,0.18))]"
                        >
                            <Mail size={17} />
                            shambhaviranjan088@gmail.com
                        </a>
                    </div>
                </div>

                <div className="glass-panel md:col-span-2 rounded-[28px] p-4">
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af7a]">
                        <Sparkles size={14} />
                        Inside my workspace
                    </div>
                    <div className="overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950/60 py-3">
                        <div className="marquee-track flex min-w-max gap-4 px-2 text-sm font-medium text-slate-200">
                            {[
                                "Web Development",
                                "Python Automation",
                                "Data Analytics",
                                "UI/UX Design",
                                "REST APIs",
                                "Database Design",
                                "Machine Learning Basics",
                                "Product Thinking",
                                "Frontend Engineering",
                                "Research & Learning",
                            ].map((item, index) => (
                                <span key={`${item}-${index}`} className="inline-flex items-center gap-3">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#d4af7a]" />
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
