import PageHero from "@/components/common/PageHero";
import GetInTouch from "@/components/common/GetInTouch";
import WhoWeServe from "@/components/WhoWeServe";
import WhatWeDo from "@/components/WhatWeDo";
import OurPrinciples from "@/components/OurPrinciples";
import HowWeWork from "@/components/HowWeWork";

export default function AboutPage() {
  return (
    <>
      <main>
        <PageHero
          heading="About Cendor"
          paragraph="A serious, focused Salesforce consulting partner that combines business understanding, solution design, technical execution, and disciplined delivery."
          wrapperClassName="max-w-5xl"
          paragraphClassName="max-w-4xl"
        />
        <WhatWeDo />
        <OurPrinciples />
        <HowWeWork />
        <WhoWeServe showCards={false} className="bg-charcoal" fitSectionClassName="bg-obsidian" />
        <GetInTouch
          heading="Let's talk about your Salesforce needs"
          paragraph="Schedule a discovery conversation to explore how Cendor can support your Salesforce journey."
          buttonText="Contact Us"
          href="/contact"
        />
      </main>
    </>
  );
}
