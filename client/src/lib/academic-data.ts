export interface NewsItem {
  id: string;
  date: string;
  title: string;
  description: string;
  category: "award" | "publication" | "career" | "education";
  badgeText: string;
  link?: string;
}

export interface ResearchArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  keywords: string[];
  keyQuestions: string[];
}

export interface Publication {
  id: string;
  title: string;
  venue: string;
  venueShort: string;
  year: number;
  authors: string[];
  status?: string;
  abstract?: string;
  award?: string;
  paperUrl?: string;
  pdfUrl?: string;
  codeUrl?: string;
  bibtex: string;
  tags: string[];
}

export interface TeachingExperience {
  id: string;
  course: string;
  institution: string;
  period: string;
  level: "Graduate" | "Undergraduate";
  supervisor: string;
  supervisorEmail?: string;
  description: string;
  topics: string[];
}

export interface AcademicHonor {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  category: "award" | "scholarship" | "honor";
}

export interface AcademicReference {
  id: string;
  name: string;
  title: string;
  institution: string;
  relation: string;
  email?: string;
  profileUrl?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "news-1",
    date: "Feb 2025",
    title: "Best Paper Award at IPRIA 2025",
    description: "Our paper 'The Role of Fine-Tuned Feature Map Correlation in Video Quality Assessment' received the Best Paper Award at the 7th International Conference on Pattern Recognition and Image Analysis (IPRIA 2025).",
    category: "award",
    badgeText: "Best Paper Award",
  },
  {
    id: "news-2",
    date: "Jun 2024",
    title: "Research Published at CVPR 2024 Workshops",
    description: "Co-authored the NTIRE 2024 Quality Assessment of AI-Generated Content Challenge report, published in the Proceedings of the IEEE/CVF CVPRW 2024.",
    category: "publication",
    badgeText: "CVPRW 2024",
    link: "https://openaccess.thecvf.com/content/CVPR2024W/NTIRE/html/Liu_NTIRE_2024_Quality_Assessment_of_AI-Generated_Content_Challenge_CVPRW_2024_paper.html",
  },
  {
    id: "news-3",
    date: "2023 – Present",
    title: "Frontend Tech Lead & AI Agent Developer at Troweb",
    description: "Leading frontend engineering and multi-agent system development using LangChain, LangGraph, Python, and TypeScript, architecting autonomous data workspaces.",
    category: "career",
    badgeText: "Leadership",
  },
  {
    id: "news-4",
    date: "Sep 2023",
    title: "M.Sc. in Artificial Intelligence Completed with Honors",
    description: "Defended Master's thesis on 'Low Complexity Blind Video Quality Assessment' with GPA 17.21/20 at Kharazmi University, admitted through the Exceptional Talent Scholarship.",
    category: "education",
    badgeText: "Exceptional Talent",
  },
];

