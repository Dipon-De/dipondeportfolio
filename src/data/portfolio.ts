import kidneyImg from "@/assets/project-kidney.jpg";
import anomalyImg from "@/assets/project-anomaly.jpg";
import biogptImg from "@/assets/project-biogpt.jpg";
import bitcoinImg from "@/assets/project-bitcoin.jpg";

export const profile = {
  name: "Dipon De",
  location: "Kolkata, India",
  // email: "iamdiponde@gmail.com",
  // phone: "+91-8016829344",
  github: "https://github.com/Dipon-De",
  githubUser: "Dipon-De",
  linkedin: "https://www.linkedin.com/in/dipon-de-2a9570256/",
  // instagram: "https://www.instagram.com/",
  roles: ["Machine Learning Engineer", "Deep Learning Engineer", "LLM / GenAI Developer", "Full-Stack Developer"],
  summary:
    "Computer Science and Engineering graduate specializing in Machine Learning, Deep Learning, and Large Language Models. Experience fine-tuning LLMs (BioGPT), building real-time anomaly detection systems, and developing deep learning solutions for medical image analysis. Oracle Certified Professional, proficient in Python, PyTorch, and TensorFlow, focused on solving real-world problems with AI.",
  tagline: "Restart. Reset. Refocus.",
  resumePath: "/assets/Dipon_De_Resume.pdf",
};

export const education = [
  {
    degree: "B.Tech, Computer Science and Engineering",
    school: "B.P. Poddar Institute of Management & Technology, Kolkata",
    period: "2022 – 2026",
    detail: "CGPA 8.62",
  },
  {
    degree: "Higher Secondary (Science – PCMB), WBCHSE",
    school: "Anandapur Higher Secondary School, West Medinipur",
    period: "2022",
    detail: "94.8%",
  },
  {
    degree: "Secondary, WBSE",
    school: "Teghari High School (H.S.), West Medinipur",
    period: "2020",
    detail: "90.85%",
  },
];

export const coursework = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "OOP",
  "DBMS",
  "Cloud Computing",
  "Software Engineering",
];

