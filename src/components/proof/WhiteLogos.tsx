// src/components/proof/WhiteLogos.tsx
import Image from "next/image";

interface WhiteLogosProps {
	count?: number;
	opacity?: number; // 0.3 to 0.8
	brightness?: number; // 1.2 to 1.8
}

export function WhiteLogos({
	count = 4,
	opacity = 0.5,
	brightness = 1.4
}: WhiteLogosProps) {
	// Simple geometric logo SVG - scales beautifully

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
					<Image 
						src="/logos/logo-placeholder.svg"	
						width={160}
						height={100}
						alt="Logo placeholder"
					/>
				</div>
			))}
		</div>
	);
}