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

// Define skill icons with their colors
export const SkillIcons = {
  React: () => <FaReact size={32} color="#61DBFB" />,
  Python: () => <FaPython size={32} color="#F7CC42" />,
  JavaScript: () => <FaJsSquare size={32} color="#F7DF1E" />,
  TensorFlow: () => <Brain size={32} color="#A855F7" />,
  PyTorch: () => <Flame size={32} color="#EF6C00" />,
  NodeJs: () => <FaNodeJs size={32} color="#68A063" />,
  Database: () => <FaDatabase size={32} color="#3B82F6" />,
  AWS: () => <FaAws size={32} color="#FF9900" />,
  DataScience: () => <LineChart size={32} color="#6366F1" />,
  WebDev: () => <Globe size={32} color="#14B8A6" />,
  DataViz: () => <AreaChart size={32} color="#EF4444" />,
  DevOps: () => <Server size={32} color="#71717A" />,
};

// Function to get the right icon based on its type
export function getSkillIcon(iconType: string) {
  switch (iconType) {
    case "React":
      return <FaReact size={32} color="#61DBFB" />;
    case "Python":
      return <FaPython size={32} color="#F7CC42" />;
    case "JavaScript":
      return <FaJsSquare size={32} color="#F7DF1E" />;
    case "TensorFlow":
      return <Brain size={32} color="#A855F7" />;
    case "PyTorch":
      return <Flame size={32} color="#EF6C00" />;
    case "NodeJs":
      return <FaNodeJs size={32} color="#68A063" />;
    case "Database":
      return <FaDatabase size={32} color="#3B82F6" />;
    case "AWS":
      return <FaAws size={32} color="#FF9900" />;
    case "DataScience":
      return <LineChart size={32} color="#6366F1" />;
    case "WebDev":
      return <Globe size={32} color="#14B8A6" />;
    case "DataViz":
      return <AreaChart size={32} color="#EF4444" />;
    case "DevOps":
      return <Server size={32} color="#71717A" />;
    default:
      return <Globe size={32} color="#14B8A6" />;
  }
}