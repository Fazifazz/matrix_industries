import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Matrix Industries' Prometheus module eliminated our battery replacement cycles entirely, saving millions in maintenance across our pipeline infrastructure.",
    author: "Jane Doe",
    role: "Chief Operations Officer",
    company: "Global Energy Corp",
  },
  {
    quote: "The Proximity sensor array provided perimeter security that was impossible to detect and never went offline during extreme weather events.",
    author: "John Smith",
    role: "Director of Security",
    company: "Aegis Defense",
  },
  {
    quote: "Integrating Perceptive into our clinical trials allowed us to gather continuous, high-fidelity vitals without burdening the patients with charging cables.",
    author: "Dr. Sarah Chen",
    role: "Lead Researcher",
    company: "BioTech Innovations",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-24 bg-transparent border-t border-panel-border relative z-10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Client Success
          </h2>
          <p className="max-w-[700px] text-gray-400 md:text-xl">
            How industry leaders are leveraging self-powered intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="flex flex-col justify-between p-8 rounded-xl border border-panel-border bg-panel relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-panel-border opacity-50" />
              <div className="mb-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-1.5 w-4 rounded-sm bg-accent/80" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-panel-border pt-4">
                <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{testimonial.author}</h4>
                  <p className="text-xs text-gray-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
