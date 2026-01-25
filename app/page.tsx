// app/page.tsx
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OverOnsSection from "@/components/OverOnsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import AlgemeneVoorwaardenSection from "@/components/AlgemeneVoorwaardenSection";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white relative">
            <BackgroundEffects />
            <Navbar />
            <main className="relative z-10">
                <HeroSection />
                <OverOnsSection />
                <TeamSection />
                <ContactSection />
                <AlgemeneVoorwaardenSection />
            </main>
            <Footer />
        </div>
    );
}
