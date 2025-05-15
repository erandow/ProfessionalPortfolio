import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EducationSection() {
  const educationData = [
    {
      id: 1,
      degree: "PhD in Computer Science",
      institution: "University of Toronto",
      location: "Toronto, Canada",
      period: "2018 - 2022",
      description: "Specialized in Artificial Intelligence and Machine Learning with a focus on natural language processing and computer vision applications.",
      achievements: ["Best Paper Award at AI Conference 2021", "University Research Excellence Award"],
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/University_of_Toronto_seal.svg/1200px-University_of_Toronto_seal.svg.png"
    },
    {
      id: 2,
      degree: "Master of Science in Software Engineering",
      institution: "University of British Columbia",
      location: "Vancouver, Canada",
      period: "2016 - 2018",
      description: "Focused on advanced software architecture, distributed systems, and database management.",
      achievements: ["Graduate Student Research Award", "Dean's List"],
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/University_of_British_Columbia_coat_of_arms.svg/1200px-University_of_British_Columbia_coat_of_arms.svg.png"
    },
    {
      id: 3,
      degree: "Bachelor of Science in Computer Engineering",
      institution: "University of Waterloo",
      location: "Waterloo, Canada",
      period: "2012 - 2016",
      description: "Comprehensive education in computer hardware, software development, and mathematics with cooperative education placements at leading tech companies.",
      achievements: ["Graduated with Distinction", "President's Scholarship"],
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/University_of_Waterloo_seal.svg/1200px-University_of_Waterloo_seal.svg.png"
    }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            My academic journey and educational background that have shaped my expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <CardTitle className="text-xl mb-1">{item.degree}</CardTitle>
                    <CardDescription className="flex items-center">
                      <GraduationCap className="w-4 h-4 mr-1" /> {item.institution}
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
                        <Badge key={i} variant="secondary" className="font-normal text-xs">
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