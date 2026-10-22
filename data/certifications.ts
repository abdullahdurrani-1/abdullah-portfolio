export interface Certification {
  id: string;
  title: string;
  issuer: string;
  platform?: string;
  issued: string;
  credentialId: string;
  /** Official verification link — only add when you have the real URL. */
  url?: string;
}

export const certifications: Certification[] = [
  {
    id: "deep-learning",
    title: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI",
    platform: "Coursera",
    issued: "Jun 2026",
    credentialId: "7MLQL23RYBSS",
  },
  {
    id: "ml-scientist",
    title: "Machine Learning Scientist in Python",
    issuer: "DataCamp",
    issued: "Jul 2025",
    credentialId: "696,714",
  },
  {
    id: "data-engineer",
    title: "Associate Data Engineer in SQL",
    issuer: "DataCamp",
    issued: "Jul 2025",
    credentialId: "662,441",
  },
  {
    id: "business-strategy",
    title: "Foundations of Business Strategy",
    issuer: "University of Virginia",
    issued: "Dec 2023",
    credentialId: "D6H2BV4P4Q8Y",
  },
  {
    id: "ai-ladder",
    title: "The AI Ladder: A Framework for Deploying AI in your Enterprise",
    issuer: "IBM",
    issued: "Dec 2023",
    credentialId: "5HKBHYNK3UUV",
  },
  {
    id: "intro-ai",
    title: "Introduction to Artificial Intelligence (AI) (with Honors)",
    issuer: "IBM",
    issued: "Dec 2023",
    credentialId: "2YHUVHPTYG6",
  },
];
