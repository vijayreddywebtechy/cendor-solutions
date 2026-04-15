import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";
import ValuePropositionSection from "../components/ValuePropositionSection";
import WhyCendor from "@/components/WhyCendor";
import WhoWeServe from "@/components/WhoWeServe";
import HowWeDeliver from "@/components/HowWeDeliver";
import EngagementModels from "@/components/EngagementModels";
import CallToActionSection from "@/components/CallToActionSection";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ValuePropositionSection />
        <Services />
        <WhyCendor />
        <WhoWeServe />
        <HowWeDeliver />
        <EngagementModels />
        <CallToActionSection />
      </main>
      <Footer />
    </>
  );
}
