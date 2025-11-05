// src/app/home/publishers/page.tsx

import type { Metadata } from "next";
import { Button } from "@/app/_components/ui/Button";
import { DemoTable } from "./demo/DemoTable";
import { PublisherBenefits } from "./content/PublisherBenefits";
import { DashboardMockup } from "./demo/DashboardMockup";
import { EscrowFlow } from "./content/EscrowFlow";
import { StatsBar } from "./content/StatsBar";
import { TestimonialCards } from "./proof/TestimonialCards";
import { NumberSticker } from "./proof/NumberSticker";
import { WhiteLogos } from "@/components/proof/WhiteLogos";
import { QuickStats } from "./_components/QuickStats";
import { PublishersPricing } from "./pricing/PublishersPricing";

export const metadata: Metadata = {
	title: "For Publishers: Sell Guest Posts & Earn - Bigposting",
	description:
		"List your website, set your price, and earn from guest posts or link insertions. Get verified, receive orders, and withdraw fast with low fees.",
	keywords:
		"sell guest posts, monetize website, publisher marketplace, list your site, earn from backlinks, verification badge",
};

export default function PublishersPage() {
	return (
		<main className="bg-background">
			{/* HERO */}
			<section className="relative py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden isolate">
				{/* Background gradient */}
				<div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 -z-10" />

				{/* Floating Stickers */}
				<div className="absolute bottom-22 left-20 hidden xl:block z-0">
					<NumberSticker
						number="5,000+"
						label="Active Publishers"
						rotation={-8}
						color="green"
					/>
				</div>
				<div className="absolute bottom-20 right-16 hidden xl:block z-0">
					<NumberSticker number="$2M+" label="Paid Out" rotation={6} color="blue" />
				</div>

				{/* Hero Content */}
				<div className="relative z-10 max-w-3xl mx-auto text-center">
					<h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
						Earn <span className="text-green-600">$$$</span> from Your Website
					</h1>
					<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
						List your site, set prices, get verified. Start receiving orders in 24 hours.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button href="/auth/signup" variant="primary">
							List Your Website Free
						</Button>
						<Button href="#how-it-works" variant="ghost">
							See How It Works
						</Button>
					</div>
				</div>
			</section>

			{/* DEMO TABLE */}
			<div className="relative -mt-20 mx-4 sm:mx-8 lg:mx-12 z-20 mb-24">
				<div className="relative rounded-2xl bg-neutral-800 shadow-2xl py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
					<div className="relative z-0">
						<DemoTable />
					</div>

					{/* Gradient Fade Overlay */}
					<div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-neutral-800 via-neutral-800/80 to-transparent pointer-events-none z-10" />

					{/* CTA Section */}
					<div className="absolute inset-x-0 bottom-12 flex flex-col items-center gap-4 pointer-events-none z-20">
						<p className="text-sm font-semibold text-white/60 uppercase tracking-wider">
							Trusted by Marketers from
						</p>
						<div className="pointer-events-auto">
							<WhiteLogos count={6} opacity={0.4} brightness={1.5} />
						</div>
						<a
							href="/auth/signup"
							className="pointer-events-auto px-8 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
						>
							Join as Publisher
						</a>
					</div>
				</div>
				{/* <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<QuickStats />
				</div> */}
			</div>



			{/* ZIGZAG 1: LIST YOUR SITE */}
			<section className="py-24 bg-white relative overflow-hidden">
				{/* Decorative blob */}
				<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-100 to-transparent blur-3xl opacity-40 -z-10" />

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
								Start Earning in 24 Hours
							</h2>
							<p className="text-2xl text-gray-600 mb-6">
								List your site, set prices, get verified. Our fast approval process means you
								can start receiving orders tomorrow.
							</p>
							
						</div>
						<DashboardMockup />
					</div>
				</div>
				<div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<QuickStats />
				</div>
			</section>

			{/* ZIGZAG 2: SECURE PAYMENTS */}
			<section className="py-24 bg-gray-50 relative overflow-hidden">
				{/* Decorative blob */}
				<div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-100 to-transparent blur-3xl opacity-40 -z-10" />

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<EscrowFlow />
						<div>
							<div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
								100% Secure
							</div>
							<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
								Get Paid Safely with Escrow
							</h2>
							<p className="text-lg text-gray-600 mb-6">
								Funds held securely until you publish. No chargebacks, no disputes. You publish,
								you get paid.
							</p>
							<ul className="space-y-3">
								<li className="flex items-start gap-3">
									<svg
										className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1"
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
									<span className="text-gray-700">Payments protected by escrow</span>
								</li>
								<li className="flex items-start gap-3">
									<svg
										className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1"
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
									<span className="text-gray-700">Withdraw instantly to PayPal or bank</span>
								</li>
								<li className="flex items-start gap-3">
									<svg
										className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1"
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
									<span className="text-gray-700">Low fees, transparent pricing</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* BENEFITS */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
							Why 5,000+ Publishers Choose Us
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							The easiest way to monetize your website with guest posts and link insertions
						</p>
					</div>
					<PublisherBenefits />
				</div>
			</section>

			{/* PRICING */}
			<section id="pricing" className="py-24 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<PublishersPricing />
				</div>
				<WhiteLogos />
			</section>

			{/* SOCIAL PROOF */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
							Join Thousands of Successful Publishers
						</h2>
					</div>
					<div className="mb-16">
						<StatsBar />
					</div>
					<TestimonialCards />
				</div>
			</section>

			{/* FINAL CTA */}
			<section className="py-24 bg-gradient-to-br from-green-600 to-emerald-600">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
						Ready to Start Earning?
					</h2>
					<p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
						List your website free. No credit card required. Start receiving orders in 24 hours.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button href="/auth/signup" variant="secondary">
							List Your Website Free
						</Button>
						<button className="px-8 py-3 rounded-lg font-medium text-white border-2 border-white hover:bg-white hover:text-green-600 transition-colors">
							Contact Sales
						</button>
					</div>
					<p className="mt-6 text-green-100 text-sm">
						Free to list • Only pay when you earn • Withdraw anytime
					</p>
				</div>
			</section>
		</main>
	);
}