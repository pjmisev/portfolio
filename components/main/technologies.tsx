import React from "react";
import {
  SiJavascript,
  SiReact,
  SiVuedotjs,
  SiSvelte,
  SiNodedotjs,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiSqlite,
  SiMongodb,
  SiLinux,
  SiApple,
  SiGithub,
  SiBitbucket,
  SiGitlab,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiDavinciresolve,
  SiTailwindcss,
  SiTypescript,
  SiDotnet,
  SiCplusplus,
} from "react-icons/si";
import {
  TbBrandCSharp,
  TbBrandWindows,
  TbBrandAzure,
  TbSql,
} from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import TechBadgeLarge from "./extra/tech-badge-large";

interface Technology {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  border: string;
  shadow: string;
}

interface TechCategory {
  label: string;
  accent: string;
  technologies: Technology[];
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    label: "Programming",
    accent: "#f59e0b",
    technologies: [
      {
        name: "JS",
        icon: SiJavascript,
        color: "#b5820a",
        border: "#F7DF1E",
        shadow: "#F7DF1E",
      },
      {
        name: "TS",
        icon: SiTypescript,
        color: "#3178C6",
        border: "#3178C6",
        shadow: "#89b4f7",
      },
      {
        name: "React",
        icon: SiReact,
        color: "#007da0",
        border: "#61DAFB",
        shadow: "#61DAFB",
      },
      {
        name: "Vue",
        icon: SiVuedotjs,
        color: "#35495e",
        border: "#42b883",
        shadow: "#42b883",
      },
      {
        name: "Svelte",
        icon: SiSvelte,
        color: "#c0392b",
        border: "#FF3E00",
        shadow: "#FF6B35",
      },
      {
        name: "Node",
        icon: SiNodedotjs,
        color: "#215732",
        border: "#3C873A",
        shadow: "#68a063",
      },
      {
        name: "PHP",
        icon: SiPhp,
        color: "#4F5B93",
        border: "#8993be",
        shadow: "#b0b9e0",
      },
      {
        name: "Laravel",
        icon: SiLaravel,
        color: "#c0392b",
        border: "#FF2D20",
        shadow: "#FF6B6B",
      },
      {
        name: "Java",
        icon: FaJava,
        color: "#e76f00",
        border: "#f89820",
        shadow: "#f8c860",
      },
      {
        name: "C++",
        icon: SiCplusplus,
        color: "#00427e",
        border: "#0057A8",
        shadow: "#5599dd",
      },
      {
        name: "C#",
        icon: TbBrandCSharp,
        color: "#239120",
        border: "#239120",
        shadow: "#75d972",
      },
      {
        name: ".NET",
        icon: SiDotnet,
        color: "#512bd4",
        border: "#512bd4",
        shadow: "#a291fb",
      },
    ],
  },
  {
    label: "Databases",
    accent: "#10b981",
    technologies: [
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#00758F",
        border: "#00758F",
        shadow: "#f29111",
      },
      {
        name: "MSSQL",
        icon: TbSql,
        color: "#b01017",
        border: "#CC2927",
        shadow: "#f07070",
      },
      {
        name: "SQLite",
        icon: SiSqlite,
        color: "#0f80cc",
        border: "#003B57",
        shadow: "#5bb8f5",
      },
      {
        name: "Mongo",
        icon: SiMongodb,
        color: "#116149",
        border: "#47A248",
        shadow: "#6fcc6f",
      },
    ],
  },
  {
    label: "Systems & Cloud",
    accent: "#6366f1",
    technologies: [
      {
        name: "Linux",
        icon: SiLinux,
        color: "#333333",
        border: "#555555",
        shadow: "#f0c030",
      },
      {
        name: "macOS",
        icon: SiApple,
        color: "#555555",
        border: "#999999",
        shadow: "#cccccc",
      },
      {
        name: "Windows",
        icon: TbBrandWindows,
        color: "#00adef",
        border: "#00adef",
        shadow: "#7fd8f7",
      },
      {
        name: "Azure",
        icon: TbBrandAzure,
        color: "#0089D6",
        border: "#0089D6",
        shadow: "#50c0f7",
      },
    ],
  },
  {
    label: "Collaboration",
    accent: "#ec4899",
    technologies: [
      {
        name: "GitHub",
        icon: SiGithub,
        color: "#24292e",
        border: "#555555",
        shadow: "#aaaaaa",
      },
      {
        name: "Bitbucket",
        icon: SiBitbucket,
        color: "#0052CC",
        border: "#0052CC",
        shadow: "#4d94f5",
      },
      {
        name: "GitLab",
        icon: SiGitlab,
        color: "#e24329",
        border: "#FC6D26",
        shadow: "#FCA326",
      },
    ],
  },
  {
    label: "Design & Media",
    accent: "#f97316",
    technologies: [
      {
        name: "Photoshop",
        icon: SiAdobephotoshop,
        color: "#001e36",
        border: "#31a8ff",
        shadow: "#31a8ff",
      },
      {
        name: "Premiere",
        icon: SiAdobepremierepro,
        color: "#00005b",
        border: "#9999FF",
        shadow: "#ccccff",
      },
      {
        name: "DaVinci",
        icon: SiDavinciresolve,
        color: "#222222",
        border: "#888888",
        shadow: "#b388ff",
      },
      {
        name: "Tailwind",
        icon: SiTailwindcss,
        color: "#2C7A7B",
        border: "#38B2AC",
        shadow: "#38B2AC",
      },
    ],
  },
];

const LANGUAGES = [
  { name: "English", level: "Fluent", flag: "🇬🇧" },
  { name: "Lithuanian", level: "Fluent", flag: "🇱🇹" },
  { name: "Irish", level: "Conversational", flag: "🇮🇪" },
];

const Technologies: React.FC = () => {
  return (
    <section id="skills" className="max-w-5xl mx-auto pb-20">
      {/* Heading */}
      <div className="flex justify-between items-end mb-10">
        <h3 className="text-4xl font-black uppercase border-b-[6px] border-black pb-1">
          Technologies / Skills
        </h3>
      </div>

      {/* Category Cards */}
      <div className="flex flex-col gap-6">
        {TECH_CATEGORIES.map((category) => (
          <div
            key={category.label}
            className="relative border-2 border-black p-6 rounded-2xl"
            style={{
              boxShadow: `4px 4px 0px ${category.accent}`,
            }}
          >
            {/* Category Label */}
            <span
              className="absolute rounded-lg -top-3.5 left-4 px-2 text-xs font-black uppercase tracking-widest bg-white border-2 border-black"
              style={{ color: category.accent }}
            >
              {category.label}
            </span>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              {category.technologies.map((tech) => (
                <TechBadgeLarge
                  key={tech.name}
                  name={tech.name}
                  icon={tech.icon}
                  color={tech.color}
                  border={tech.border}
                  shadow={tech.shadow}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Languages — special card */}
        <div
          className="relative border-2 border-black p-6 rounded-2xl"
          style={{ boxShadow: "4px 4px 0px #94a3b8" }}
        >
          <span className="absolute rounded-lg -top-3.5 left-4 px-2 text-xs font-black uppercase tracking-widest bg-white border-2 border-black text-slate-500">
            Languages
          </span>
          <div className="flex flex-wrap gap-4 pt-2">
            {LANGUAGES.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center gap-2 border-2 border-black px-4 py-2 font-bold text-sm rounded-2xl"
                style={{ boxShadow: "2px 2px 0px #94a3b8" }}
              >
                <span className="text-xl">{lang.flag}</span>
                <span>{lang.name}</span>
                <span className="text-xs font-normal text-gray-500 border-l-2 border-black pl-2">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
