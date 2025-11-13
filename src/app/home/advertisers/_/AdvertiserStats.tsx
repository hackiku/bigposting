// src/app/home/advertisers/contentAdvertiserStats.tsx

const stats = [
	{
		icon: "🎯",
		number: "150K+",
		label: "Quality Websites",
		border: "border-blue-300",
		bg: "bg-blue-50",
	},
	{
		icon: "⚡",
		number: "2-4 Days",
		label: "Average Turnaround",
		border: "border-green-300",
		bg: "bg-green-50",
	},
	{
		icon: "🛡️",
		number: "100%",
		label: "Escrow Protected",
		border: "border-purple-300",
		bg: "bg-purple-50",
	},
];

export function AdvertiserStats() {
	return (
		<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
			{stats.map((stat) => (
				<div
					key={stat.label}
					className={`${stat.bg} ${stat.border} border-4 rounded-2xl p-8 text-center hover:scale-105 transition-transform`}
				>
					<div className="text-5xl mb-4">{stat.icon}</div>
					<div className="text-4xl font-black mb-2">{stat.number}</div>
					<div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
						{stat.label}
					</div>
				</div>
			))}
		</div>
	);
}