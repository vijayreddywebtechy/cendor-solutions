import { twMerge } from "tailwind-merge";
import AnimateIn from "@/components/common/AnimateIn";

type Props = {
  heading?: string;
  paragraph?: string | string[];
  showDivider?: boolean;
  className?: string;
  dividerClassName?: string;
  dividerAlign?: string;
  headingClassName?: string;
  paragraphClassName?: string;
};

const defaults = {
  className: "max-w-4xl mx-auto text-center",
  dividerClassName: "w-12 h-px bg-gold mb-12",
  dividerAlign: "mx-auto",
  headingClassName: "font-bodoni text-4xl md:text-5xl lg:text-6xl text-ivory mb-8 lg:leading-tight font-bold",
  paragraphClassName: "text-lg md:text-xl text-stone leading-relaxed font-light",
};

function SectionIntro({
  heading,
  paragraph,
  showDivider = true,
  className,
  dividerClassName,
  dividerAlign,
  headingClassName,
  paragraphClassName,
}: Props) {
  return (
    <AnimateIn className={twMerge(defaults.className, className)}>
      {showDivider && (
        <div className={twMerge(defaults.dividerClassName, defaults.dividerAlign, dividerClassName, dividerAlign)}></div>
      )}
      <h2 className={twMerge(defaults.headingClassName, headingClassName)}>{heading}</h2>
      {Array.isArray(paragraph)
        ? paragraph.map((p, i) => (
            <p key={i} className={twMerge(defaults.paragraphClassName, paragraphClassName, i > 0 ? "mt-4" : "")}>{p}</p>
          ))
        : paragraph && <p className={twMerge(defaults.paragraphClassName, paragraphClassName)}>{paragraph}</p>
      }
    </AnimateIn>
  );
}

export default SectionIntro;
export { defaults as SectionIntroDefaults };
