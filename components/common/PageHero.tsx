import { twMerge } from "tailwind-merge";
import AnimateIn from "@/components/common/AnimateIn";

type Props = {
  heading: string;
  paragraph?: string;
  showDivider?: boolean;
  bgClassName?: string;
  wrapperClassName?: string;
  headingClassName?: string;
  paragraphClassName?: string;
};

function PageHero({
  heading,
  paragraph,
  showDivider = true,
  bgClassName = "bg-charcoal",
  wrapperClassName,
  headingClassName,
  paragraphClassName,
}: Props) {
  return (
    <section className={twMerge("py-32 lg:py-40", bgClassName)}>
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className={twMerge("max-w-4xl", wrapperClassName)}>
          {showDivider && (
            <AnimateIn animationClass="animate-fade-in" delay="animation-delay-100">
              <div className="w-16 h-px bg-gold mb-12" />
            </AnimateIn>
          )}
          <AnimateIn delay="animation-delay-200">
            <h1
              className={twMerge(
                "font-bodoni font-bold text-6xl lg:text-8xl text-ivory mb-8 leading-[0.95]",
                headingClassName
              )}
            >
              {heading}
            </h1>
          </AnimateIn>
          {paragraph && (
            <AnimateIn delay="animation-delay-400">
              <p
                className={twMerge(
                  "text-xl lg:text-2xl text-stone lg:leading-relaxed font-light",
                  paragraphClassName
                )}
              >
                {paragraph}
              </p>
            </AnimateIn>
          )}
        </div>
      </div>
    </section>
  );
}

export default PageHero;
