import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  DiGit,
  DiJava,
  DiMysql,
  DiPython,
} from "react-icons/di";
import {
  SiAnaconda,
  SiFlask,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiHuggingface,
  SiJupyter,
  SiKeras,
  SiLatex,
  SiNumpy,
  SiOpencv,
  SiOracle,
  SiPandas,
  SiPytorch,
  SiScikitlearn,
  SiStreamlit,
  SiTensorflow,
} from "react-icons/si";
import { BsCodeSlash, BsDatabaseFillGear, BsFillCloudFill } from "react-icons/bs";
import { FaBrain, FaLaptopCode, FaProjectDiagram } from "react-icons/fa";
import { skillGroups } from "@/data/portfolio";

const icons: Record<string, IconType> = {
  Python: DiPython,
  Java: DiJava,
  HTML: SiHtml5,
  CSS: SiCss3,
  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  Keras: SiKeras,
  "Scikit-learn": SiScikitlearn,
  OpenCV: SiOpencv,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  "Hugging Face Transformers": SiHuggingface,
  "LoRA fine-tuning": FaBrain,
  BioGPT: FaProjectDiagram,
  Flask: SiFlask,
  "REST API": BsCodeSlash,
  Streamlit: SiStreamlit,
  "Oracle Cloud Infrastructure": SiOracle,
  "Oracle DB": BsDatabaseFillGear,
  SQL: BsDatabaseFillGear,
  MySQL: DiMysql,
  "VS Code": FaLaptopCode,
  Git: DiGit,
  GitHub: SiGithub,
  "Jupyter Notebook": SiJupyter,
  LaTeX: SiLatex,
  Anaconda: SiAnaconda,
};

export function SkillGrid() {
  return (
    <div className="space-y-10">
      {skillGroups.map((group) => (
        <div key={group.group}>
          <h3 className="mb-4 text-lg font-bold">
            <span className="text-gradient">{group.group}</span>
          </h3>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {group.items.map((item, i) => {
              const Icon = icons[item.name] ?? BsFillCloudFill;
              return (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="group glass-card relative flex items-center gap-3 p-4"
                  tabIndex={0}
                >
                  <Icon aria-hidden className="shrink-0 text-2xl text-purple" />
                  <span className="text-sm font-semibold leading-tight">{item.name}</span>
                  <span
                    role="tooltip"
                    className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-56 -translate-x-1/2 rounded-xl border border-purple/35 bg-popover px-3 py-2 text-xs font-medium text-popover-foreground opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100"
                  >
                    {item.note}
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
