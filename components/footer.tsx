import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, MapPin, Phone } from "lucide-react"

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About FSM" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
]

export function Footer() {
  return (
    <footer className="bg-stone-800 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/fsm-logo.webp"
                alt="F.S.M. Recycling logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <span className="font-serif text-xl font-bold tracking-wide">
                F.S.M. RECYCLING
              </span>
            </Link>
            <p className="text-stone-400 leading-relaxed mb-6">
              From 1997, I have worked tirelessly to earn this reputation for quality and dependability in all matters of recycling and demolitions across Central Victoria.
            </p>
            <div>
              <h4 className="font-semibold mb-3">Follow My Work On</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-stone-700 rounded-full flex items-center justify-center hover:bg-[#c9a227] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-stone-700 rounded-full flex items-center justify-center hover:bg-[#c9a227] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-[#c9a227] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c9a227] mt-0.5 shrink-0" />
                <span className="text-stone-400">
                  7 Cameron Pde, BROADFORD, VIC, 3658
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#c9a227] shrink-0" />
                <a
                  href="tel:+61407439133"
                  className="text-stone-400 hover:text-[#c9a227] transition-colors"
                >
                  +61 407 439 133
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-stone-700">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-stone-500 text-sm">
            © {new Date().getFullYear()} F.S.M. Recycling And Demolition. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