export const researchAreas: ResearchArea[] = [
  {
    id: "vqa-iqa",
    title: "Video & Image Quality Assessment",
    subtitle: "Perceptual Modeling of Natural, UGC & AI-Generated Content",
    description: "Investigating blind (no-reference) perceptual quality estimation for complex user-generated content (UGC) and generative AI visual synthesis. Addressing distortion modeling where pristine references are absent.",
    iconName: "Eye",
    keywords: ["No-Reference VQA", "AIGC Quality", "LIVE-VQA", "KoNViD-1k", "Perceptual Metrics"],
    keyQuestions: [
      "How do fine-tuned intermediate convolutional and transformer feature maps capture subtle perceptual degradations?",
      "Can we evaluate AI-generated video and image artifacts accurately without pristine reference distributions?",
    ],
  },
  {
    id: "efficient-deep-learning",
    title: "Low-Complexity & Efficient Vision Models",
    subtitle: "Real-time Inference, Feature Gram Matrices & Pruning",
    description: "Designing computationally lightweight architectures capable of real-time perceptual inference on edge and resource-constrained environments using Gram matrix correlations and minimal temporal pooling.",
    iconName: "Cpu",
    keywords: ["Model Efficiency", "Gram Matrix Correlation", "Low FLOPs", "CUDA Acceleration", "Real-Time Processing"],
    keyQuestions: [
      "How can spatial correlations be captured across layers with minimal computational footprint?",
      "What are the optimal temporal pooling strategies to balance temporal awareness and FLOP complexity?",
    ],
  },
  {
    id: "multi-agent-llms",
    title: "Autonomous Multi-Agent Systems & LLMs",
    subtitle: "Collaborative Agent Workflows, Orchestration & Local Serving",
    description: "Architecting reliable multi-agent systems and task-oriented autonomous workflows using LangChain, LangGraph, stateful graph execution, and high-throughput local LLM inference engines (vLLM, Ollama).",
    iconName: "Bot",
    keywords: ["LangGraph", "LangChain", "Autonomous Agents", "vLLM", "Tool-Calling", "RAG Systems"],
    keyQuestions: [
      "How can stateful multi-agent graphs achieve resilient self-correction and multi-turn planning in complex data workflows?",
      "How to bridge deep vision backbones with multi-modal LLM reasoning pipelines seamlessly?",
    ],
  },
  {
    id: "scalable-systems",
    title: "High-Concurrency AI & Web Architectures",
    subtitle: "Engineering Systems That Scale to Hundreds of Thousands of Users",
    description: "Bridging cutting-edge AI research with production-grade distributed software engineering, having built systems serving 500k concurrent student assessments with 99.9% uptime.",
    iconName: "Network",
    keywords: ["Distributed Architecture", "High Concurrency", "TypeScript", "Node.js", "Docker", "MongoDB"],
    keyQuestions: [
      "How can AI evaluation pipelines scale horizontally to handle real-time feedback for over 500,000 active sessions?",
    ],
  },
];

