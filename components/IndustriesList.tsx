import AnimateIn from "@/components/common/AnimateIn";

type IndustryItem = {
  id: string;
  title: string;
  description: string;
  challenges: string[];
  solutions: string[];
};

export const industriesData: IndustryItem[] = [
  {
    id: "01",
    title: "Professional Services",
    description:
      "Manage client relationships, track project delivery, and optimise service operations with Salesforce configured for professional services businesses.",
    challenges: [
      "Managing complex client relationships across multiple projects",
      "Tracking time, resources, and project profitability",
      "Coordinating delivery teams and workload allocation",
      "Maintaining visibility across the full client lifecycle",
    ],
    solutions: [
      "Client and opportunity management",
      "Project tracking and resource planning",
      "Time and expense capture",
      "Service delivery dashboards",
      "Client portal and communication tools",
      "Contract and renewal management",
    ],
  },
  {
    id: "02",
    title: "Manufacturing & Distribution",
    description:
      "Streamline sales processes, manage dealer and distributor networks, and improve supply chain visibility with Salesforce built for manufacturing.",
    challenges: [
      "Managing complex product catalogs and pricing",
      "Coordinating with dealer and distributor networks",
      "Tracking inventory and fulfillment across locations",
      "Aligning sales, operations, and supply chain teams",
    ],
    solutions: [
      "Product configuration and quoting",
      "Partner and dealer portal",
      "Order management and tracking",
      "Inventory visibility and forecasting",
      "Sales and operations planning",
      "Service and warranty management",
    ],
  },
  {
    id: "03",
    title: "Retail & E-commerce",
    description:
      "Unify customer data, coordinate omnichannel experiences, and drive sales efficiency with Salesforce designed for retail and e-commerce.",
    challenges: [
      "Creating unified customer experiences across channels",
      "Managing high-volume customer interactions",
      "Coordinating inventory, marketing, and sales",
      "Personalising engagement at scale",
    ],
    solutions: [
      "Unified customer data and 360-degree view",
      "Omnichannel commerce and fulfillment",
      "Marketing automation and personalisation",
      "Customer service and support",
      "Loyalty program management",
      "Store operations and field enablement",
    ],
  },
  {
    id: "04",
    title: "Healthcare & Life Sciences",
    description:
      "Support patient engagement, provider management, and regulatory compliance with Salesforce configured for healthcare and life sciences.",
    challenges: [
      "Managing complex stakeholder relationships",
      "Ensuring compliance with healthcare regulations",
      "Coordinating care teams and provider networks",
      "Maintaining patient privacy and data security",
    ],
    solutions: [
        "Patient and provider relationship management",
        "Care coordination and case management",
        "Compliance and consent tracking",
        "Clinical trial management",
        "Marketing and patient engagement",
        "Medical affairs and sales enablement"
    ],
  },
];

function IndustriesList() {
  return (
    <section className="py-32 bg-obsidian">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="space-y-32">
          {industriesData.map((industry) => (
            <AnimateIn key={industry.id} threshold={0.1}>
              <IndustryBlock industry={industry} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesList;

type Props = {
  industry: IndustryItem;
};

function IndustryBlock({ industry }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      {/* LEFT */}
      <div className="lg:col-span-5">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs text-gold tracking-widest uppercase">
            {industry.id}
          </span>
          <div className="flex-1 h-px bg-gold/30" />
        </div>

        <h2 className="font-bodoni text-4xl lg:text-5xl text-ivory mb-6 lg:leading-tight font-bold">
          {industry.title}
        </h2>

        <p className="text-lg text-stone leading-relaxed mb-10 font-light">
          {industry.description}
        </p>

        {/* Common Challenges */}
        <div>
          <h3 className="font-bodoni text-xs font-medium text-gold mb-6 uppercase tracking-widest">
            Common Challenges
          </h3>

          <ul className="space-y-4">
            {industry.challenges.map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <MinusIcon />
                <span className="text-stone font-light">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* RIGHT */}
      <div className="lg:col-span-7">
        <div className="bg-charcoal p-10 lg:p-12">
          <h3 className="font-bodoni text-xs font-medium text-gold mb-8 uppercase tracking-widest">
            Salesforce Solutions
          </h3>

          <ul className="space-y-5">
            {industry.solutions.map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <MinusIcon />
                <span className="text-stone font-light leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MinusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 text-gold mt-1 flex-shrink-0"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function DotIcon() {
  return (
    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 flex-shrink-0" />
  );
}
