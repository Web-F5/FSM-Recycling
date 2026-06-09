import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function SolutionsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden">
              <Image
                src="/images/excavator-claw2.jpg"
                alt="Excavator claw sorting scrap cars and metal at the FSM yard"
                width={900}
                height={675}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Complete Recycling And Demolitions Solutions
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              We are here to provide you and central Victoria with a total recycling and/or demolition solution. We
              understand that each job is unique. And we have the equipment and know-how to get the job done the right
              way.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-[#c9a227] text-[#c9a227] hover:bg-[#c9a227] hover:text-white font-semibold px-8"
            >
              <Link href="#contact">CONTACT US</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
