import { motion } from "framer-motion";
import { skillsData } from "@/lib/constants";
import { getSkillIcon } from "@/lib/skill-icons";

export default function SkillsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="skills"
      className="py-20 scroll-mt-16 relative bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-lg opacity-80">
            The technologies and skills I've mastered throughout my journey.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillsData.map((skill, index) => (
            <SkillBadge 
              key={index} 
              name={skill.name} 
              level={skill.level} 
              iconType={skill.iconType}
              index={index} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface SkillBadgeProps {
  name: string;
  level: string;
  iconType: string;
  index: number;
}

function SkillBadge({ iconType, name, level, index }: SkillBadgeProps) {
  return (
    <motion.div
      className="p-4 rounded-xl text-center shadow-md bg-card hover:-translate-y-2 transition-transform duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration: 0.5,
            delay: index * 0.05
          }
        },
      }}
      whileHover={{
        boxShadow: "0 10px 25px -10px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="h-14 flex items-center justify-center mb-3">
        {getSkillIcon(iconType)}
      </div>
      <h3 className="font-medium">{name}</h3>
      <div className="text-xs text-muted-foreground">{level}</div>
    </motion.div>
  );
}
