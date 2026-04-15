import { twMerge } from "tailwind-merge";

type Props = {
  index: number;
  title: string;
  description: string;
  showIndex?: boolean;
  cardClassName?: string;
  numberClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

const defaults = {
  cardClassName: "bg-charcoal p-12 group hover:bg-graphite transition-all duration-500",
  numberClassName: "text-xs text-gold tracking-widest uppercase",
  titleClassName: "font-bodoni text-2xl text-ivory mb-4 leading-tight font-bold",
  descriptionClassName: "text-stone leading-relaxed font-light",
};

function ServiceCard({
  index,
  title,
  description,
  showIndex = true,
  cardClassName,
  numberClassName,
  titleClassName,
  descriptionClassName,
}: Props) {
  return (
    <div className={twMerge(defaults.cardClassName, cardClassName)}>
      {showIndex && (
        <div className="flex items-center gap-4 mb-8">
          <span className="inline-block h-0.5 w-4 bg-gold"></span>
          <span className={twMerge(defaults.numberClassName, numberClassName)}>
            {String(index).padStart(2, "0")}
          </span>
        </div>
      )}
      <h3 className={twMerge(defaults.titleClassName, titleClassName)}>{title}</h3>
      <p className={twMerge(defaults.descriptionClassName, descriptionClassName)}>{description}</p>
    </div>
  );
}

export default ServiceCard;
export { defaults as ServiceCardDefaults };
