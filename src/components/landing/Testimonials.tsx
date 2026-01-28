import { useState, useEffect, useCallback } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const testimonials = [
  {
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    title: "Marketing Director at XYZ Corp",
  },
  {
    quote:
      "Positivus transformed our digital marketing strategy completely. Their data-driven approach and creative solutions helped us achieve a 150% increase in conversions. The team is incredibly knowledgeable and always stays ahead of industry trends.",
    name: "Sarah Johnson",
    title: "CEO at Tech Innovations",
  },
  {
    quote:
      "Working with Positivus has been a game-changer for our startup. Their expertise in SEO and content marketing helped us establish a strong online presence within months. Highly recommended for any business serious about growth.",
    name: "Michael Chen",
    title: "Founder at GrowthStart",
  },
  {
    quote:
      "The team at Positivus delivers exceptional results consistently. Their strategic approach to PPC advertising reduced our cost per acquisition by 40% while increasing overall conversions. A truly outstanding partner.",
    name: "Emily Davis",
    title: "VP of Marketing at RetailPlus",
  },
  {
    quote:
      "Positivus exceeded all our expectations. Their comprehensive digital marketing services helped us expand into new markets and reach audiences we never thought possible. Professional, reliable, and results-driven.",
    name: "David Wilson",
    title: "Director of Growth at FinanceHub",
  },
]

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const scrollPrev = useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = useCallback(() => {
    api?.scrollNext()
  }, [api])

  return (
    <section className="w-full px-4 md:px-8 lg:px-16 md:py-2">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 mb-12">
          <h2 className="bg-[#B9FF66] text-foreground px-2 py-1 text-3xl md:text-4xl font-medium w-fit">
            Testimonials
          </h2>
          <p className="text-foreground/80 max-w-lg leading-relaxed text-lg">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="bg-[#191A23] rounded-[2rem] p-6 md:p-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full">
                    {/* Speech bubble */}
                    <div className="relative border border-[#B9FF66] rounded-[2rem] p-6 mb-6 h-[220px] flex items-start">
                      <p className="text-white text-sm md:text-base leading-relaxed line-clamp-6">
                        {`"${testimonial.quote}"`}
                      </p>
                      {/* Bubble tail */}
                      <div className="absolute -bottom-4 left-8 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-[#B9FF66]" />
                      <div className="absolute -bottom-3 left-[33px] w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-[#191A23]" />
                    </div>
                    {/* Author info */}
                    <div className="pl-6">
                      <p className="text-[#B9FF66] font-medium">{testimonial.name}</p>
                      <p className="text-white/70 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-48 mt-8">
            <button
              onClick={scrollPrev}
              className="text-white/50 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-3 h-3 transition-colors ${
                    current === index ? "text-[#B9FF66]" : "text-white"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  {/* <svg viewBox="0 0 12 12" fill="currentColor">
                    <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" />
                  </svg> */}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"/>
                  </svg>

                </button>
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="text-white hover:text-[#B9FF66] transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
