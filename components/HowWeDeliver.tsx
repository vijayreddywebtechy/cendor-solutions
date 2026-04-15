import SectionIntro from "./common/SectionIntro";
import AnimateIn from "@/components/common/AnimateIn";

type Props = {};

const HowWeDeliver = (props: Props) => {
  return (
    <section className="py-32 bg-charcoal">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <SectionIntro
          className="mb-20"
          heading="How We Deliver"
          paragraph="Our delivery approach combines structured methodology with flexibility, ensuring projects stay on track while adapting to your evolving needs."
          paragraphClassName="max-w-3xl"
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <AnimateIn delay="animation-delay-100">
            <div className="text-center">
              <div className="font-bodoni text-7xl text-gold/20 mb-6">01</div>
              <h3 className="font-bodoni text-2xl text-ivory mb-4 font-bold">Discovery</h3>
              <p className="text-stone leading-relaxed font-light">
                Understand your business context, requirements, and constraints.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn delay="animation-delay-200">
            <div className="text-center">
              <div className="font-bodoni text-7xl text-gold/20 mb-6">02</div>
              <h3 className="font-bodoni text-2xl text-ivory mb-4 font-bold">Design</h3>
              <p className="text-stone leading-relaxed font-light">
                Map processes, design solutions, and validate approach with your team.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn delay="animation-delay-300">
            <div className="text-center">
              <div className="font-bodoni text-7xl text-gold/20 mb-6">03</div>
              <h3 className="font-bodoni text-2xl text-ivory mb-4 font-bold">Build</h3>
              <p className="text-stone leading-relaxed font-light">
                Configure Salesforce, develop custom components, and integrate systems.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn delay="animation-delay-400">
            <div className="text-center">
              <div className="font-bodoni text-7xl text-gold/20 mb-6">04</div>
              <h3 className="font-bodoni text-2xl text-ivory mb-4 font-bold">Deploy & Support</h3>
              <p className="text-stone leading-relaxed font-light">
                Launch solutions, train users, and provide ongoing optimisation.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliver;
