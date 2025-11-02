// src/app/home/publishers/page.tsx

import type { Metadata } from "next";
import { PublishersHero } from "./sections/PublishersHero";
import { PublishersFeatures } from "./sections/PublishersFeatures";
import { PublishersCTA } from "./sections/PublishersCTA";

export const metadata: Metadata = {
	title: "For Publishers: Sell Guest Posts & Earn - Bigposting",
	description: "List your website, set your price, and earn from guest posts or link insertions. Get verified, receive orders, and withdraw fast with low fees.",
	keywords: "sell guest posts, monetize website, publisher marketplace, list your site, earn from backlinks, verification badge",
};

export default function PublishersPage() {
	return (
		<main>
			<PublishersHero />
			<PublishersFeatures />
			<PublishersCTA />
		</main>
	);
}