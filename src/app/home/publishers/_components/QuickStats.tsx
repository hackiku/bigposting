// src/app/home/publishers/_components/QuickStats.tsx

const stats = [
	{
		icon: "⚡",
		number: "24h",
		label: "Website Approval",
		border: "border-yellow-300",
		bg: "bg-yellow-50",
	},
	{
		icon: "💰",
		number: "$↑↓",
		label: "Full Pricing Control",
		border: "border-green-300",
		bg: "bg-green-50",
	},
	{
		icon: "✓",
		number: "Verified",
		label: "Security Badge",
		border: "border-blue-300",
		bg: "bg-blue-50",
	},
];

export function QuickStats() {
	return (
		<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
			{stats.map((stat) => (
				<div
					key={stat.label}
					className={`${stat.bg} ${stat.border} border-4 rounded-2xl p-8 text-center hover:scale-105 transition-transform`}
				>
					{/* <div className="text-5xl mb-4">{stat.icon}</div> */}
					<div className="text-4xl font-black mb-2">{stat.number}</div>
					<div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
						{stat.label}
					</div>
				</div>
			))}
		</div>
	);
}