import Image from "next/image";
import heroBgPattern from "@/assets/images/bg/here_bg_pattern.jpg";
import Link from "next/link";
import AnimateIn from "@/components/common/AnimateIn";

export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden bg-obsidian">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src={heroBgPattern}
          alt="Background pattern"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-[1600px] mx-auto px-8 lg:px-16 py-32 lg:py-40">
        <div className="max-w-5xl">
          <div className="mb-12">
            <AnimateIn animationClass="animate-fade-in" delay="animation-delay-100">
              <div className="w-16 h-px bg-gold mb-12" />
            </AnimateIn>
            <AnimateIn delay="animation-delay-200">
              <h1 className="font-bodoni text-6xl lg:text-8xl text-ivory mb-8 leading-[0.95] tracking-tight font-bold">
                Salesforce delivery built for business outcomes
              </h1>
            </AnimateIn>
            <AnimateIn delay="animation-delay-300">
              <p className="text-xl lg:text-2xl text-stone mb-16 lg:leading-relaxed max-w-3xl font-light">
                Premium Salesforce consulting, delivery, and managed services for
                discerning enterprise organisations. We combine strategic insight,
                technical excellence, and disciplined execution.
              </p>
            </AnimateIn>
            <AnimateIn delay="animation-delay-500">
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href={"/"}
                  className="bg-gold text-obsidian px-10 py-5 hover:bg-gold-dark transition-all duration-300 text-sm tracking-widest uppercase inline-flex items-center justify-center"
                >
                  Book a Discovery Conversation
                </Link>
                <Link
                  href={"/"}
                  className="border border-stone/30 text-ivory px-10 py-5 hover:border-gold hover:text-gold transition-all duration-300 text-sm tracking-widest uppercase inline-flex items-center justify-center"
                >
                  Explore Services
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
