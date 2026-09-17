"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function SpotlightCursor() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.5 });
    const springY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.5 });
    const background = useTransform(
        [springX, springY],
        ([px, py]) => `radial-gradient(600px circle at ${px}px ${py}px, rgba(212, 175, 122, 0.08), transparent 80%)`
    );

    useEffect(() => {
        const handlePointerMove = (event: PointerEvent) => {
            x.set(event.clientX);
            y.set(event.clientY);
        };

        window.addEventListener("pointermove", handlePointerMove);
        return () => window.removeEventListener("pointermove", handlePointerMove);
    }, [x, y]);

    return (
        <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0"
            style={{ background }}
        />
    );
}
