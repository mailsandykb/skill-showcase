import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface DetailItem {
  role: string;
  company: string;
  period?: string;
  bullets: string[];
  link?: string;
  results?: string[];
}

interface DetailPageLayoutProps {
  title: string;
  subtitle: string;
  items: DetailItem[];
}

const DetailPageLayout = ({ title, subtitle, items }: DetailPageLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 lg:px-16 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back</span>
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="text-primary font-display text-sm tracking-[0.2em] uppercase">{subtitle}</span>
          <h1 className="font-display text-4xl lg:text-6xl font-bold mt-3 text-foreground">{title}</h1>
        </motion.div>

        <div className="space-y-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-card border border-border p-8 hover:border-primary/30 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">{item.role}</h3>
                  <p className="text-primary text-sm font-medium mt-1">{item.company}</p>
                </div>
                {item.period && (
                  <span className="text-muted-foreground text-sm bg-muted px-3 py-1 rounded-full">{item.period}</span>
                )}
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-navy-light transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <ul className="space-y-3 mb-4">
                {item.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {item.results && item.results.length > 0 && (
                <div className="mt-6 pt-4 border-t border-border">
                  <span className="text-xs tracking-[0.15em] uppercase text-primary font-display font-medium">Key Results</span>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.results.map((result, j) => (
                      <span key={j} className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-medium">
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPageLayout;
