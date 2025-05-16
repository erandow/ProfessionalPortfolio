import { motion } from "framer-motion";
import { 
  BookOpen, 
  Calendar, 
  Users, 
  ExternalLink, 
  Award, 
  Download
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useLanguageRoute } from "@/hooks/use-language-route";

export default function PublicationsSection() {
  const { t } = useTranslation();
  const { isRTL } = useLanguageRoute();
  const publications = [
    {
      id: 1,
      title: "Advanced Neural Networks for Natural Language Processing: A Comparative Study",
      journal: "Journal of Artificial Intelligence Research",
      date: "June 2022",
      authors: ["Erfan Asadi", "Jane Smith", "John Doe"],
      abstract: "This paper presents a comprehensive analysis of advanced neural network architectures for natural language processing tasks. We compare transformer-based models, recurrent neural networks, and hybrid approaches across various benchmarks and provide insights into their strengths and limitations.",
      doi: "10.1234/jair.2022.123",
      link: "#",
      pdfLink: "#",
      award: "Best Paper Award at AI Conference 2022",
      categories: ["Natural Language Processing", "Neural Networks", "Deep Learning"]
    },
    {
      id: 2,
      title: "Ethical Considerations in Automated Decision-Making Systems",
      journal: "IEEE Transactions on Technology and Society",
      date: "March 2021",
      authors: ["Erfan Asadi", "Sarah Johnson", "Michael Brown"],
      abstract: "This research explores the ethical implications of automated decision-making systems in critical domains such as healthcare, criminal justice, and finance. We propose a framework for evaluating algorithmic fairness and accountability, and discuss approaches to mitigate potential biases in AI systems.",
      doi: "10.1109/tts.2021.456789",
      link: "#",
      pdfLink: "#",
      award: null,
      categories: ["Ethics in AI", "Algorithmic Fairness", "Decision Systems"]
    },
    {
      id: 3,
      title: "Distributed Computing Approaches for Large-Scale Machine Learning",
      journal: "ACM Transactions on Computing Systems",
      date: "November 2020",
      authors: ["Erfan Asadi", "Robert Williams", "Emily Chen"],
      abstract: "We investigate efficient distributed computing strategies for training large-scale machine learning models. Our work addresses challenges in data partitioning, communication overhead, and synchronization, proposing novel techniques that significantly improve training efficiency while maintaining model accuracy.",
      doi: "10.1145/tocs.2020.789012",
      link: "#",
      pdfLink: "#",
      award: null,
      categories: ["Distributed Computing", "Large-Scale ML", "Systems for AI"]
    },
    {
      id: 4,
      title: "Vision-Language Models for Cross-Modal Understanding",
      journal: "Conference on Computer Vision and Pattern Recognition (CVPR)",
      date: "July 2019",
      authors: ["Erfan Asadi", "David Wilson", "Lisa Taylor"],
      abstract: "This paper introduces a novel architecture for integrating visual and linguistic information in deep learning models. We demonstrate state-of-the-art performance on tasks requiring cross-modal understanding, including image captioning, visual question answering, and multi-modal classification.",
      doi: "10.1109/cvpr.2019.345678",
      link: "#",
      pdfLink: "#",
      award: "Distinguished Paper Honorable Mention",
      categories: ["Computer Vision", "Multi-modal Learning", "Vision-Language Models"]
    }
  ];

  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("publications.title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {t("publications.subtitle")}
          </p>
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-background rounded-lg border shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{pub.title}</h3>
                      <div className="flex flex-wrap items-center text-muted-foreground mb-3 gap-y-2">
                        <span className="flex items-center mr-4">
                          <BookOpen className="w-4 h-4 mr-1" /> {pub.journal}
                        </span>
                        <span className="flex items-center mr-4">
                          <Calendar className="w-4 h-4 mr-1" /> {pub.date}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" /> {pub.authors.join(", ")}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <Button size="sm" variant="outline" asChild>
                        <a href={pub.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <ExternalLink className={`h-4 w-4 ${isRTL ? "ml-1" : "mr-1"}`} /> {t("publications.view")}
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a href={pub.pdfLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <Download className={`h-4 w-4 ${isRTL ? "ml-1" : "mr-1"}`} /> {t("publications.pdf")}
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3 mb-4">
                    {pub.categories.map((category, i) => (
                      <Badge key={i} variant="outline" className="font-normal">
                        {category}
                      </Badge>
                    ))}
                  </div>

                  {pub.award && (
                    <div className="flex items-center text-sm text-primary mb-4">
                      <Award className="w-4 h-4 mr-1" /> {pub.award}
                    </div>
                  )}

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="abstract" className="border-b-0">
                      <AccordionTrigger className="py-2 text-sm">
                        {t("publications.abstract")}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">
                          {pub.abstract}
                        </p>
                        <div className="mt-2 text-sm">
                          <span className="font-medium">{t("publications.doi")}:</span> {pub.doi}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}