// components/HeroSection.tsx
"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Stage lights (hero-specific) */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-32 h-96 bg-gradient-to-b from-violet-600/20 via-violet-500/5 to-transparent blur-2xl" />
                <div className="absolute top-0 right-1/4 w-32 h-96 bg-gradient-to-b from-purple-600/20 via-purple-500/5 to-transparent blur-2xl" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[500px] bg-gradient-to-b from-white/10 via-violet-500/5 to-transparent blur-3xl" />
            </div>

            {/* ===== CONTENT ===== */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
                    </span>
                    <span className="text-sm text-zinc-300">
                        Beschikbaar voor nieuwe projecten
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-bold mb-6 leading-[0.9] tracking-tight"
                >
                    <span className="block text-white">Licht dat</span>
                    <span className="relative block mt-2">
                        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400">
                            beweegt
                        </span>
                        <motion.span
                            className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400 blur-2xl opacity-50"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            beweegt
                        </motion.span>
                    </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Professionele lichtprogrammering en technische productie
                    voor festivals en evenementen die onvergetelijk zijn.
                </motion.p>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12"
                >
                    {[
                        { value: "50+", label: "Festivals" },
                        { value: "10+", label: "Jaar ervaring" },
                        { value: "24/7", label: "Ondersteuning" },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white">
                                {stat.value}
                            </div>
                            <div className="text-sm text-zinc-500 uppercase tracking-wider mt-1">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="#contact"
                        className="group relative px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-full font-semibold transition-all overflow-hidden"
                    >
                        <span className="relative z-10">Start een project</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>

                    <a
                        href="#over-ons"
                        className="group px-8 py-4 border border-zinc-700 hover:border-zinc-500 hover:bg-white/5 text-white rounded-full font-semibold transition-all backdrop-blur-sm"
                    >
                        Ontdek meer
                        <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                            →
                        </span>
                    </a>
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </section>
    );
}
