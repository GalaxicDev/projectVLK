// components/TeamSection.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function TeamSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skills = [
        { icon: "💡", label: "MA Lighting" },
        { icon: "🎛️", label: "Chamsys" },
        { icon: "📡", label: "DMX / Artnet" },
        { icon: "🔧", label: "Technische Support" },
    ];

    const details = [
        { label: "Rijbewijs", value: "B" },
        { label: "Regio", value: "Nederland & België" },
        { label: "Ervaring", value: "10+ jaar" },
        { label: "Beschikbaarheid", value: "Flexibel" },
    ];

    return (
        <section id="team" className="py-32 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-violet-400 text-sm font-medium uppercase tracking-widest mb-4">
                        Over Mij
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        De persoon achter
                        <span className="text-violet-400"> het licht</span>
                    </h2>
                </motion.div>

                {/* Profile Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid lg:grid-cols-2 gap-8 lg:gap-12"
                >
                    {/* Photo */}
                    <div className="relative">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50">
                            {/* Replace src with actual photo path */}
                            <Image
                                src="/profile.jpg"
                                alt="Profielfoto"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>{/* Decorative elements */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-violet-500/30 rounded-2xl" />
                        <div className="absolute -top-4 -left-4 w-16 h-16 border border-violet-500/20 rounded-xl" />
                    </div>

                    {/* Info */}
                    <div className="flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h3 className="text-3xl md:text-4xl font-bold mb-2">
                                Voornaam Achternaam
                            </h3>
                            <p className="text-violet-400 text-lg mb-6">
                                Lichtprogrammeur & Technicus
                            </p>
                            <p className="text-zinc-400 leading-relaxed mb-8">
                                Met een passie voor licht en techniek werk ik al meer dan 10 jaar
                                in de evenementenindustrie. Van kleine clubshows tot grote
                                festivals, ik zorg ervoor dat elke show technisch perfect
                                verloopt. Mijn expertise ligt in het programmeren van complexe
                                lichtshows en het oplossen van technische uitdagingen onder druk.
                            </p>
                        </motion.div>

                        {/* Details Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="grid grid-cols-2 gap-4 mb-8"
                        >
                            {details.map((detail, index) => (
                                <div
                                    key={index}
                                    className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl"
                                >
                                    <p className="text-sm text-zinc-500 mb-1">{detail.label}</p>
                                    <p className="text-white font-semibold">{detail.value}</p>
                                </div>
                            ))}
                        </motion.div>

                        {/* Skills */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <p className="text-sm text-zinc-500 uppercase tracking-widest mb-4">
                                Expertise
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-sm text-violet-300"
                                    >
                                        <span>{skill.icon}</span>
                                        {skill.label}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
