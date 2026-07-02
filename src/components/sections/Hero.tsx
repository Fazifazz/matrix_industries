import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-glow/30 via-transparent to-transparent pointer-events-none" />
      
      <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center gap-8">
        <div className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
          <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse" />
          Self-Powered Intelligence Everywhere
        </div>
        
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Energy-Harvesting Sensors for a <br className="hidden md:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
            Smarter, Autonomous World
          </span>
        </h1>
        
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-gray-400">
          Matrix Industries pioneers self-powered sensing intelligence for health, security, and IoT. 
          Our advanced energy-harvesting modules transform ambient heat and motion into infinite power.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link
            href="#services"
            className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-black shadow transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50"
          >
            Explore Technologies
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-md border border-panel-border bg-panel px-8 text-sm font-medium shadow-sm transition-colors hover:bg-panel-border hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
}
