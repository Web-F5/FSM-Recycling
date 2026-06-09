import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center">
      {/* Desktop Background */}
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-desktop.webp')" }}
        role="img"
        aria-label="FSM excavator claw working in the recycling yard"
      />
      {/* Mobile Background */}
      <div
        className="absolute inset-0 md:hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-mobile.webp')" }}
        role="img"
        aria-label="FSM excavator claw working in the recycling yard"
      />

      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-stone-900/60" />

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
            F.S.M. RECYCLING AND DEMOLITION
          </h1>
          <p className="text-lg md:text-xl text-stone-100 leading-relaxed mb-8 max-w-2xl text-pretty">
            Since 1997, our family owned and operated business has been working tirelessly to earn our reputation for
            quality and dependability in providing recycling and safe, reliable demolition services to the local and
            wider communities.
          </p>
          <Button
            asChild
            className="bg-[#c9a227] hover:bg-[#b8922a] text-white font-semibold px-8 py-6 text-lg"
          >
            <Link href="#services">{"LET'S GET RECYCLING"}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
