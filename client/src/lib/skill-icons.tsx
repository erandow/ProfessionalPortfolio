import {
  FaReact,
  FaPython,
  FaJsSquare,
  FaAws,
  FaNodeJs,
  FaDatabase,
  FaFlask,
  FaChartBar,
  FaCube,
  FaLink,
  FaNetworkWired,
  FaRobot,
  FaCode,
  FaMicrochip,
  FaServer
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiMongodb,
  SiPostgresql,
  SiReactrouter,
  SiPandas,
  SiNumpy,
  SiScipy,
  SiScikitlearn,
  SiFlask,
  SiLangchain
} from "react-icons/si";
import {
  Brain,
  Flame,
  LineChart,
  Globe,
  AreaChart,
  Server,
  Code,
  Bot,
  Terminal,
  BarChart,
  Network,
  GitGraph,
  Database,
  Eye,
  MessageSquare
} from "lucide-react";

// Define skill icons with their colors
export const SkillIcons = {
  // Frontend technologies
  React: () => <FaReact size={32} color="#61DBFB" />,
  JavaScript: () => <FaJsSquare size={32} color="#F7DF1E" />,
  ReactRouter: () => <SiReactrouter size={32} color="#CA4245" />,
  
  // Backend technologies
  NodeJs: () => <FaNodeJs size={32} color="#68A063" />,
  Python: () => <FaPython size={32} color="#F7CC42" />,
  Flask: () => <SiFlask size={32} color="#000000" />,
  
  // Data science
  DataScience: () => <LineChart size={32} color="#6366F1" />,
  DataViz: () => <AreaChart size={32} color="#EF4444" />,
  Pandas: () => <SiPandas size={32} color="#150458" />,
  NumPy: () => <SiNumpy size={32} color="#013243" />,
  Matplotlib: () => <BarChart size={32} color="#11557C" />,
  SickitLearn: () => <SiScikitlearn size={32} color="#F7931E" />,
  
  // AI & ML
  TensorFlow: () => <SiTensorflow size={32} color="#FF6F00" />,
  PyTorch: () => <SiPytorch size={32} color="#EE4C2C" />,
  MachineLearning: () => <Brain size={32} color="#A855F7" />,
  LangChain: () => <SiLangchain size={32} color="#65C679" />,
  LangGraph: () => <GitGraph size={32} color="#38BDF8" />,
  Ollama: () => <Bot size={32} color="#FF5A00" />,
  VLLM: () => <Flame size={32} color="#FF4F00" />,
  AI: () => <Bot size={32} color="#8B5CF6" />,
  
  // Computer Vision & NLP
  ComputerVision: () => <Eye size={32} color="#EC4899" />,
  NLP: () => <MessageSquare size={32} color="#10B981" />,
  
  // Databases
  Database: () => <FaDatabase size={32} color="#3B82F6" />,
  MongoDB: () => <SiMongodb size={32} color="#47A248" />,
  PostgreSQL: () => <SiPostgresql size={32} color="#336791" />,
  
  // Cloud & DevOps
  AWS: () => <FaAws size={32} color="#FF9900" />,
  DevOps: () => <Server size={32} color="#71717A" />,
  
  // General
  WebDev: () => <Globe size={32} color="#14B8A6" />,
  Dev: () => <Terminal size={32} color="#059669" />,
  CursorIDE: () => <Code size={32} color="#0EA5E9" />,
};

// Function to get the right icon based on its type
export function getSkillIcon(iconType: string) {
  // Get the icon from our SkillIcons object if it exists
  if (SkillIcons[iconType]) {
    return SkillIcons[iconType]();
  }
  
  // Default icon if we don't have a specific one
  return <Code size={32} color="#111111" />;
}