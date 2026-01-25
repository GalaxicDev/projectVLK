// components/ContactSection.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formState, setFormState] = useState({
        naam: "",
        bedrijf: "",
        email: "",
        bericht: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-32 px-6 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[150px]" />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-6xl mx-auto relative" ref={ref}>
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left column - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-violet-400 text-sm font-medium uppercase tracking-widest mb-4">
                            Contact
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Klaar voor het
                            <span className="text-violet-400"> volgende</span> project?
                        </h2>
                        <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
                            Of je nu een volledig festivalseizoen plant of een eenmalig
                            evenement hebt, wij denken graag mee. Neem contact op voor
                            een vrijblijvend gesprek.
                        </p>

                        {/* Contact details */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500">Email</p>
                                    <p className="text-white">info@lightworks.nl</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500">Regio</p>
                                    <p className="text-white">Nederland & België</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500">Responstijd</p>
                                    <p className="text-white">Binnen 24 uur</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right column - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <form className="space-y-6 p-8 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm text-zinc-400 mb-2 font-medium">
                                        Naam
                                    </label>
                                    <input
                                        type="text"
                                        name="naam"
                                        value={formState.naam}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all text-white placeholder:text-zinc-600"
                                        placeholder="Uw naam"
                                        suppressHydrationWarning
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-zinc-400 mb-2 font-medium">
                                        Bedrijf
                                    </label>
                                    <input
                                        type="text"
                                        name="bedrijf"
                                        value={formState.bedrijf}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all text-white placeholder:text-zinc-600"
                                        placeholder="Bedrijfsnaam"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-zinc-400 mb-2 font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all text-white placeholder:text-zinc-600"
                                    placeholder="uw@email.nl"
                                    suppressHydrationWarning
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-zinc-400 mb-2 font-medium">
                                    Bericht
                                </label>
                                <textarea
                                    name="bericht"
                                    value={formState.bericht}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all text-white placeholder:text-zinc-600 resize-none"
                                    placeholder="Vertel ons over uw project, datum, locatie..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                Verstuur bericht
                                <svg
                                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
