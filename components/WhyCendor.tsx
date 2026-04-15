import SectionIntro from "./common/SectionIntro";
import AnimateIn from "@/components/common/AnimateIn";

type Props = {};

const WhyCendor = (props: Props) => {
  return (
    <section className="py-32 bg-charcoal">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <SectionIntro
          className="text-left ml-0 mb-20"
          heading="Why Cendor"
          paragraph="We deliver Salesforce projects with clarity, accountability, and focus on what matters most to your business."
          dividerAlign="ml-0"
          headingClassName="mb-6"
          paragraphClassName="max-w-2xl"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <AnimateIn delay="animation-delay-100">
            <div className="border-l border-gold/30 pl-8">
              <h3 className="font-bodoni text-2xl text-ivory mb-4 leading-tight font-bold">Business-Outcome Focus</h3>
              <p className="text-stone leading-relaxed font-light">
                Every project starts with understanding your business objectives.
                We design and deliver solutions that create measurable value.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn delay="animation-delay-200">
            <div className="border-l border-gold/30 pl-8">
              <h3 className="font-bodoni text-2xl text-ivory mb-4 leading-tight font-bold">Technical Excellence</h3>
              <p className="text-stone leading-relaxed font-light">
                We build on Salesforce best practices, maintain clean architecture,
                and prioritise solutions that scale with your business.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn delay="animation-delay-300">
            <div className="border-l border-gold/30 pl-8">
              <h3 className="font-bodoni text-2xl text-ivory mb-4 leading-tight font-bold">Practical Delivery Discipline</h3>
              <p className="text-stone leading-relaxed font-light">
                Clear project plans, transparent communication, and delivery
                milestones you can depend on.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn delay="animation-delay-400">
            <div className="border-l border-gold/30 pl-8">
              <h3 className="font-bodoni text-2xl text-ivory mb-4 leading-tight font-bold">Long-Term Thinking</h3>
              <p className="text-stone leading-relaxed font-light">
                We design for sustainability, not quick fixes. Our solutions are
                built to evolve with your organisation.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
};

export default WhyCendor;
