export const profile = {
  name: "Erfan Asadi",
  email: "erfanasadi.ce@gmail.com",
  phone: "+98 912 056 0867",
  telegram: "erandow",
  twitter: "_erandow_",
  github: "https://github.com/erandow",
  linkedin: "https://www.linkedin.com/in/erandow/",
  resume: "/Erfan-Asadi-Resume.pdf",
};

export const projects = [
  {
    slug: "ekb",
    name: "EKB Journal System",
    category: "Frontend modernization",
    title: "Modernizing a scholarly journal platform",
    summary: "An incremental rebuild of the Egyptian Knowledge Bank’s journal platform with React, Next.js, and a bilingual interface.",
    role: "Frontend Tech Lead at NotionWave",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Query", "Orval", "i18n / RTL"],
    url: null,
    linkLabel: null,
    experience: [
      { title: "The problem", body: "The Egyptian Knowledge Bank’s scholarly journal platform needed a frontend rebuild while its existing users continued working in the legacy PHP system." },
      { title: "My role", body: "I lead four frontend engineers at NotionWave, set architecture and component standards, and work with backend and product teams on the platform rebuild." },
    ],
    engineering: [
      { title: "Page-by-page migration", body: "We move routes to React and Next.js under a /new path one page at a time, allowing the legacy system to serve existing workflows during migration." },
      { title: "Bilingual UI and typed APIs", body: "The interface supports Arabic and English, including right-to-left layouts. We use Orval to generate typed clients from the OpenAPI specification." },
    ],
  },
  {
    slug: "troweb",
    name: "Troweb",
    category: "Agentic AI",
    title: "A workspace for working with data",
    summary: "A personal data workspace that brings multi-agent workflows into a web application.",
    role: "Frontend Tech Lead & AI Agent Developer",
    stack: ["TypeScript", "React Router", "GraphQL (URQL)", "LangGraph", "LangChain", "Python", "Node.js", "MongoDB"],
    url: "https://www.troweb.com/",
    linkLabel: "Visit Troweb",
    experience: [
      { title: "The problem", body: "A personal data workspace needs a way for people to perform data tasks without leaving the application. Troweb brings those tasks and AI-assisted workflows into the same product." },
      { title: "My role", body: "I led frontend delivery at NotionWave from 2023 to 2026, managing three senior frontend engineers and overseeing architecture, code review, and delivery." },
    ],
    engineering: [
      { title: "Incremental frontend replacement", body: "I replaced the legacy frontend incrementally with a frontend-v2 migration. The strangler pattern let us replace parts of the application while keeping production available." },
      { title: "Model-agnostic agent orchestration", body: "I integrated LangChain and LangGraph agents through a layer that supported GPT, Claude, and Gemini. The agents automated tasks in the personal data workspace." },
    ],
  },
  {
    slug: "doexam",
    name: "DoExam",
    category: "Frontend engineering",
    title: "Online assessment for K–12",
    summary: "An online testing platform with a bilingual exam experience, performance reporting, and asynchronous grading.",
    role: "Frontend Developer",
    stack: ["TypeScript", "React", "GraphQL", "Node.js", "MongoDB"],
    url: "https://www.doexam.com/en",
    linkLabel: "Visit DoExam",
    experience: [
      { title: "The problem", body: "A large online exam has a shared start time, so delivering exam materials and handling grading on the live exam path can create a burst of work." },
      { title: "My role", body: "At NotionWave, I built the English and Persian exam interface, including right-to-left support, plus performance reports for students and cohorts." },
    ],
    engineering: [
      { title: "Delivering exam materials", body: "We cached encrypted exam bundles on the CDN ahead of time and released the decryption keys when the exam began. Students could receive most of the material before the shared start event." },
      { title: "Keeping grading separate", body: "I built an asynchronous corrector so grading ran independently from live exam sessions." },
    ],
  },
  {
    slug: "lc-bvqa",
    name: "LC-BVQA",
    category: "Applied AI",
    title: "Estimating video quality without a reference",
    summary: "A low-complexity deep learning system for blind video quality assessment.",
    role: "Research & implementation",
    stack: ["Python", "PyTorch", "CUDA", "OpenCV", "scikit-learn"],
    url: "https://github.com/erandow/LC-BVQA",
    linkLabel: "View source code",
    experience: [
      { title: "The problem", body: "Blind video quality assessment estimates perceptual quality from a video alone. It is useful when an undistorted source video is unavailable for comparison." },
      { title: "My role", body: "I developed a low-complexity, deep learning-based system for this task as part of my graduate work in artificial intelligence." },
    ],
    engineering: [
      { title: "Processing and evaluation", body: "The public implementation separates frame extraction, feature extraction, pooling, and support vector regression. It uses OpenCV for video processing, PyTorch and CUDA for the model, and scikit-learn for evaluation." },
      { title: "A design question", body: "Estimating quality from video means deciding how much computation to spend extracting features from frames. The project explores this tradeoff through low-complexity feature processing." },
    ],
  },
] as const;

