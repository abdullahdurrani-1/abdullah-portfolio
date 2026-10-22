export type ProjectPreview = "ozone" | "scholar" | "abstract" | "churn";

export interface Project {
  id: string;
  title: string;
  category: string;
  problem: string;
  approach: string;
  /** Figures quoted from the project's own README / notebook. */
  metrics?: { label: string; value: string }[];
  stack: string[];
  github: string;
  /** Only set when a real, working deployment exists. */
  demo?: string;
  preview: ProjectPreview;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "ozone-prediction",
    title: "NASA Ozone Prediction",
    category: "Forecasting · ML/DL · API",
    problem:
      "Forecasting ozone concentration (ppbv) from almost three decades of atmospheric monitoring data, and making the forecasts usable outside a notebook.",
    approach:
      "Benchmarks five classical ML models and three deep-learning models on NASA atmospheric records, then serves single-model, ensemble and batch predictions through a typed FastAPI service with optional Gemini-generated explanations.",
    metrics: [
      { label: "Records", value: "539,808" },
      { label: "Best R² (GRU)", value: "0.991" },
      { label: "Best RMSE", value: "0.68 ppbv" },
    ],
    stack: ["Python", "scikit-learn", "XGBoost", "TensorFlow / Keras", "FastAPI", "Pydantic", "Docker", "Gemini"],
    github: "https://github.com/abdullahdurrani-1/Ozone-Prediction-",
    preview: "ozone",
    featured: true,
  },
  {
    id: "scholar-search",
    title: "Scholar Search",
    category: "Retrieval-Augmented Generation",
    problem:
      "General-purpose chatbots give fluent answers that are hard to verify against the textbooks you actually trust.",
    approach:
      "Indexes academic PDFs with both dense embeddings (FAISS) and BM25, fuses the rankings with Reciprocal Rank Fusion, and has Gemini answer only from retrieved chunks — citing source and page for every claim.",
    metrics: [
      { label: "Retrieval", value: "Dense + BM25" },
      { label: "Embeddings", value: "384-dim" },
    ],
    stack: ["Python", "PyMuPDF", "Sentence-Transformers", "FAISS", "BM25", "Gemini", "FastAPI", "Streamlit"],
    github: "https://github.com/abdullahdurrani-1/ScholarSearch",
    preview: "scholar",
  },
  {
    id: "abstract-intelligence",
    title: "Abstract Intelligence",
    category: "NLP · Text Classification",
    problem: "Filtering ML/AI papers out of large, mixed collections of research abstracts by hand is slow.",
    approach:
      "Compares a TF-IDF + Logistic Regression baseline with a BERT model fine-tuned using class-weighted loss for imbalance, served through a Streamlit dashboard showing label, confidence and class probabilities.",
    metrics: [
      { label: "Accuracy", value: "88%" },
      { label: "Macro F1", value: "83%" },
    ],
    stack: ["Python", "PyTorch", "Transformers", "BERT", "scikit-learn", "Streamlit", "Plotly"],
    github: "https://github.com/abdullahdurrani-1/Abstract-Intellegence",
    preview: "abstract",
  },
  {
    id: "customer-churn",
    title: "Customer Churn Prediction",
    category: "Classification · Explainability",
    problem: "Telecom retention teams need to know which customers are likely to leave — and why — before they do.",
    approach:
      "Engineers tenure, contract and payment-behaviour features, trains XGBoost, LightGBM, Random Forest and stacking ensembles with SMOTE for class imbalance, tunes the decision threshold, and explains predictions with SHAP.",
    metrics: [{ label: "Engineered features", value: "30+" }],
    stack: ["Python", "Pandas", "scikit-learn", "XGBoost", "LightGBM", "SHAP", "Streamlit", "Plotly"],
    github: "https://github.com/abdullahdurrani-1/Customer-Churn-Project-",
    preview: "churn",
  },
];

/** Test-set results from the Ozone Prediction README. */
export const ozoneModelScores = [
  { model: "Baseline", r2: 0 },
  { model: "Linear", r2: 0.8075 },
  { model: "LSTM", r2: 0.8481 },
  { model: "Tree", r2: 0.9334 },
  { model: "Forest", r2: 0.9752 },
  { model: "MLP", r2: 0.9902 },
  { model: "XGBoost", r2: 0.9902 },
  { model: "GRU", r2: 0.9914 },
];
