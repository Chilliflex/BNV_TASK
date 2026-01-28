import { ArrowUpRight } from "lucide-react"

const services = [
  {
    title: "Search engine optimization",
    bgColor: "bg-[#F3F3F3]",
    titleBg: "bg-[#B9FF66]",
    illustration: (
      <svg viewBox="0 0 200 150" className="w-full h-full" fill="none">
        {/* Magnifying glass with check */}
        <circle cx="100" cy="70" r="35" stroke="#191A23" strokeWidth="2" fill="none" />
        <line x1="125" y1="95" x2="150" y2="120" stroke="#191A23" strokeWidth="3" />
        <path d="M85 70 L95 80 L115 60" stroke="#191A23" strokeWidth="2" fill="none" />
        {/* Connection lines */}
        <line x1="60" y1="50" x2="30" y2="30" stroke="#191A23" strokeWidth="1.5" />
        <line x1="60" y1="90" x2="30" y2="110" stroke="#191A23" strokeWidth="1.5" />
        <line x1="140" y1="50" x2="170" y2="30" stroke="#191A23" strokeWidth="1.5" />
        <line x1="140" y1="90" x2="170" y2="110" stroke="#191A23" strokeWidth="1.5" />
        {/* End nodes */}
        <circle cx="25" cy="30" r="8" stroke="#191A23" strokeWidth="1.5" fill="none" />
        <circle cx="25" cy="110" r="8" fill="#191A23" />
        <circle cx="175" cy="30" r="8" stroke="#191A23" strokeWidth="1.5" fill="none" />
        <path d="M170 105 L180 115 L170 125" stroke="#191A23" strokeWidth="1.5" fill="none" />
        {/* Decorative stars */}
        <path d="M150 40 L153 47 L150 54 L147 47 Z" fill="#191A23" />
        <path d="M50 120 L53 127 L50 134 L47 127 Z" fill="#191A23" />
      </svg>
    ),
  },
  {
    title: "Pay-per- click advertising",
    bgColor: "bg-[#B9FF66]",
    titleBg: "bg-[#F3F3F3]",
    illustration: (
      <svg viewBox="0 0 200 150" className="w-full h-full" fill="none">
        {/* Browser window */}
        <rect x="70" y="30" width="90" height="70" rx="5" stroke="#191A23" strokeWidth="2" fill="none" />
        <line x1="70" y1="45" x2="160" y2="45" stroke="#191A23" strokeWidth="1.5" />
        <circle cx="80" cy="38" r="3" fill="#191A23" />
        <rect x="145" y="35" width="10" height="6" rx="2" stroke="#191A23" strokeWidth="1" fill="none" />
        {/* Content lines */}
        <rect x="80" y="55" width="30" height="8" rx="2" stroke="#191A23" strokeWidth="1" fill="none" />
        <rect x="80" y="70" width="50" height="5" rx="1" stroke="#191A23" strokeWidth="1" fill="none" />
        <rect x="80" y="80" width="40" height="5" rx="1" stroke="#191A23" strokeWidth="1" fill="none" />
        {/* Cursor */}
        <path d="M130 60 L130 85 L140 78 L148 92 L153 89 L145 75 L155 72 Z" fill="#191A23" />
        {/* Globe and arrow */}
        <circle cx="50" cy="120" r="20" stroke="#191A23" strokeWidth="1.5" fill="none" />
        <ellipse cx="50" cy="120" rx="20" ry="8" stroke="#191A23" strokeWidth="1" fill="none" />
        <line x1="50" y1="100" x2="50" y2="140" stroke="#191A23" strokeWidth="1" />
        {/* Arrow */}
        <path d="M75 120 L180 120" stroke="#191A23" strokeWidth="1.5" />
        <path d="M170 115 L180 120 L170 125" stroke="#191A23" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
]


export function Services() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-12 md:py-20" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 mb-12">
          <h2 className="bg-[#B9FF66] text-foreground px-2 py-1 text-3xl md:text-4xl font-medium w-fit">
            Services
          </h2>
          <p className="text-foreground/80 max-w-xl leading-relaxed md:text-md text-lg">
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-[2rem] border-2 border-foreground p-6 md:p-8 flex flex-col md:flex-row justify-between min-h-[280px] shadow-[4px_4px_0_0_#191A23]`}
            >
              <div className="flex flex-col justify-between h-full">
                <h3 className="text-xl md:text-2xl font-medium leading-tight">
                  <span
                    className={`
                      ${service.titleBg}
                      text-foreground
                      px-3 py-1
                      inline-block
                      rounded-md
                    `}
                  >
                    {service.title.split(" ").slice(0, 2).join(" ")}
                  </span>

                  <br />

                  <span
                    className={`
                      ${service.titleBg}
                      text-foreground
                      px-3 py-1
                      inline-block
                      rounded-md
                    `}
                  >
                    {service.title.split(" ").slice(2).join(" ")}
                  </span>
                </h3>

                <button className="flex items-center gap-3 mt-6 group">
                  <span className="bg-foreground text-[#B9FF66] rounded-full p-2 group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                  <span className="text-foreground text-sm font-medium">Learn more</span>
                </button>
              </div>
              <div className="w-full md:w-1/2 h-32 md:h-auto mt-4 md:mt-0">
                {service.illustration}
              </div>
            </div>
          ))}
        </div>

        {/* Working Process Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 mt-20">
          <h2 className="bg-[#B9FF66] text-foreground px-2 py-1 text-3xl md:text-4xl font-medium w-fit">
            Our Working Process
          </h2>
          <p className="text-foreground/80 max-w-md leading-relaxed text-lg">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>
      </div>
    </section>
  )
}
