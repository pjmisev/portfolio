"use client";
import React, { useState } from "react";
import { SiReact, SiLaravel, SiNodedotjs } from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";

interface Highlight {
  tag: string;
  text: string;
  icons?: React.ReactNode[];
}

interface Job {
  period: string;
  status: "ACTIVE" | "ENDED";
  title: string;
  company: string;
  type?: string;
  location?: string;
  highlights?: Highlight[];
  description?: string;
  skills?: string[];
  accentColor: string;
}

const JOBS: Job[] = [
  {
    period: "06/2023 – Present",
    status: "ACTIVE",
    title: "Junior Web Developer",
    company: "James Boylan Safety LTD (JBS Group)",
    type: "Full-time",
    location: "Monaghan, Ireland · Hybrid",
    accentColor: "#2563eb",
    highlights: [
      {
        tag: "Full-Stack",
        text: "Collaborated on a high-traffic customer sales portal, implementing service management and inventory modules using React and Laravel.",
        icons: [
          <SiReact key="react" className="w-3.5 h-3.5" style={{ color: "#61DAFB" }} />,
          <SiLaravel key="laravel" className="w-3.5 h-3.5" style={{ color: "#FF2D20" }} />,
        ],
      },
      {
        tag: "Workflow",
        text: "Developed a centralized enterprise dashboard that streamlined order fulfillment and internal procurement approvals, reducing manual processing time.",
        icons: [],
      },
      {
        tag: "Legacy",
        text: "Audited and maintained legacy Node.js/Express APIs to ensure continued stability and security.",
        icons: [
          <SiNodedotjs key="node" className="w-3.5 h-3.5" style={{ color: "#3C873A" }} />,
        ],
      },
      {
        tag: "AI",
        text: "Engineered a document processing workflow using Azure Document Intelligence to automate PDF data extraction into the ERP system via a custom Node.js API.",
        icons: [
          <TbBrandAzure key="azure" className="w-3.5 h-3.5" style={{ color: "#0089D6" }} />,
          <SiNodedotjs key="node2" className="w-3.5 h-3.5" style={{ color: "#3C873A" }} />,
        ],
      },
    ],
  },
  {
    period: "11/2023 – 07/2024 · 9 mos",
    status: "ENDED",
    title: "Sales Assistant",
    company: "Homesavers",
    type: "Part-time",
    location: "Monaghan, Ireland · On-site",
    accentColor: "#d97706",
    description:
      "Dedicated Sales Assistant focused on delivering a positive shopping experience. Specialised in assisting customers with product inquiries, managing point-of-sale transactions with precision, and maintaining a well-stocked, visually appealing storefront. A reliable team player who could handle peak-hour rushes with a calm and helpful attitude.",
    skills: ["Inventory Management", "Merchandising", "POS Systems", "Customer Service", "Visual Merchandising", "Teamwork"],
  },
  {
    period: "03/2023 – 06/2023 · 4 mos",
    status: "ENDED",
    title: "Waiter",
    company: "Andy's Bar & Restaurant",
    type: "Part-time",
    location: "Monaghan, Ireland · On-site",
    accentColor: "#7c3aed",
    description:
      "Dedicated to providing an exceptional dining experience through attentive service and deep product knowledge. Acted as a brand ambassador, guiding guests through menu selections, suggesting pairings, and ensuring every request was met with efficiency. Skilled in POS systems, table-side etiquette, and maintaining a seamless flow between kitchen and front of house.",
    skills: ["Communication", "Customer Service", "POS Systems", "Table Etiquette", "Teamwork"],
  },
  {
    period: "12/2022 – 01/2023 · 2 mos",
    status: "ENDED",
    title: "Sales Assistant",
    company: "Next",
    type: "Seasonal · Christmas",
    location: "Monaghan, Ireland · On-site",
    accentColor: "#be185d",
    description:
      "Represented the Next brand as Christmas seasonal staff by providing personalised styling advice and exceptional service in a fast-paced fashion environment. Focused on driving sales through product knowledge and upselling across clothing, footwear, and home departments. Maintained high-end visual merchandising standards to reflect the brand's premium identity.",
    skills: ["Visual Merchandising", "KPI Awareness", "Upselling", "Customer Service", "Product Knowledge", "Styling"],
  },
  {
    period: "06/2022 – 08/2022 · 3 mos",
    status: "ENDED",
    title: "Sales Assistant",
    company: "Next",
    type: "Seasonal · Summer",
    location: "Monaghan, Ireland · On-site",
    accentColor: "#be185d",
    description:
      "Represented the Next brand as Summer seasonal staff by providing personalised styling advice and exceptional service in a fast-paced fashion environment. Focused on driving sales through product knowledge and upselling across clothing, footwear, and home departments. Committed to maintaining high-end visual merchandising standards.",
    skills: ["Visual Merchandising", "KPI Awareness", "Upselling", "Customer Service", "Product Knowledge"],
  },
];