export const publicationsData: Publication[] = [
  {
    id: "mvip-2026",
    title: "Quality Assessment of AI-Generated Images with Frequency-Aware Visual Features and Semantic Consistency Modeling",
    venue: "International Conference on Machine Vision and Image Processing (MVIP)",
    venueShort: "MVIP 2026",
    year: 2026,
    authors: ["Parmida Pourmatin", "Erfan Asadi", "Azadeh Mansouri"],
    status: "Accepted",
    tags: ["Image Quality Assessment", "AI-Generated Images", "Frequency-Aware Features", "Semantic Consistency"],
    bibtex: `@inproceedings{pourmatin2026quality,
  title={Quality Assessment of {AI}-Generated Images with Frequency-Aware Visual Features and Semantic Consistency Modeling},
  author={Pourmatin, Parmida and Asadi, Erfan and Mansouri, Azadeh},
  booktitle={International Conference on Machine Vision and Image Processing (MVIP)},
  year={2026},
  note={Accepted}
}`,
  },
  {
    id: "ipria-2025",
    title: "The Role of Fine-Tuned Feature Map Correlation in Video Quality Assessment",
    venue: "7th International Conference on Pattern Recognition and Image Analysis (IPRIA)",
    venueShort: "IPRIA 2025",
    year: 2025,
    authors: ["Erfan Asadi", "Parmida Pourmatin", "Azadeh Mansouri"],
    award: "Best Paper Award at IPRIA 2025",
    abstract: `Natural videos and user-generated content (UGC) illustrate complex distortions that are difficult to model. As a result, existing Video Quality Assessment (VQA) methods mostly struggle to achieve high performance on these videos. In this paper, we propose a method that utilizes correlation-based features fine-tuned on an image quality assessment dataset to enhance VQA performance. These low-level features are combined with high-level features extracted from the final layers of the network, providing a rich representation of spatial degradations. For temporal pooling, a simple max-pooling operation is applied. Experimental results on two widely used UGC datasets, LIVE-VQA and KoNViD-1k, demonstrate strong performance while maintaining low computational complexity.`,
    tags: ["No-Reference VQA", "Feature Map Correlation", "Gram Matrix", "Deep CNNs", "Support Vector Regression"],
    codeUrl: "https://github.com/erandow/LC-BVQA",
    bibtex: `@inproceedings{asadi2025role,
  title={The Role of Fine-Tuned Feature Map Correlation in Video Quality Assessment},
  author={Asadi, Erfan and Pourmatin, Parmida and Mansouri, Azadeh},
  booktitle={7th International Conference on Pattern Recognition and Image Analysis (IPRIA)},
  year={2025},
  note={Best Paper Award}
}`,
  },
  {
    id: "cvprw-2024",
    title: "NTIRE 2024 Quality Assessment of AI-Generated Content Challenge",
    venue: "Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops",
    venueShort: "CVPRW 2024 (IEEE/CVF)",
    year: 2024,
    authors: ["Xiaohong Liu", "Xiongkuo Min", "Erfan Asadi", "Azadeh Mansouri", "et al."],
    abstract: `This paper reports on the NTIRE 2024 Quality Assessment of AI-Generated Content Challenge held in conjunction with the New Trends in Image Restoration and Enhancement Workshop (NTIRE) at CVPR 2024. The challenge addresses a critical frontier in modern computer vision: Image Quality Assessment (IQA) and Video Quality Assessment (VQA) for AI-Generated Content (AIGC), benchmarks state-of-the-art perceptual models, and evaluates methodological breakthroughs in assessing generative visual synthesis.`,
    tags: ["CVPRW", "NTIRE 2024", "AI-Generated Content", "VQA", "Perceptual Quality"],
    paperUrl: "https://openaccess.thecvf.com/content/CVPR2024W/NTIRE/html/Liu_NTIRE_2024_Quality_Assessment_of_AI-Generated_Content_Challenge_CVPRW_2024_paper.html",
    pdfUrl: "https://openaccess.thecvf.com/content/CVPR2024W/NTIRE/papers/Liu_NTIRE_2024_Quality_Assessment_of_AI-Generated_Content_Challenge_CVPRW_2024_paper.pdf",
    bibtex: `@inproceedings{liu2024ntire,
  title={NTIRE 2024 Quality Assessment of AI-Generated Content Challenge},
  author={Liu, Xiaohong and Min, Xiongkuo and Asadi, Erfan and Mansouri, Azadeh and others},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW)},
  pages={6527--6540},
  year={2024}
}`,
  },
];

