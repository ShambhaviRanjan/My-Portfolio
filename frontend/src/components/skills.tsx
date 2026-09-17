import { Code2, Cpu, Database, Layout, Server, Terminal } from "lucide-react";

const skillGroups = [
    {
        title: "Programming & DSA",
        icon: Code2,
        items: ["C", "C++", "Java", "Python", "Data Structures & Algorithms", "OOP"],
    },
    {
        title: "Frontend Ecosystem",
        icon: Layout,
        items: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5/CSS3", "Tailwind CSS", "Bootstrap"],
    },
    {
        title: "Backend & Systems",
        icon: Server,
        items: ["Node.js", "Express.js", "RESTful APIs", "Flask", "System Architecture"],
    },
    {
        title: "Database Engineering",
        icon: Database,
        items: ["MySQL", "MongoDB", "Relational Modeling", "Query Optimization"],
    },
    {
        title: "Analytics & Applied AI",
        icon: Cpu,
        items: ["Python for AI", "Power BI", "Advanced Excel", "Data Aggregation", "ML Fundamentals"],
    },
    {
        title: "Workflow & Leadership",
        icon: Terminal,
        items: ["Git", "GitHub", "VS Code", "Cross-team Collaboration", "Agile Problem Solving"],
    },
];

export function Skills() {
    return (
        <section id="skills" className="pt-24 sm:pt-28">
            <div className="mb-8 max-w-2xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af7a]">Skills</p>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Tools, frameworks, and problem-solving strengths.</h2>
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {skillGroups.map((group) => (
                    <div
                        key={group.title}
                        className={`rounded-2xl border bg-[#0c1017]/85 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af7a]/40 ${group.title === "Programming & DSA" ? "border-[#d4af7a]/40 shadow-[0_0_28px_rgba(212,175,122,0.12)]" : "border-slate-800/80"
                            }`}
                    >
                        <div className="mb-5 flex items-center">
                            <div className="mr-3 flex h-9 w-9 items-center justify-center rounded-xl border border-[#d4af7a]/20 bg-[#d4af7a]/10">
                                <group.icon className="h-5 w-5 text-[#d4af7a]" />
                            </div>
                            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-300 transition-all hover:border-[#d4af7a]/30 hover:text-white"
                                >
                                    {item}
                                </span>
                            ))}
                            {group.title === "Programming & DSA" ? (
                                <a
                                    href="https://leetcode.com/u/ShambhaviRanjan03/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg border border-[#d4af7a]/30 bg-[#d4af7a]/10 px-3 py-1.5 text-xs font-medium text-[#f7d7a3] transition-all hover:border-[#d4af7a]/60 hover:text-white"
                                >
                                    ⚡ LeetCode: ShambhaviRanjan03 ↗
                                </a>
                            ) : null}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
