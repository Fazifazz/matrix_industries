import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import ValueFramework from "@/components/sections/ValueFramework";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Services />
      <ValueFramework />
      <Testimonials />
      <ContactForm />
      
      <footer className="w-full py-6 bg-background border-t border-panel-border text-center text-sm text-gray-500">
        <div className="container mx-auto px-4">
          © {new Date().getFullYear()} Matrix Industries. All rights reserved. | Self-Powered Intelligence Everywhere.
        </div>
      </footer>
    </main>
  );
}
