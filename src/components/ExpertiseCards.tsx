import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Code2, Package, Users } from "lucide-react";

const cards = [
  {
    title: "Technology",
    icon: Code2,
    description: "Data engineering, ML systems, AI agents & scalable architectures across Hadoop, Spark, GCP and cloud platforms.",
    stats: [
      { label: "Years in Tech", value: "15+" },
      { label: "Systems Scaled", value: "10+" },
      { label: "Savings Generated", value: "$125K+" },
    ],
    route: "/technology",
    gradient: "from-primary/20 to-transparent",
  },
  {
    title: "Product",
    icon: Package,
    description: "Product strategy, GTM execution, conversion optimization and building 0→1 products with measurable business impact.",
    stats: [
      { label: "GMV Impact", value: "$1.1M" },
      { label: "Conversion Lift", value: "2.2%" },
      { label: "Products Built", value: "5+" },
    ],
    route: "/product",
    gradient: "from-navy-light/20 to-transparent",
  },
  {
    title: "Leadership",
    icon: Users,
    description: "People development, cross-functional team leadership, mentoring, public speaking and organizational growth.",
    stats: [
      { label: "People Trained", value: "80+" },
      { label: "Club Growth", value: "2.75x" },
      { label: "Workshops Led", value: "10+" },
    ],
    route: "/leadership",
    gradient: "from-navy-glow/20 to-transparent",
  },
];

const ExpertiseCards = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-[0.2em] uppercase">Areas of Expertise</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mt-3">
            Three Pillars of <span className="text-gradient">Impact</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              onClick={() => navigate(card.route)}
              className="group cursor-pointer card-hover"
            >
              <div className="relative h-full rounded-2xl bg-card border border-border p-8 overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-b ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <card.icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="font-display text-2xl font-bold mb-3 text-foreground">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8">{card.description}</p>

                  <div className="space-y-4">
                    {card.stats.map((stat) => (
                      <div key={stat.label} className="flex justify-between items-center">
                        <span className="text-muted-foreground text-sm">{stat.label}</span>
                        <span className="font-display font-bold text-primary text-lg">{stat.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Explore details</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseCards;
