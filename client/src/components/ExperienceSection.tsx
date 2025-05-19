import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLanguageRoute } from "@/hooks/use-language-route";
import lernitoImage from "../images/Lernito.png";
import doExamImage from "../images/DoExam.jpg";
import eBidarImage from "../images/ebidar.jpg";
import trowebImage from "../images/troweb.png";

// Work Experience and Academic types only
export interface WorkExperience {
  title: string;
  period: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
}

export default function ExperienceSection() {
  const { t } = useTranslation();

  // Work Experiences
  const workExperiences: WorkExperience[] = [
    {
      title: t("experience.experience4.title"),
      period: t("experience.experience4.period"),
      description: t("experience.experience4.description"),
      technologies: ["LangChain", "LangGraph", "python", "Typescript", "React-Router", "Node.js", "MongoDB"],
      imageUrl: trowebImage,
      projectUrl: "https://www.troweb.com/",
    },
    {
      title: t("experience.experience3.title"),
      period: t("experience.experience3.period"),
      description: t("experience.experience3.description"),
      technologies: ["Typescript", "GraphQL", "React", "Node.js", "MongoDB"],
      imageUrl: doExamImage,
      projectUrl: "https://www.doexam.com/en",
    },
    {
      title: t("experience.experience2.title"),
      period: t("experience.experience2.period"),
      description: t("experience.experience2.description"),
      technologies: ["Typescript", "NextJS", "React"],
      imageUrl: eBidarImage,
      projectUrl: "https://ebidar.com/",
    },
    {
      title: t("experience.experience1.title"),
      period: t("experience.experience1.period"),
      description: t("experience.experience1.description"),
      technologies: ["LiveScript", "React", "Node.js", "MongoDB"],
      imageUrl: lernitoImage,
      projectUrl: "https://landing.lernito.com/",
    },
  ];

  return (
    <section id="experience" className="py-20 scroll-mt-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t("experience.title")}
          </h2>
          <p className="text-lg opacity-80">{t("experience.subtitle")}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {workExperiences.map((work, index) => (
              <ProjectCard key={index} {...work} />
            ))}
          </div>
        </motion.div>
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
  const { t } = useTranslation();
  const { isRTL } = useLanguageRoute();
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="rounded-xl overflow-hidden shadow-lg bg-card"
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
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
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 font-medium flex items-center"
        >
          {t("experience.viewProject")}{" "}
          <ArrowRight
            className={`${isRTL ? "mr-2 flip-in-rtl" : "ml-2"} h-4 w-4`}
          />
        </a>
      </div>
    </motion.div>
  );
}
