import { twMerge } from "tailwind-merge";
import ServiceCard from "./ServiceCard";
import AnimateIn from "@/components/common/AnimateIn";

const STAGGER_DELAYS = [
  "animation-delay-100",
  "animation-delay-200",
  "animation-delay-300",
  "animation-delay-400",
  "animation-delay-500",
  "animation-delay-600",
] as const;

type CardItem = {
  title: string;
  description: string;
};

type CardGridClassNames = {
  gridClassName?: string;
  cardClassName?: string;
  numberClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

type Props = {
  items?: CardItem[];
  showIndex?: boolean;
} & CardGridClassNames;

const defaults = {
  gridClassName: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border",
};

function CardGrid({
  items,
  showIndex = true,
  gridClassName,
  cardClassName,
  numberClassName,
  titleClassName,
  descriptionClassName,
}: Props) {
  if (!items?.length) return null;

  return (
    <div className={twMerge(defaults.gridClassName, gridClassName)}>
      {items.map((item, i) => (
        <AnimateIn key={i} delay={STAGGER_DELAYS[Math.min(i, STAGGER_DELAYS.length - 1)]}>
          <ServiceCard
            index={i + 1}
            title={item.title}
            description={item.description}
            showIndex={showIndex}
            cardClassName={cardClassName}
            numberClassName={numberClassName}
            titleClassName={titleClassName}
            descriptionClassName={descriptionClassName}
          />
        </AnimateIn>
      ))}
    </div>
  );
}

export default CardGrid;
export { defaults as CardGridDefaults };
export type { CardItem, CardGridClassNames };
