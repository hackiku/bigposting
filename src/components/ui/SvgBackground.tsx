// src/components/ui/SvgBackground.tsx

interface SvgBackgroundProps {
	side?: "left" | "right";
	color?: "blue" | "green" | "purple" | "orange";
}

const colorGradients = {
	blue: { start: "#dbeafe", mid: "#bfdbfe", end: "#eff6ff" },
	green: { start: "#d1fae5", mid: "#a7f3d0", end: "#ecfdf5" },
	purple: { start: "#e9d5ff", mid: "#d8b4fe", end: "#f5f3ff" },
	orange: { start: "#fed7aa", mid: "#fdba74", end: "#ffedd5" }
};

export function SvgBackground({ side = "right", color = "blue" }: SvgBackgroundProps) {
	const colors = colorGradients[color];
	const isLeft = side === "left";

	return (
		<div
			className={`absolute inset-y-0 ${isLeft ? '-left-1/4' : '-right-1/4'} w-2/3 opacity-40 pointer-events-none`}
			style={{ transform: isLeft ? 'scaleX(-1)' : 'scaleX(1)' }}
		>
			<svg
				viewBox="0 0 800 1000"
				className="w-full h-full"
				preserveAspectRatio="xMidYMid slice"
			>
				<defs>
					<linearGradient id={`grad-${color}-${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" style={{ stopColor: colors.start, stopOpacity: 1 }} />
						<stop offset="50%" style={{ stopColor: colors.mid, stopOpacity: 0.8 }} />
						<stop offset="100%" style={{ stopColor: colors.end, stopOpacity: 0.6 }} />
					</linearGradient>

					<filter id={`blur-${color}-${side}`}>
						<feGaussianBlur in="SourceGraphic" stdDeviation="60" />
					</filter>
				</defs>

				<path
					d="M 650 0 C 750 100 780 250 750 400 C 720 550 680 700 720 850 C 760 1000 650 1000 600 1000 L 0 1000 L 0 0 Z"
					fill={`url(#grad-${color}-${side})`}
					filter={`url(#blur-${color}-${side})`}
				/>
			</svg>
		</div>
	);
}