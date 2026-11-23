export interface Skill {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate";
  iconType: string;
  category: "vision-ai" | "llm-agents" | "software-engineering" | "systems-tools";
}

export const skillsCategories = [
  { id: "all", label: "All Skills" },
  { id: "vision-ai", label: "Computer Vision & Deep Learning" },
  { id: "llm-agents", label: "LLM Agents & Multi-Agent Systems" },
  { id: "software-engineering", label: "Software Architecture & Web" },
  { id: "systems-tools", label: "Data, MLOps & DevOps" },
] as const;

export const skillsData: Skill[] = [
  // Computer Vision & Deep Learning
  {
    name: "PyTorch",
    level: "Advanced",
    iconType: "PyTorch",
    category: "vision-ai",
  },
  {
    name: "TensorFlow",
    level: "Advanced",
    iconType: "TensorFlow",
    category: "vision-ai",
  },
  {
    name: "Computer Vision (VQA / IQA)",
    level: "Expert",
    iconType: "ComputerVision",
    category: "vision-ai",
  },
  {
    name: "Scikit-Learn",
    level: "Expert",
    iconType: "SickitLearn",
    category: "vision-ai",
  },
  {
    name: "OpenCV & Video Processing",
    level: "Advanced",
    iconType: "ComputerVision",
    category: "vision-ai",
  },
  {
    name: "NumPy & Scientific Computing",
    level: "Expert",
    iconType: "NumPy",
    category: "vision-ai",
  },
  {
    name: "Pandas",
    level: "Expert",
    iconType: "Pandas",
    category: "vision-ai",
  },
  {
    name: "Matplotlib & Seaborn",
    level: "Expert",
    iconType: "Matplotlib",
    category: "vision-ai",
  },

  // LLM Agents & Multi-Agent Systems
  {
    name: "LangGraph",
    level: "Advanced",
    iconType: "LangGraph",
    category: "llm-agents",
  },
  {
    name: "LangChain",
    level: "Advanced",
    iconType: "LangChain",
    category: "llm-agents",
  },
  {
    name: "vLLM Inference Engine",
    level: "Intermediate",
    iconType: "VLLM",
    category: "llm-agents",
  },
  {
    name: "Ollama (Local LLM Serving)",
    level: "Advanced",
    iconType: "Ollama",
    category: "llm-agents",
  },
  {
    name: "Autonomous Agent Architectures",
    level: "Advanced",
    iconType: "AI",
    category: "llm-agents",
  },
  {
    name: "Natural Language Processing (NLP)",
    level: "Advanced",
    iconType: "NLP",
    category: "llm-agents",
  },

  // Software Architecture & Web
  {
    name: "Python",
    level: "Expert",
    iconType: "Python",
    category: "software-engineering",
  },
  {
    name: "TypeScript",
    level: "Expert",
    iconType: "JavaScript",
    category: "software-engineering",
  },
  {
    name: "React & Next.js",
    level: "Advanced",
    iconType: "React",
    category: "software-engineering",
  },
  {
    name: "React Router",
    level: "Advanced",
    iconType: "ReactRouter",
    category: "software-engineering",
  },
  {
    name: "Node.js",
    level: "Advanced",
    iconType: "NodeJs",
    category: "software-engineering",
  },
  {
    name: "Flask",
    level: "Intermediate",
    iconType: "Flask",
    category: "software-engineering",
  },

  // Data, MLOps & DevOps
  {
    name: "MongoDB",
    level: "Advanced",
    iconType: "MongoDB",
    category: "systems-tools",
  },
  {
    name: "PostgreSQL",
    level: "Advanced",
    iconType: "PostgreSQL",
    category: "systems-tools",
  },
  {
    name: "Docker & Containerization",
    level: "Advanced",
    iconType: "DevOps",
    category: "systems-tools",
  },
  {
    name: "Git & Version Control",
    level: "Expert",
    iconType: "Dev",
    category: "systems-tools",
  },
  {
    name: "Linux & High-Performance Computing",
    level: "Advanced",
    iconType: "DevOps",
    category: "systems-tools",
  },
];
