"use client";
import React from 'react';
import Navbar from "@/components/main/navbar";
import Hero from "@/components/main/hero";
import ProjectGrid from "@/components/main/project-grid";
import Footer from "@/components/main/footer";

export default function NeoRetroPortfolio() {

    return (
        <div className="min-h-screen bg-[#F1E5D1] text-black p-6 font-sans selection:bg-blue-500 selection:text-white">
            {/* Navbar Section */}
            <Navbar/>

            {/* Hero Section */}
            <Hero/>

            {/* Project Grid */}
            <ProjectGrid/>

            {/* Footer */}
            <Footer/>
        </div>
    );
}