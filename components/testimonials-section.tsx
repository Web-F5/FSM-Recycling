"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Great blokes straight to the point no stuffing around.",
    author: "CRAIG JACKSON",
  },
  {
    quote: "FSM are professional, and knowledgeable.",
    author: "NINA DOBRE",
  },
  {
    quote: "Rob was able to remove our old recyclable rubbish transforming our paddock to usable once again.",
    author: "JOHN STEVENSON",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Customer Feedback
          </h2>
          <p className="text-lg text-muted-foreground">
            We value our customer feedback, please contact us so we know how we did. Let us know what we did well and anything that needs to improve.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-stone-50 rounded-lg p-8 md:p-12">
            <Quote className="absolute top-4 left-4 w-10 h-10 text-[#c9a227] opacity-30" />
            
            <div className="text-center min-h-[150px] flex flex-col items-center justify-center">
              <p className="text-xl md:text-2xl text-foreground italic mb-6">
                &quot;{testimonials[currentIndex].quote}&quot;
              </p>
              <p className="font-semibold text-[#c9a227]">
                {testimonials[currentIndex].author}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full bg-white shadow hover:bg-stone-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-[#c9a227]" : "bg-stone-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-white shadow hover:bg-stone-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
