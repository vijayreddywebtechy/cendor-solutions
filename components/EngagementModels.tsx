import SectionIntro from "./common/SectionIntro";
import CardGrid, { CardItem } from "./common/CardGrid";

const modelList: CardItem[] = [
  {
    title: "Fixed-Scope Projects",
    description: "Defined deliverables, clear timeline, and predictable budget for well-scoped initiatives.",
  },
  {
    title: "Time & Materials",
    description: "Flexible engagements for evolving requirements or exploratory work.",
  },
  {
    title: "Managed Services",
    description: "Predictable monthly support packages for maintenance and enhancements.",
  },
  {
    title: "Advisory Blocks",
    description: "Strategic guidance and solution design through time-boxed consulting.",
  },
  {
    title: "Assessment Sprints",
    description: "Focused health checks and optimisation assessments with recommendations.",
  },
  {
    title: "Hybrid Models",
    description: "Customised structures combining project delivery with ongoing support.",
  },
];

const EngagementModels = () => {
  return (
    <section className="py-32 bg-obsidian">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <SectionIntro
          className="text-left ml-0 mb-20"
          heading="Engagement Models"
          paragraph="Flexible engagement structures designed to match your requirements, budget, and timeline."
          dividerAlign="ml-0"
          headingClassName="mb-6"
          paragraphClassName="max-w-2xl"
        />
        <CardGrid items={modelList} showIndex={false} />
      </div>
    </section>
  );
};

export default EngagementModels;
