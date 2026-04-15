import AnimateIn from "@/components/common/AnimateIn";

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  outcomes: string[];
  capabilities: string[];
};

export const servicesData: ServiceItem[] = [
  {
    id: "01",
    title: "Salesforce Implementation & Enhancement",
    description:
      "Deploy new Salesforce environments or enhance existing instances with a focus on sustainable, scalable solutions that align with your business processes.",
    outcomes: [
      "Faster time to value with proven implementation frameworks",
      "Clean, maintainable Salesforce architecture",
      "User adoption through thoughtful design and training",
    ],
    capabilities: [
      "New Salesforce environment setup and configuration",
      "Sales Cloud, Service Cloud, and Experience Cloud implementation",
      "Custom object and field design",
      "Workflow and automation configuration",
      "Data migration and integration",
      "User training and change management",
    ],
  },

  {
    id: "02",
    title: "Managed Services & Ongoing Support",
    description:
      "Dependable ongoing support, platform maintenance, and continuous improvement for your Salesforce environment. We act as an extension of your team.",
    outcomes: [
      "Predictable support costs with monthly retainers",
      "Reduced risk through proactive platform monitoring",
      "Continuous platform improvement aligned with business needs",
    ],
    capabilities: [
      "Monthly support packages with defined SLAs",
      "Bug fixes and issue resolution",
      "Feature enhancements and small projects",
      "User support and training",
      "Platform monitoring and maintenance",
      "Release management and testing",
    ],
  },
  {
    id: "03",
    title: "Org Health Checks & Platform Assessment",
    description:
      "Comprehensive platform assessments to identify technical debt, security risks, and opportunities for optimisation. Receive actionable recommendations.",
    outcomes: [
      "Clear visibility into platform health and risk",
      "Prioritised roadmap for addressing technical debt",
      "Actionable recommendations with effort estimates",
    ],
    capabilities: [
      "Technical architecture review",
      "Code and configuration analysis",
      "Security and permissions audit",
      "Data quality assessment",
      "Integration health check",
      "Performance and governor limit analysis",
    ],
  },
  {
    id: "04",
    title: "Solution Architecture & Advisory",
    description:
      "Strategic guidance on platform design, integration patterns, and long-term scalability planning. Expert support for complex decisions.",
    outcomes: [
      "Confidence in platform decisions and investments",
      "Reduced risk through validated architectural choices",
      "Long-term roadmap aligned with business strategy",
    ],
    capabilities: [
      "Enterprise architecture design and review",
      "Integration strategy and pattern selection",
      "Data model design and optimisation",
      "Multi-cloud and multi-org strategy",
      "Scalability and growth planning",
      "Technology selection and vendor evaluation",
    ],
  },
  {
    id: "05",
    title: "Process Optimisation & Platform Improvement",
    description:
      "Platform improvement initiatives that align Salesforce configuration with evolving business needs. Drive efficiency and user satisfaction.",
    outcomes: [
      "Improved user productivity through streamlined processes",
      "Better data quality and reporting accuracy",
      "Higher user satisfaction and platform adoption",
    ],
    capabilities: [
      "Business process analysis and redesign",
      "Automation opportunity identification",
      "Lightning experience migration",
      "Report and dashboard optimisation",
      "User experience improvement",
      "Mobile enablement and optimisation",
    ],
  },
  {
    id: "06",
    title: "Strategic Guidance for Scaling Salesforce",
    description:
      "Expert guidance for organisations scaling their Salesforce environments, navigating complex transformations, or preparing for significant growth.",
    outcomes: [
      "Clear roadmap for platform evolution",
      "Alignment between business strategy and platform capability",
      "Reduced risk in transformation initiatives",
    ],
    capabilities: [
      "Growth and scaling strategy",
      "Change management planning",
      "Team capability assessment and development",
      "Vendor and partner selection support",
      "Program and portfolio planning",
      "Salesforce investment optimisation",
    ],
  },
];

function ServicesList() {
  return (
    <section className="py-32 bg-obsidian">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="space-y-32">
          {servicesData.map((service) => (
            <AnimateIn key={service.id} threshold={0.1}>
              <ServiceBlock service={service} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesList;

type Props = {
  service: {
    id: string;
    title: string;
    description: string;
    outcomes: string[];
    capabilities: string[];
  };
};

function ServiceBlock({ service }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      {/* LEFT */}
      <div className="lg:col-span-5">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs text-gold tracking-widest uppercase">
            {service.id}
          </span>
          <div className="flex-1 h-px bg-gold/30" />
        </div>

        <h2 className="font-bodoni text-4xl lg:text-5xl text-ivory mb-6 lg:leading-tight font-bold">
          {service.title}
        </h2>

        <p className="text-lg text-stone leading-relaxed mb-10 font-light">
          {service.description}
        </p>

        {/* Outcomes */}
        <div>
          <h3 className="font-bodoni text-xs font-medium text-gold mb-6 uppercase tracking-widest">
            Key Outcomes
          </h3>

          <ul className="space-y-4">
            {service.outcomes.map((item, i) => (
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
            Capabilities
          </h3>

          <ul className="space-y-5">
            {service.capabilities.map((item, i) => (
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
