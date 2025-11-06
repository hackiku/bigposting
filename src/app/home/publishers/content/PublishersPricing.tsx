// src/app/home/publishers/content/PublishersPricing.tsx

import { SignUpButton } from "@/components/cta/SignUpButton";
import { WhiteLogos } from "@/components/proof/WhiteLogos";
import { pricingTiers } from "../data/pricing-data";

export function PublishersPricing() {
	return (
		<div className="flex flex-col gap-8 bg-neutral-800 rounded-2xl p-8 lg:p-12">
			<h2 className="text-4xl lg:text-5xl font-bold text-white text-center my-6">
				How Much Can You Earn?
			</h2>

			<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
				{pricingTiers.map((tier) => (
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
							<div className="text-3xl font-black text-green-600">{tier.revenue}</div>
							<div className="text-sm font-bold text-gray-700 mt-1">Est. Monthly Revenue</div>
						</div>

						{/* Features - Simple list */}
						<ul className="space-y-3">
							{tier.features.map((feature, i) => (
								<li key={i} className="flex items-center gap-2 text-base text-gray-700">
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

			{/* Logos and CTA */}
			<div className="flex flex-col items-center gap-8 mt-8">
				<WhiteLogos count={4} opacity={0.4} brightness={1.5} />

				<div className="flex flex-col items-center gap-4">
					<SignUpButton text="List Your Website Free" />
					<p className="text-white/70 text-sm text-center">
						Free to list • Only pay when you earn • Withdraw anytime
					</p>
				</div>
			</div>
		</div>
	);
}