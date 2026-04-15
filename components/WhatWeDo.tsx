import SectionIntro from "./common/SectionIntro";

function WhatWeDo() {
  return (
    <section className="py-32 bg-obsidian">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <SectionIntro
          className="ml-0 text-start"
          heading="What We Do"
          dividerAlign="ml-0"
          paragraph={[
            "Cendor Solutions is a premium Salesforce consulting, delivery, and managed services partner. We help mid-market and enterprise organisations implement, optimise, and support Salesforce with unwavering focus on business outcomes, technical excellence, and long-term scalability.",
            "We work as an extension of your team, providing honest guidance and building solutions that serve your goals. Our approach emphasises clarity, accountability, and scalable solutions that evolve with your organisation.",
          ]}
        />
      </div>
    </section>
  );
}

export default WhatWeDo;
