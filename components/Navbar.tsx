// components/Navbar.tsx
"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Over Ons", href: "#over-ons", id: "over-ons" },
    { label: "Team", href: "#team", id: "team" },
    { label: "Contact", href: "#contact", id: "contact" },
    { label: "Voorwaarden", href: "#voorwaarden", id: "voorwaarden" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [isAtTop, setIsAtTop] = useState(true);
    const initializedRef = useRef(false);

    const handleScroll = useCallback(() => {
        const sections = navItems.map((item) => document.getElementById(item.id));
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        setIsAtTop(window.scrollY < 100);

        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section) {
                const rect = section.getBoundingClientRect();
                const sectionTop = rect.top + window.scrollY;
                if (scrollPosition >= sectionTop) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        if (!initializedRef.current) {
            initializedRef.current = true;
            requestAnimationFrame(handleScroll);
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const activeIndex = navItems.findIndex((item) => item.id === activeSection);

    // Calculate dot size and gap for segment positioning
    const dotSize = 24; // w-6 = 24px
    const gap = 24; // gap-6 = 24px
    const segmentHeight = gap; // Height of each line segment between dots

    return (
        <>
            {/* Logo - Top Left */}
            <div className="fixed top-6 left-6 z-50 hidden md:block">
                <a href="#home" className="text-2xl font-bold text-white">
                    <span className="text-violet-500">LIGHT</span>WORKS
                </a>
            </div>

            {/* Side Navigation */}
            <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-6">
                {/* Line segments between dots */}
                {navItems.slice(0, -1).map((_, index) => {
                    const isPassed = index < activeIndex;
                    const isCurrentSegment = index === activeIndex - 1;

                    return (
                        <div
                            key={`segment-${index}`}
                            className="absolute w-[3px] rounded-full"
                            style={{
                                right: '11px',
                                top: `${dotSize + (index * (dotSize + gap))}px`,
                                height: `${segmentHeight}px`,
                            }}
                        >
                            {/* Background segment */}
                            <div className="absolute inset-0 bg-zinc-700/50 rounded-full" />

                            {/* Active segment */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-b from-violet-500 to-purple-500 rounded-full origin-top"
                                initial={{ scaleY: 0 }}
                                animate={{
                                    scaleY: isPassed || isCurrentSegment ? 1 : 0
                                }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            />
                        </div>
                    );
                })}

                {navItems.map((item, index) => {
                    const isActive = activeSection === item.id;
                    const isPassed = index <= activeIndex;
                    return (
                        <motion.button
                            key={item.id}
                            onClick={() => scrollToSection(item.href)}
                            className="flex items-center gap-4 group relative z-10"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Label */}
                            <motion.span
                                className={`text-base transition-all duration-300 ${
                                    isActive
                                        ? "text-white font-bold"
                                        : "text-zinc-400 group-hover:text-zinc-200"
                                }`}
                                animate={{
                                    scale: isActive ? 1.05 : 1,
                                }}
                            >
                                {item.label}
                            </motion.span>

                            {/* Dot */}
                            <div className="relative flex items-center justify-center">
                                <motion.div
                                    className={`w-6 h-6 rounded-full border-[3px] transition-all duration-300 ${
                                        isActive
                                            ? "border-violet-500 bg-violet-500 shadow-lg shadow-violet-500/50"
                                            : isPassed
                                                ? "border-violet-500 bg-violet-500/30"
                                                : "border-zinc-500 bg-zinc-900 group-hover:border-zinc-400"
                                    }`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    animate={{
                                        scale: isActive ? 1.1 : 1,
                                    }}
                                />
                                {/* Active glow animation */}
                                {isActive && (
                                    <>
                                        <motion.div
                                            className="absolute inset-0 rounded-full bg-violet-500/30"
                                            initial={{ scale: 1, opacity: 0.8 }}
                                            animate={{ scale: 2.5, opacity: 0 }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "easeOut",
                                            }}
                                        />
                                        <motion.div
                                            className="absolute inset-0 rounded-full border-2 border-violet-400/50"
                                            initial={{ scale: 1, opacity: 1 }}
                                            animate={{ scale: 2, opacity: 0 }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "easeOut",
                                                delay: 0.2,
                                            }}
                                        />
                                    </>
                                )}
                            </div>
                        </motion.button>
                    );
                })}
            </nav>

            {/* Scroll down indicator */}
            <AnimatePresence>
                {isAtTop && (
                    <motion.div
                        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                    >
                        <span className="text-sm text-zinc-400 font-medium">Scroll</span>
                        <motion.div
                            className="w-8 h-14 border-2 border-zinc-500 rounded-full flex justify-center pt-3"
                            animate={{ borderColor: ["#71717a", "#8b5cf6", "#71717a"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <motion.div
                                className="w-2 h-2 bg-violet-500 rounded-full"
                                animate={{ y: [0, 24, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <MobileNavbar activeSection={activeSection} scrollToSection={scrollToSection} />
        </>
    );
}

function MobileNavbar({
                          activeSection,
                          scrollToSection,
                      }: {
    activeSection: string;
    scrollToSection: (href: string) => void;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="md:hidden">
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
                }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
            >
                <div className="px-6 py-4 flex items-center justify-between">
                    <a href="#home" className="text-xl font-bold text-white">
                        <span className="text-violet-500">LIGHT</span>WORKS
                    </a>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white p-2"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navItems.map((item, index) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <motion.button
                                        key={item.id}
                                        onClick={() => {
                                            scrollToSection(item.href);
                                            setIsOpen(false);
                                        }}
                                        className="flex items-center gap-5"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div
                                            className={`w-4 h-4 rounded-full transition-all ${
                                                isActive
                                                    ? "bg-violet-500 shadow-lg shadow-violet-500/50"
                                                    : "border-2 border-zinc-500"
                                            }`}
                                        />
                                        <span
                                            className={`text-2xl ${
                                                isActive ? "text-white font-bold" : "text-zinc-400"
                                            }`}
                                        >
                                            {item.label}
                                        </span>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
