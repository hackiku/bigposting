// src/app/home/publishers/pricing/PublishersPricing.tsx

const tiers = [
	{
		id: "starter",
		icon: "🌱",
		traffic: "10K",
		revenue: "$200-500",
		features: ["Guest Posts", "Link Insertions", "Fast Approval"],
		popular: false,
	},
	{
		id: "growth",
		icon: "🚀",
		traffic: "100K",
		revenue: "$2,000-5,000",
		features: ["Premium Placements", "Priority Support", "Custom Rates"],
		popular: true,
	},
	{
		id: "enterprise",
		icon: "🔥",
		traffic: "1M+",
		revenue: "$20,000+",
		features: ["Enterprise Support", "Custom Contracts", "Direct Deals"],
		popular: false,
	},
];

export function PublishersPricing() {
	return (
		<div className="bg-neutral-800 rounded-2xl p-8 lg:p-12">
			<h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
				How Much Can You Earn?
			</h2>

			<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
				{tiers.map((tier) => (
					<div
						key={tier.id}
						className={`
							bg-white rounded-xl p-8 
							${tier.popular ? "ring-4 ring-green-500 scale-105" : ""}
							transition-all hover:shadow-2xl
						`}
					>
						{/* Icon */}
						<div className="text-6xl text-center mb-4">{tier.icon}</div>

						{/* Traffic */}
						<div className="text-center mb-2">
							<div className="text-4xl font-bold text-gray-900">{tier.traffic}</div>
							<div className="text-xs text-gray-500 uppercase tracking-wide mt-1">
								Monthly Visitors
							</div>
						</div>

						{/* Revenue - Hero */}
						<div className="text-center mb-8 pb-6 border-b border-gray-200">
							<div className="text-3xl font-bold text-green-600">{tier.revenue}</div>
							<div className="text-xs text-gray-500 mt-1">Est. Monthly Revenue</div>
						</div>

						{/* Features - Simple list */}
						<ul className="space-y-2">
							{tier.features.map((feature, i) => (
								<li key={i} className="flex items-center gap-2 text-sm text-gray-700">
									<svg
										className="w-5 h-5 text-green-500 flex-shrink-0"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span>{feature}</span>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}