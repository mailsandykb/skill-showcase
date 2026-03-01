import { motion } from "framer-motion";
import { Quote, Maximize2 } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
    DialogDescription,
    DialogHeader
} from "@/components/ui/dialog";

const citations = [
    {
        src: "/images/citation_walmart.png",
        alt: "Recognition Praise from Source",
        title: "Performance Recognition",
        organization: "Walmart",
        description: "Feedback highlighting data automation and business problem-solving impact.",
    },
    {
        src: "/images/citation_accenture.png",
        alt: "",
        title: "Leadership Recognition",
        organization: "Accenture Leadership",
        description: "Reference letter from Rajkumar Sing acknowledging dedication and teamwork.",
    },
];

const CitationsSection = () => {
    return (
        <section className="py-24 bg-card/30 relative">
            <div className="container mx-auto px-6 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <Quote className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-primary font-display text-sm tracking-[0.2em] uppercase">Testimonials</span>
                    <h2 className="font-display text-4xl lg:text-5xl font-bold mt-3">
                        Citations from <span className="text-gradient">Previous Orgs</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-3xl mx-auto">
                    {citations.map((citation, i) => (
                        <Dialog key={citation.src}>
                            <DialogTrigger asChild>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="group cursor-pointer"
                                >
                                    <div className="relative overflow-hidden rounded-2xl border border-border bg-background shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-primary/50 flex flex-col h-full">
                                        {/* Image Container */}
                                        <div className="relative aspect-video overflow-hidden bg-muted">
                                            <img
                                                src={citation.src}
                                                alt={citation.alt}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/0f172a/6366f1?text=Image+Missing';
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20">
                                                    <Maximize2 className="w-6 h-6 text-white" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                    {citation.title}
                                                </h3>
                                            </div>
                                            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">
                                                {citation.organization}
                                            </p>
                                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                                {citation.description}
                                            </p>
                                            <div className="mt-auto flex items-center gap-2 text-primary text-sm font-medium">
                                                <span>Click to expand</span>
                                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </DialogTrigger>

                            <DialogContent className="max-w-4xl bg-background/95 backdrop-blur-xl border-border p-2">
                                <DialogHeader className="p-6 pb-0">
                                    <DialogTitle className="text-2xl font-display font-bold">{citation.title}</DialogTitle>
                                    <DialogDescription className="text-primary font-bold">{citation.organization}</DialogDescription>
                                </DialogHeader>
                                <div className="p-2 overflow-auto max-h-[80vh] flex items-center justify-center">
                                    <img
                                        src={citation.src}
                                        alt={citation.alt}
                                        className="max-w-full h-auto rounded-lg shadow-2xl"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://placehold.co/1200x800/0f172a/6366f1?text=Save+' + citation.src.split('/').pop() + '+to+public/images/';
                                        }}
                                    />
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CitationsSection;
