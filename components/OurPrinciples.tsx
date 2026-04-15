import SectionIntro from "./common/SectionIntro";
import AnimateIn from "@/components/common/AnimateIn";

const STAGGER_DELAYS = [
  "animation-delay-100",
  "animation-delay-200",
  "animation-delay-300",
  "animation-delay-400",
  "animation-delay-500",
] as const;

const principles = [
  {
    title: "Business-Outcome Focus",
    body: "Every project starts with understanding your business objectives. We design and deliver solutions that create measurable value, not just implement features. Success is measured by business impact, not configuration count.",
  },
  {
    title: "Technical Excellence",
    body: "We build on Salesforce best practices, maintain clean architecture, and prioritise solutions that scale with your business. Quality matters, because the choices we make today impact your platform for years.",
  },
  {
    title: "Practical Delivery Discipline",
    body: "Clear project plans, transparent communication, and delivery milestones you can depend on. We respect your time, budget, and the commitments we make. No surprises, no drama.",
  },
  {
    title: "Long-Term Thinking",
    body: "We design for sustainability, not quick fixes. Our solutions are built to evolve with your organisation. We consider maintainability, scalability, and total cost of ownership in every decision.",
  },
    {
    title: "Trusted Partnership Model",
    body: "We work as an extension of your team, providing honest guidance even when it's not the easiest path. We tell you what you need to hear, not just what you want to hear. Trust is earned through consistency and candour.",
  },
];

const OurPrinciples = () => {
  return (
    <section className="py-32 bg-charcoal">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <SectionIntro
          className="text-left ml-0 mb-20"
          heading="Our Principles"
          paragraph="The values that shape every engagement, every conversation, and every line of code we write."
          dividerAlign="ml-0"
          headingClassName="mb-6"
          paragraphClassName="max-w-2xl"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {principles.map(({ title, body }, i) => (
            <AnimateIn key={title} delay={STAGGER_DELAYS[Math.min(i, STAGGER_DELAYS.length - 1)]}>
              <div className="border-l border-gold/30 pl-8">
                <h3 className="font-bodoni text-2xl text-ivory mb-4 leading-tight font-bold">
                  {title}
                </h3>
                <p className="text-stone leading-relaxed font-light">{body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPrinciples;
