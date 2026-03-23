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
  icon: React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number }>
  color: string;
  border: string;
  shadow: string;
}

export default function TechBadge({
  name,
  icon: Icon,  // ← rename here
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
      className="flex items-center gap-2 bg-white text-black font-bold py-1 px-3 border-2"
    >
      <Icon size={14} /> <span>{name}</span>
    </Badge>
  );
}