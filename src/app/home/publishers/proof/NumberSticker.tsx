// src/app/home/publishers/proof/NumberSticker.tsx

interface NumberStickerProps {
	number: string;
	label: string;
	rotation?: number; // -12 to 12 degrees
	color?: 'green' | 'blue' | 'purple' | 'orange' | 'yellow';
}

const colorClasses = {
	green: 'bg-green-50 border-green-200 text-green-700',
	blue: 'bg-blue-50 border-blue-200 text-blue-700',
	purple: 'bg-purple-50 border-purple-200 text-purple-700',
	orange: 'bg-orange-50 border-orange-200 text-orange-700',
	yellow: 'bg-yellow-50 border-yellow-200 text-yellow-700',
};

export function NumberSticker({
	number,
	label,
	rotation = 0,
	color = 'green'
}: NumberStickerProps) {
	const rotationClass = rotation > 0 ? `rotate-${rotation}` : rotation < 0 ? `-rotate-${Math.abs(rotation)}` : '';

	return (
		<div
			className={`inline-block ${rotationClass} transform transition-transform hover:scale-110 hover:rotate-0 cursor-default`}
			style={{
				rotate: `${rotation}deg`,
			}}
		>
			<div className={`
				px-6 py-4 rounded-2xl border-4 shadow-lg
				${colorClasses[color]}
			`}>
				<div className="text-center">
					<div className="text-3xl sm:text-4xl font-black mb-1">
						{number}
					</div>
					<div className="text-xs sm:text-sm font-semibold uppercase tracking-wide opacity-80">
						{label}
					</div>
				</div>
			</div>
		</div>
	);
}