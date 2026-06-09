import Link from "next/link"
import { Button } from "@/components/ui/button"

export function IntroSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Got Junk? We&apos;ve Got You Covered!
          </h2>
          
          <div className="prose prose-lg max-w-none text-left space-y-6 text-muted-foreground">
            <p>
              <strong className="text-foreground">Tired of staring at piles of old concrete, scrap metal, or broken-down machinery?</strong>
              <br />
              If your property is cluttered with heavy-duty waste—like leftover slabs, demolished paths, car bodies, or industrial scrap—your council bin won&apos;t cut it. And that&apos;s exactly where <strong className="text-foreground">F.S.M. Recycling and Demolition</strong> comes in.
            </p>
            
            <p>
              We specialize in the <strong className="text-foreground">big stuff</strong>: concrete, metal, and machinery—materials that need heavy equipment and expertise to handle safely. (For everyday recyclables like paper, cardboard, glass, or plastics? Your kerbside bin&apos;s got that covered.)
            </p>
            
            <p>
              <strong className="text-foreground">For over 20 years</strong>, we&apos;ve helped homes and businesses across Mitchell Shire clear out the tough junk—without the fuss. Need a one-off clean-up after a renovation? Ongoing support for a project? Or just a reliable bin for heavy waste? We offer <strong className="text-foreground">three bin sizes</strong> to match your job, plus prompt, no-nonsense service from a team that shows up on time and gets it done.
            </p>
            
            <p>
              At F.S.M., we don&apos;t just recycle—we make sure the heavy lifting is <strong className="text-foreground">off your hands, done right, and gone for good</strong>. So if it&apos;s concrete, metal, or machinery in your way, call us. We&apos;ll turn your clutter into someone else&apos;s raw materials—fast, safely, and without the headache.
            </p>
          </div>

          <div className="mt-10">
            <Button
              asChild
              variant="outline"
              className="border-[#c9a227] text-[#c9a227] hover:bg-[#c9a227] hover:text-white font-semibold px-8 py-6 text-lg"
            >
              <Link href="#services">ALL SERVICES</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
