import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import sandeshPhoto from "@/assets/sandesh.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--navy)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--navy)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      {/* Gradient orb */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]"
        style={{ background: 'radial-gradient(circle, hsl(217 71% 45%), transparent)' }} />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-display text-sm tracking-[0.2em] uppercase">
                Data Scientist · Product Leader · Technologist
              </span>
            </div>

            <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[1.05] mb-6">
              <span className="text-foreground">Sandesh</span>
              <br />
              <span className="text-gradient">Balakrishna</span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mb-8">
              Full-stack Data Scientist at WalmartLabs with 15+ years of experience spanning 
              technology, product strategy, and people leadership. Driving impact through 
              data-driven innovation, AI solutions, and scalable architectures.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["Data Science", "AI/ML", "Product Strategy", "Leadership", "Architecture"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            <a
              href="https://www.linkedin.com/in/sbkrish/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </motion.div>

          {/* Right photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 rounded-2xl border border-primary/20 -rotate-3" />
              <div className="absolute -inset-4 rounded-2xl border border-primary/10 rotate-2" />
              
              <div className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden glow-border">
                <img
                  src={sandeshPhoto}
                  alt="Sandesh Balakrishna"
                  className="w-full h-full object-cover object-top"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-5 h-8 rounded-full border border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
