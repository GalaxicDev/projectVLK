// components/BackgroundEffects.tsx
"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function BackgroundEffects() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, { stiffness: 120, damping: 25, mass: 0.6 });
    const smoothY = useSpring(mouseY, { stiffness: 120, damping: 25, mass: 0.6 });

    useEffect(() => {
        const handlePointerMove = (e: PointerEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("pointermove", handlePointerMove, { passive: true });
        return () => window.removeEventListener("pointermove", handlePointerMove);
    }, [mouseX, mouseY]);

    return (
        <>
            {/* Static background elements - behind content */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                {/* DMX beams - now absolute to body, not viewport */}
                <div className="absolute inset-0 w-full" style={{ height: '100%', minHeight: '100vh' }}>
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute top-0 w-[2px] bg-gradient-to-b from-violet-500/30 via-violet-500/15 to-transparent"
                            style={{
                                left: `${10 + i * 12}%`,
                                height: '100%',
                                transformOrigin: "top center",
                            }}
                            animate={{
                                rotate: [8, -8, 8],
                                opacity: [0.3, 0.6, 0.3],
                                scaleY: [1, 1.05, 1]
                            }}
                            transition={{
                                duration: 4 + i * 0.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.3,
                            }}
                        />
                    ))}
                </div>

                {/* Ambient glow orbs */}
                <motion.div
                    className="absolute top-1/4 left-[16%] w-64 h-64 bg-violet-600/15 rounded-full blur-[100px]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.div
                    className="absolute top-[60%] right-[16%] w-80 h-80 bg-purple-600/15 rounded-full blur-[120px]"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.15, 0.3] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-[20%] left-1/3 w-72 h-72 bg-violet-600/10 rounded-full blur-[100px]"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.35, 0.2] }}
                    transition={{ duration: 7, repeat: Infinity }}
                />

                {/* Grid */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)
                        `,
                        backgroundSize: "50px 50px",
                    }}
                />

                {/* Noise */}
                <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay">
                    <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1Ii8+PC9zdmc+')]" />
                </div>
            </div>

            {/* Cursor spotlight - above content */}
            <motion.div
                className="fixed w-[650px] h-[650px] rounded-full pointer-events-none z-50 mix-blend-screen"
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: "-50%",
                    translateY: "-50%",
                    background:
                        "radial-gradient(circle, rgba(139,92,246,0.12) 0%, rgba(139,92,246,0.04) 25%, transparent 70%)",
                }}
            />
        </>
    );
}
