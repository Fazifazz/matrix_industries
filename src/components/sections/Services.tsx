import { Activity, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Perceptive",
    description: "Self-powered health wearable providing continuous biometric monitoring without the need for battery replacements.",
    icon: Activity,
    features: ["Body-heat powered", "Continuous vitals tracking", "Zero-maintenance design"],
  },
  {
    title: "Proximity",
    description: "Buried perimeter security sensor that operates indefinitely, powered by ambient thermal and vibrational energy.",
    icon: ShieldCheck,
    features: ["Invisible deployment", "Seismic & acoustic detection", "Infinite operational lifespan"],
  },
  {
    title: "Prometheus",
    description: "Modular energy-harvesting units designed for industrial IoT, converting waste heat into reliable continuous power.",
    icon: Zap,
    features: ["Thermoelectric generation", "Industrial-grade durability", "Universal IoT compatibility"],
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-24 bg-transparent border-t border-panel-border">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
              Core Technologies
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Pioneering product lines built on our proprietary energy-harvesting architecture.
            </p>
          </div>
        </div>
        
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={cn(
                "flex flex-col rounded-xl border border-panel-border bg-panel p-6 shadow-sm transition-all hover:shadow-accent-glow/10 hover:border-accent/50 group"
              )}
            >
              <div className="h-12 w-12 rounded-lg bg-background border border-panel-border flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6 flex-1 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
