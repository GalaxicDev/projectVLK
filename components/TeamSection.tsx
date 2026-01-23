// components/TeamSection.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TeamSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            name: "Lowlands Festival",
            year: "2023",
            role: "Lichtprogrammering Mainstage",
            highlight: true,
        },
        {
            name: "Awakenings",
            year: "2023",
            role: "DMX Techniek & On-site Support",
            highlight: false,
        },
        {
            name: "Defqon.1",
            year: "2022-2023",
            role: "Warehouse Prep & Festival Support",
            highlight: true,
        },
        {
            name: "Mysteryland",
            year: "2022",
            role: "Complete Lichtinstallatie",
            highlight: false,
        },
        {
            name: "Amsterdam Dance Event",
            year: "2023",
            role: "Multi-venue Technische Support",
            highlight: false,
        },
        {
            name: "DGTL Festival",
            year: "2023",
            role: "Duurzame Lichtprogrammering",
            highlight: true,
        },
    ];

    const clients = [
        "ID&T", "ALDA Events", "Mojo Concerts", "DGTL", "Elrow", "Awakenings"
    ];

    return (
        <section id="team" className="py-32 px-6 bg-black relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto relative" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <p className="text-violet-400 text-sm font-medium uppercase tracking-widest mb-4">
                        Portfolio
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Projecten waar wij
                        <span className="text-violet-400"> trots</span> op zijn
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        Een selectie van festivals en evenementen waar wij de lichten
                        tot leven hebben gebracht.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                            className={`group relative overflow-hidden rounded-2xl ${
                                project.highlight ? "md:col-span-1 row-span-1" : ""
                            }`}
                        >
                            {/* Card background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950" />

                            {/* Animated border */}
                            <div className="absolute inset-0 rounded-2xl border border-zinc-800 group-hover:border-violet-500/50 transition-colors duration-500" />

                            {/* Hover gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="relative p-8 h-full flex flex-col justify-between min-h-[200px]">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-sm text-violet-400 font-medium">{project.year}</span>
                                        {project.highlight && (
                                            <span className="px-2 py-0.5 text-xs bg-violet-500/20 text-violet-300 rounded-full">
                                                Highlight
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-violet-400 transition-colors">
                                        {project.name}
                                    </h3></div>
                                <p className="text-zinc-500 group-hover:text-zinc-400 transition-colors">
                                    {project.role}
                                </p>
                            </div>

                            {/* Corner accent */}
                            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-500/20 to-transparent transform rotate-45 translate-x-16 -translate-y-16 group-hover:from-violet-500/40 transition-colors" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Clients/Partners */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-24"
                >
                    <p className="text-center text-sm text-zinc-500 uppercase tracking-widest mb-8">
                        Samengewerkt met
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        {clients.map((client, index) => (
                            <span
                                key={index}
                                className="text-xl md:text-2xl font-semibold text-zinc-700 hover:text-zinc-400 transition-colors cursor-default"
                            >
                                {client}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