export const experience = [
  {
    role: "LLM Internship",
    org: "NITTTR, Kolkata",
    period: "Jun – Jul 2025 · On-site",
    points: [
      "Developed a biomedical QA system by fine-tuning BioGPT with LoRA.",
      "Improved model performance by 40% and cut VRAM usage by 75% through LoRA fine-tuning, enabling deployment on consumer-grade GPUs.",
      "Modified model configs for CPU compatibility (float32 precision in config.json) for broader hardware support.",
    ],
    pdfs: [{ label: "Internship Certificate", url: "/assets/experience/nitttr-internship.pdf" }],
  },
  {
    role: "Training & Internship (part-time)",
    org: "Sabudh Foundation & STPI",
    period: "Jan – Jun 2025 · Online",
    points: [
      "Completed a full Machine Learning module covering supervised and unsupervised techniques.",
      "Hands-on data science workflows using Dataiku — analysis, visualization, platform integration.",
    ],
    pdfs: [
      { label: "Machine Learning Certificate", url: "/assets/experience/machine-learning.pdf" },
      { label: "Dataiku Certificate", url: "/assets/experience/dataiku.pdf" },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  image: string;
  short: string;
  full: string;
  tags: string[];
  tech: string[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "kidney-stone-detection",
    title: "Attention-Guided Kidney Stone Detection from Ultrasound Images",
    image: kidneyImg,
    short:
      "EfficientNetV2-S + CBAM model with automated ROI extraction reaching 99.15% accuracy on ultrasound imaging.",
    full: "EfficientNetV2-S + CBAM deep learning model with automated ROI extraction, transfer learning, augmentation, two-stage fine-tuning. 99.15% accuracy, 99.73% sensitivity, 98.49% specificity on 1,413 test images, with Grad-CAM explainability.",
    tags: ["Deep Learning", "Computer Vision", "Medical AI"],
    tech: ["Python", "PyTorch", "EfficientNetV2-S", "CBAM", "OpenCV", "Scikit-learn", "NumPy", "Grad-CAM"],
    github: "#",
  },
  {
    slug: "real-time-anomaly-detection",
    title: "Real-Time Anomaly Detection and Alert System",
    image: anomalyImg,
    short:
      "MobileNetV2 + LSTM pipeline that spots violent activity in live CCTV streams with a ~49MB deployable model.",
    full: "Real-time deep learning system detecting violent activity in CCTV streams using MobileNetV2 + LSTM for temporal patterns; ~49MB model, lightweight and deployable for real-time surveillance.",
    tags: ["Deep Learning", "Computer Vision"],
    tech: ["TensorFlow", "Keras", "MobileNetV2", "LSTM", "OpenCV", "Flask"],
    github: "#",
  },
  {
    slug: "biogpt-lora",
    title: "Large Language Models for Medical Purpose (BioGPT + LoRA)",
    image: biogptImg,
    short: "Biomedical question-answering system built by fine-tuning BioGPT with LoRA for 40% better performance.",
    full: "Fine-tuned BioGPT with LoRA for a biomedical QA system; 40% performance gain, 75% less VRAM, CPU-compatible via float32 config.",
    tags: ["LLM", "NLP", "GenAI"],
    tech: ["Python", "PyTorch", "Hugging Face", "LoRA", "BioGPT"],
    github: "#",
  },
  {
    slug: "bitcoin-forecasting",
    title: "Bitcoin Price Forecasting & Trading Strategy Backtesting",
    image: bitcoinImg,
    short: "Stacked LSTM forecasting 30-minute BTC prices, backtested into a strategy with 139.92% simulated ROI.",
    full: "Stacked LSTM network forecasting 30-minute BTC prices; backtested trading strategy achieved 139.92% simulated ROI.",
    tags: ["Machine Learning", "Time Series"],
    tech: ["LSTM", "Keras", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    github: "#",
  },
];

export const projectFilters = [
  "All",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "LLM",
  "Medical AI",
  "Time Series",
];

export const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    date: "Aug 2025",
    verify:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=591D0576096FEA953CB186756F6E77B044843DD9ED8B1508A305868391248610",
    pdf: "/assets/certs/generative-ai.pdf",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Developer Professional",
    issuer: "Oracle",
    date: "Aug 2025",
    verify: "#",
    pdf: "/assets/certs/developer.pdf",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle",
    date: "Sept 2025",
    verify: "#",
    pdf: "/assets/certs/data-science.pdf",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Networking Professional",
    issuer: "Oracle",
    date: "Sept 2025",
    verify: "#",
    pdf: "/assets/certs/networking.pdf",
  },
  {
    title: "Oracle AI Vector Search Certified Professional",
    issuer: "Oracle",
    date: "Sept 2025",
    verify: "#",
    pdf: "/assets/certs/ai-vector-search.pdf",
  },
];

export const publications = [
  {
    title:
      "Deep Learning-Based Automated Violence Detection and Identification System for Video Surveillance Applications",
    authors: "Dipon De",
    venue: "IEEE",
    date: "Published Feb 2026",
    link: "#",
  },
];

export const skillGroups: { group: string; items: { name: string; note: string }[] }[] = [
  {
    group: "Languages",
    items: [
      { name: "Python", note: "Primary language for ML, DL and automation" },
      { name: "Java", note: "OOP, data structures and algorithms" },
      { name: "HTML", note: "Semantic markup for web interfaces" },
      { name: "CSS", note: "Responsive layouts and styling" },
    ],
  },
  {
    group: "ML / DL",
    items: [
      { name: "PyTorch", note: "EfficientNetV2-S + CBAM medical imaging models" },
      { name: "TensorFlow", note: "Real-time video anomaly detection pipelines" },
      { name: "Keras", note: "LSTM forecasting and CNN architectures" },
      { name: "Scikit-learn", note: "Classical ML, metrics and evaluation" },
      { name: "OpenCV", note: "ROI extraction and video frame processing" },
      { name: "Pandas", note: "Data wrangling and feature engineering" },
      { name: "NumPy", note: "Numerical computing and array pipelines" },
    ],
  },
  {
    group: "LLM / GenAI",
    items: [
      { name: "Hugging Face Transformers", note: "Model loading, tokenizers and training" },
      { name: "LoRA fine-tuning", note: "75% VRAM reduction on consumer GPUs" },
      { name: "BioGPT", note: "Biomedical question-answering system" },
    ],
  },
  {
    group: "Web / Backend",
    items: [
      { name: "Flask", note: "Model-serving APIs for inference" },
      { name: "REST API", note: "Designing and consuming JSON endpoints" },
      { name: "Streamlit", note: "Rapid ML demo interfaces" },
    ],
  },
  {
    group: "Cloud / DB",
    items: [
      { name: "Oracle Cloud Infrastructure", note: "Oracle Certified Professional, 5 certifications" },
      { name: "Oracle DB", note: "Schema design and querying" },
      { name: "SQL", note: "Joins, aggregation and optimisation" },
      { name: "MySQL", note: "Relational storage for web apps" },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "VS Code", note: "Daily driver editor" },
      { name: "Git", note: "Branching and version control" },
      { name: "GitHub", note: "Project hosting and collaboration" },
      { name: "Jupyter Notebook", note: "Experimentation and analysis" },
      { name: "LaTeX", note: "Research paper typesetting" },
      { name: "Anaconda", note: "Environment and package management" },
    ],
  },
];
