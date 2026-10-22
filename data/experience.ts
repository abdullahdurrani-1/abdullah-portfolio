export interface Experience {
  id: string;
  company: string;
  role: string;
  /** Shown next to the role, e.g. "Internship". Omitted when not documented. */
  engagement?: string;
  period: string;
  current: boolean;
  website: string;
  logo: string;
  description: string;
  areas: string[];
}

export const experiences: Experience[] = [
  {
    id: "codebricks",
    company: "Codebricks Global",
    role: "Data Scientist",
    period: "Present",
    current: true,
    website: "https://www.codebricks.co/",
    logo: "/assets/companies/codebricks.jpg",
    description:
      "Working in a data science and AI-focused software environment, applying statistical analysis, machine learning, data visualization and analytical problem-solving to practical business and technical problems.",
    areas: ["Data Science", "Machine Learning", "Statistics", "Data Analytics", "Visualization", "AI"],
  },
  {
    id: "flavorwiki",
    company: "FlavorWiki",
    role: "Data Scientist",
    period: "Present",
    current: true,
    website: "https://flavorwiki.com/",
    logo: "/assets/companies/flavorwiki.png",
    description:
      "Working across data science and statistical analytics workflows involving consumer research, statistical testing, segmentation, dimensionality reduction, machine learning analysis and data visualization.",
    areas: [
      "Consumer Analytics",
      "Statistical Testing",
      "Segmentation",
      "PCA",
      "Machine Learning",
      "Data Visualization",
    ],
  },
  {
    id: "geniteam",
    company: "GenITeam Solutions",
    role: "AI/ML Engineer",
    engagement: "Internship",
    period: "Jun 2026 — Sep 2026",
    current: false,
    website: "https://www.geniteam.com/",
    logo: "/assets/companies/geniteam.jpg",
    description:
      "Internship on practical AI and machine-learning systems, with hands-on exposure to Generative AI, RAG architectures, deep learning, NLP, LLM fine-tuning, vector databases and AI solution development.",
    areas: ["Generative AI", "RAG", "Deep Learning", "NLP", "LLMs", "Fine-tuning", "Vector Databases"],
  },
];
