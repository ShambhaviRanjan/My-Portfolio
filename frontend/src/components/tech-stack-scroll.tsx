const tech = [
    "Next.js",
    "React",
    "Node.js",
    "Express",
    "Tailwind",
    "Python",
    "Power BI",
    "MongoDB",
    "MySQL",
    "GitHub",
    "Flask",
    "JavaScript",
    "Bootstrap",
    "Canva",
    "WordPress",
];

export function TechStackScroll() {
    return (
        <div className="overflow-hidden rounded-2xl border border-[#2f3d4d] bg-slate-950/60 p-3">
            <div className="marquee-track flex min-w-max gap-3">
                {[...tech, ...tech].map((item, index) => (
                    <span
                        key={`${item}-${index}`}
                        className="inline-flex items-center rounded-full border border-[#d4af7a]/15 bg-[#101827]/80 px-3 py-1.5 text-xs font-medium tracking-[0.12em] text-slate-200 uppercase"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}