const TAG_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  "Full-Stack": { bg: "#61DAFB22", text: "#007da0", border: "#61DAFB" },
  Workflow:     { bg: "#facc1522", text: "#92400e", border: "#facc15" },
  Legacy:       { bg: "#3C873A22", text: "#166534", border: "#3C873A" },
  AI:           { bg: "#0089D622", text: "#0089D6", border: "#0089D6" },
};

const WorkExperience: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="max-w-5xl mx-auto pb-20">
      <div className="flex justify-between items-end mb-10">
        <h3 className="text-4xl font-black uppercase border-b-[6px] border-black pb-1">
          Work Experience
        </h3>
      </div>

      <div className="flex flex-col gap-6">
        {JOBS.map((job, jobIndex) => (
          <div
            key={jobIndex}
            className="border-2 border-black"
            style={{ boxShadow: "6px 6px 0px #000" }}
          >
            {/* Job Header */}
            <div
              onClick={() => setExpanded(expanded === jobIndex ? null : jobIndex)}
              className="cursor-pointer"
            >
              <div className={`flex items-stretch ${expanded === jobIndex ? "border-b-2 border-black" : ""}`}>
                {/* Left accent bar */}
                <div className="w-2 shrink-0" style={{ backgroundColor: job.accentColor }} />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 flex-1">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-black uppercase tracking-widest text-gray-500 font-mono">
                        {job.period}
                      </span>
                      <span
                        className={`text-[10px] font-black uppercase tracking-widest border border-black px-1.5 py-0.5 ${
                          job.status === "ACTIVE"
                            ? "bg-green-400 text-black"
                            : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {job.status}
                      </span>
                      {job.type && (
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 border border-gray-500 px-1.5 py-0.5">
                          {job.type}
                        </span>
                      )}
                    </div>
                    <p className="text-xl font-black uppercase">{job.title}</p>
                    <p className="text-sm font-bold text-gray-600">
                      {job.company}
                      {job.location && (
                        <span className="font-normal text-gray-500"> · {job.location}</span>
                      )}
                    </p>
                  </div>

                  <div
                    className="text-xl font-black border-2 border-black w-8 h-8 flex items-center justify-center shrink-0 bg-white transition-transform duration-200"
                    style={{ transform: expanded === jobIndex ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </div>
                </div>
              </div>
            </div>

            {/* Expanded: highlights (dev role) */}
            {expanded === jobIndex && job.highlights && (
              <div>
                {job.highlights.map((h, i) => {
                  const tagStyle = TAG_COLORS[h.tag] ?? { bg: "#f3f4f6", text: "#111", border: "#000" };
                  return (
                    <div key={i} className="flex items-stretch border-t-2 border-black">
                      <div className="w-10 shrink-0 flex items-center justify-center border-r-2 border-black bg-gray-50">
                        <span className="text-xs font-black text-gray-500 font-mono">0{i + 1}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 p-4 flex-1">
                        <div className="shrink-0">
                          <span
                            className="text-[10px] font-black uppercase tracking-widest px-2 py-1 border inline-block whitespace-nowrap"
                            style={{
                              background: tagStyle.bg,
                              color: tagStyle.text,
                              borderColor: tagStyle.border,
                            }}
                          >
                            {h.tag}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-gray-800 leading-relaxed flex-1">
                          {h.text}
                        </p>
                        {h.icons && h.icons.length > 0 && (
                          <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-center">
                            {h.icons.map((icon, iconIdx) => (
                              <span key={iconIdx} className="border border-gray-500 p-1 bg-white">
                                {icon}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Expanded: description + skills (non-dev roles) */}
            {expanded === jobIndex && job.description && (
              <div className="p-4">
                <p className="text-sm font-medium text-gray-800 leading-relaxed mb-4">
                  {job.description}
                </p>
                {job.skills && job.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-black uppercase tracking-widest px-2 py-1 border-2 border-black bg-white"
                        style={{ boxShadow: "2px 2px 0px #000" }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;