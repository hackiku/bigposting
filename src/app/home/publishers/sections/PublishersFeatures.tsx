// src/app/home/publishers/sections/PublishersFeatures.tsx

import { FiDollarSign, FiCheckCircle, FiClock, FiTrendingUp } from "react-icons/fi";

const features = [
	{
		icon: FiDollarSign,
		title: "Earn Passive Income",
		description: "Set your own prices for guest posts and link insertions. Withdraw earnings fast with low fees.",
	},
	{
		icon: FiCheckCircle,
		title: "Get Verified",
		description: "Boost credibility with our verification badge. Verified sites get more orders.",
	},
	{
		icon: FiClock,
		title: "Fast Payments",
		description: "Receive payment as soon as advertiser approves. Withdraw to PayPal or bank account.",
	},
	{
		icon: FiTrendingUp,
		title: "Grow Your Traffic",
		description: "Quality backlinks help your SEO. More visibility means more opportunities.",
	},
];

export function PublishersFeatures() {
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
			{features.map((feature) => {
				const Icon = feature.icon;
				return (
					<div key={feature.title} className="text-center">
						<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
							<Icon className="w-8 h-8" />
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-3">
							{feature.title}
						</h3>
						<p className="text-gray-600">
							{feature.description}
						</p>
					</div>
				);
			})}
		</div>
	);
}