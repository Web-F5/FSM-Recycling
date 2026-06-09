import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "5 Tips for Efficient Farm Clean-Ups",
    excerpt: "Learn how to prepare your property for a professional clean-up service and maximize the value of your recyclable materials.",
    date: "March 15, 2024",
    slug: "farm-cleanup-tips",
    image: "/images/farmcleanup.jpg",
  },
  {
    title: "Understanding Metal Recycling: What Can Be Recycled?",
    excerpt: "A comprehensive guide to the types of metals we accept and how the recycling process works to give materials a second life.",
    date: "February 28, 2024",
    slug: "metal-recycling-guide",
    image: "/images/excavator-claw2.jpg",
  },
  {
    title: "The Environmental Benefits of Concrete Recycling",
    excerpt: "Discover how recycling concrete reduces landfill waste, conserves natural resources, and contributes to sustainable construction.",
    date: "February 10, 2024",
    slug: "concrete-recycling-benefits",
    image: "/images/blue-truck.jpg",
  },
  {
    title: "Choosing the Right Bin Size for Your Project",
    excerpt: "Not sure which bin size you need? Here's our guide to selecting the perfect bin for renovations, clean-ups, and construction projects.",
    date: "January 25, 2024",
    slug: "choosing-bin-size",
    image: "/images/8m-bin.jpg",
  },
  {
    title: "Safe Demolition Practices: What You Need to Know",
    excerpt: "An overview of the safety measures and professional practices we follow to ensure every demolition project is completed safely.",
    date: "January 12, 2024",
    slug: "safe-demolition-practices",
    image: "/images/demosite.jpg",
  },
  {
    title: "Why Choose a Local Recycling Service?",
    excerpt: "The benefits of working with a local, family-owned recycling and demolition company in the Mitchell Shire region.",
    date: "December 20, 2023",
    slug: "local-recycling-benefits",
    image: "/images/green-truck.jpg",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Blog & News
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Tips, guides, and updates from the team at F.S.M. Recycling and Demolition.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-stone-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    
                    <h2 className="font-serif text-xl font-bold text-foreground mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-[#c9a227] font-semibold hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-stone-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Get in touch with our friendly team and we&apos;ll be happy to help.
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
