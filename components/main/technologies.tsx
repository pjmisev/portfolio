import React from "react";
import { Badge } from "@/components/retroui/Badge";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiDotnet,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import TechBadgeLarge from "./extra/tech-badge-large";

interface Technology {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  border: string;
  shadow: string;
}

const TECHNOLOGIES: Technology[] = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
    border: "#000000",
    shadow: "rgba(0,0,0,1)",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#007da0",
    border: "#61DAFB",
    shadow: "#61DAFB",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "#2C7A7B",
    border: "#38B2AC",
    shadow: "#38B2AC",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#00758F",
    border: "#00758F",
    shadow: "#f29111",
  },
  {
    name: ".NET",
    icon: SiDotnet,
    color: "#512bd4",
    border: "#512bd4",
    shadow: "#a291fb",
  },
  {
    name: "C#",
    icon: TbBrandCSharp,
    color: "#239120",
    border: "#239120",
    shadow: "#75d972",
  },
  {
    name: "TS",
    icon: SiTypescript,
    color: "#3178C6",
    border: "#3178C6",
    shadow: "#89b4f7",
  },
];

const Technologies: React.FC = () => {
  return (
    <section id="projects" className="max-w-5xl mx-auto pb-20">
    <div className="flex justify-between items-end mb-10">
        <h3 className="text-4xl font-black uppercase underline decoration-[6px] underline-offset-[12px]">
            Technologies / Skills
        </h3>
    </div>
      <div className="flex flex-wrap gap-4">
        {TECHNOLOGIES.map((technology) => (
          <TechBadgeLarge
            key={technology.name}
            name={technology.name}
            icon={technology.icon}
            color={technology.color}
            border={technology.border}
            shadow={technology.shadow}
          />
        ))}
      </div>
    </section>
  );
};

export default Technologies;
