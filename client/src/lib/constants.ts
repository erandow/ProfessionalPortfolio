// Work Experience and Academic types only
export interface WorkExperience {
  title: string;
  period: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
}

export interface AcademicExperience {
  title: string;
  period: string;
  description: string;
  skills: string[];
  imageUrl?: string;
  detailUrl: string;
  isPublication?: boolean;
  publications?: { title: string; venue: string; url: string }[];
}

export interface Skill {
  name: string;
  level: string;
  iconType: string;
}

// Work Experiences
export const workExperiences: WorkExperience[] = [
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
export const academicExperiences: AcademicExperience[] = [
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
        title:
          "Advances in Transformer Architectures for Low-Resource Languages",
        venue: "NeurIPS 2022",
        url: "#",
      },
      {
        title:
          "Efficient Neural Network Pruning Without Performance Degradation",
        venue: "ICML 2021",
        url: "#",
      },
      {
        title:
          "A Novel Approach to Semi-Supervised Learning in Computer Vision",
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

// Skills Data without JSX
export const skillsData: Skill[] = [
  {
    name: "Python",
    level: "Expert",
    iconType: "Python",
  },
  {
    name: "TensorFlow",
    level: "Advanced",
    iconType: "TensorFlow",
  },
  {
    name: "PyTorch",
    level: "Advanced",
    iconType: "PyTorch",
  },
  {
    name: "LangChain",
    level: "Advanced",
    iconType: "LangChain",
  },
  {
    name: "LangGraph",
    level: "Advanced",
    iconType: "LangGraph",
  },
  {
    name: "Ollama",
    level: "Advanced",
    iconType: "Ollama",
  },
  {
    name: "VLLM",
    level: "Intermediate",
    iconType: "VLLM",
  },
  {
    name: "Machine Learning",
    level: "Expert",
    iconType: "MachineLearning",
  },
  {
    name: "Sickit-Learn",
    level: "Expert",
    iconType: "SickitLearn",
  },
  {
    name: "Pandas",
    level: "Expert",
    iconType: "Pandas",
  },
  {
    name: "Matplotlib",
    level: "Expert",
    iconType: "Matplotlib",
  },
  {
    name: "NumPy",
    level: "Expert",
    iconType: "Python",
  },
  {
    name: "Flask",
    level: "intermediate",
    iconType: "Flask",
  },
  {
    name: "React Router",
    level: "Advanced",
    iconType: "ReactRouter",
  },
  {
    name: "React",
    level: "Advanced",
    iconType: "React",
  },
  {
    name: "JavaScript",
    level: "Expert",
    iconType: "JavaScript",
  },
  {
    name: "Node.js",
    level: "Advanced",
    iconType: "NodeJs",
  },
  {
    name: "MongoDB",
    level: "Advanced",
    iconType: "Database",
  },
  {
    name: "Computer Vision",
    level: "Advanced",
    iconType: "AI",
  },
  {
    name: "NLP",
    level: "Advanced",
    iconType: "AI",
  },
];
