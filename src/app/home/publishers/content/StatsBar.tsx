// src/app/home/publishers/content/StatsBar.tsx

const stats = [
	{ value: "10,000+", label: "Active Publishers", color: "text-green-600" },
	{ value: "$2.5M+", label: "Paid Out", color: "text-blue-600" },
	{ value: "50,000+", label: "Orders Completed", color: "text-purple-600" },
	{ value: "4.8/5", label: "Publisher Rating", color: "text-orange-600" },
];

export function StatsBar() {
	return (
		<div className="grid md:grid-cols-4 gap-8">
			{stats.map((stat) => (
				<div key={stat.label} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
					<div className={`text-4xl font-bold ${stat.color} mb-2`}>
						{stat.value}
					</div>
					<div className="text-gray-600">{stat.label}</div>
				</div>
			))}
		</div>
	);
}