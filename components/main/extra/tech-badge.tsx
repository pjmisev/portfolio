import {
    SiNextdotjs, SiReact, SiTailwindcss, SiMysql,
    SiDotnet, SiTypescript
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { Badge } from "@/components/retroui/Badge";
import React from "react";

const TECH_STACK = {
    nextjs: { name: "Next.js", icon: SiNextdotjs, color: "#000000", border: "#000000", shadow: "rgba(0,0,0,1)" },
    react: { name: "React", icon: SiReact, color: "#007da0", border: "#61DAFB", shadow: "#61DAFB" },
    tailwind: { name: "Tailwind", icon: SiTailwindcss, color: "#2C7A7B", border: "#38B2AC", shadow: "#38B2AC" },
    mysql: { name: "MySQL", icon: SiMysql, color: "#00758F", border: "#00758F", shadow: "#f29111" },
    dotnet: { name: ".NET", icon: SiDotnet, color: "#512bd4", border: "#512bd4", shadow: "#a291fb" },
    csharp: { name: "C#", icon: TbBrandCSharp, color: "#239120", border: "#239120", shadow: "#75d972" },
    typescript: { name: "TS", icon: SiTypescript, color: "#3178C6", border: "#3178C6", shadow: "#89b4f7" },
};

export default function TechBadge  ({ techKey }: { techKey: keyof typeof TECH_STACK }) {
    const tech = TECH_STACK[techKey];
    if (!tech) return null;

    const Icon = tech.icon;

    return (
        <Badge
            variant="outline"
            style={{
                borderColor: tech.border || "black",
                color: tech.color,
                boxShadow: `2px 2px 0px 0px ${tech.shadow || "black"}`
            }}
            className="flex items-center gap-2 bg-white text-black font-bold py-1 px-3 border-2"
        >
            <Icon size={14} /> <span>{tech.name}</span>
        </Badge>
    );
};