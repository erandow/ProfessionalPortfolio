import React, { ReactNode } from "react";
import {
  FaReact,
  FaPython,
  FaJsSquare,
  FaAws,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  Brain,
  Flame,
  LineChart,
  Globe,
  AreaChart,
  Server,
} from "lucide-react";

// Work Experiences
export const workExperiences = [
  {
    title: "AI Recommendation Engine",
    period: "2021 - 2023",
    description:
      "Developed a machine learning recommendation system that increased user engagement by 37% for an e-commerce platform.",
    technologies: ["TensorFlow", "Python", "AWS"],
    imageUrl:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    projectUrl: "#",
  },
  {
    title: "E-commerce Platform",
    period: "2020 - 2021",
    description:
      "Built a scalable e-commerce platform with React, Node.js and MongoDB that handles 10k+ daily users.",
    technologies: ["React", "Node.js", "MongoDB"],
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    projectUrl: "#",
  },
  {
    title: "NLP Chatbot",
    period: "2019 - 2020",
    description:
      "Designed and deployed a natural language processing chatbot that reduced customer service requests by 45%.",
    technologies: ["BERT", "Flask", "GCP"],
    imageUrl:
      "https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    projectUrl: "#",
  },
  {
    title: "Health Analytics Dashboard",
    period: "2018 - 2019",
    description:
      "Created an interactive healthcare analytics dashboard for hospitals to monitor patient care metrics in real-time.",
    technologies: ["Vue.js", "D3.js", "Firebase"],
    imageUrl:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    projectUrl: "#",
  },
];

// Academic Experiences
export const academicExperiences = [
  {
    title: "PhD in Computer Science",
    period: "2016 - 2020",
    description:
      "Research focused on novel deep learning architectures for natural language understanding at Stanford University.",
    skills: ["Deep Learning", "NLP", "Stanford"],
    imageUrl:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    detailUrl: "#",
  },
  {
    title: "MSc in Artificial Intelligence",
    period: "2014 - 2016",
    description:
      "Specialized in machine learning algorithms and computer vision at MIT with thesis on generative adversarial networks.",
    skills: ["GANs", "Computer Vision", "MIT"],
    imageUrl:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    detailUrl: "#",
  },
  {
    title: "Research Publications",
    period: "2016 - Present",
    description: "",
    skills: [],
    detailUrl: "#",
    isPublication: true,
    publications: [
      {
        title: "Advances in Transformer Architectures for Low-Resource Languages",
        venue: "NeurIPS 2022",
        url: "#",
      },
      {
        title: "Efficient Neural Network Pruning Without Performance Degradation",
        venue: "ICML 2021",
        url: "#",
      },
      {
        title: "A Novel Approach to Semi-Supervised Learning in Computer Vision",
        venue: "CVPR 2019",
        url: "#",
      },
    ],
  },
  {
    title: "BSc in Computer Science",
    period: "2010 - 2014",
    description:
      "Graduated with honors from UC Berkeley with a focus on algorithms and data structures.",
    skills: ["Algorithms", "Data Structures", "UC Berkeley"],
    imageUrl:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    detailUrl: "#",
  },
];

// Skills Data
interface Skill {
  icon: ReactNode;
  name: string;
  level: string;
}

export const skillsData: Skill[] = [
  {
    icon: <FaReact size={32} color="#61DBFB" />,
    name: "React",
    level: "Advanced",
  },
  {
    icon: <FaPython size={32} color="#F7CC42" />,
    name: "Python",
    level: "Expert",
  },
  {
    icon: <FaJsSquare size={32} color="#F7DF1E" />,
    name: "JavaScript",
    level: "Expert",
  },
  {
    icon: <Brain size={32} color="#A855F7" />,
    name: "TensorFlow",
    level: "Advanced",
  },
  {
    icon: <Flame size={32} color="#EF6C00" />,
    name: "PyTorch",
    level: "Advanced",
  },
  {
    icon: <FaNodeJs size={32} color="#68A063" />,
    name: "Node.js",
    level: "Advanced",
  },
  {
    icon: <FaDatabase size={32} color="#3B82F6" />,
    name: "SQL/NoSQL",
    level: "Expert",
  },
  {
    icon: <FaAws size={32} color="#FF9900" />,
    name: "AWS",
    level: "Intermediate",
  },
  {
    icon: <LineChart size={32} color="#6366F1" />,
    name: "Data Science",
    level: "Advanced",
  },
  {
    icon: <Globe size={32} color="#14B8A6" />,
    name: "Web Dev",
    level: "Expert",
  },
  {
    icon: <AreaChart size={32} color="#EF4444" />,
    name: "Data Viz",
    level: "Advanced",
  },
  {
    icon: <Server size={32} color="#71717A" />,
    name: "DevOps",
    level: "Intermediate",
  },
];