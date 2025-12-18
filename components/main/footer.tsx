import React from "react";

export default function Footer() {
    return (
        <footer className="max-w-5xl mx-auto border-t-4 border-black pt-8 flex justify-between items-center text-sm font-black uppercase">
            <p>© {new Date().getFullYear()} Pijus Misevicius</p>
        </footer>
    )
}