export const experience = [
  { company: "NotionWave · EKB Journal System", role: "Frontend Tech Lead", period: "2026–Present", detail: "Lead the frontend team rebuilding the Egyptian Knowledge Bank’s scholarly journal platform." },
  { company: "NotionWave · Troweb", role: "Frontend Tech Lead & AI Agent Developer", period: "2023–2026", detail: "Led frontend development and integrated AI agents into a personal data workspace." },
  { company: "NotionWave · DoExam", role: "Frontend Developer", period: "2021–2023", detail: "Built the bilingual exam-taking experience, performance reports, and asynchronous grading." },
  { company: "Avid Arvand Technologies · Lernito", role: "Web Application Developer", period: "2019–2021", detail: "Developed an integrated online classroom, question bank, and assessment platform." },
] as const;

export const education = [
  {
    degree: "M.Sc. in Artificial Intelligence",
    institution: "Kharazmi University",
    period: "2020–2023",
    location: "Tehran, Iran",
    thesis: "Low Complexity Blind Video Quality Assessment",
    honor: "National Exceptional Talent Scholarship",
  },
  {
    degree: "B.Sc. in Computer Engineering",
    institution: "University of Guilan",
    period: "2016–2020",
    location: "Rasht, Iran",
    thesis: "Metadata Extraction from Academic Research Papers",
    honor: "Graduated as an Outstanding Student",
  },
] as const;

export const publications = [
  {
    title: "Quality Assessment of AI-Generated Images with Frequency-Aware Visual Features and Semantic Consistency Modeling",
    venue: "MVIP 2026 · Accepted",
    authors: "Parmida Pourmatin, Erfan Asadi, and Azadeh Mansouri",
    award: null,
    summary: "Assesses the quality of AI-generated images using frequency-aware visual features and semantic consistency.",
    paperUrl: null,
  },
  {
    title: "The Role of Fine-Tuned Feature Map Correlation in Video Quality Assessment",
    venue: "IPRIA 2025",
    authors: "Erfan Asadi, Parmida Pourmatin, and Azadeh Mansouri",
    award: "Best Paper Award",
    summary: "Uses correlations between fine-tuned features to estimate video quality without a reference video.",
    paperUrl: "https://ieeexplore.ieee.org/document/11263611/",
  },
  {
    title: "NTIRE 2024 Quality Assessment of AI-Generated Content Challenge",
    venue: "IEEE/CVF CVPR Workshops · 2024",
    authors: "Xiaohong Liu et al., including Erfan Asadi",
    award: null,
    summary: "Reports on a challenge benchmarking methods for assessing the perceptual quality of AI-generated images and videos.",
    paperUrl: "https://openaccess.thecvf.com/content/CVPR2024W/NTIRE/papers/Liu_NTIRE_2024_Quality_Assessment_of_AI-Generated_Content_Challenge_CVPRW_2024_paper.pdf",
  },
] as const;
