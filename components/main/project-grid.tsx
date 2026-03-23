"use client";
import { Card } from "@/components/retroui/Card";
import { ExternalLink } from "lucide-react";
// @ts-expect-error Because for some reason the type definitions are not exported correctly.
import { SiDotnet, SiGithub, SiMysql, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import React from "react";
import { Button } from "@/components/retroui/Button";
import { TbBrandCSharp } from "react-icons/tb";
import TechBadge from "./extra/tech-badge";

const TECH_STACK = {
  nextjs: {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
    border: "#000000",
    shadow: "rgba(0,0,0,1)",
  },
  react: {
    name: "React",
    icon: SiReact,
    color: "#007da0",
    border: "#61DAFB",
    shadow: "#61DAFB",
  },
  tailwind: {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "#2C7A7B",
    border: "#38B2AC",
    shadow: "#38B2AC",
  },
  mysql: {
    name: "MySQL",
    icon: SiMysql,
    color: "#00758F",
    border: "#00758F",
    shadow: "#f29111",
  },
  dotnet: {
    name: ".NET",
    icon: SiDotnet,
    color: "#512bd4",
    border: "#512bd4",
    shadow: "#a291fb",
  },
  csharp: {
    name: "C#",
    icon: TbBrandCSharp,
    color: "#239120",
    border: "#239120",
    shadow: "#75d972",
  },
  typescript: {
    name: "TS",
    icon: SiTypescript,
    color: "#3178C6",
    border: "#3178C6",
    shadow: "#89b4f7",
  },
};

// Define the valid keys for your TechBadge component to prevent type errors
type TechKey = "nextjs" | "react" | "tailwind" | "mysql" | "dotnet" | "csharp";

interface Project {
    name: string;
    description: string;
    github: string;
    demo: string;
    image: string;
    stack: TechKey[];
}

export default function ProjectGrid() {
    const projects: Project[] = [
        {
            name: "Timetable App",
            description: "A timetable viewing application made using Next.js, Tailwind CSS, and MySQL. Built as a personal project to help fellow students view their timetables.",
            github: "https://github.com/pjmisev/timetable-app.git",
            demo: "https://timetables.pjmisev.com",
            image: "/img/timetables-app.png",
            stack: ["nextjs", "react", "tailwind", "mysql"]
        },
        {
            name: "ROMifier",
            description: "A simple .NET WinForms app made to help newcomers with installing a Custom ROM on their Android devices. Built as a personal project to help me learn C# and .NET.",
            github: "https://github.com/pjmisev/ROMifier.git",
            demo: "",
            image: "/img/romifier-app.png",
            stack: ["dotnet", "csharp"]
        },
        {
            name: "Portfolio Website",
            description: "You're already here! This website was built using Next.js and Tailwind CSS. It's a simple portfolio website to showcase my work and showcase some of my skills.",
            github: "https://github.com/pjmisev/portfolio.git",
            demo: "",
            image: "/img/portfolio-app.png",
            stack: ["nextjs", "react", "tailwind"]
        }
    ];

    return (
        <section id="projects" className="max-w-5xl mx-auto pb-20">
            <div className="flex justify-between items-end mb-10">
                <h3 className="text-4xl font-black uppercase underline decoration-[6px] underline-offset-[12px]">
                    Selected Works
                </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project) => {
                    const hasDemo = project.demo && project.demo.trim() !== "";

                    return (
                        <Card
                            key={project.name}
                            className="group p-0 border-4 border-black bg-white overflow-hidden transition-all hover:-translate-y-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col"
                        >
                            {hasDemo ? (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block relative h-48 w-full overflow-hidden border-b-4 border-black cursor-pointer"
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                        style={{ backgroundImage: `url(${project.image})` }}
                                    />
                                    <div className="absolute inset-0 bg-yellow-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[2px]">
                                        <div className="bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 font-black uppercase text-sm">
                                            <ExternalLink size={20} /> View Demo
                                        </div>
                                    </div>
                                </a>
                            ) : (
                                <div className="relative h-48 w-full overflow-hidden border-b-4 border-black bg-gray-100">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center grayscale-[0.5]"
                                        style={{ backgroundImage: `url(${project.image})` }}
                                    />
                                </div>
                            )}

                            <div className="p-6 flex-grow flex flex-col">
                                <h4 className="font-black text-2xl mb-2 uppercase italic tracking-tighter">
                                    {project.name}
                                </h4>
                                <p className="text-sm font-bold text-gray-700 leading-snug">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mt-auto pt-6">
                                    {project.stack.map((techKey) => (
                                        <TechBadge
                                            key={techKey}
                                            name={TECH_STACK[techKey]?.name || "Unknown"}
                                            icon={TECH_STACK[techKey]?.icon}
                                            color={TECH_STACK[techKey]?.color}
                                            border={TECH_STACK[techKey]?.border}
                                            shadow={TECH_STACK[techKey]?.shadow}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="px-6 pb-6">
                                <a href={project.github} target="_blank" rel="noreferrer" className="block">
                                    <Button
                                        className="flex items-center justify-center gap-2 text-sm font-bold uppercase w-full"
                                        variant="outline"
                                        size="sm"
                                    >
                                        <SiGithub size={18} />
                                        Source Code
                                    </Button>
                                </a>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </section>
    );
}