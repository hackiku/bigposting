// src/app/home/advertisers/_components/stats/NumberSticker.tsx

interface AdvertiserStickerProps {
	number: string;
	label: string;
	rotation?: number;
	color?: "blue" | "green" | "purple" | "orange";
}

const colorClasses = {
	blue: "bg-blue-50 border-blue-200 text-blue-700",
	green: "bg-green-50 border-green-200 text-green-700",
	purple: "bg-purple-50 border-purple-200 text-purple-700",
	orange: "bg-orange-50 border-orange-200 text-orange-700",
};

export function AdvertiserSticker({
	number,
	label,
	rotation = 0,
	color = "blue",
}: AdvertiserStickerProps) {
	return (
		<div
			className="inline-block transform transition-transform hover:scale-110 hover:rotate-0 cursor-default"
			style={{ rotate: `${rotation}deg` }}
		>
			<div className={`px-6 py-4 rounded-2xl border-4 shadow-lg ${colorClasses[color]}`}>
				<div className="text-center">
					<div className="text-3xl sm:text-4xl font-black mb-1">{number}</div>
					<div className="text-xs sm:text-sm font-semibold uppercase tracking-wide opacity-80">
						{label}
					</div>
				</div>
			</div>
		</div>
	);
}