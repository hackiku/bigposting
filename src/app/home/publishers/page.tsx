// src/app/home/publishers/page.tsx

import type { Metadata } from "next";
import { Button } from "@/app/_components/ui/Button";
import { PublishersHero } from "./sections/PublishersHero";
import { PublishersFeatures } from "./sections/PublishersFeatures";
import { PublishersCTA } from "./sections/PublishersCTA";
import WebsitesDemo from "./demo/WebsitesDemo";

export const metadata: Metadata = {
	title: "For Publishers: Sell Guest Posts & Earn - Bigposting",
	description: "List your website, set your price, and earn from guest posts or link insertions. Get verified, receive orders, and withdraw fast with low fees.",
	keywords: "sell guest posts, monetize website, publisher marketplace, list your site, earn from backlinks, verification badge",
};

export default function PublishersPage() {
	return (
		<main className="bg-background">

			<section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50 ">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
						Monetize Your Website with <span className="text-green-600">Guest Posts</span>
					</h1>
					<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
						List your site, set your price, and earn from guest posts and link insertions. Get verified and start receiving orders.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button href="/auth/signup" variant="primary">
							List Your Website
						</Button>
						<Button href="/home/faq" variant="ghost">
							How It Works
						</Button>
					</div>
				</div>
			</section>

			<div className="-mt-20 mx-20 rounded-2xl bg-neutral-800">
				<WebsitesDemo />
			</div>

			<section className="py-20">
				<div className="text-center mb-16">
					<h2 className="text-3xl lg:text-5xl font-bold mb-4">
						Why Publishers Love Us
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						The easiest way to monetize your website content
					</p>
				</div>

			</section>
			
			<PublishersFeatures />
			<PublishersCTA />
		</main>
	);
}