import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, GraduationCap, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { workExperiences, academicExperiences, WorkExperience, AcademicExperience } from "@/lib/constants";
import { useTranslation } from "react-i18next";
import { useLanguageRoute } from "@/hooks/use-language-route";

type TabType = "work" | "academic";

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<TabType>("work");
  const { t } = useTranslation();
  const { isRTL } = useLanguageRoute();

  return (
    <section id="experience" className="py-20 scroll-mt-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("experience.title")}</h2>
          <p className="text-lg opacity-80">
            {t("experience.subtitle")}
          </p>
        </div>

        {/* Experience Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              onClick={() => setActiveTab("work")}
              variant={activeTab === "work" ? "default" : "outline"}
              className={
                activeTab === "work"
                  ? ""
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              }
            >
              <Code className="mr-2 h-4 w-4" /> {t("experience.workTab")}
            </Button>
            <Button
              size="lg"
              onClick={() => setActiveTab("academic")}
              variant={activeTab === "academic" ? "default" : "outline"}
              className={
                activeTab === "academic"
                  ? "bg-purple-500 hover:bg-purple-600"
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              }
            >
              <GraduationCap className="mr-2 h-4 w-4" /> {t("experience.academicTab")}
            </Button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "work" ? (
            <motion.div
              key="work"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {workExperiences.map((work, index) => (
                  <ProjectCard key={index} {...work} />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="academic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {academicExperiences.map((academic, index) => (
                  <AcademicCard key={index} {...academic} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  title: string;
  period: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
}

function ProjectCard({
  title,
  period,
  description,
  technologies,
  imageUrl,
  projectUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="rounded-xl overflow-hidden shadow-lg bg-card"
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
            {period}
          </span>
        </div>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-accent/10 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={projectUrl}
          className="text-primary hover:text-primary/80 font-medium flex items-center"
        >
          View Project <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}

interface AcademicCardProps {
  title: string;
  period: string;
  description: string;
  skills: string[];
  imageUrl?: string;
  detailUrl: string;
  isPublication?: boolean;
  publications?: { title: string; venue: string; url: string }[];
}

function AcademicCard({
  title,
  period,
  description,
  skills,
  imageUrl,
  detailUrl,
  isPublication = false,
  publications,
}: AcademicCardProps) {
  if (isPublication) {
    return (
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="rounded-xl overflow-hidden shadow-lg bg-card"
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold">{title}</h3>
            <span className="px-3 py-1 bg-purple-500/10 text-purple-500 text-sm rounded-full">
              {period}
            </span>
          </div>
          <ul className="space-y-4">
            {publications?.map((pub, idx) => (
              <li key={idx}>
                <div className="font-medium">{pub.title}</div>
                <div className="text-sm text-muted-foreground">
                  Published in {pub.venue}
                </div>
                <a
                  href={pub.url}
                  className="text-purple-500 hover:text-purple-600 text-sm flex items-center mt-1"
                >
                  Read Paper <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="rounded-xl overflow-hidden shadow-lg bg-card"
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="px-3 py-1 bg-purple-500/10 text-purple-500 text-sm rounded-full">
            {period}
          </span>
        </div>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
        <a
          href={detailUrl}
          className="text-purple-500 hover:text-purple-600 font-medium flex items-center"
        >
          View Details <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}
