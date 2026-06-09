import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Clock, Award, Users, Shield } from "lucide-react"

const team = [
  {
    image: "/images/rob.jpg",
    name: "Robert Fair",
    role: "Director",
    bio: "Robert has been the business owner and manager for over 25 years. Helping the community to remove unwanted metals and concrete for reuse elsewhere.",
  },
  {
    image: "/images/sophie.jpg",
    name: "Sophie Fair",
    role: "Business Operations Manager",
    bio: "Sophie has more recently taken on the role of business manager, organising the business operations so that Robert can help you out with the recycling and demolitions side.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/blue-truck.jpg"
              alt="F.S.M. Recycling blue tipper truck"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-stone-900/70" />
          </div>
          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                About F.S.M. Recycling
              </h1>
              <p className="text-lg md:text-xl text-stone-200 leading-relaxed">
                A family-owned business serving Central Victoria since 1997 with quality recycling and demolition services.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  For over 25 years, F.S.M. Recycling and Demolition has been a trusted name in the Mitchell Shire region. What started as a small family operation has grown into a comprehensive recycling and demolition service provider, all while maintaining the personal touch and commitment to quality that our customers have come to expect.
                </p>
                <p>
                  We specialize in handling the heavy-duty materials that standard waste services can&apos;t manage—concrete, scrap metal, machinery, and more. Our team brings decades of experience to every job, ensuring that materials are handled safely, efficiently, and with respect for the environment.
                </p>
                <p>
                  At F.S.M., we believe in doing things right. That means showing up on time, communicating clearly, and leaving your property cleaner than we found it. It&apos;s this dedication to quality that has earned us our reputation throughout Central Victoria.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-stone-50">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Why Choose Us
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Clock,
                  title: "25+ Years Experience",
                  description: "Decades of expertise in recycling and demolition services.",
                },
                {
                  icon: Award,
                  title: "Quality Service",
                  description: "We take pride in every job, big or small.",
                },
                {
                  icon: Users,
                  title: "Family Owned",
                  description: "Personal service with a commitment to community.",
                },
                {
                  icon: Shield,
                  title: "Safe & Reliable",
                  description: "Professional handling of all materials and equipment.",
                },
              ].map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 bg-[#c9a227] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Professionals at Work
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Meet the team at F.S.M Recycling and Demolitions in Broadford.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-stone-50 rounded-lg overflow-hidden flex flex-col sm:flex-row"
                >
                  <div className="relative h-72 sm:h-auto sm:w-44 shrink-0">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col">
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-[#c9a227] font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-stone-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your recycling or demolition needs. We&apos;re here to help.
            </p>
            <Button
              asChild
              className="bg-[#c9a227] hover:bg-[#b8922a] text-white font-semibold px-8 py-6 text-lg"
            >
              <Link href="/#contact">CONTACT US</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
