import SectionIntro from "./common/SectionIntro";
import CardGrid, { CardItem } from "./common/CardGrid";

const fitItems: CardItem[] = [
  {
    title: "First-Time Salesforce Implementation",
    description:
      "Implementing Salesforce for the first time and need expert guidance to avoid common pitfalls and build a strong foundation.",
  },
  {
    title: "Not Getting Enough Value",
    description:
      "Have Salesforce but not getting enough value from your investment. Need optimisation, cleanup, or strategic guidance.",
  },
  {
    title: "Outgrowing Fragmented Systems",
    description:
      "Outgrowing fragmented CRM setups and spreadsheets. Ready to consolidate on a unified platform.",
  },
  {
    title: "Need for Dependable Support",
    description:
      "Need a dependable partner for ongoing support, maintenance, and continuous platform improvement.",
  },
  {
    title: "Scaling Your Environment",
    description:
      "Scaling your Salesforce environment to match business growth, expansion, or new business models.",
  },
  {
    title: "Strategic Platform Guidance",
    description:
      "Looking for strategic guidance on platform investments, multi-cloud strategy, or transformation initiatives.",
  },
];

const StrongFitSection = () => {
  return (
    <section className="py-32 bg-charcoal">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <SectionIntro
          className="text-left ml-0 mb-20"
          heading="You're a Strong Fit If:"
          paragraph="Cendor works with organisations at different stages of their Salesforce journey."
          dividerAlign="ml-0"
          headingClassName="mb-6"
          paragraphClassName="max-w-2xl"
        />
        <CardGrid
          items={fitItems}
          showIndex={false}
          cardClassName="bg-obsidian"
          gridClassName="grid grid-cols-1 lg:grid-cols-2 gap-px"
        />
      </div>
    </section>
  );
};

export default StrongFitSection;
