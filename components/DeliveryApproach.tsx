import AnimateIn from "@/components/common/AnimateIn";

type ApproachItem = {
  title: string
  description: string
}

const approachData: ApproachItem[] = [
  {
    title: "Best Practice Foundation",
    description:
      "Build on Salesforce best practices and proven patterns.",
  },
  {
    title: "Clean Architecture",
    description:
      "Maintain scalable, maintainable platform configuration.",
  },
  {
    title: "Agile Delivery",
    description:
      "Iterative delivery with regular feedback and validation.",
  },
  {
    title: "Value Focus",
    description:
      "Prioritise work based on business impact and ROI.",
  },
]

export default function DeliveryApproach() {
  return (
    <section className="py-32 bg-charcoal">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">

        {/* Header */}
        <AnimateIn className="mb-20">
          <div className="w-12 h-px bg-gold mb-12" />

          <h2 className="font-bodoni font-bold text-5xl lg:text-6xl text-ivory mb-6">
            Our Delivery Approach
          </h2>

          <p className="text-xl text-stone max-w-2xl font-light">
            Every engagement combines technical expertise with practical delivery discipline.
          </p>
        </AnimateIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {approachData.map((item, index) => (
            <AnimateIn
              key={index}
              delay={`animation-delay-${(index + 1) * 100}` as "animation-delay-100" | "animation-delay-200" | "animation-delay-300" | "animation-delay-400"}
            >
              <ApproachCard item={item} />
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  )
}


function ApproachCard({ item }: { item: { title: string; description: string } }) {
  return (
    <div className="text-center">

      <MinusIcon />

      <h3 className="font-bodoni text-xl text-ivory mb-4">
        {item.title}
      </h3>

      <p className="text-sm text-stone leading-relaxed font-light">
        {item.description}
      </p>

    </div>
  )
}

function MinusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 text-gold mx-auto mb-6"
    >
      <path d="M5 12h14" />
    </svg>
  )
}