import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    content:
      "We conduct thorough market research and competitor analysis to develop a comprehensive digital marketing strategy tailored to your business objectives and target audience.",
  },
  {
    number: "03",
    title: "Implementation",
    content:
      "Our team executes the strategy across all relevant digital channels, ensuring consistent messaging and optimal performance through continuous monitoring and adjustments.",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    content:
      "We track key performance indicators and analyze data to continuously optimize campaigns, ensuring maximum ROI and achieving your business goals.",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    content:
      "Regular detailed reports keep you informed of progress, insights, and recommendations. We maintain open communication to ensure alignment with your evolving business needs.",
  },
]

export function ProcessAccordion() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="w-full px-4 md:px-8 lg:px-16 pb-12 md:pb-20">
      <div className="max-w-7xl mx-auto space-y-4">
        {processSteps.map((step, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={index}
              className={`rounded-[2rem] border-2 border-foreground overflow-hidden transition-all duration-300 shadow-[4px_4px_0_0_#191A23] ${
                isOpen ? "bg-[#B9FF66]" : "bg-secondary"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full p-6 md:p-8 flex items-center justify-between"
              >
                <div className="flex items-center gap-4 md:gap-8">
                  <span className="text-4xl md:text-6xl font-medium text-foreground">
                    {step.number}
                  </span>
                  <span className="text-lg md:text-2xl font-medium text-foreground text-left">
                    {step.title}
                  </span>
                </div>
                <span className="border-2 border-foreground rounded-full p-2 bg-secondary">
                  {isOpen ? (
                    <Minus className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
                  ) : (
                    <Plus className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
                  )}
                </span>
              </button>
              {isOpen && (
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <div className="border-t border-foreground pt-6">
                    <p className="text-foreground/90 leading-relaxed max-w-4xl">
                      {step.content}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
