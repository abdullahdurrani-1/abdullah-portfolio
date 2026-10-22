import { Database } from "lucide-react";
import {
  siDocker,
  siDvc,
  siFastapi,
  siGit,
  siGithub,
  siGooglegemini,
  siHuggingface,
  siJupyter,
  siKeras,
  siNumpy,
  siPandas,
  siPlotly,
  siPydantic,
  siPython,
  siPytorch,
  siScikitlearn,
  siStreamlit,
  siTensorflow,
  type SimpleIcon,
} from "simple-icons";

const brandIcons = {
  docker: siDocker,
  dvc: siDvc,
  fastapi: siFastapi,
  gemini: siGooglegemini,
  git: siGit,
  github: siGithub,
  huggingface: siHuggingface,
  jupyter: siJupyter,
  keras: siKeras,
  numpy: siNumpy,
  pandas: siPandas,
  plotly: siPlotly,
  pydantic: siPydantic,
  python: siPython,
  pytorch: siPytorch,
  scikitlearn: siScikitlearn,
  streamlit: siStreamlit,
  tensorflow: siTensorflow,
} satisfies Record<string, SimpleIcon>;

export type TechIconName = keyof typeof brandIcons | "sql";

/** Monochrome technology logo that inherits the surrounding text colour. */
export default function TechIcon({ name, className = "h-4 w-4" }: { name: TechIconName; className?: string }) {
  if (name === "sql") return <Database className={className} aria-hidden="true" strokeWidth={1.75} />;

  const icon = brandIcons[name];
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" focusable="false">
      <path d={icon.path} />
    </svg>
  );
}
