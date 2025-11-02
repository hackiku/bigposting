// src/app/home/publishers/pricing/pricing-data.ts

export interface PricingTier {
	id: string;
	icon: string;
	traffic: string;
	revenue: string;
	description: string;
	features: string[];
	popular?: boolean;
}

export const pricingTiers: PricingTier[] = [
	{
		id: "starter",
		icon: "🌱",
		traffic: "10K",
		revenue: "$200-500",
		description: "Perfect for growing blogs and niche websites",
		features: [
			"Guest Posts",
			"Link Insertions",
			"Fast Approval",
		],
		popular: false,
	},
	{
		id: "growth",
		icon: "🚀",
		traffic: "100K",
		revenue: "$2,000-5,000",
		description: "Ideal for established content sites and magazines",
		features: [
			"Premium Placements",
			"Priority Support",
			"Custom Rates",
		],
		popular: true,
	},
	{
		id: "enterprise",
		icon: "🔥",
		traffic: "1M+",
		revenue: "$20,000+",
		description: "Enterprise-level publishers and media companies",
		features: [
			"Enterprise Support",
			"Custom Contracts",
			"Direct Deals",
		],
		popular: false,
	},
];