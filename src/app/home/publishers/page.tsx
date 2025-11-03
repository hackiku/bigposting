// src/app/home/publishers/page.tsx

import type { Metadata } from "next";
import { Button } from "@/app/_components/ui/Button";
import { DemoTable } from "./demo/DemoTable";
import { PublisherBenefits } from "./content/PublisherBenefits";
import { ProcessSteps } from "./content/ProcessSteps";
import { PublishersPricing } from "./content/PublishersPricing";
import { DashboardMockup } from "./demo/DashboardMockup";
import { EscrowFlow } from "./content/EscrowFlow";
import { StatsBar } from "./content/StatsBar";
import { TestimonialCards } from "./proof/TestimonialCards";
import { LogoBar } from "./proof/LogoBar";
import { NumberSticker } from "./proof/NumberSticker";
import { WhiteLogos } from "@/components/proof/WhiteLogos";
import { LiquidAsset } from "@/components/ui/LiquidAsset";

export const metadata: Metadata = {
	title: "For Publishers: Sell Guest Posts & Earn - Bigposting",
	description: "List your website, set your price, and earn from guest posts or link insertions. Get verified, receive orders, and withdraw fast with low fees.",
	keywords: "sell guest posts, monetize website, publisher marketplace, list your site, earn from backlinks, verification badge",
};

export default function PublishersPage() {
	return (
		<main className="bg-background">

			{/* HERO - Isolated stacking context */}
			<section className="relative py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden isolate">
				{/* Background gradient - stays behind everything */}
				<div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 -z-10" />

				{/* Floating Stickers - above bg, below content */}
				{/* <div className="absolute top-12 left-8 hidden lg:block z-0"></div> */}
				{/* <div className="absolute top-20 right-12 hidden lg:block z-0"></div> */}
				<div className="absolute bottom-22 left-20 hidden xl:block z-0">
					<NumberSticker
						number="5,000+"
						label="Active Publishers"
						rotation={-8}
						color="green"
					/>
				</div>
				<div className="absolute bottom-20 right-16 hidden xl:block z-0">
					<NumberSticker
						number="$2M+"
						label="Paid Out"
						rotation={6}
						color="blue"
					/>
				</div>

				{/* Hero Content - highest z-index */}
				<div className="relative z-10 max-w-3xl mx-auto text-center">
					<h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
						Make <span className="text-green-600">$$</span> from your Website with <span className="text-green-600">Guest Posts</span>
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

			{/* DEMO TABLE - Clean overlap with proper z-index */}
			{/* DEMO TABLE - Clean overlap with proper z-index */}
			<div className="relative -mt-20 mx-4 sm:mx-8 lg:mx-12 z-20">
				<div className="relative rounded-2xl bg-neutral-800 shadow-2xl py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">

					{/* Demo Table Content - Base layer */}
					<div className="relative z-0">
						<DemoTable />
					</div>

					{/* Gradient Fade Overlay - Above table */}
					<div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-neutral-800 via-neutral-800/80 to-transparent pointer-events-none z-10" />

					{/* CTA Section - Top layer */}
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
			</div>
			<LogoBar />

			<LiquidAsset liquidSide="left">
				{/* Left: Visual */}
				<div>
					<EscrowFlow />
				</div>

				{/* Right: Content */}
				<div>
					<h2>Get Paid Safely</h2>
					<p>Escrow protection...</p>
				</div>
			</LiquidAsset>


			<LiquidAsset color="green">
				<div>
					<h2>List Your Site in Minutes</h2>
					<p>Add your website...</p>
				</div>
				<DashboardMockup />
			</LiquidAsset>


			{/* ZIGZAG 1: LIST YOUR SITE */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
								List Your Site in Minutes
							</h2>
							<p className="text-lg text-gray-600 mb-6">
								Add your website, set your prices for guest posts and link insertions, and start receiving orders immediately. Our verification process ensures quality and trust.
							</p>
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
							<Button href="/auth/signup" variant="ghost">
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