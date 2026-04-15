import { twMerge } from "tailwind-merge";
import SectionIntro from "./common/SectionIntro";
import CardGrid, { CardItem, CardGridClassNames } from "./common/CardGrid";
import { Minus } from "lucide-react";
import AnimateIn from "@/components/common/AnimateIn";

const services: CardItem[] = [
  {
    title: "Professional Services",
    description:
      "Manage client relationships, track project delivery, and optimise service operations.",
  },
  {
    title: "Manufacturing & Distribution",
    description:
      "Streamline sales processes, manage dealer networks, and improve supply chain visibility.",
  },
  {
    title: "Retail & E-commerce",
    description:
      "Unify customer data, coordinate omnichannel experiences, and drive sales efficiency.",
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "Support patient engagement, provider management, and regulatory compliance.",
  },
];

const WhoWeServe = ({
  showCards = true,
  className,
  cardGrid,
  fitSectionClassName,
}: {
  showCards?: boolean;
  className?: string;
  cardGrid?: CardGridClassNames;
  fitSectionClassName?: string;
}) => {
  return (
    <section className={twMerge("py-32 bg-obsidian", className)}>
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <SectionIntro
          className="text-left ml-0 mb-20"
          heading="Who We Serve"
          paragraph="Cendor partners with mid-market and enterprise organisations across industries to implement and optimise Salesforce."
          dividerAlign="ml-0"
          headingClassName="mb-6"
          paragraphClassName="max-w-2xl"
        />
        {showCards && (
          <CardGrid
            items={services}
            showIndex={false}
            gridClassName="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border mb-20"
            {...cardGrid}
          />
        )}
        <AnimateIn className={twMerge("bg-charcoal p-12 lg:p-16", fitSectionClassName)}>
          <h3 className="font-bodoni text-3xl text-ivory font-bold mb-8">
            You're a strong fit if you are:
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <li className="flex gap-4 items-start">
              <div><Minus className="text-gold" /></div>
              <span className="text-stone font-light">Implementing Salesforce for the first time</span>
            </li>
            <li className="flex gap-4 items-start">
              <div><Minus className="text-gold" /></div>
              <span className="text-stone font-light">Outgrowing fragmented CRM setups</span>
            </li>
            <li className="flex gap-4 items-start">
              <div><Minus className="text-gold" /></div>
              <span className="text-stone font-light">Scaling your Salesforce environment</span>
            </li>
            <li className="flex gap-4 items-start">
              <div><Minus className="text-gold" /></div>
              <span className="text-stone font-light">Not getting enough value from existing Salesforce</span>
            </li>
            <li className="flex gap-4 items-start">
              <div><Minus className="text-gold" /></div>
              <span className="text-stone font-light">Needing dependable support and optimisation</span>
            </li>
            <li className="flex gap-4 items-start">
              <div><Minus className="text-gold" /></div>
              <span className="text-stone font-light">Seeking strategic platform guidance</span>
            </li>
          </ul>
        </AnimateIn>
      </div>
    </section>
  );
};

export default WhoWeServe;
