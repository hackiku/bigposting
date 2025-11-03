// src/components/ui/LiquidAsset.tsx
"use client";

import { type ReactNode } from "react";

interface LiquidAssetProps {
	children: ReactNode;
	/** Which side has the liquid bubble */
	liquidSide?: "left" | "right";
	/** Color theme for the liquid */
	color?: "green" | "blue" | "purple" | "orange";
	/** Make liquid full height */
	fullHeight?: boolean;
	className?: string;
}

const liquidColors = {
	green: {
		from: "from-green-100",
		via: "via-emerald-100",
		to: "to-green-50",
	},
	blue: {
		from: "from-blue-100",
		via: "via-cyan-100",
		to: "to-blue-50",
	},
	purple: {
		from: "from-purple-100",
		via: "via-pink-100",
		to: "to-purple-50",
	},
	orange: {
		from: "from-orange-100",
		via: "via-yellow-100",
		to: "to-orange-50",
	},
};

export function LiquidAsset({
	children,
	liquidSide = "right",
	color = "green",
	fullHeight = false,
	className = "",
}: LiquidAssetProps) {
	const colors = liquidColors[color];
	const isRight = liquidSide === "right";

	return (
		<section
			className={`relative py-24 overflow-hidden ${className}`}
		>
			{/* Liquid Bubble - Animated Background */}
			<div
				className={`
					absolute 
					${isRight ? "-right-20 lg:-right-32" : "-left-20 lg:-left-32"}
					${fullHeight ? "top-0 bottom-0" : "top-1/4 bottom-1/4"}
					w-[70%] lg:w-[55%]
					bg-gradient-to-br ${colors.from} ${colors.via} ${colors.to}
					rounded-full
					animate-liquid-wave
					blur-3xl
					opacity-60
					-z-10
				`}
				style={{
					aspectRatio: fullHeight ? "auto" : "1/1",
				}}
			/>

			{/* Secondary Bubble - Layered effect */}
			<div
				className={`
					absolute 
					${isRight ? "right-0 lg:right-10" : "left-0 lg:left-10"}
					${fullHeight ? "top-10 bottom-10" : "top-1/3 bottom-1/3"}
					w-[50%] lg:w-[40%]
					bg-gradient-to-tl ${colors.from} ${colors.to}
					rounded-full
					animate-liquid-wave-slow
					blur-2xl
					opacity-40
					-z-10
				`}
				style={{
					aspectRatio: fullHeight ? "auto" : "1/1",
					animationDelay: "1s",
				}}
			/>

			{/* Content Container */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					className={`
						grid lg:grid-cols-2 gap-12 items-center
						${isRight ? "" : "lg:flex-row-reverse"}
					`}
				>
					{children}
				</div>
			</div>
		</section>
	);
}

