// src/app/home/publishers/features/PublisherBenefits.tsx

import Image from "next/image";
import { FiDollarSign, FiZap, FiShield, FiTrendingUp, FiCheckCircle, FiUsers } from "react-icons/fi";

const benefits = [
	{
		icon: FiDollarSign,
		title: "Earn Up to 91%",
		description: "Keep 91% of each sale with only 9% platform fee. No hidden charges.",
		image: "/images/earnings.webp",
		color: "from-green-400 to-emerald-500",
	},
	{
		icon: FiTrendingUp,
		title: "Higher Search Rankings",
		description: "Verified sites appear at the top of search results for maximum visibility.",
		image: "/images/search.webp",
		color: "from-purple-400 to-pink-500",
	},
	{
		icon: FiZap,
		title: "Fast Payouts",
		description: "Instant withdrawals to PayPal or bank account. No waiting periods.",
		image: "/images/fast.webp",
		color: "from-cyan-400 to-blue-500",
	},
	{
		icon: FiUsers,
		title: "Verified Advertisers Only",
		description: "No negotiation, no spam. Only work with verified, quality advertisers.",
		image: "/images/verified.webp",
		color: "from-blue-400 to-indigo-500",
	},
	{
		icon: FiShield,
		title: "Escrow Protection",
		description: "Payments held securely until you publish. Zero chargeback risk.",
		image: "/images/protection.webp",
		color: "from-orange-400 to-red-500",
	},
	{
		icon: FiCheckCircle,
		title: "24-48 Hour Approval",
		description: "Quick verification process gets you earning within 2 days.",
		image: "/images/approval.webp",
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
						className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
					>
						{/* Image top */}
						<div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
							<Image
								src={benefit.image}
								alt={benefit.title}
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-105"
							/>
							{/* Gradient overlay */}
							<div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
						</div>

						{/* Content */}
						<div className="p-6">
							<div className="flex items-center gap-3 mb-3">
								<div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${benefit.color}`}>
									<Icon className="w-5 h-5 text-white" />
								</div>
								<h3 className="text-xl font-bold text-gray-900">
									{benefit.title}
								</h3>
							</div>
							<p className="text-gray-600 leading-relaxed">
								{benefit.description}
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}