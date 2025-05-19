import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import kharazmiLogoImagePath from "../images/kharazmi-logo.png";
import guilanLogoImagePath from "../images/guilan-logo.png";

export default function EducationSection() {
  const { t } = useTranslation();

  const educationData = [
    {
      id: 1,
      degree: t("education.masterDegree"),
      institution: t("education.masterUniversity"),
      location: t("education.masterLocation"),
      period: t("education.masterDuration"),
      description: t("education.masterDescription"),
      achievements: [t("education.masterAchievements")],
      logo: kharazmiLogoImagePath,
    },
    {
      id: 2,
      degree: t("education.bachelorDegree"),
      institution: t("education.bachelorUniversity"),
      location: t("education.bachelorLocation"),
      period: t("education.bachelorDuration"),
      description: t("education.bachelorDescription"),
      achievements: [t("education.bachelorAchievements")],
      logo: guilanLogoImagePath,
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("education.title")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {t("education.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4 flex items-start space-x-4">
                  <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-md bg-primary/10 p-2">
                    <img
                      src={item.logo}
                      alt={item.institution}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">
                      {item.degree}
                    </CardTitle>
                    <CardDescription className="flex items-center">
                      <GraduationCap className="w-4 h-4 mr-1" />{" "}
                      {item.institution}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pb-4 flex-1">
                  <div className="flex flex-wrap text-sm text-muted-foreground mb-4 gap-y-2">
                    <div className="flex items-center mr-4">
                      <Calendar className="w-4 h-4 mr-1" /> {item.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" /> {item.location}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <div className="mt-auto">
                    <h4 className="text-sm font-semibold flex items-center mb-2">
                      <Award className="w-4 h-4 mr-1" /> Achievements
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.achievements.map((achievement, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="font-normal text-xs"
                        >
                          {achievement}
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
    </section>
  );
}
