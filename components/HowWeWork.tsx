import SectionIntro from "./common/SectionIntro";
import CardGrid, { CardItem } from "./common/CardGrid";

const steps: CardItem[] = [
  {
    title: "Understand Context",
    description:
      "We start by understanding your business, constraints, and success criteria. No generic playbooks — every engagement is shaped by your specific needs.",
  },
  {
    title: "Design with Intent",
    description:
      "Solutions are designed collaboratively, validated with your team, and documented clearly. Architecture and approach are agreed before development begins.",
  },
  {
    title: "Build for Scale",
    description:
      "Development follows best practices, is tested thoroughly, and is built to scale. We prioritise maintainability and long-term platform health.",
  },
  {
    title: "Deploy with Care",
    description:
      "Deployment is planned, communicated, and supported. Change management, training, and post-launch support ensure user adoption and success.",
  },
  {
    title: "Support Continuously",
    description:
      "Ongoing support packages provide predictable access to expertise, proactive platform monitoring, and continuous improvement.",
  },
  {
    title: "Evolve Together",
    description:
      "As your business evolves, your Salesforce environment evolves with it. We support you through growth, change, and transformation.",
  },
];

const HowWeWork = () => {
  return (
    <section className="py-32 bg-obsidian">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <SectionIntro
          className="text-left ml-0 mb-20"
          heading="How We Work"
          paragraph="Our delivery approach is designed to create predictability, maintain quality, and ensure alignment with your business objectives."
          dividerAlign="ml-0"
          headingClassName="mb-6"
          paragraphClassName="max-w-2xl"
        />
        <CardGrid items={steps} />
      </div>
    </section>
  );
};

export default HowWeWork;
