// src/app/home/publishers/content/RotatingText.tsx
"use client"

import { useState, useEffect } from "react";

export default function RotatingText() {
	const words = ["Website", "Blog", "Magazine"];
	const [index, setIndex] = useState(0);
	const [displayText, setDisplayText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const currentWord = words[index];
		const typingSpeed = isDeleting ? 50 : 100;

		const timeout = setTimeout(() => {
			if (!isDeleting) {
				// Typing forward
				if (displayText.length < currentWord.length) {
					setDisplayText(currentWord.slice(0, displayText.length + 1));
				} else {
					// Wait before deleting
					setTimeout(() => setIsDeleting(true), 1500);
				}
			} else {
				// Deleting backward
				if (displayText.length > 0) {
					setDisplayText(displayText.slice(0, -1));
				} else {
					// Move to next word
					setIsDeleting(false);
					setIndex((i) => (i + 1) % words.length);
				}
			}
		}, typingSpeed);

		return () => clearTimeout(timeout);
	}, [displayText, isDeleting, index, words]);

	return (
		<span className="relative inline-block min-w-[240px] text-brand-green">
			{displayText}
			<span className="animate-pulse">|</span>
			{/* Animated underline swoosh */}
			<svg
				className="absolute -bottom-2 left-0 w-full h-3 pointer-events-none"
				viewBox="0 0 240 12"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M2 10C50 2, 100 2, 150 6C180 8, 210 10, 238 8"
					stroke="currentColor"
					strokeWidth="3"
					strokeLinecap="round"
					className="text-brand-green opacity-40"
					style={{
						strokeDasharray: 240,
						strokeDashoffset: displayText.length === words[index].length ? 0 : 240,
						transition: 'stroke-dashoffset 0.8s ease-out'
					}}
				/>
			</svg>
		</span>
	);
}