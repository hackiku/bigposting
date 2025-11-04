// src/app/home/advertisers/types.ts

export interface Website {
	id: string;
	url: string;
	role: "owner" | "contributor";
	language: string;
	categories: string[];
	mainServices: {
		contentPlacement: { price: number; enabled: boolean };
		writingAndPlacement: { price: number; enabled: boolean };
		linkInsertion: { price: number; enabled: boolean };
	};
	verified: boolean;
	publisher_name: string;
	moz_da: number;
	spam_score: number;
	monthly_traffic: number;
	referring_domains: number;
	domain_age_years: number;
}

export interface PricingTier {
	id: string;
	title: string;
	price: string;
	description: string;
	features: string[];
	popular?: boolean;
}

export interface Testimonial {
	name: string;
	role: string;
	company: string;
	quote: string;
}

export interface Benefit {
	icon: string;
	title: string;
	description: string;
}