import SectionIntro from "./common/SectionIntro";
import CardGrid, { CardItem } from "./common/CardGrid";

const services: CardItem[] = [
  {
    title: "Implementation & Enhancement",
    description: "Deploy new Salesforce environments or enhance existing instances with sustainable, scalable solutions.",
  },
  {
    title: "Managed Services",
    description: "Dependable ongoing support, platform maintenance, and continuous improvement.",
  },
  {
    title: "Platform Assessment",
    description: "Comprehensive health checks to identify technical debt, risks, and optimisation opportunities.",
  },
  {
    title: "Solution Architecture",
    description: "Strategic guidance on platform design, integration patterns, and scalability planning.",
  },
  {
    title: "Process Optimisation",
    description: "Platform improvement initiatives that align configuration with evolving business needs.",
  },
  {
    title: "Advisory Services",
    description: "Expert guidance for scaling environments and navigating complex transformations.",
  },
];

const Services = () => {
  return (
    <section className="py-32 bg-obsidian">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <SectionIntro
          className="text-left ml-0 mb-20"
          heading="Services"
          paragraph="End-to-end Salesforce capability across implementation, optimisation, and ongoing support."
          dividerAlign="ml-0"
          headingClassName="mb-6"
          paragraphClassName="max-w-2xl"
        />
        <CardGrid items={services} />
      </div>
    </section>
  );
};

export default Services;
