// src/components/ui/BlobBackground.tsx

interface BlobBackgroundProps {
	side?: "left" | "right";
	color?: "blue" | "green" | "purple" | "orange" | "yellow";
}

const colorGradients = {
	blue: { start: "#dbeafe", mid: "#bfdbfe", end: "#eff6ff" },
	green: { start: "#d1fae5", mid: "#a7f3d0", end: "#ecfdf5" },
	purple: { start: "#e9d5ff", mid: "#d8b4fe", end: "#f5f3ff" },
	orange: { start: "#fed7aa", mid: "#fdba74", end: "#ffedd5" },
	yellow: { start: "#fef3c7", mid: "#fde68a", end: "#fef9c3" }
};

export function BlobBackground({ side = "right", color = "blue" }: BlobBackgroundProps) {
	const colors = colorGradients[color];
	const isLeft = side === "left";

	return (
		<div
			className={`absolute inset-y-0 ${isLeft ? '-left-1/4' : '-right-1/4'} w-3/4 opacity-30 pointer-events-none overflow-hidden`}
		>
			<svg
				viewBox="0 0 1200 1000"
				className="w-full h-full"
				preserveAspectRatio="xMidYMid slice"
				style={{ transform: isLeft ? 'scaleX(-1)' : 'scaleX(1)' }}
			>
				<defs>
					<linearGradient id={`blob-grad-${color}-${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" style={{ stopColor: colors.start, stopOpacity: 1 }} />
						<stop offset="50%" style={{ stopColor: colors.mid, stopOpacity: 0.85 }} />
						<stop offset="100%" style={{ stopColor: colors.end, stopOpacity: 0.7 }} />
					</linearGradient>

					<filter id={`blob-blur-${color}-${side}`}>
						<feGaussianBlur in="SourceGraphic" stdDeviation="80" />
					</filter>
				</defs>

				{/* Organic blob shape that extends from viewport edge */}
				<path
					d="M 1200 0 
					   C 1100 80, 1050 200, 1080 350 
					   C 1110 500, 1070 650, 1100 800 
					   C 1130 950, 1200 1000, 1200 1000 
					   L 1200 0 Z"
					fill={`url(#blob-grad-${color}-${side})`}
					filter={`url(#blob-blur-${color}-${side})`}
				/>

				{/* Secondary smaller blob for depth */}
				<ellipse
					cx={isLeft ? "300" : "900"}
					cy="400"
					rx="350"
					ry="280"
					fill={colors.mid}
					opacity="0.3"
					filter={`url(#blob-blur-${color}-${side})`}
				/>
			</svg>
		</div>
	);
}