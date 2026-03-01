import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const recognitions = [
    {
        title: "Accenture Celebrates Excellence",
        organization: "Accenture",
    },
    {
        title: "Accenture Duracell Buddy Award",
        organization: "Accenture",
    },
    {
        title: "Walmart Propel Award",
        organization: "Walmart",
    },
    {
        title: "Walmart Spot Award",
        organization: "Walmart",
    },
    {
        title: "7/7 Client feedback on multiple parameters",
        organization: "Accenture",
    },
    {
        title: "4.71/5 rating for training delivery at VIT vellore",
        organization: "Accenture",
    },
    {
        title: "3.8/5 rating for AI workshop at CMR",
        organization: "Independent",
    },
];

const RecognitionsSection = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-navy-glow/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 lg:px-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-display text-sm tracking-[0.2em] uppercase">Achievements</span>
                    <h2 className="font-display text-4xl lg:text-5xl font-bold mt-3">
                        Honors & <span className="text-gradient">Recognitions</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {recognitions.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-8 rounded-2xl bg-card border border-border card-hover relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                    <Trophy className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground text-sm uppercase tracking-wider font-medium">
                                    {item.organization}
                                </p>
                            </div>

                            {/* Hover accent */}
                            <div className="absolute bottom-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecognitionsSection;
