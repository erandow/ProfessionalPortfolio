import { motion } from "framer-motion";
import { GraduationCap, Users, Mail, BookOpen, CheckCircle2, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { teachingExperiences } from "@/lib/academic-data";

export default function TeachingSection() {
  return (
    <section id="teaching" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Academic Service & Pedagogy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Teaching Experience & Mentorship
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3 leading-relaxed">
            Extensive experience serving as a university Teaching Assistant across both graduate and undergraduate courses, delivering recitations, grading, and mentoring student research.
          </p>
        </div>

        {/* Teaching List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teachingExperiences.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`p-6 rounded-2xl bg-card border shadow-sm transition-all flex flex-col justify-between ${
                item.level === "Graduate"
                  ? "border-primary/40 bg-gradient-to-br from-card via-card to-primary/5"
                  : "border-border hover:border-primary/30"
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <Badge
                    variant={item.level === "Graduate" ? "default" : "secondary"}
                    className="text-xs font-semibold"
                  >
                    {item.level} Level
                  </Badge>
                  <span className="text-xs font-mono text-muted-foreground">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 leading-snug">
                  {item.course}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-primary mb-3">
                  {item.institution}
                </p>

                {/* Supervisor info */}
                <div className="p-3 rounded-lg bg-muted/40 border border-border/60 text-xs mb-4 flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Supervisor: <strong className="text-foreground">{item.supervisor}</strong>
                  </span>
                  {item.supervisorEmail && (
                    <a
                      href={`mailto:${item.supervisorEmail}`}
                      className="text-primary hover:underline font-mono text-[11px] flex items-center gap-1"
                    >
                      <Mail className="w-3 h-3" />
                      Email
                    </a>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Topics */}
              <div className="pt-3 border-t border-border/50">
                <div className="flex flex-wrap gap-1.5">
                  {item.topics.map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center text-[11px] px-2 py-0.5 rounded bg-muted text-muted-foreground font-mono"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
