// components/AlgemeneVoorwaardenSection.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function AlgemeneVoorwaardenSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [openItem, setOpenItem] = useState<number | null>(null);

    const voorwaarden = [
        {
            title: "1. Algemeen",
            content: "Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten tussen LIGHTWORKS en opdrachtgevers, tenzij schriftelijk anders overeengekomen. Door het aangaan van een overeenkomst accepteert de opdrachtgever deze voorwaarden.",
        },
        {
            title: "2. Offertes & Prijzen",
            content: "Alle offertes zijn vrijblijvend en geldig gedurende 30 dagen na dagtekening, tenzij anders vermeld. Prijzen zijn exclusief BTW en eventuele reis- en verblijfkosten, tenzij expliciet anders aangegeven.",
        },
        {
            title: "3. Uitvoering",
            content: "Wij zullen de overeenkomst naar beste inzicht en vermogen uitvoeren volgens de eisen van goed vakmanschap. De opdrachtgever zorgt ervoor dat alle gegevens en middelen tijdig beschikbaar zijn.",
        },
        {
            title: "4. Aansprakelijkheid",
            content: "De aansprakelijkheid is beperkt tot het bedrag dat in het desbetreffende geval door de verzekering wordt uitbetaald. Wij zijn niet aansprakelijk voor indirecte schade, waaronder gevolgschade.",
        },
        {
            title: "5. Annulering",
            content: "Bij annulering tot 30 dagen voor aanvang wordt 25% van de offerte in rekening gebracht. Bij annulering binnen 30 dagen is 50% verschuldigd, binnen 14 dagen 75%, en binnen 7 dagen het volledige bedrag.",
        },
        {
            title: "6. Betaling",
            content: "Betaling dient te geschieden binnen 14 dagen na factuurdatum, tenzij anders overeengekomen. Bij projecten boven €5.000 kan een aanbetaling van 50% gevraagd worden.",
        },];

    return (
        <section id="voorwaarden" className="py-32 px-6 relative">
            <div className="max-w-4xl mx-auto" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-violet-400 text-sm font-medium uppercase tracking-widest mb-4">
                        Juridisch
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Algemene
                        <span className="text-violet-400"> Voorwaarden</span>
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto">
                        Transparantie is belangrijk. Hieronder vindt u onze algemene voorwaarden.
                    </p>
                </motion.div>

                {/* Accordion */}
                <div className="space-y-3">
                    {voorwaarden.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            className="border border-zinc-800 rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenItem(openItem === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
                            >
                                <span className="font-semibold text-white">{item.title}</span>
                                <svg
                                    className={`w-5 h-5 text-violet-400 transition-transform duration-300 ${
                                        openItem === index ? "rotate-180" : ""
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button><motion.div
                            initial={false}
                            animate={{
                                height: openItem === index ? "auto" : 0,
                                opacity: openItem === index ? 1 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <p className="px-6 py-5 text-zinc-400 leading-relaxed border-t border-zinc-800">
                                {item.content}
                            </p>
                        </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Download link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-12 text-center"
                ><a
                    href="#"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-violet-400 transition-colors text-sm"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download als PDF
                </a>
                </motion.div>
            </div>
        </section>
    );
}
