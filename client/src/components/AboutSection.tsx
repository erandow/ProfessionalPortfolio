import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguageRoute } from "@/hooks/use-language-route";
import imagePath from "../images/Erfan.jpg";

export default function AboutSection() {
  const { t } = useTranslation();
  const { isRTL } = useLanguageRoute();

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Erfan-Asadi-Resume.pdf";
    link.download = "Erfan-Asadi-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("about.title")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {t("about.subtitle")}
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
                src={imagePath}
                alt="Erfan Asadi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-lg shadow-lg border">
              <div className="flex flex-col items-center">
                <p className="text-2xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">
                  {t("about.yearsExp")}
                </p>
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
              {t("about.hello")}
              <Badge variant="outline" className="ml-2 font-normal">
                {t("about.location")}
              </Badge>
            </h3>

            <div className="space-y-4 text-muted-foreground mb-6">
              <p>{t("about.bio1")}</p>
              <p>{t("about.bio2")}</p>
              <p>{t("about.bio3")}</p>
            </div>

            {/* Key facts */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold">{t("about.name")}</h4>
                <p className="text-muted-foreground">Erfan Asadi</p>
              </div>
              <div>
                <h4 className="font-semibold">{t("about.email")}</h4>
                <p className="text-muted-foreground">erfanasadi.ce@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold">{t("about.location2")}</h4>
                <p className="text-muted-foreground">{t("about.location")}</p>
              </div>
              <div>
                <h4 className="font-semibold">{t("about.availability")}</h4>
                <p className="text-muted-foreground">
                  {t("about.availabilityValue")}
                </p>
              </div>
            </div>

            <Button 
              className="flex items-center gap-2"
              onClick={handleDownloadResume}
            >
              <Download size={16} />
              {t("about.downloadCV")}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
