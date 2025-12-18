"use client";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import {
    SiGithub
} from "react-icons/si";
import React from "react";
import {TerminalTypewriter} from "@/components/main/extra/terminal-typewriter";

export default function Hero() {
    return (
        <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="z-10">
                <Badge className="flex gap-2 bg-yellow-400 text-black border-2 border-black uppercase font-bold px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] w-fit">
                    Available <div className="w-3 h-3 mt-1 rounded-full border-2 border-black bg-[#27c93f]" />
                </Badge>
                <h2 className="text-6xl font-black leading-[1.1] mb-6 uppercase tracking-tight mt-4">
                    Building stuff <br />
                    <span className="bg-blue-600 text-white px-3 py-1 inline-block -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        with impact.
                    </span>
                </h2>
                <p className="text-xl font-medium mb-8 max-w-md leading-relaxed text-gray-900">
                    I'm <strong>Pijus</strong>, a full-stack developer based in Ireland. I currently work on Laravel, React, Next.js, and Tailwind CSS projects. However, that is not the full extent of my skills. Click <strong className="cursor-pointer underline decoration-2 underline-offset-4 hover:text-blue-600 transition-colors">here</strong> to see the rest!
                </p>
                <div className="flex flex-wrap gap-4">
                    <Button
                        size="lg"
                        className="px-8 h-14 text-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                    >
                        View Work
                    </Button>

                    <a href="https://github.com/pjmisev" target="_blank" rel="noreferrer" className="flex gap-2">
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-white px-8 h-14 text-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                        >
                            <SiGithub className="mr-2 h-6 w-6" /> GitHub
                        </Button>
                    </a>
                </div>
            </div>

            <Card className="hidden md:flex flex-col relative aspect-video md:aspect-square bg-[#1a1a1a] p-0 overflow-hidden border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-full bg-white border-b-4 border-black p-3 flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full border-2 border-black bg-[#ff5f56]" />
                        <div className="w-3 h-3 rounded-full border-2 border-black bg-[#ffbd2e]" />
                        <div className="w-3 h-3 rounded-full border-2 border-black bg-[#27c93f]" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-black">pijus — bash</span>
                    <div className="w-10" />
                </div>

                <div className="p-6 font-mono text-sm sm:text-base leading-relaxed flex-1 bg-[#1a1a1a]">
                    <div className="flex gap-2 mb-4">
                        <span className="text-green-400 font-bold">➜</span>
                        <span className="text-cyan-400">~</span>
                        <TerminalTypewriter />
                    </div>

                    <div className="text-gray-300 space-y-2 text-xs sm:text-sm">
                        <div className="opacity-80">
                            <p className="text-blue-400"># System Analysis</p>
                            <p><span className="text-gray-500">Location:</span> Monaghan, Ireland 🇮🇪</p>
                            <p><span className="text-gray-500">Main_Stack:</span> Laravel / Next.js / React / MySQL</p>
                            <p><span className="text-gray-500">Current_Focus:</span> Building stuff with <strong>impact.</strong></p>

                            <div className="mt-4 p-2 border border-gray-700 bg-gray-900/50">
                                <p className="text-yellow-500">// Recent Activity</p>
                                <p>Compiling assets...</p>
                                <p className="text-green-500">DONE: Project optimized for 2025.</p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
                </div>
            </Card>
        </section>
    );
}