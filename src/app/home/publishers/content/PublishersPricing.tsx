// src/app/home/publishers/content/PublishersPricing.tsx

import { pricingTiers } from "../pricing/pricing-data";

export function PublishersPricing() {
	return (
		<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
			{pricingTiers.map((tier, idx) => (
				<div
					key={tier.id}
					className={`relative bg-white rounded-2xl p-8 shadow-lg transition-all hover:shadow-2xl ${tier.popular ? 'ring-4 ring-green-500 scale-105' : ''
						}`}
				>
					{tier.popular && (
						<div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
							Most Popular
						</div>
					)}

					{/* Icon */}
					<div className="text-5xl mb-4 text-center">{tier.icon}</div>

					{/* Traffic Tier */}
					<div className="text-center mb-6">
						<div className="text-3xl font-bold text-gray-900 mb-2">
							{tier.traffic}
						</div>
						<div className="text-sm text-gray-600">Monthly Visitors</div>
					</div>

					{/* Revenue Range */}
					<div className="text-center mb-6 pb-6 border-b border-gray-200">
						<div className="text-4xl font-bold text-gray-900 mb-2">
							{tier.revenue}
						</div>
						<div className="text-sm text-gray-600">Estimated Monthly Revenue</div>
					</div>

					{/* Description */}
					<p className="text-center text-gray-600 mb-6 text-sm">
						{tier.description}
					</p>

					{/* Features */}
					<ul className="space-y-3 mb-8">
						{tier.features.map((feature, i) => (
							<li key={i} className="flex items-center gap-2 text-sm text-gray-700">
								<svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
								</svg>
								<span>{feature}</span>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}