import { useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Eye, CheckCircle2, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  certificateImage?: string;
  credentialUrl?: string;
}

export default function CertificationsSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      id: "ibm-dl",
      title: "Professional Certificate in Deep Learning",
      issuer: "IBM (edX)",
      date: "2021",
      description: "Rigorous 5-course professional certificate covering deep neural networks, CNNs, RNNs, Autoencoders, and GANs using PyTorch, TensorFlow, and Keras.",
      skills: ["Deep Learning", "TensorFlow", "PyTorch", "Keras", "Model Optimization"],
      certificateImage: "/certifications/professional-certificate-in-deep-learning.png",
      credentialUrl: "https://credentials.edx.org/credentials/27f5ea4850e844908267b24fcc19b69c/",
    },
    {
      id: "ibm-tf",
      title: "Deep Learning with TensorFlow",
      issuer: "IBM (edX)",
      date: "2021",
      description: "Hands-on mastery of TensorFlow architectures, custom loss functions, training loops, distributed training, and tensor operations.",
      skills: ["TensorFlow", "Keras", "Computer Vision", "Loss Functions"],
      certificateImage: "/certifications/deep-learning-with-Tensorflow.png",
      credentialUrl: "https://courses.edx.org/certificates/2f5df45fbca34dcc936731ba8736461e",
    },
    {
      id: "ibm-pytorch",
      title: "Deep Learning with PyTorch and Python",
      issuer: "IBM (edX)",
      date: "2021",
      description: "Specialized training in PyTorch computational graphs, custom autograd, CNN spatial layers, and CUDA GPU acceleration.",
      skills: ["PyTorch", "Python", "GPU Acceleration", "CNNs"],
      certificateImage: "/certifications/deep-learning-with-pytorch-and-python.png",
      credentialUrl: "https://courses.edx.org/certificates/ce97b156e2e54e50875d116cf4833c48",
    },
    {
      id: "duke-ivp",
      title: "Image and Video Processing: From Mars to Hollywood with a Stop at the Hospital",
      issuer: "Duke University (Coursera)",
      date: "2020",
      description: "Theoretical and algorithmic foundations of image/video enhancement, spatial filtering, wavelets, PDE formulations, and video compression.",
      skills: ["Video Processing", "Image Filtering", "Perceptual Modeling", "Fourier Analysis"],
    },
    {
      id: "ibm-cv",
      title: "Computer Vision and Image Processing",
      issuer: "IBM (edX)",
      date: "2021",
      description: "Image classification, object detection, edge and feature detectors, OpenCV integration, and transfer learning in computer vision.",
      skills: ["OpenCV", "Object Detection", "Feature Extraction"],
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/20 border-b border-border/40 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Continuous Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Verified Certifications & Credentials
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3">
            Validated credentials in deep learning, computer vision, and video processing from premier institutions.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl bg-card border border-border hover:border-primary/40 shadow-sm overflow-hidden flex flex-col justify-between group transition-all"
            >
              <div>
                {/* Certificate Preview or Banner */}
                {cert.certificateImage ? (
                  <div
                    className="h-44 w-full bg-muted overflow-hidden relative cursor-pointer"
                    onClick={() => setSelectedCertificate(cert)}
                  >
                    <img
                      src={cert.certificateImage}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium gap-1.5">
                      <Eye className="w-4 h-4" />
                      Click to Preview
                    </div>
                  </div>
                ) : (
                  <div className="h-28 w-full bg-muted/60 p-4 flex flex-col justify-between border-b border-border/60">
                    <Award className="w-6 h-6 text-primary" />
                    <span className="text-[11px] font-mono text-muted-foreground">{cert.issuer}</span>
                  </div>
                )}

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-primary">{cert.issuer}</span>
                    <span className="text-xs font-mono text-muted-foreground">{cert.date}</span>
                  </div>

                  <h3 className="font-bold text-base text-foreground leading-snug mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground font-mono"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-5 sm:p-6 pt-0 border-t border-border/50 flex items-center gap-2 mt-3">
                {cert.certificateImage && (
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setSelectedCertificate(cert)}
                    className="text-xs h-8 flex-1 gap-1 text-muted-foreground hover:text-foreground"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Preview
                  </Button>
                )}

                {cert.credentialUrl && (
                  <Button size="sm" variant="outline" asChild className="text-xs h-8 flex-1 gap-1">
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3.5 h-3.5" />
                      Verify Link
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedCertificate && selectedCertificate.certificateImage && (
        <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
          <DialogContent className="max-w-3xl w-[95vw] p-4 bg-background border border-border">
            <DialogHeader>
              <DialogTitle className="text-sm sm:text-base font-semibold">
                {selectedCertificate.title} — {selectedCertificate.issuer}
              </DialogTitle>
            </DialogHeader>
            <div className="rounded-lg overflow-hidden border border-border mt-2">
              <img
                src={selectedCertificate.certificateImage}
                alt={selectedCertificate.title}
                className="w-full h-auto object-contain"
              />
            </div>
            {selectedCertificate.credentialUrl && (
              <div className="flex justify-end mt-3">
                <Button size="sm" asChild className="text-xs gap-1.5">
                  <a href={selectedCertificate.credentialUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3.5 h-3.5" />
                    Verify on edX
                  </a>
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
