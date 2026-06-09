import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"
import { client } from "@/sanity/lib/client"
import { postsQuery } from "@/sanity/lib/queries"
import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

const builder = imageUrlBuilder(client)
function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

interface Post {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt?: string
  mainImage?: SanityImageSource
}

const fallbackPosts = [
  {
    _id: "1",
    title: "5 Tips for Efficient Farm Clean-Ups",
    excerpt: "Learn how to prepare your property for a professional clean-up service and maximize the value of your recyclable materials.",
    publishedAt: "2024-03-15",
    slug: { current: "farm-cleanup-tips" },
    mainImage: null,
    fallbackImage: "/images/farmcleanup.jpg",
  },
  {
    _id: "2",
    title: "Understanding Metal Recycling: What Can Be Recycled?",
    excerpt: "A comprehensive guide to the types of metals we accept and how the recycling process works to give materials a second life.",
    publishedAt: "2024-02-28",
    slug: { current: "metal-recycling-guide" },
    mainImage: null,
    fallbackImage: "/images/excavator-claw2.jpg",
  },
  {
    _id: "3",
    title: "The Environmental Benefits of Concrete Recycling",
    excerpt: "Discover how recycling concrete reduces landfill waste, conserves natural resources, and contributes to sustainable construction.",
    publishedAt: "2024-02-10",
    slug: { current: "concrete-recycling-benefits" },
    mainImage: null,
    fallbackImage: "/images/blue-truck.jpg",
  },
]

export const revalidate = 60

export default async function BlogPage() {
  let posts: Post[] = []

  try {
    posts = await client.fetch(postsQuery)
  } catch {
    // Sanity not yet configured — use fallback
  }

  const displayPosts = posts.length > 0 ? posts : fallbackPosts

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
              {displayPosts.map((post) => {
                const imageUrl =
                  post.mainImage
                    ? urlFor(post.mainImage).width(600).height(400).url()
                    : (post as { fallbackImage?: string }).fallbackImage ?? "/placeholder.svg"

                return (
                  <article
                    key={post._id}
                    className="bg-stone-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.publishedAt).toLocaleDateString("en-AU", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>

                      <h2 className="font-serif text-xl font-bold text-foreground mb-3 line-clamp-2">
                        {post.title}
                      </h2>

                      {post.excerpt && (
                        <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                      )}

                      <Link
                        href={`/blog/${post.slug.current}`}
                        className="inline-flex items-center gap-2 text-[#c9a227] font-semibold hover:gap-3 transition-all"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                )
              })}
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
