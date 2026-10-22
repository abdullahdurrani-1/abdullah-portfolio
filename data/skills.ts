import type { TechIconName } from "@/components/ui/TechIcon";

export interface Skill {
  name: string;
  icon?: TechIconName;
}

export interface SkillCategory {
  id: string;
  title: string;
  note: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    note: "Day-to-day languages and notebooks",
    skills: [
      { name: "Python", icon: "python" },
      { name: "SQL", icon: "sql" },
      { name: "Pandas", icon: "pandas" },
      { name: "NumPy", icon: "numpy" },
      { name: "Jupyter", icon: "jupyter" },
    ],
  },
  {
    id: "statistics",
    title: "Statistics & Analytics",
    note: "The foundation from a BS in Statistics",
    skills: [
      { name: "Statistical Testing" },
      { name: "Exploratory Data Analysis" },
      { name: "Consumer Segmentation" },
      { name: "PCA" },
      { name: "Data Visualization", icon: "plotly" },
    ],
  },
  {
    id: "ml",
    title: "Machine & Deep Learning",
    note: "Classical models through recurrent networks",
    skills: [
      { name: "scikit-learn", icon: "scikitlearn" },
      { name: "XGBoost / LightGBM" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "Keras", icon: "keras" },
      { name: "PyTorch", icon: "pytorch" },
      { name: "Feature Engineering" },
      { name: "Model Evaluation" },
    ],
  },
  {
    id: "nlp",
    title: "AI & NLP",
    note: "Transformers for language tasks",
    skills: [
      { name: "Hugging Face Transformers", icon: "huggingface" },
      { name: "BERT Fine-tuning" },
      { name: "Text Classification" },
      { name: "Sentence-Transformers" },
    ],
  },
  {
    id: "genai",
    title: "Generative AI, LLMs & RAG",
    note: "Grounded generation over private knowledge",
    skills: [
      { name: "Google Gemini", icon: "gemini" },
      { name: "RAG" },
      { name: "Embeddings" },
      { name: "FAISS / Vector Search" },
      { name: "Hybrid Retrieval (BM25)" },
      { name: "Prompt Engineering" },
      { name: "LLM Fine-tuning" },
    ],
  },
  {
    id: "data-eng",
    title: "Data Engineering",
    note: "Getting data clean, shaped and reproducible",
    skills: [
      { name: "SQL Pipelines", icon: "sql" },
      { name: "Data Cleaning & Validation" },
      { name: "Training Pipelines" },
    ],
  },
  {
    id: "versioning",
    title: "Git & DVC",
    note: "Versioning code, data and models",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "DVC", icon: "dvc" },
    ],
  },
  {
    id: "deployment",
    title: "APIs & Deployment",
    note: "From model file to usable service",
    skills: [
      { name: "FastAPI", icon: "fastapi" },
      { name: "Pydantic", icon: "pydantic" },
      { name: "Docker", icon: "docker" },
      { name: "Streamlit", icon: "streamlit" },
    ],
  },
];
