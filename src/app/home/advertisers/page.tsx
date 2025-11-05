// src/app/home/advertisers/page.tsx

import type { Metadata } from "next";
import { Button } from "@/app/_components/ui/Button";
import { DemoTableAdvertiser } from "./demo/DemoTableAdvertiser";
import { WebsiteFilters } from "./demo/WebsiteFilters";
import { OrderProtection } from "./content/OrderProtection";
import { AdvertiserSticker } from "./_components/AdvertiserSticker";
import { AdvertiserBenefits } from "./content/AdvertiserBenefits";
import { WhiteLogos } from "@/components/proof/WhiteLogos";

export const metadata: Metadata = {
	title: "For Advertisers: Get Quality Backlinks - Bigposting",
	description:
		"Place guest posts on 150K+ verified websites. DA 40+ sites with real traffic. Fast turnaround, escrow protection, transparent pricing.",
	keywords:
		"buy guest posts, quality backlinks, guest posting service, SEO backlinks, link building",
};

export default function AdvertisersPage() {
	return (
		<main className="bg-background">
			{/* HERO */}
			<section className="relative py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden isolate">
				{/* Background gradient */}
				<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 -z-10" />

				{/* Floating Stickers */}
				<div className="absolute bottom-20 left-20 hidden xl:block z-0">
					<AdvertiserSticker
						number="DA 40+"
						label="High Authority"
						rotation={-12}
						color="green"
					/>
				</div>
				<div className="absolute bottom-20 right-16 hidden xl:block z-0">
					
				</div>

				{/* Hero Content */}
				<div className="relative z-10 max-w-3xl mx-auto text-center">
					<h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
						Get Quality <span className="text-blue-600">Backlinks</span> on Verified Sites
					</h1>
					<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
						Place guest posts on verified websites with real traffic. Transparent pricing, fast turnaround, escrow protection.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button href="/auth/signup" variant="primary">
							Browse Websites
						</Button>
					</div>
				</div>
			</section>

			{/* DEMO TABLE */}
			<div className="relative -mt-20 mx-4 sm:mx-8 lg:mx-12 z-20 mb-24">
				<div className="relative rounded-2xl bg-neutral-800 shadow-2xl py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
					{/* Table heading */}
					<div className="mb-6 px-4">
						<h3 className="text-2xl font-bold text-white mb-2">
							Browse 150K+ Verified Websites
						</h3>
						<p className="text-gray-400">
							Filter by DA, traffic, category, language, and more
						</p>
					</div>

					<div className="relative z-0">
						<DemoTableAdvertiser />
					</div>

					{/* Gradient Fade Overlay */}
					<div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-neutral-800 via-neutral-800/80 to-transparent pointer-events-none z-10" />

					{/* CTA Section */}
					<div className="absolute inset-x-0 bottom-12 flex flex-col items-center gap-4 pointer-events-none z-20">
						<p className="text-sm font-semibold text-white/60 uppercase tracking-wider">
							Trusted by Agencies & Brands
						</p>
						<div className="pointer-events-auto">
							<WhiteLogos count={6} opacity={0.4} brightness={1.5} />
						</div>
						<a
							href="/auth/signup"
							className="pointer-events-auto px-8 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
						>
							Start Ordering
						</a>
					</div>
				</div>
			</div>

			{/* ZIGZAG 1: FIND PERFECT PUBLISHER */}
			<section className="py-24 bg-white relative overflow-hidden">
				{/* Decorative blob */}
				<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100 to-transparent blur-3xl opacity-40 -z-10" />

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
								Find the Perfect Publisher Every Time
							</h2>
							<p className="text-xl text-gray-600">
								Browse 150K+ verified websites with advanced filtering. Search by domain authority, traffic volume, spam score, category, language, and dozens more metrics. Every site is hand-verified with real data from Moz, Ahrefs, and Google Analytics. See exact pricing upfront before you order.
							</p>
						</div>
						<WebsiteFilters />
					</div>
				</div>
			</section>

			{/* ZIGZAG 2: ORDER WITH CONFIDENCE */}
			<section className="py-24 bg-gray-50 relative overflow-hidden">
				{/* Decorative blob */}
				<div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-purple-100 to-transparent blur-3xl opacity-40 -z-10" />

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<OrderProtection />
						<div>
							<div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
								100% Protected
							</div>
							<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
								Guest Post with Confidence
							</h2>
							<p className="text-xl text-gray-600">
								Every order is protected by our secure escrow system. Your funds are held safely until the content is published and verified live on the website. If you're not satisfied with the placement, request revisions or get a full refund. No chargebacks, no payment disputes. Publishers only get paid after you approve the work.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ZIGZAG 3: SEAMLESS WORKFLOW */}
			<section className="py-24 bg-white relative overflow-hidden">
				{/* Decorative blob */}
				<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-100 to-transparent blur-3xl opacity-40 -z-10" />

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center mb-16">
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
							Seamless Workflow
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Everything you need to manage campaigns in one powerful platform
						</p>
					</div>
					<AdvertiserBenefits />
				</div>
			</section>

			{/* FINAL CTA - SIGNUP FORM */}
			<section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-600">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
							Ready to Boost Your SEO?
						</h2>
						<p className="text-xl text-blue-100 max-w-2xl mx-auto">
							Join thousands of advertisers getting quality backlinks. Start browsing verified websites today.
						</p>
					</div>

					{/* Signup Form Card */}
					<div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl max-w-2xl mx-auto">
						<form className="space-y-6">
							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
										First Name
									</label>
									<input
										type="text"
										id="firstName"
										className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										placeholder="John"
									/>
								</div>
								<div>
									<label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
										Last Name
									</label>
									<input
										type="text"
										id="lastName"
										className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										placeholder="Doe"
									/>
								</div>
							</div>

							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
									Work Email
								</label>
								<input
									type="email"
									id="email"
									className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									placeholder="john@company.com"
								/>
							</div>

							<div>
								<label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
									Your Website (Optional)
								</label>
								<input
									type="url"
									id="website"
									className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									placeholder="https://yourwebsite.com"
								/>
							</div>

							<Button href="/auth/signup" variant="primary" className="w-full">
								Create Free Account
							</Button>
						</form>

						<p className="mt-6 text-center text-sm text-gray-600">
							No credit card required • Cancel anytime • 100% escrow protected
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}