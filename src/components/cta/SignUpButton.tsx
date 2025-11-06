// src/components/cta/SignUpButton.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

interface SignUpButtonProps {
	text?: string;
	href?: string;
}

export function SignUpButton({
	text = "Become an Advertiser",
	href = "/auth/signup",
}: SignUpButtonProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Link href={href} passHref>
			<button
				className="group relative inline-flex items-center gap-2 px-8 py-4 cursor-pointer
					bg-linear-to-b from-yellow-400 via-yellow-500 to-yellow-600
					text-gray-900 font-black text-xl tracking-wide
					rounded-full
					border-2 border-yellow-700
					shadow-[0_5px_0_0_rgb(161,98,7),0_10px_20px_-3px_rgba(0,0,0,0.4)]
					hover:shadow-[0_3px_0_0_rgb(161,98,7),0_7px_15px_-3px_rgba(0,0,0,0.5)]
					active:shadow-[0_1px_0_0_rgb(161,98,7),0_3px_8px_-2px_rgba(0,0,0,0.4)]
					hover:translate-y-[2px] active:translate-y-[4px]
					transition-all duration-150
					overflow-hidden
					focus:outline-none focus:ring-4 focus:ring-yellow-300/50"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{/* Top glossy highlight with more shadow */}
				<div className="absolute inset-x-1 top-0 h-full
					bg-linear-to-b from-white/50 via-white/25 to-transparent 
					rounded-t-full opacity-30 group-hover:opacity-95 
					transition-opacity duration-300
					shadow-[inset_0_-2px_8px_rgba(0,0,0,0.15)]"
				/>

				{/* Bottom glass reflection - key 3D effect */}
				<div className="absolute inset-x-0 bottom-0 h-1/3 
					bg-linear-to-t from-yellow-800/35 via-transparent to-transparent 
					rounded-b-full
					group-hover:from-yellow-800/45
					transition-all duration-300"
				/>

				{/* Side edge highlights for depth */}
				<div className="absolute inset-y-0 left-0 w-12 
					bg-linear-to-r from-yellow-300/30 to-transparent 
					rounded-l-full"
				/>
				<div className="absolute inset-y-0 right-0 w-12 
					bg-linear-to-l from-yellow-700/20 to-transparent 
					rounded-r-full"
				/>

				{/* Subtle shimmer on hover */}
				<div className={`absolute inset-0 bg-linear-to-r 
					from-transparent via-white/30 to-transparent 
					translate-x-[-200%] group-hover:translate-x-[200%]
					transition-transform duration-700 ease-out
					skew-x-12`}
				/>

				<span className="text-xl relative z-10 flex items-center gap-2 font-semibold drop-shadow-sm">
					{text}
				</span>
			</button>
		</Link>
	);
}