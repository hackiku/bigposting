// src/components/ui/FlowingSection.tsx
"use client";

import { type ReactNode } from "react";

interface FlowingSectionProps {
	children: ReactNode;
	/** Which side the liquid flows from */
	side?: "left" | "right";
	/** Color theme */
	color?: "blue" | "green" | "purple" | "orange";
	className?: string;
}

const colorGradients = {
	blue: {
		start: "#dbeafe",
		mid: "#bfdbfe",
		end: "#eff6ff"
	},
	green: {
		start: "#d1fae5",
		mid: "#a7f3d0",
		end: "#ecfdf5"
	},
	purple: {
		start: "#e9d5ff",
		mid: "#d8b4fe",
		end: "#f5f3ff"
	},
	orange: {
		start: "#fed7aa",
		mid: "#fdba74",
		end: "#ffedd5"
	}
};

export function FlowingSection({
	children,
	side = "right",
	color = "blue",
	className = ""
}: FlowingSectionProps) {
	const colors = colorGradients[color];
	const isLeft = side === "left";

	return (
		<section className={`relative py-24 overflow-hidden ${className}`}>
			{/* SVG Liquid Blob Background */}
			<div
				className={`absolute inset-y-0 ${isLeft ? '-left-1/4' : '-right-1/4'} w-2/3 opacity-40`}
				style={{
					transform: isLeft ? 'scaleX(-1)' : 'scaleX(1)'
				}}
			>
				<svg
					viewBox="0 0 800 1000"
					className="w-full h-full"
					preserveAspectRatio="xMidYMid slice"
				>
					<defs>
						<linearGradient id={`liquid-gradient-${color}-${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" style={{ stopColor: colors.start, stopOpacity: 1 }} />
							<stop offset="50%" style={{ stopColor: colors.mid, stopOpacity: 0.8 }} />
							<stop offset="100%" style={{ stopColor: colors.end, stopOpacity: 0.6 }} />
						</linearGradient>

						{/* Blur filter for softer edges */}
						<filter id={`blur-${color}-${side}`}>
							<feGaussianBlur in="SourceGraphic" stdDeviation="80" />
						</filter>
					</defs>

					{/* Main flowing blob shape */}
					<path
						d="M 650 0 C 750 100 780 250 750 400 C 720 550 680 700 720 850 C 760 1000 650 1000 600 1000 L 0 1000 L 0 0 Z"
						fill={`url(#liquid-gradient-${color}-${side})`}
						filter={`url(#blur-${color}-${side})`}
					>
						{/* Optional: Add subtle animation */}
						<animate
							attributeName="d"
							dur="20s"
							repeatCount="indefinite"
							values="
								M 650 0 C 750 100 780 250 750 400 C 720 550 680 700 720 850 C 760 1000 650 1000 600 1000 L 0 1000 L 0 0 Z;
								M 680 0 C 720 150 800 280 770 420 C 740 560 700 680 750 830 C 800 980 680 1000 620 1000 L 0 1000 L 0 0 Z;
								M 650 0 C 750 100 780 250 750 400 C 720 550 680 700 720 850 C 760 1000 650 1000 600 1000 L 0 1000 L 0 0 Z
							"
						/>
					</path>
				</svg>
			</div>

			{/* Content */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{children}
			</div>
		</section>
	);
}