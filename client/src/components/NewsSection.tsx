import { motion } from "framer-motion";
import { Award, BookOpen, Briefcase, GraduationCap, ArrowUpRight, Bell } from "lucide-react";
import { newsItems } from "@/lib/academic-data";
import { Badge } from "@/components/ui/badge";

export default function NewsSection() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "award":
        return <Award className="w-4 h-4 text-amber-500" />;
      case "publication":
        return <BookOpen className="w-4 h-4 text-blue-500" />;
      case "career":
        return <Briefcase className="w-4 h-4 text-emerald-500" />;
      case "education":
        return <GraduationCap className="w-4 h-4 text-purple-500" />;
      default:
        return <Bell className="w-4 h-4 text-primary" />;
    }
  };

  return (
    <section id="news" className="py-16 bg-muted/20 border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-border/50">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-1">
              <Bell className="w-3.5 h-3.5" />
              <span>Latest Updates</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Recent News & Research Milestones
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 md:mt-0">
            Key academic awards, research releases, and technical milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-5 rounded-xl bg-card border border-border/80 shadow-sm hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded">
                    {item.date}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {getCategoryIcon(item.category)}
                    <Badge variant="outline" className="text-[10px] font-medium py-0 px-1.5 border-border">
                      {item.badgeText}
                    </Badge>
                  </div>
                </div>

                <h3 className="font-semibold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.link && (
                <div className="mt-4 pt-3 border-t border-border/60">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-medium text-primary hover:underline gap-1"
                  >
                    Read Paper
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
