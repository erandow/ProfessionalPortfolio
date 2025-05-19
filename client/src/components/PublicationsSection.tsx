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
      title: "The Role of Fine-Tuned Feature Map Correlation in Video Quality Assessment",
      journal: "ّIPRIA 2025",
      date: "2025",
      authors: ["Erfan Asadi", "Parmida Pourmatin", "Azadeh Mansouri"],
      abstract: `Natural videos and user-generated content (UGC)
                  illustrate complex distortions that are difficult to model. As a
                  result, existing Video Quality Assessment (VQA) methods mostly
                  have problem to achieve high performance on these videos. In
                  this paper, we propose a method that utilizes correlation-based
                  features fine-tuned on an image quality assessment dataset to en-
                  hance VQA performance. These low-level features are combined
                  with high-level features extracted from the final layers of the
                  network, providing a rich representation of spatial degradations.
                  For temporal pooling, a simple max-pooling operation is applied.
                  Experimental results on two widely used UGC datasets, LIVE-
                  VQA and KoNViD-1k, demonstrate strong performance while
                  maintaining low computational complexity.`,
      doi: "",
      link: "",
      pdfLink: "",
      award: "Best Paper Award at IPRIA 2025",
      categories: ["fine-tuned feature maps", "gram matrix", "no-reference video quality assessment", "deep convolutional neuralnetworks", "SVR"]
    },
    {
      id: 2,
      title: "NTIRE 2024 quality assessment of AI-generated content challenge",
      journal: "Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition",
      date: "2024",
      authors: ["Xiaohong Liu", "Xiongkuo Min", "Erfan Asadi", "Azadeh Mansouri"],
      abstract: "This paper reports on the NTIRE 2024 Quality Assessment of AI-Generated Content Challenge which will be held in conjunction with the New Trends in Image Restoration and Enhancement Workshop (NTIRE) at CVPR 2024. This challenge is to address a major challenge in the field of image and video processing namely Image Quality Assessment (IQA) and Video Quality Assessment (VQA) for AI-Generated Content (AIGC). ",
      doi: "",
      link: "https://openaccess.thecvf.com/content/CVPR2024W/NTIRE/html/Liu_NTIRE_2024_Quality_Assessment_of_AI-Generated_Content_Challenge_CVPRW_2024_paper.html",
      pdfLink: "https://openaccess.thecvf.com/content/CVPR2024W/NTIRE/papers/Liu_NTIRE_2024_Quality_Assessment_of_AI-Generated_Content_Challenge_CVPRW_2024_paper.pdf",
      award: null,
      categories: ["NTIRE-2024", "Video Quality Assessment", "Image Quality Assessment"]
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
                      {pub.link && <Button size="sm" variant="outline" asChild>
                        <a href={pub.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <ExternalLink className={`h-4 w-4 ${isRTL ? "ml-1" : "mr-1"}`} /> {t("publications.view")}
                        </a>
                      </Button>}
                      {pub.pdfLink && <Button size="sm" variant="secondary" asChild>
                        <a href={pub.pdfLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <Download className={`h-4 w-4 ${isRTL ? "ml-1" : "mr-1"}`} /> {t("publications.pdf")}
                        </a>
                      </Button>}
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
                        {pub.doi && (
                          <div className="mt-2 text-sm">
                            <span className="font-medium">{t("publications.doi")}:</span> {pub.doi}
                          </div>
                        )}
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