import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/common/PageHero";
import IndustriesList from "@/components/IndustriesList";
import StrongFitSection from "@/components/StrongFitSection";
import GetInTouch from "@/components/common/GetInTouch";

export default function IndustriesPage() {
  return (
    <>
      <main>
        <PageHero
          heading="Industries & Use Cases"
          paragraph="Cendor partners with mid-market and enterprise organisations across industries to implement and optimise Salesforce. We understand the unique challenges and requirements of different sectors."
          wrapperClassName="max-w-5xl"
          paragraphClassName="max-w-4xl"
        />

        <IndustriesList />
        <StrongFitSection />
        <GetInTouch
          heading="Explore how Cendor can support your industry"
          paragraph="Schedule a conversation to discuss your specific requirements and how Salesforce can support your business objectives."
          buttonText="Get in Touch"
          href="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
