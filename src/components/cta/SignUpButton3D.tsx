// src/components/cta/SignUpButton3D.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

interface SignUpButton3DProps {
	text?: string;
	href?: string;
	variant?: "red" | "orange" | "green";
}

const variantStyles = {
	red: {
		gradient: "from-brand-red via-red-500 to-red-600",
		border: "border-red-700",
		shadow: "shadow-[0_4px_0_0_rgb(185,28,28),0_8px_16px_-2px_rgba(253,70,83,0.4)]",
		hoverShadow: "hover:shadow-[0_2px_0_0_rgb(185,28,28),0_6px_12px_-2px_rgba(253,70,83,0.5)]",
		activeShadow: "active:shadow-[0_1px_0_0_rgb(185,28,28),0_3px_8px_-2px_rgba(253,70,83,0.4)]",
		topHighlight: "from-red-200/50 via-red-100/30",
		bottomGlow: "from-red-900/40",
		ring: "focus:ring-red-300/50",
	},
	orange: {
		gradient: "from-brand-orange via-orange-500 to-orange-600",
		border: "border-orange-700",
		shadow: "shadow-[0_4px_0_0_rgb(194,65,12),0_8px_16px_-2px_rgba(252,123,97,0.4)]",
		hoverShadow: "hover:shadow-[0_2px_0_0_rgb(194,65,12),0_6px_12px_-2px_rgba(252,123,97,0.5)]",
		activeShadow: "active:shadow-[0_1px_0_0_rgb(194,65,12),0_3px_8px_-2px_rgba(252,123,97,0.4)]",
		topHighlight: "from-orange-200/50 via-orange-100/30",
		bottomGlow: "from-orange-900/40",
		ring: "focus:ring-orange-300/50",
	},
	green: {
		gradient: "from-brand-green via-teal-500 to-teal-600",
		border: "border-teal-700",
		shadow: "shadow-[0_4px_0_0_rgb(15,118,110),0_8px_16px_-2px_rgba(1,201,170,0.4)]",
		hoverShadow: "hover:shadow-[0_2px_0_0_rgb(15,118,110),0_6px_12px_-2px_rgba(1,201,170,0.5)]",
		activeShadow: "active:shadow-[0_1px_0_0_rgb(15,118,110),0_3px_8px_-2px_rgba(1,201,170,0.4)]",
		topHighlight: "from-teal-200/50 via-teal-100/30",
		bottomGlow: "from-teal-900/40",
		ring: "focus:ring-teal-300/50",
	},
};

export function SignUpButton3D({
	text = "Get Started",
	href = "/auth/signup",
	variant = "red",
}: SignUpButton3DProps) {
	const [isHovered, setIsHovered] = useState(false);
	const styles = variantStyles[variant];

	return (
		<Link href={href} passHref>
			<button
				className={`group relative inline-flex items-center gap-2 px-8 py-4 cursor-pointer
					bg-linear-to-b ${styles.gradient}
					text-white font-bold text-lg tracking-wide
					rounded-full
					border-2 ${styles.border}
					${styles.shadow}
					${styles.hoverShadow}
					${styles.activeShadow}
					hover:translate-y-[2px] active:translate-y-[4px]
					transition-all duration-150
					overflow-hidden
					focus:outline-none focus:ring-4 ${styles.ring}`}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{/* Top glossy highlight */}
				<div className={`absolute inset-x-1 top-0 h-1/2
					bg-linear-to-b ${styles.topHighlight} to-transparent 
					rounded-t-full opacity-40 group-hover:opacity-60 
					transition-opacity duration-300`}
				/>

				{/* Bottom shadow for depth */}
				<div className={`absolute inset-x-0 bottom-0 h-1/3 
					bg-linear-to-t ${styles.bottomGlow} via-transparent to-transparent 
					rounded-b-full
					group-hover:from-black/50
					transition-all duration-300`}
				/>

				{/* Side edge highlights */}
				<div className="absolute inset-y-0 left-0 w-8 
					bg-linear-to-r from-white/20 to-transparent 
					rounded-l-full"
				/>
				<div className="absolute inset-y-0 right-0 w-8 
					bg-linear-to-l from-black/10 to-transparent 
					rounded-r-full"
				/>

				{/* Shimmer effect on hover */}
				<div className={`absolute inset-0 bg-linear-to-r 
					from-transparent via-white/30 to-transparent 
					translate-x-[-200%] group-hover:translate-x-[200%]
					transition-transform duration-700 ease-out
					skew-x-12`}
				/>

				<span className="relative z-10 flex items-center gap-2 drop-shadow-sm">
					{text}
				</span>
			</button>
		</Link>
	);
}