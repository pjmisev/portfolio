import {Button} from "@/components/retroui/Button";
import React from "react";

export default function Navbar() {
    return (
        <nav className="max-w-5xl mx-auto flex justify-between items-center mb-16">
            <div className="flex gap-4">
                <Button
                    variant="secondary"
                    size="sm"
                >
                    Projects
                </Button>
                <Button
                    variant="default"
                    size="sm"
                >
                    Let&#39;s Talk
                </Button>
            </div>
        </nav>
    )
}