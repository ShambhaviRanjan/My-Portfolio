"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { About } from "@/components/about";
import { BackgroundAnimation } from "@/components/background-animation";
import { CodeChronicles } from "@/components/code-chronicles";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Journey } from "@/components/journey";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B0F17] text-slate-100">
      <BackgroundAnimation />


      <header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-slate-800/60 bg-[#090d14]/75 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20">
          <a href="#home" className="group flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl border border-[#d4af7a]/40 bg-[#161b26]/60 backdrop-blur-md flex items-center justify-center shadow-[0_0_15px_rgba(212,175,122,0.15)] font-serif tracking-widest text-[#d4af7a] font-bold text-base transition-all duration-300 group-hover:border-[#d4af7a] group-hover:shadow-[0_0_20px_rgba(212,175,122,0.3)] select-none">
              SR
            </div>

          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-[#f5d6a0]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#d4af7a]/40 bg-[#d4af7a]/10 px-4 py-2 text-sm font-semibold text-[#f7d7a3] transition-colors hover:bg-[#d4af7a]/15"
            >
              Let&apos;s talk
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 text-slate-100 md:hidden"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {isOpen ? (
          <div className="border-t border-slate-800 bg-[#0B0F17] px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm text-slate-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <CodeChronicles />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-slate-800/80 bg-[#0B0F17]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-4 py-6 text-sm text-slate-400 sm:flex-row sm:px-6 lg:px-8">
          <span>© 2026 Shambhavi Ranjan. All rights reserved.</span>
          <a
            href="https://leetcode.com/u/ShambhaviRanjan03/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors hover:text-[#f7d7a3]"
          >
            LeetCode ↗
          </a>
        </div>
      </footer>
    </div>
  );
}
