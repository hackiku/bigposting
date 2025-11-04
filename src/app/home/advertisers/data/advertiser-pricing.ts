// src/app/home/advertisers/data/advertiser-pricing.ts

import type { PricingTier } from "../types";

export const pricingTiers: PricingTier[] = [
	{
		id: "starter",
		title: "Starter Package",
		price: "$500",
		description: "Perfect for testing the waters",
		features: [
			"5 guest posts per month",
			"DA 40+ websites",
			"Email support",
			"Basic analytics",
		],
		popular: false,
	},
	{
		id: "growth",
		title: "Growth Package",
		price: "$2,000",
		description: "Most popular for growing brands",
		features: [
			"25 guest posts per month",
			"DA 60+ websites",
			"Priority support",
			"Advanced analytics",
			"Custom content strategy",
		],
		popular: true,
	},
	{
		id: "enterprise",
		title: "Enterprise Package",
		price: "Custom",
		description: "For agencies and large teams",
		features: [
			"Unlimited guest posts",
			"DA 80+ websites",
			"Dedicated account manager",
			"White-label reporting",
			"API access",
		],
		popular: false,
	},
];