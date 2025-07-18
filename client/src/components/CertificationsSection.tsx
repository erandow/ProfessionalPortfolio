import { motion } from "framer-motion";
import { Award, Calendar, BookOpen, ExternalLink, Eye, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";
import { useState } from "react";

// Import certification images here
// You can add your certification images to the images directory
// import certificateImage1 from "../images/certificate1.png";
// import certificateImage2 from "../images/certificate2.png";

export default function CertificationsSection() {
  const { t } = useTranslation();
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  const certificationsData = [
    {
      id: 1,
      title: t("certifications.cert1Title"),
      issuer: t("certifications.cert1Issuer"),
      date: t("certifications.cert1Date"),
      description: t("certifications.cert1Description"),
      skills: t("certifications.cert1Skills", { returnObjects: true }) as string[],
      certificateImage: "/certifications/professional-certificate-in-deep-learning.png", // Path relative to public directory
      credentialUrl: "https://credentials.edx.org/credentials/27f5ea4850e844908267b24fcc19b69c/", // Add your credential URL here
    },
    {
      id: 2,
      title: t("certifications.cert2Title"),
      issuer: t("certifications.cert2Issuer"),
      date: t("certifications.cert2Date"),
      description: t("certifications.cert2Description"),
      skills: t("certifications.cert2Skills", { returnObjects: true }) as string[],
      certificateImage: "/certifications/deep-learning-with-Tensorflow.png", // Path relative to public directory
      credentialUrl: "https://courses.edx.org/certificates/2f5df45fbca34dcc936731ba8736461e", // Add your credential URL here
    },
    {
      id: 3,
      title: t("certifications.cert3Title"),
      issuer: t("certifications.cert3Issuer"),
      date: t("certifications.cert3Date"),
      description: t("certifications.cert3Description"),
      skills: t("certifications.cert3Skills", { returnObjects: true }) as string[],
      certificateImage: "/certifications/deep-learning-with-pytorch-and-python.png", // Path relative to public directory
      credentialUrl: "https://courses.edx.org/certificates/ce97b156e2e54e50875d116cf4833c48", // Add your credential URL here
    },

    // Add more certifications as needed
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("certifications.title")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {t("certifications.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.certificateImage}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onError={(e) => {
                      // Fallback to a placeholder if image fails to load
                      e.currentTarget.src = "data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100' height='100' fill='%23f3f4f6'/%3e%3ctext x='50' y='50' text-anchor='middle' fill='%236b7280' dy='.3em'%3eCertificate%3c/text%3e%3c/svg%3e";
                    }}
                    onClick={() => setSelectedCertificate(cert)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setSelectedCertificate(cert)}
                      className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      {t("certifications.viewCertificate")}
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => window.open(cert.credentialUrl, "_blank")}
                      className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t("certifications.viewCredential")}
                    </Button>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg mb-1 line-clamp-2">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="flex items-center">
                    <Award className="w-4 h-4 mr-1" />
                    {cert.issuer}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pb-4 flex-1">
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {cert.date}
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm">
                    {cert.description}
                  </p>
                  
                  <div className="mt-auto">
                    <h4 className="text-sm font-semibold flex items-center mb-2">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {t("certifications.skillsLearned")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="font-normal text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
                      ))}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
          <div className="relative">
            <DialogClose className="absolute right-4 top-4 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground bg-black/20 hover:bg-black/30 text-white p-2">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
            
            {selectedCertificate && (
              <div className="relative">
                <img
                  src={selectedCertificate.certificateImage}
                  alt={selectedCertificate.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    e.currentTarget.src = "data:image/svg+xml,%3csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='800' height='600' fill='%23f3f4f6'/%3e%3ctext x='400' y='300' text-anchor='middle' fill='%236b7280' dy='.3em' font-size='24'%3eCertificate Image Not Available%3c/text%3e%3c/svg%3e";
                  }}
                />
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{selectedCertificate.title}</h3>
                  <p className="text-sm opacity-90 mb-3">
                    {selectedCertificate.issuer} • {selectedCertificate.date}
                  </p>
                  <p className="text-sm opacity-90 mb-4">
                    {selectedCertificate.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedCertificate.skills.map((skill: string, i: number) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
} 