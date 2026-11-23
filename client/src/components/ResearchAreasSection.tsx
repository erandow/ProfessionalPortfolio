import { motion } from "framer-motion";
import { Eye, Cpu, Bot, Network, HelpCircle, ArrowRight } from "lucide-react";
import { researchAreas } from "@/lib/academic-data";
import { Badge } from "@/components/ui/badge";

export default function ResearchAreasSection() {
  const getAreaIcon = (iconName: string) => {
    switch (iconName) {
      case "Eye":
        return <Eye className="w-6 h-6 text-indigo-500" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-amber-500" />;
      case "Bot":
        return <Bot className="w-6 h-6 text-emerald-500" />;
      case "Network":
        return <Network className="w-6 h-6 text-blue-500" />;
      default:
        return <Eye className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <section id="research" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Research Agenda</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Research Pillars & Methodologies
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3 leading-relaxed">
            Investigating visual perception, computational efficiency in deep models, and stateful multi-agent systems to solve real-world AI challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-7 rounded-2xl bg-card border border-border hover:border-primary/50 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-muted/80 border border-border/80 flex-shrink-0">
                    {getAreaIcon(area.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground leading-tight">
                      {area.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-primary mt-0.5">
                      {area.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {area.description}
                </p>

                {/* Key Research Questions */}
                <div className="p-4 rounded-xl bg-muted/40 border border-border/60 mb-6 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <HelpCircle className="w-3.5 h-3.5 text-primary" />
                    <span>Key Research Questions</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-foreground/90 pl-1">
                    {area.keyQuestions.map((q, qIdx) => (
                      <li key={qIdx} className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Keywords & Link to Papers */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {area.keywords.map((kw, kwIdx) => (
                    <Badge
                      key={kwIdx}
                      variant="outline"
                      className="text-[11px] font-normal py-0.5 px-2 bg-background border-border/70 text-muted-foreground"
                    >
                      {kw}
                    </Badge>
                  ))}
                </div>

                <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs">
                  <a
                    href="#publications"
                    className="inline-flex items-center gap-1 text-primary font-medium hover:underline"
                  >
                    View related papers
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
