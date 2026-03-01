import { motion } from "framer-motion";
import { Camera, Music, Mountain, ExternalLink } from "lucide-react";

const interests = [
  {
    title: "Photography",
    icon: Camera,
    description: "Capturing moments through the lens — a practice in patience, framing, and finding beauty in the everyday.",
    link: "https://gurushots.com/SanKrish/photos",
    linkText: "View Portfolio",
  },
  {
    title: "Violin",
    icon: Music,
    description: "Dedicated violin practitioner, exploring the nuances of classical and contemporary melodies.",
  },
  {
    title: "Travel & Adventure",
    icon: Mountain,
    description: "Exploring new horizons and cultures, from mountain peaks to vibrant cityscapes.",
  },
];

const BeyondWorkSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-[0.2em] uppercase">Interests</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mt-3">
            Beyond <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border card-hover relative flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-display text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                {item.description}
              </p>

              {item.link && (
                <div className="mt-8 pt-6 border-t border-border/50">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                  >
                    <span>{item.linkText}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondWorkSection;
