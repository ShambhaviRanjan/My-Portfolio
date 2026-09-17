"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { SpotlightCursor } from "@/components/spotlight-cursor";

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 16 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                    },
                }}
                exit={{ opacity: 0, y: -12, transition: { duration: 0.3 } }}
                className="transform-gpu"
            >
                <SpotlightCursor />
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
