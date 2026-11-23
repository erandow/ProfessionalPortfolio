import { useState } from "react";
import { motion } from "framer-motion";
import { skillsData, skillsCategories, Skill } from "@/lib/constants";
import { getSkillIcon } from "@/lib/skill-icons";
import { Cpu, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredSkills = skillsData.filter((skill) => {
    if (selectedCategory === "all") return true;
    return skill.category === selectedCategory;
  });

  return (
    <section id="skills" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Skills & Research Tooling
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3">
            Comprehensive proficiency spanning deep learning research frameworks, autonomous multi-agent orchestration, and production software engineering.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-border/60">
          {skillsCategories.map((cat) => (
            <Button
              key={cat.id}
              size="sm"
              variant={selectedCategory === cat.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat.id)}
              className="text-xs h-8"
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="p-4 rounded-xl bg-card border border-border/80 hover:border-primary/50 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center justify-between group"
            >
              <div className="w-12 h-12 rounded-xl bg-muted/60 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {getSkillIcon(skill.iconType)}
              </div>

              <div>
                <h4 className="font-semibold text-xs sm:text-sm text-foreground leading-tight mb-1">
                  {skill.name}
                </h4>
                <Badge
                  variant="secondary"
                  className={`text-[10px] font-normal py-0 px-1.5 ${
                    skill.level === "Expert"
                      ? "bg-primary/10 text-primary"
                      : skill.level === "Advanced"
                      ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {skill.level}
                </Badge>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
