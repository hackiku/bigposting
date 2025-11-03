// src/components/proof/WhiteLogos.tsx

interface WhiteLogosProps {
	count?: number;
	opacity?: number; // 0.3 to 0.8
	brightness?: number; // 1.2 to 1.8
}

export function WhiteLogos({
	count = 6,
	opacity = 0.5,
	brightness = 1.4
}: WhiteLogosProps) {
	// Simple geometric logo SVG - scales beautifully
	const LogoSvg = () => (
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 120 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{/* Abstract tech/media logo shape */}
			<rect x="10" y="8" width="20" height="24" rx="4" fill="currentColor" />
			<circle cx="50" cy="20" r="12" fill="currentColor" />
			<path d="M70 8L85 20L70 32V8Z" fill="currentColor" />
			<rect x="90" y="12" width="20" height="4" rx="2" fill="currentColor" />
			<rect x="90" y="20" width="15" height="4" rx="2" fill="currentColor" />
			<rect x="90" y="28" width="18" height="4" rx="2" fill="currentColor" />
		</svg>
	);

	return (
		<div className="flex items-center justify-center gap-6 sm:gap-8 flex-wrap px-4 py-2">
			{Array.from({ length: count }).map((_, idx) => (
				<div
					key={idx}
					className="w-24 sm:w-28 h-8 sm:h-10 text-white transition-all duration-300 hover:scale-110"
					style={{
						opacity,
						filter: `grayscale(1) brightness(${brightness})`,
					}}
				>
					<LogoSvg />
				</div>
			))}
		</div>
	);
}