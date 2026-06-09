import { Clock, Sparkles, DollarSign } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "OPERATING SINCE 1997",
    description: "We have been in the industry for over 25 years. We have seen it all and know how to get around the concerns that arise with recycling and demolition jobs. Call us today and we will help you out.",
  },
  {
    icon: Sparkles,
    title: "GET YOUR SITE CLEAN",
    description: "We understand how a disorganised site can make you feel. Call us to have a chat about getting rid of the clutter and repurposing and recycling unused waste, better for you better for the environment.",
  },
  {
    icon: DollarSign,
    title: "COMPETITIVE PRICES",
    description: "We have remained competitive over the 25 years, we also understand that the job needs to be done right. We bring our knowledge and expertise to each site and provide the best solution for your situation.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#c9a227] rounded-full flex items-center justify-center mb-6 mx-auto">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
