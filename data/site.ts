export interface SocialLink {
  label: "LinkedIn" | "GitHub";
  handle: string;
  href: string;
}

export const profile = {
  name: "Abdullah Durrani",
  headline: "Data Scientist & AI Engineer",
  roles: ["Data Scientist", "Machine Learning Engineer", "AI Engineer", "Generative AI Developer"],
  location: "Lahore, Pakistan",
  email: "abdullah.zahid@codebricks.co",
  intro:
    "I work where statistics meets engineering — turning messy data into models I can explain, and models into retrieval, NLP and forecasting systems people can actually use.",
  description:
    "Abdullah Durrani is a Data Scientist and AI Engineer in Lahore, Pakistan, working across statistics, machine learning, deep learning, NLP and retrieval-augmented generation.",
};

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    handle: "abdullah-durrani-2299khan",
    href: "https://www.linkedin.com/in/abdullah-durrani-2299khan/",
  },
  {
    label: "GitHub",
    handle: "abdullahdurrani-1",
    href: "https://github.com/abdullahdurrani-1",
  },
];

export const linkedIn = socialLinks[0];
export const github = socialLinks[1];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#architecture" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

/**
 * Canonical site URL. Set NEXT_PUBLIC_SITE_URL once a custom domain is attached;
 * on Vercel the production URL is picked up automatically.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
