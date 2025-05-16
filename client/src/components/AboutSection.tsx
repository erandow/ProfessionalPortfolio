import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguageRoute } from "@/hooks/use-language-route";

export default function AboutSection() {
  const { t } = useTranslation();
  const { isRTL } = useLanguageRoute();
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Get to know me better: my background, interests, and what drives me as a developer and academic.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="Erfan Asadi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-lg shadow-lg border">
              <div className="flex flex-col items-center">
                <p className="text-2xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Years of Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Hello! I'm Erfan Asadi, a developer and researcher based in 
              <Badge variant="outline" className="ml-2 font-normal">Toronto, Canada</Badge>
            </h3>
            
            <div className="space-y-4 text-muted-foreground mb-6">
              <p>
                I'm a passionate web developer and AI researcher with expertise in creating robust, scalable applications
                and conducting cutting-edge research in artificial intelligence.
              </p>
              <p>
                With dual experience in both industry and academia, I bring a unique perspective to solving complex problems.
                I'm particularly interested in the intersection of web technologies and machine learning.
              </p>
              <p>
                When I'm not coding or researching, you can find me hiking, reading about new technologies, or contributing
                to open-source projects.
              </p>
            </div>

            {/* Key facts */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold">Name:</h4>
                <p className="text-muted-foreground">Erfan Asadi</p>
              </div>
              <div>
                <h4 className="font-semibold">Email:</h4>
                <p className="text-muted-foreground">erfanasadi.ce@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold">Location:</h4>
                <p className="text-muted-foreground">Toronto, Canada</p>
              </div>
              <div>
                <h4 className="font-semibold">Availability:</h4>
                <p className="text-muted-foreground">Open to opportunities</p>
              </div>
            </div>

            <Button className="flex items-center gap-2">
              <Download size={16} />
              Download CV
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}