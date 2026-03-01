import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "PGP in Business Analytics",
    institution: "Great Lakes Institute of Management, Chennai",
    focus: "Data Science, Business Strategy, Machine Learning",
  },
  {
    degree: "B.E. in Electronics & Communication",
    institution: "KSIT, Bangalore",
    focus: "Core Engineering, Signal Processing, Embedded Systems",
  },
];

const EducationSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-[0.2em] uppercase">Foundation</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mt-3">
            Education
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative flex gap-6 items-start"
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                {i < education.length - 1 && (
                  <div className="w-px h-full bg-border mt-3" />
                )}
              </div>

              <div className="pb-8">
                <h3 className="font-display text-xl font-bold text-foreground">{edu.degree}</h3>
                <p className="text-primary text-sm font-medium mt-1">{edu.institution}</p>
                <p className="text-muted-foreground text-sm mt-2">{edu.focus}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
