"use client";
import React, { useState, useEffect } from 'react';

const commands = [
    "php artisan about",
    "git status",
    "curl wttr.in/Dublin",
    "cat skills.json",
    "neofetch"
];

export function TerminalTypewriter() {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (subIndex === commands[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 2000); // Wait at end
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % commands.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    return (
        <span className="text-white">
      {commands[index].substring(0, subIndex)}
            <span className="animate-pulse ml-1 text-green-400">|</span>
    </span>
    );
}