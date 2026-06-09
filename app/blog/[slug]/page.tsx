import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowLeft } from "lucide-react"
import { client } from "@/sanity/lib/client"
import { postBySlugQuery, postsQuery } from "@/sanity/lib/queries"
import { PortableText } from "@portabletext/react"
import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { notFound } from "next/navigation"

const builder = imageUrlBuilder(client)
function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export const revalidate = 60

export async function generateStaticParams() {
  const posts = await client.fetch(postsQuery)
  return posts.map((post: { slug: { current: string } }) => ({
    slug: post.slug.current,
  }))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch(postBySlugQuery, { slug: params.slug })

  if (!post) notFound()

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(600).url()
    : null

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="w-4 h-4" />
              {new Date(post.publishedAt).toLocaleDateString("en-AU", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>

            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-8">
              {post.title}
            </h1>

            {imageUrl && (
              <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden mb-10">
                <Image src={imageUrl} alt={post.title} fill className="object-cover" />
              </div>
            )}

            {post.body && (
              <div className="prose prose-stone max-w-none prose-headings:font-serif prose-a:text-[#c9a227]">
                <PortableText value={post.body} />
              </div>
            )}

            <div className="mt-12 pt-8 border-t border-stone-200">
              <Button
                asChild
                className="bg-[#c9a227] hover:bg-[#b8922a] text-white font-semibold"
              >
                <Link href="/blog">← Back to Blog</Link>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
