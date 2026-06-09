import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    image: "/images/8m-bin.jpg",
    title: "Bin Hire",
    description: "Flexible bin hire services to suit your project needs. We offer 6m, 8m, and 30m capacity bins for short-term or long-term use. Perfect for renovations, construction sites, and large clean-up projects.",
    features: ["6m, 8m, and 30m bins available", "Flexible hire periods", "Delivery and pickup included", "Suitable for heavy materials"],
  },
  {
    image: "/images/demosite.jpg",
    title: "Demolitions",
    description: "Professional demolition services for residential and commercial properties. Our experienced team handles everything from small structures to large buildings with precision and safety.",
    features: ["Full and partial demolitions", "Safe asbestos handling", "Site clearing", "Material recycling"],
  },
  {
    image: "/images/farmcleanup.jpg",
    title: "Farm Clean-Ups",
    description: "Comprehensive farm clean-up services for the Mitchell Shire region. We help clear unwanted materials, old equipment, and accumulated waste to restore your land to its full potential.",
    features: ["Machinery removal", "Scrap metal collection", "Land clearing", "Waste sorting and recycling"],
  },
  {
    image: "/images/green-truck.jpg",
    title: "Metal Recycling",
    description: "We accept and process a wide range of scrap metals including steel, iron, copper, aluminum, and more. Get your property cleared while contributing to a sustainable future.",
    features: ["All metal types accepted", "Competitive rates", "Free quotes", "Pickup available"],
  },
  {
    image: "/images/concrete-recycling.jpg",
    title: "Concrete Recycling",
    description: "Old concrete doesn't have to go to landfill. We process concrete waste into reusable aggregate, helping reduce environmental impact while clearing your site.",
    features: ["Concrete crushing", "Aggregate production", "Site pickup", "Environmentally friendly"],
  },
  {
    image: "/images/machinery-removal.jpg",
    title: "Machinery Removal",
    description: "Got old machinery taking up space? We specialize in the removal of heavy equipment, vehicles, and industrial machinery from your property.",
    features: ["Heavy equipment removal", "Vehicle disposal", "Industrial machinery", "Safe transportation"],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/excavator-claw2.jpg"
              alt="Excavator claw sorting scrap metal at the F.S.M. Recycling yard"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-stone-900/70" />
          </div>
          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Our Services
              </h1>
              <p className="text-lg md:text-xl text-stone-200 leading-relaxed">
                Comprehensive recycling and demolition solutions for homes, farms, and businesses across Central Victoria.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-stone-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                >
                  <div className="relative h-52 w-full">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-[#c9a227] rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      variant="outline"
                      className="border-[#c9a227] text-[#c9a227] hover:bg-[#c9a227] hover:text-white font-semibold w-full mt-auto"
                    >
                      <Link href="/#contact">Get a Quote</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-stone-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-stone-300 mb-8 max-w-2xl mx-auto">
              Every job is unique. Contact us to discuss your specific requirements and we&apos;ll create a tailored solution for you.
            </p>
            <Button
              asChild
              className="bg-[#c9a227] hover:bg-[#b8922a] text-white font-semibold px-8 py-6 text-lg"
            >
              <Link href="/#contact">CONTACT US TODAY</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
