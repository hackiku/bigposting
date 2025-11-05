// src/app/home/advertisers/content/AdvertiserSticker.tsx

interface AdvertiserStickerProps {
	number: string;
	label: string;
	rotation?: number;
	color?: "blue" | "green" | "purple" | "orange";
}

const colorStyles = {
	blue: "#2563eb",      // Bright modern blue
	green: "#059669",     // Teal-ish green (like Stripe)
	purple: "#9333ea",    // Vibrant purple
	orange: "#ea580c",    // Hot orange
};

export function AdvertiserSticker({
	number,
	label,
	rotation = 0,
	color = "green",
}: AdvertiserStickerProps) {
	const mainColor = colorStyles[color];

	return (
		<div
			className="inline-block transition-transform hover:scale-110 hover:rotate-0 cursor-default select-none"
			style={{
				transform: `rotate(${rotation}deg)`,
			}}
		>
			<div className="relative" style={{ filter: 'drop-shadow(2px 3px 4px rgba(0,0,0,0.10))' }}>
				{/* White stroke layer (behind) */}
				<div
					className="absolute inset-0 font-black text-center"
					style={{
						WebkitTextStroke: '30px white',
						color: 'transparent',
					}}
				>
					<div className="text-4xl sm:text-5xl mb-1">{number}</div>
					<div className="text-xs sm:text-sm uppercase tracking-wide">
						{label}
					</div>
				</div>

				{/* Main colored text (front) */}
				<div
					className="relative font-black text-center"
					style={{
						color: mainColor,
					}}
				>
					<div className="text-4xl sm:text-5xl mb-1">{number}</div>
					<div className="text-xs sm:text-sm uppercase tracking-wide">
						{label}
					</div>
				</div>
			</div>
		</div>
	);
}