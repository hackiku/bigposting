// src/app/home/publishers/page.tsx

import type { Metadata } from "next";
import { Button } from "@/app/_components/ui/Button";
import WebsitesDemo from "./demo/WebsitesDemo";
import { PublisherBenefits } from "./content/PublisherBenefits";
import { ProcessSteps } from "./content/ProcessSteps";
import { PublishersPricing } from "./content/PublishersPricing";
import { DashboardMockup } from "./demo/DashboardMockup";
import { EscrowFlow } from "./content/EscrowFlow";
import { StatsBar } from "./content/StatsBar";
import { TestimonialCards } from "./proof/TestimonialCards";

export const metadata: Metadata = {
	title: "For Publishers: Sell Guest Posts & Earn - Bigposting",
	description: "List your website, set your price, and earn from guest posts or link insertions. Get verified, receive orders, and withdraw fast with low fees.",
	keywords: "sell guest posts, monetize website, publisher marketplace, list your site, earn from backlinks, verification badge",
};

export default function PublishersPage() {
	return (
		<main className="bg-background">

			{/* HERO */}
			<section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
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

			{/* DEMO TABLE */}
			<div className="-mt-20 mx-4 sm:mx-8 lg:mx-20 rounded-2xl bg-neutral-800 shadow-2xl">
				<WebsitesDemo />
			</div>

			{/* ZIGZAG 1: LIST YOUR SITE */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
								Simple Setup
							</div>
							<h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
								List Your Site in Minutes
							</h2>
							<p className="text-lg text-gray-600 mb-6">
								Add your website, set your prices for guest posts and link insertions, and start receiving orders immediately. Our verification process ensures quality and trust.
							</p>
							<ul className="space-y-4 mb-8">
								<li className="flex items-start gap-3">
									<svg className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
									</svg>
									<span className="text-gray-700">
										<strong className="text-gray-900">Quick approval:</strong> Get verified in 24-48 hours
									</span>
								</li>
								<li className="flex items-start gap-3">
									<svg className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
									</svg>
									<span className="text-gray-700">
										<strong className="text-gray-900">Set your rates:</strong> Full control over pricing and services
									</span>
								</li>
								<li className="flex items-start gap-3">
									<svg className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
									</svg>
									<span className="text-gray-700">
										<strong className="text-gray-900">Instant visibility:</strong> Get featured to thousands of advertisers
									</span>
								</li>
							</ul>
							<Button href="/auth/signup" variant="primary">
								Get Started Free
							</Button>
						</div>
						<DashboardMockup />
					</div>
				</div>
			</section>

			{/* ZIGZAG 2: SECURE PAYMENTS */}
			<section className="py-24 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<EscrowFlow />
						<div>
							<div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
								Secure & Fast
							</div>
							<h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
								Get Paid Safely with Escrow Protection
							</h2>
							<p className="text-lg text-gray-600 mb-6">
								Our escrow system holds funds securely until you publish the content. No chargebacks, no payment disputes. You publish, you get paid.
							</p>
							<ul className="space-y-4 mb-8">
								<li className="flex items-start gap-3">
									<svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
									</svg>
									<span className="text-gray-700">
										<strong className="text-gray-900">Escrow protection:</strong> Funds secured before you start work
									</span>
								</li>
								<li className="flex items-start gap-3">
									<svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
									</svg>
									<span className="text-gray-700">
										<strong className="text-gray-900">Instant payouts:</strong> Withdraw to PayPal or bank in minutes
									</span>
								</li>
								<li className="flex items-start gap-3">
									<svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									<span className="text-gray-700">
										<strong className="text-gray-900">Low fees:</strong> Keep more of what you earn
									</span>
								</li>
							</ul>
							<Button href="/auth/signup" variant="primary">
								Start Earning Today
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* BENEFITS */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
							Why Publishers Love Bigposting
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Join thousands of publishers earning passive income with the easiest guest posting platform
						</p>
					</div>
					<PublisherBenefits />
				</div>
			</section>

			{/* PROCESS */}
			<section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
							How It Works
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Start earning from your website in 3 simple steps
						</p>
					</div>
					<ProcessSteps />
					<div className="text-center mt-12">
						<Button href="/auth/signup" variant="primary">
							Get Started Now
						</Button>
					</div>
				</div>
			</section>

			{/* PRICING */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
							Your Earning Potential
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							See what publishers like you are earning with Bigposting. Real earnings from real publishers.
						</p>
					</div>
					<PublishersPricing />
				</div>
			</section>

			{/* SOCIAL PROOF */}
			<section className="py-24 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
							Trusted by Publishers Worldwide
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Join thousands of successful publishers monetizing their content
						</p>
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
					<h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
						Ready to Start Earning?
					</h2>
					<p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
						Join thousands of publishers making passive income. List your website today and receive your first order within 48 hours.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button href="/auth/signup" variant="secondary">
							List Your Website Free
						</Button>
						<button className="px-8 py-3 rounded-lg font-medium text-white border-2 border-white hover:bg-white hover:text-green-600 transition-colors">
							View Pricing
						</button>
					</div>
					<p className="mt-6 text-green-100 text-sm">
						No credit card required • Free to list • Only pay when you earn
					</p>
				</div>
			</section>

		</main>
	);
}