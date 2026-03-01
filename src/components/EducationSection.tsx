import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Executive MBA in Product Leadership",
    institution: "Institute of Product Leadership",
    period: "2025 — 2026",
    focus: "Product Management, Strategic Leadership & Business Growth",
  },
  {
    degree: "PGP in Business Analytics",
    institution: "Great Lakes Institute of Management, Chennai",
    period: "2018 — 2019",
    focus: "Data Science, Business Strategy, Machine Learning",
  },
  {
    degree: "B.E. in Electronics & Communication",
    institution: "KSIT, Bangalore",
    period: "2006 — 2010",
    focus: "Core Engineering, Signal Processing, Embedded Systems",
  },
];

const EducationSection = () => {
  return (
    <section className="py-24 bg-card/10 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary font-display text-sm tracking-[0.2em] uppercase">Foundation</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mt-3">
            Educational <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line for the timeline */}
          <div className="absolute left-[23px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />

          <div className="space-y-12">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center justify-between md:flex-row flex-col ${i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center shadow-[0_0_20px_rgba(var(--primary),0.2)]">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content card */}
                <div className={`w-full md:w-[42%] ml-16 md:ml-0`}>
                  <div className="p-8 rounded-2xl bg-card border border-border card-hover shadow-xl hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-center gap-2 text-primary font-display text-xs font-bold uppercase tracking-widest mb-3">
                      <Calendar className="w-3 h-3" />
                      <span>{edu.period}</span>
                    </div>
                    <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-2 leading-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-primary/90 font-medium text-sm mb-4">
                      {edu.institution}
                    </p>
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-muted-foreground text-sm leading-relaxed italic">
                        {edu.focus}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Empty space for the other side on desktop */}
                <div className="hidden md:block md:w-[42%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
