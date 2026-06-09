"use client"

import Image from "next/image"

const galleryItems = [
  { image: "/images/white-truck.jpg", label: "Heavy gear for demolition" },
  { image: "/images/green-truck.jpg", label: "Car wreck removal" },
  { image: "/images/hero-mobile.webp", label: "Boom arm claw" },
  { image: "/images/blue-truck.jpg", label: "Concrete and metals" },
  { image: "/images/excavator-claw2.jpg", label: "Metal organisation" },
  { image: "/images/recycling-operations.jpg", label: "Recycling operations" },
  { image: "/images/6m-bin.jpg", label: "6m bin" },
  { image: "/images/8m-bin.jpg", label: "8m bin" },
  { image: "/images/30m-bin.jpg", label: "30m bin" },
]

export function GallerySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            We Provide Many Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            We have the equipment to get the job done from recycling various metals, concrete, timber and more!
            <br />
            Our demolition services are precise and will bring your land back to usable whilst making sure that what
            ever can be re-used will find another home in one way, shape or form.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-lg overflow-hidden"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />
              <span className="absolute bottom-0 left-0 right-0 p-3 text-sm font-medium text-white">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
