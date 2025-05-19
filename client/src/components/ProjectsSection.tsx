import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { useLanguageRoute } from "@/hooks/use-language-route";
import blindVideoQualityAssessmentImage from "../images/LCVQA.png";
import reactTypeWriteImage from "../images/TypeWriter.jpg";
import giteaSecureLaunchImage from "../images/gitea.webp";
import artificialNeuralNetworkSeriesImage from "../images/ANN-Workshop.jpg";

export default function ProjectsSection() {
  const { t } = useTranslation();
  const { isRTL } = useLanguageRoute();
  const projects = [
    {
      id: 1,
      title: "Low Complexity Blind Video Quality Assessment",
      description: t("projects.LCBVQA"),
      image: blindVideoQualityAssessmentImage,
      technologies: ["Python", "PyTorch", "CUDA", "Sickit-learn", "OpenCV", "Seaborn"],
      demoUrl: "#",
      githubUrl: "https://github.com/erandow/LC-BVQA",
      period: "Jan 2023 - Apr 2024"
    },
    {
      id: 2,
      title: "React Type Writer",
      description: t("projects.reactTypeWriteDescription"),
      image: reactTypeWriteImage,
      technologies: ["React", "TypeScript"],
      demoUrl: "https://www.npmjs.com/package/@vegadev/react-type-writer",
      githubUrl: "https://github.com/erandow/react-type-writer",
      period: "Jun 2021 - Dec 2021"
    },
    {
      id: 3,
      title: "Artificial Neural Network Series",
      description: t("projects.artificialNeuralNetworkSeriesDescription"),
      image: artificialNeuralNetworkSeriesImage,
      technologies: ["Python", "NumPy", "Pandas", "PyTorch", "Keras", "TensorFlow"],
      demoUrl: "",
      githubUrl: "https://github.com/erandow/ANN-Workshop/tree/master",
      period: "Aug 2020 - Feb 2021"
    },
    {
      id: 4,
      title: "Gitea Secure Launch",
      description: t("projects.giteaSecureLaunchDescription"),
      image: giteaSecureLaunchImage,
      technologies: ["Docker", "Gitea", "Nginx"],
      demoUrl: "",
      githubUrl: "https://github.com/erandow/gitea-secure-launch",
      period: "2025"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("projects.title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background rounded-lg overflow-hidden border shadow-sm h-full flex flex-col">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <ExternalLink className={`h-4 w-4 ${isRTL ? "ml-1" : "mr-1"}`} /> {t("projects.demo")}
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" className="bg-background/20 hover:bg-background/40 backdrop-blur-sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <Github className={`h-4 w-4 ${isRTL ? "ml-1" : "mr-1"}`} /> {t("projects.code")}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-xl">{project.title}</h3>
                  </div>
                  <div className="text-muted-foreground mb-4 text-sm flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.period}
                  </div>
                  <p className="text-muted-foreground mb-5">
                    {project.description}
                  </p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="font-normal">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}