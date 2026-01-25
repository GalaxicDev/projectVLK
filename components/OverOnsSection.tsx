// components/OverOnsSection.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function OverOnsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const services = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: "Lichtprogrammering",
            description: "Van concept tot uitvoering. Wij programmeren complete lichtshows die synchroon lopen met muziek en performance.",
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
            title: "DMX & Techniek",
            description: "Expertise in alle gangbare DMX-protocollen, Artnet, sACN en moderne lichtsturingsystemen zoals MA, Chamsys en meer.",
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            title: "Warehouse Prep",
            description: "Professionele voorbereiding in de warehouse. Testen, programmeren en klaarmaken van alle apparatuur voor transport.",
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
            ),
            title: "On-Site Support",
            description: "Van opbouw tot afbouw. Technische ondersteuning tijdens het evenement voor een vlekkeloze show.",
        },
    ];

    return (
        <section id="over-ons" className="py-32 px-6 relative overflow-hidden">
            {/* Background elements */}
            <div
                className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"/>
            <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent"/>

            <div className="max-w-7xl mx-auto relative" ref={ref}>
                {/* Header */}
                <div className="grid lg:grid-cols-2 gap-16 mb-20">
                    <motion.div
                        initial={{opacity: 0, x: -30}}
                        animate={isInView ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 0.8}}
                    >
                        <p className="text-violet-400 text-sm font-medium uppercase tracking-widest mb-4">
                            Over Ons
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Passie voor
                            <span className="text-violet-400"> licht</span> en
                            <span className="text-violet-400"> perfectie</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 30}}
                        animate={isInView ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 0.8, delay: 0.2}}
                        className="flex items-end"
                    >
                        <p className="text-lg text-zinc-400 leading-relaxed">
                            Met meer dan 10 jaar ervaring in de evenementenindustrie combineren wij
                            technische expertise met creatief inzicht. Wij werken achter de schermen
                            om ervoor te zorgen dat elk festival, elke show, onvergetelijk wordt.
                            Van de eerste test in de warehouse tot het laatste nummer op het podium.
                        </p>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 30}}
                            animate={isInView ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.6, delay: 0.3 + index * 0.1}}
                            className="group relative p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-violet-500/30 transition-all duration-500"
                        >
                            {/* Hover glow */}
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"/>

                            <div className="relative">
                                <div
                                    className="w-14 h-14 flex items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 mb-6 group-hover:bg-violet-500/20 transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-violet-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.8, delay: 0.8}}
                    className="mt-16 text-center"
                >
                    <a
                        href="#team"
                        className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition-colors"
                    >
                        Bekijk onze projecten
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
