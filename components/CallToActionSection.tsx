import Link from "next/link";
import SectionIntro from "./common/SectionIntro";
import Image from "next/image";
import ctaBg from "@/assets/images/bg/cta_bg.jpg";
import AnimateIn from "@/components/common/AnimateIn";

function CallToActionSection() {
  return (
    <section className="py-40 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image
          src={ctaBg}
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative max-w-[1600px] mx-auto px-8 lg:px-16 text-center">
        <SectionIntro
          heading="Ready to build Salesforce the right way?"
          paragraph="Talk to Cendor about your Salesforce implementation, optimisation, or support needs."
          headingClassName="text-5xl lg:text-7xl text-ivory mb-8 max-w-4xl lg:leading-tight"
          paragraphClassName="mb-16 text-xl lg:text-2xl text-stone mb-16 max-w-3xl mx-auto font-light"
        />
        <AnimateIn delay="animation-delay-300">
          <Link
            href={"/"}
            className="bg-gold text-obsidian px-12 py-6 hover:bg-gold-dark transition-all duration-300 text-sm tracking-widest uppercase inline-flex items-center mx-auto justify-center"
          >
            Book a Discovery Conversation
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}

export default CallToActionSection;
