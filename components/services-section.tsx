import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const services = [
  {
    image: "/images/6m-bin.jpg",
    title: "Bin Hire",
    description:
      "We offer flexible bin hire services with 6m, 8m, and 30m capacity bins. Keep the bin for the length of your project, or start with a bin and see whether it suits your needs long-term. Get in touch with us today to organize bin hire for your needs.",
    cta: "CONTACT US FOR BIN HIRE",
    href: "#contact",
  },
  {
    image: "/images/demosite.jpg",
    title: "Demolitions",
    description:
      "Mixed loads are no problem for F.S.M Recycling. For all of your questions, you can rely on the friendly customer service that we offer. We're just round the corner and only a call away, so be confident that we can keep you in the loop and get you answers.",
    cta: "CONTACT US FOR DEMOLITIONS",
    href: "#contact",
  },
  {
    image: "/images/farmcleanup.jpg",
    title: "Farm Clean-Ups",
    description:
      "Is your land getting out of hand? Our farm clean-up service is famous in the Mitchell Shire region. Sometimes the job is just too big to get done amongst all the other tasks you have. F.S.M. can help you turn a mountain into a molehill.",
    cta: "CONTACT US FOR CLEAN-UPS",
    href: "#contact",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-2xl font-bold text-center text-foreground mb-4">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-center leading-relaxed flex-grow mb-6">
                  {service.description}
                </p>

                <Button
                  asChild
                  variant="outline"
                  className="border-[#c9a227] text-[#c9a227] hover:bg-[#c9a227] hover:text-white font-semibold w-full"
                >
                  <Link href={service.href}>{service.cta}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
