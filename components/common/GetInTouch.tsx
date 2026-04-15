import Link from "next/link";
import SectionIntro from "./SectionIntro";
import AnimateIn from "@/components/common/AnimateIn";

type Props = {
  heading: string;
  paragraph: string;
  buttonText: string;
  href?: string;
};

function GetInTouch({ heading, paragraph, buttonText, href = "/" }: Props) {
  return (
    <section className="py-32 bg-obsidian relative overflow-hidden">
      <div className="relative max-w-[1600px] mx-auto px-8 lg:px-16 text-center">
        <SectionIntro
          heading={heading}
          paragraph={paragraph}
          headingClassName="text-5xl lg:text-6xl text-ivory mb-8 max-w-4xl lg:leading-tight max-w-3xl mx-auto"
          paragraphClassName="mb-16 text-xl text-stone mb-12 max-w-2xl mx-auto font-light"
        />
        <AnimateIn delay="animation-delay-300">
          <Link
            href={href}
            className="bg-gold text-obsidian px-12 py-6 hover:bg-gold-dark transition-all duration-300 text-sm tracking-widest uppercase inline-flex items-center mx-auto justify-center"
          >
            {buttonText}
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}

export default GetInTouch;
