// src/app/home/publishers/content/PublisherBenefits.tsx

import { FiCheckCircle, FiDollarSign, FiZap, FiShield, FiTrendingUp, FiClock } from "react-icons/fi";

const benefits = [
	{
		icon: FiZap,
		title: "Quick Approval",
		description: "Get verified in 24-48 hours and start receiving orders immediately.",
		color: "from-yellow-400 to-orange-500",
	},
	{
		icon: FiDollarSign,
		title: "Set Your Rates",
		description: "Full control over pricing for guest posts and link insertions.",
		color: "from-green-400 to-emerald-500",
	},
	{
		icon: FiShield,
		title: "Escrow Protection",
		description: "Funds held securely until content is published. No chargebacks.",
		color: "from-blue-400 to-indigo-500",
	},
	{
		icon: FiTrendingUp,
		title: "Instant Visibility",
		description: "Get featured to thousands of active advertisers searching for sites.",
		color: "from-purple-400 to-pink-500",
	},
	{
		icon: FiClock,
		title: "Fast Payments",
		description: "Withdraw earnings anytime to PayPal or bank account in minutes.",
		color: "from-cyan-400 to-blue-500",
	},
	{
		icon: FiCheckCircle,
		title: "Verification Badge",
		description: "Boost credibility and get more orders with our verification system.",
		color: "from-green-400 to-teal-500",
	},
];

export function PublisherBenefits() {
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{benefits.map((benefit) => {
				const Icon = benefit.icon;
				return (
					<div
						key={benefit.title}
						className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
					>
						<div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} mb-4`}>
							<Icon className="w-7 h-7 text-white" />
						</div>
						<h3 className="text-xl font-bold text-gray-900 mb-3">
							{benefit.title}
						</h3>
						<p className="text-gray-600 leading-relaxed">
							{benefit.description}
						</p>
					</div>
				);
			})}
		</div>
	);
}