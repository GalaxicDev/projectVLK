// app/page.tsx
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OverOnsSection from "@/components/OverOnsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import AlgemeneVoorwaardenSection from "@/components/AlgemeneVoorwaardenSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Navbar />
        <main>
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
