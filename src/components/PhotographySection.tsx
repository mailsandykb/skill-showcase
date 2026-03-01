import { motion } from "framer-motion";
import { Camera, ExternalLink } from "lucide-react";

const PhotographySection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Camera className="w-8 h-8 text-primary" />
          </div>
          
          <span className="text-primary font-display text-sm tracking-[0.2em] uppercase">Beyond Work</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Photography
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            When not building products or scaling systems, I capture moments through the lens. 
            Photography is my creative outlet — a practice in patience, framing, and finding beauty in the everyday.
          </p>

          <a
            href="https://gurushots.com/SanKrish/photos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border text-foreground font-medium card-hover hover:border-primary/50 transition-colors"
          >
            <span>View My Photography Portfolio</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotographySection;
