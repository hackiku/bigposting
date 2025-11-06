// src/components/ui/DecorativeSection.tsx
"use client";

import { type ReactNode } from "react";

interface DecorativeSectionProps {
	children: ReactNode;
	/** Add decorative blob */
	blob?: "left" | "right" | "none";
	/** Color theme for the blob */
	color?: "green" | "blue" | "purple" | "orange";
	className?: string;
}

const blobColors = {
	green: "from-green-100 to-emerald-50",
	blue: "from-blue-100 to-cyan-50",
	purple: "from-purple-100 to-pink-50",
	orange: "from-orange-100 to-yellow-50",
};

export function DecorativeSection({
	children,
	blob = "none",
	color = "green",
	className = "",
}: DecorativeSectionProps) {
	return (
		<div className={`py-24 relative overflow-hidden ${className}`}>
			{/* Optional decorative blob */}
			{blob !== "none" && (
				<div
					className={`
						absolute top-0 ${blob === "right" ? "right-0" : "left-0"}
						w-1/2 h-full
						bg-gradient-to-${blob === "right" ? "l" : "r"} ${blobColors[color]}
						blur-3xl opacity-40 -z-10
					`}
				/>
			)}

			{/* Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{children}
			</div>
		</div>
	);
}