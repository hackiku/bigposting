// src/app/home/publishers/page.tsx

import type { Metadata } from "next";
// components
import { SignUpButton } from "@/components/cta/SignUpButton";
import { WhiteLogos } from "@/components/proof/WhiteLogos";
import { TestimonialCards } from "@/components/proof/TestimonialCards";
import { StatSticker } from "@/components/ui/StatSticker";
// content
import { PublisherBenefits } from "./content/PublisherBenefits";
import { EscrowFlow } from "./content/EscrowFlow";
import { PublishersPricing } from "./content/PublishersPricing";
// demo
import { DashboardMockup } from "./demo/DashboardMockup";
import { DemoTable } from "./demo/DemoTable";

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
			<section className="relative py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden isolate">
				<div className="absolute inset-0 bg-linear-to-br from-green-50 to-emerald-50 -z-10" />

				<div className="absolute bottom-6 right-[8%] z-0">
					<StatSticker
						number="$2M+"
						label="Paid Out"
						rotation={8}
						color="green"
					/>
				</div>
				<div className="absolute bottom-12 left-[12%] z-0">
					<StatSticker
						number="6,000+"
						label="Active Publishers"
						rotation={-10}
						color="blue"
					/>
				</div>

				<div className="relative pb-[10vh] md:pb-5 z-10 max-w-3xl mx-auto text-center">
					<h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
						Earn <span className="text-green-600">+$$</span> from Guest Posts on your Site
					</h1>
					<p className="text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
						List your website, set prices, get verified. See orders pour in within 24 hours.
					</p>
					<div className="flex justify-center">
						<SignUpButton text="List Your Website Free" />
					</div>
				</div>
			</section>

			{/* DEMO TABLE */}
			<section className="relative mx-2 sm:mx-6 lg:mx-8 z-20">
				<div className="relative rounded-2xl bg-neutral-800 shadow-2xl pt-8 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
					<div className="relative z-0">
						<DemoTable />
					</div>

					<div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-neutral-800 via-neutral-800/70 to-transparent pointer-events-none z-10" />

					<div className="absolute inset-x-0 bottom-12 flex flex-col items-center gap-4 pointer-events-none z-20">
						<p className="text-sm font-semibold text-white/60 uppercase tracking-wider">
							Trusted by Marketers from
						</p>
						<div className="pointer-events-auto">
							<WhiteLogos count={4} opacity={0.4} brightness={1.5} />
						</div>
					<a
						href="/auth/signup"
						className="pointer-events-auto px-8 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
						>
						Join as Publisher
						{/* <span className="text-green-700/60 font-medium italic ml-2">— FREE</span> */}
					</a>
				</div>
			</div>
		</section>

			{/* ZIGZAG 1: START EARNING */ }
	<section className="mt-20 relative overflow-hidden">
		{/* Purple blob background */}
		<div className="absolute bottom-0 left-0 w-full h-full pointer-events-none opacity-20">
			<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 w-1/2 h-1/2">
				<path fill="#9333ea" d="M50.8,-63.7C64.7,-59.9,73.9,-43.4,77,-26.7C80.1,-10,77.1,7.1,67.5,17.4C57.9,27.8,41.8,31.5,29.4,34C17.1,36.4,8.5,37.6,-2,40.4C-12.6,43.2,-25.2,47.6,-37.4,45.1C-49.6,42.6,-61.3,33.2,-61.8,22.3C-62.4,11.4,-51.7,-1,-48.5,-17.3C-45.2,-33.5,-49.5,-53.8,-42.7,-59.8C-35.8,-65.9,-17.9,-57.7,0.3,-58.1C18.5,-58.5,37,-67.4,50.8,-63.7Z" transform="translate(100 100)" />
			</svg>
		</div>

		<div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
			<div className="grid lg:grid-cols-2 gap-12 items-center">
				<div>
					<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
						Start Earning in 24 Hours
					</h2>
					<p className="text-2xl leading-relaxed text-gray-600 mb-8">
						List your site, set prices, get verified. Our fast approval process means you can start receiving orders tomorrow.
					</p>
					<div className="flex gap-8 mt-20 w-full mx-auto">

							<StatSticker
								number="24h"
								label="Website Approval"
								rotation={-5}
								color="green"
							/>
							<StatSticker
								number="$↑↓"
								label="Pricing Control"
								rotation={3}
								color="blue"
							/>
							<StatSticker
								number="Fast"
								label="Payouts"
								rotation={-8}
								color="orange"
							/>
					</div>
				</div>
				<DashboardMockup />
			</div>

			
		</div>

			{/* <StatsBar /> */}
	</section>

	{/* ZIGZAG 2: ESCROW */ }
	<section className="my-20 bg-linear-to-br from-blue-100/40 to-cyan-100/40 relative overflow-hidden">
		<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
			<path fill="#FFFFFF" d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"></path>
		</svg>

		<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
			<div className="grid lg:grid-cols-2 gap-12 items-center">
				<div className="flex flex-col gap-8 items-center mt-0 lg:-mt-[20vh]">
					<EscrowFlow />
					<SignUpButton text="Start Earning Today" />
				</div>

				<div className="flex flex-col justify-center py-10 lg:py-32">
					<div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-lg font-semibold mb-4 w-fit">
						Escrow Service
					</div>
					<h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
						✅ Published 
						<span className="block mt-4">✅ Paid</span>
					</h2>

					<p className="text-2xl leading-relaxed text-gray-600 mb-8">
						Advertisers's funds are held securely until you publish. No chargebacks, no disputes. You get paid immediately after you publish.
					</p>
					<ul className="space-y-4">
						<li className="flex items-start gap-3">
							<svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
							</svg>
							<span className="text-lg text-gray-700">Payments protected by escrow</span>
						</li>
						<li className="flex items-start gap-3">
							<svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
							</svg>
							<span className="text-lg text-gray-700">Withdraw instantly to PayPal or bank</span>
						</li>
						<li className="flex items-start gap-3">
							<svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
							</svg>
							<span className="text-lg text-gray-700">Low fees, transparent pricing</span>
						</li>
					</ul>
				</div>
			
			</div>
		</div>

		<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="rotate-180">
			<path fill="#FFFFFF" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
		</svg>
	</section>

	{/* BENEFITS */ }
	<section className="pb-20 bg-white">
		<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-2xl text-center mb-16">
				<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
					Why 1000s of Publishers Choose BigPosting
				</h2>
				<p className="text-2xl text-gray-600 max-w-2xl mx-auto">
					The easiest way to monetize your website with guest posts and link insertions
				</p>
			</div>
			<PublisherBenefits />
		</div>
	</section>

	{/* PRICING */ }
	<section id="pricing" className="py-24 bg-gray-50 relative overflow-hidden">
		{/* Green blob background */}
		<div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-15">
			<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0 w-1/3 h-1/3">
				<path fill="#059669" d="M50.8,-63.7C64.7,-59.9,73.9,-43.4,77,-26.7C80.1,-10,77.1,7.1,67.5,17.4C57.9,27.8,41.8,31.5,29.4,34C17.1,36.4,8.5,37.6,-2,40.4C-12.6,43.2,-25.2,47.6,-37.4,45.1C-49.6,42.6,-61.3,33.2,-61.8,22.3C-62.4,11.4,-51.7,-1,-48.5,-17.3C-45.2,-33.5,-49.5,-53.8,-42.7,-59.8C-35.8,-65.9,-17.9,-57.7,0.3,-58.1C18.5,-58.5,37,-67.4,50.8,-63.7Z" transform="translate(100 100)" />
			</svg>
		</div>

		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
			<PublishersPricing />
		</div>
	</section>


	<div className="max-w-5xl mx-auto">
		<TestimonialCards />
	</div>

	{/* FINAL CTA */ }
	<section className="py-20 bg-linear-to-b from-transparent via-yellow-200/50 to-yellow-300/60 relative">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="mt-20 relative rounded-2xl bg-linear-to-br from-green-600 to-emerald-600 shadow-2xl py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
				<div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl mx-auto text-center">
					<WhiteLogos count={4} opacity={0.6} brightness={1.8} />

					<div>
						<h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
							Ready to Start Earning?
						</h2>
						<p className="text-xl text-green-100">
							List your website free. No credit card required. Start receiving orders in 24 hours.
						</p>
					</div>

					<SignUpButton text="List Your Website Free" />

					<p className="text-white/70 text-sm mt-2">
						Free to list • Only pay when you earn • Withdraw anytime
					</p>
				</div>
			</div>
		</div>
	</section>
		</main >
	);
}