import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { academicHonors } from "@/lib/academic-data";
import kharazmiLogoImagePath from "../images/kharazmi-logo.png";
import guilanLogoImagePath from "../images/guilan-logo.png";

export default function EducationSection() {
  const degrees = [
    {
      id: "msc",
      degree: "Master of Science in Artificial Intelligence",
      institution: "Kharazmi University",
      location: "Tehran, Iran",
      period: "2020 – 2023",
      gpa: "17.21 / 20.00",
      thesis: "Low Complexity Blind Video Quality Assessment",
      supervisor: "Dr. Azadeh Mansouri",
      honors: "Admitted via National Exceptional Talent Scholarship",
      description: "Specialized in deep representation learning, computer vision, video processing, and perceptual quality metrics for natural and user-generated video content.",
      logo: kharazmiLogoImagePath,
    },
    {
      id: "bsc",
      degree: "Bachelor of Science in Computer Engineering",
      institution: "University of Guilan",
      location: "Rasht, Iran",
      period: "2016 – 2020",
      gpa: "17.38 / 20.00",
      thesis: "Extracting Metadata from Academic Research Papers",
      supervisor: "Faculty of Computer Engineering",
      honors: "Graduated as an Outstanding Student",
      description: "Acquired rigorous foundation in algorithms, automata theory, data structures, digital logic, and software engineering principles.",
      logo: guilanLogoImagePath,
    },
  ];

  return (
    <section id="education" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Education & Academic Honors
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3 leading-relaxed">
            Rigorous academic foundation in Artificial Intelligence and Computer Engineering with top-tier GPAs and national merit admissions.
          </p>
        </div>

        {/* Degrees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {degrees.map((deg, index) => (
            <motion.div
              key={deg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/40 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-muted/60 p-2.5 border border-border/80 flex items-center justify-center">
                    <img
                      src={deg.logo}
                      alt={deg.institution}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug">
                      {deg.degree}
                    </h3>
                    <p className="text-sm font-semibold text-primary mt-0.5">
                      {deg.institution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    {deg.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {deg.location}
                  </span>
                  <span className="font-semibold text-foreground bg-primary/10 text-primary px-2 py-0.5 rounded text-[11px]">
                    GPA: {deg.gpa}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                  {deg.description}
                </p>

                <div className="space-y-2 text-xs bg-muted/40 p-3.5 rounded-xl border border-border/60">
                  <p className="text-foreground">
                    <strong className="text-muted-foreground">Thesis / Project:</strong> "{deg.thesis}"
                  </p>
                  <p className="text-foreground">
                    <strong className="text-muted-foreground">Advisor:</strong> {deg.supervisor}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-border/60">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-amber-400">
                  <Award className="w-4 h-4 text-amber-500" />
                  {deg.honors}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Honors & Awards Section */}
        <div className="p-6 sm:p-8 rounded-2xl bg-muted/30 border border-border/70">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-5 h-5 text-amber-500" />
            <h3 className="text-xl font-bold text-foreground">
              Honors, Scholarships & Awards
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {academicHonors.map((honor, idx) => (
              <div
                key={honor.id}
                className="p-4 rounded-xl bg-card border border-border/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-primary font-bold">{honor.year}</span>
                    <Badge variant="outline" className="text-[10px] uppercase font-semibold">
                      {honor.category}
                    </Badge>
                  </div>
                  <h4 className="font-bold text-sm text-foreground mb-1 leading-snug">
                    {honor.title}
                  </h4>
                  <p className="text-xs text-primary font-medium mb-2">
                    {honor.issuer}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {honor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
