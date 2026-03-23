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

interface TechBadgeProps {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  border: string;
  shadow: string;
}

export default function TechBadgeLarge({
  name,
  icon: Icon,
  color,
  border,
  shadow,
}: TechBadgeProps) {
  return (
    <Badge
      variant="outline"
      style={{
        borderColor: border,
        color,
        boxShadow: `2px 2px 0px 0px ${shadow}`,
      }}
      className="flex items-center gap-2 bg-white text-black font-bold py-4 px-6 border-4 rounded-3xl"
    >
      <Icon size={32} /> <span className="font-bold">{name}</span>
    </Badge>
  );
}