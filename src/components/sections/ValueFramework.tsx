import { Cpu, Network, Radar } from "lucide-react";

const steps = [
  {
    title: "Sense",
    description: "Self-powered sensors continuously capture high-fidelity environmental and biometric data.",
    icon: Radar,
  },
  {
    title: "Analyze",
    description: "On-device ML and cloud intelligence process raw inputs into actionable, real-time insights.",
    icon: Cpu,
  },
  {
    title: "Optimize",
    description: "Autonomous feedback loops optimize system performance, safety, and energy efficiency.",
    icon: Network,
  },
];

export default function ValueFramework() {
  return (
    <section className="w-full py-24 bg-transparent relative z-10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Value Generation Framework
          </h2>
          <p className="max-w-[700px] mx-auto text-gray-400 md:text-xl">
            Our closed-loop architecture turns ambient energy into operational excellence.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-12 left-0 right-0 h-[2px] bg-panel-border hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 animate-pulse" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="h-24 w-24 rounded-full bg-background border-2 border-panel-border flex items-center justify-center mb-6 relative group-hover:border-accent transition-colors duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <div className="absolute inset-2 rounded-full bg-panel flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-accent group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
                <div className="bg-panel/50 backdrop-blur-sm border border-panel-border rounded-xl p-6 w-full group-hover:bg-panel transition-colors">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