export const teachingExperiences: TeachingExperience[] = [
  {
    id: "ta-neural-networks",
    course: "Neural Networks & Deep Learning",
    institution: "Kharazmi University",
    period: "09/2022 – 06/2024",
    level: "Graduate",
    supervisor: "Dr. Azadeh Mansouri",
    supervisorEmail: "a_mansouri@khu.ac.ir",
    description: "Mentored graduate students through modern neural network architectures, loss functions, backpropagation mechanics, convolutional neural networks, and PyTorch implementations. Designed programming assignments and guided semester research projects.",
    topics: ["Deep Learning Theory", "CNN Architectures", "Backpropagation", "PyTorch Labs", "Model Evaluation"],
  },
  {
    id: "ta-algorithm-design",
    course: "Design and Analysis of Algorithms",
    institution: "University of Guilan",
    period: "09/2018 – 02/2019",
    level: "Undergraduate",
    supervisor: "Dr. Mojtaba Shakeri",
    supervisorEmail: "mojtaba.shakeri@gmail.com",
    description: "Conducted recitation sessions and problem-solving workshops covering divide-and-conquer, dynamic programming, greedy strategies, graph algorithms, and NP-completeness proofs.",
    topics: ["Dynamic Programming", "Graph Theory", "Greedy Algorithms", "Complexity Analysis"],
  },
  {
    id: "ta-advanced-programming",
    course: "Advanced Programming (OOP & Data Structures)",
    institution: "University of Guilan",
    period: "09/2017 – 06/2019",
    level: "Undergraduate",
    supervisor: "Dr. Seyed Abolghasem Mirroshandel",
    supervisorEmail: "mirroshandel@guilan.ac.ir",
    description: "Taught core object-oriented principles, design patterns, memory management, and data structures. Assisted over 80 undergraduate students per semester in lab coursework and project code reviews.",
    topics: ["Object-Oriented Design", "Data Structures", "Memory Management", "Clean Code"],
  },
  {
    id: "ta-automata",
    course: "Automata Theory and Formal Languages",
    institution: "University of Guilan",
    period: "09/2018 – 02/2019",
    level: "Undergraduate",
    supervisor: "Dr. Seyed Mohammadhossein Shekarian",
    supervisorEmail: "shekarian@guilan.ac.ir",
    description: "Led tutorial sessions on finite automata, regular expressions, context-free grammars, pushdown automata, Turing machines, and undecidability.",
    topics: ["DFA/NFA", "Context-Free Grammars", "Turing Machines", "Computability"],
  },
  {
    id: "ta-digital-circuits",
    course: "Digital Logic Design & Circuits",
    institution: "University of Guilan",
    period: "01/2018 – 06/2018",
    level: "Undergraduate",
    supervisor: "Dr. Mahdi Aminian",
    supervisorEmail: "mhd.aminian@gmail.com",
    description: "Assisted in Boolean algebra, combinational and sequential circuit design, Karnaugh maps, flip-flops, registers, and hardware description fundamentals.",
    topics: ["Boolean Algebra", "Combinational Logic", "Sequential Circuits", "State Machines"],
  },
];

export const academicHonors: AcademicHonor[] = [
  {
    id: "honor-1",
    title: "Best Paper Award",
    issuer: "7th International Conference on Pattern Recognition and Image Analysis (IPRIA 2025)",
    year: "2025",
    description: "Awarded Best Paper for research introducing fine-tuned feature map correlation for low-complexity video quality assessment.",
    category: "award",
  },
  {
    id: "honor-2",
    title: "Exceptional Talent Scholarship (M.Sc. Admission)",
    issuer: "Ministry of Science, Research and Technology & Kharazmi University",
    year: "2020",
    description: "Earned direct tuition-free admission to the Master of Science program in Artificial Intelligence reserved for top-ranking undergraduate students nationwide.",
    category: "scholarship",
  },
  {
    id: "honor-3",
    title: "Graduated as Outstanding Student",
    issuer: "University of Guilan, Faculty of Engineering",
    year: "2020",
    description: "Graduated with honors in Computer Engineering with a top GPA of 17.38/20.",
    category: "honor",
  },
];

export const academicReferences: AcademicReference[] = [
  {
    id: "ref-1",
    name: "Dr. Azadeh Mansouri",
    title: "Associate Professor, Department of Computer Engineering",
    institution: "Kharazmi University, Tehran, Iran",
    relation: "M.Sc. Thesis Advisor & Co-author (IPRIA Best Paper, CVPRW 2024)",
    email: "a_mansouri@khu.ac.ir",
  },
  {
    id: "ref-2",
    name: "Dr. Seyed Abolghasem Mirroshandel",
    title: "Associate Professor, Department of Computer Engineering",
    institution: "University of Guilan, Rasht, Iran",
    relation: "Undergraduate Professor & TA Supervisor",
    email: "mirroshandel@guilan.ac.ir",
  },
  {
    id: "ref-3",
    name: "Dr. Mojtaba Shakeri",
    title: "Assistant Professor, Department of Computer Engineering",
    institution: "University of Guilan, Rasht, Iran",
    relation: "Undergraduate Professor & Algorithm Design TA Supervisor",
    email: "mojtaba.shakeri@gmail.com",
  },
];
