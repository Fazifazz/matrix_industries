export default function AnimatedBackground() {
  return (
    <div 
      className="fixed inset-0 -z-10 h-full w-full bg-background overflow-hidden" 
      aria-hidden="true"
    >
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--panel-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--panel-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_10%,#000_40%,transparent_100%)] animate-grid-flow opacity-60"></div>
      
      {/* Animated Glowing Orbs */}
      <div className="absolute top-[-10%] left-[20%] h-[500px] w-[500px] rounded-full bg-accent/30 blur-[100px] animate-blob mix-blend-screen" />
      <div className="absolute top-[20%] right-[10%] h-[400px] w-[400px] rounded-full bg-accent-secondary/30 blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-[40%] h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[120px] animate-blob animation-delay-4000 mix-blend-screen" />
    </div>
  );
}
