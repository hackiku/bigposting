// src/app/home/advertisers/page.tsx

import type { Metadata } from "next";
// components
import { SignUpButton } from "@/components/cta/SignUpButton";
import { BlobBackground } from "@/components/ui/BlobBackground";
import { WhiteLogos } from "@/components/proof/WhiteLogos";
import { TestimonialCards } from "@/components/proof/TestimonialCards";
import { DataProviders } from "@/components/proof/DataProviders";
// content
import { AdvertiserSticker } from "./content/AdvertiserSticker";
import { AdvertiserBenefits } from "./content/AdvertiserBenefits";
import { EscrowProcess } from "./content/EscrowProcess";
// demo
import { FloatingDashboardUI } from "./demo/FloatingDashboardUI";
import { CampaignDashboard } from "./demo/CampaignDashboard";
import WebsitesDemo from "./demo/WebsitesDemo";

export const metadata: Metadata = {
	title: "For Advertisers: Get Quality Backlinks - Bigposting",
	description:
		"Place guest posts on 150K+ verified websites. DA 40+ sites with real traffic. Fast turnaround, escrow protection, transparent pricing.",
	keywords:
		"buy guest posts, quality backlinks, guest posting service, SEO backlinks, link building",
};

const websiteNumber = 6246;

export default function AdvertisersPage() {
	return (
		<main className="bg-background">
			{/* HERO */}
			<section className="relative py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden isolate">
				<div className="absolute inset-0 bg-linear-to-br from-blue-50 to-indigo-50 -z-10" />

				<div className="absolute bottom-6 right-[8%] z-0">
					<AdvertiserSticker
						number="20,000+"
						label="Published Guest Posts"
						rotation={10}
						color="orange"
					/>
				</div>
				<div className="absolute bottom-12 left-[12%] z-0">
					<AdvertiserSticker
						number="DA 40+"
						label="High Authority"
						rotation={-12}
						color="green"
					/>
				</div>

				<div className="relative z-10 max-w-3xl mx-auto text-center">
					<h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6">
						Keep your Backlinks Flowing <span className="text-blue-600">Fresh + Fast</span>
					</h1>
					<p className="text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
						Negotiate guest posts directly with publishers at clear prices secured by escrow.
					</p>
					<div className="flex justify-center">
						<SignUpButton text="Join as Advertiser" />
					</div>
				</div>
			</section>

			{/* DEMO TABLE */}
			<section className="relative mx-2 sm:mx-6 lg:mx-8 z-20">
				<div className="relative rounded-2xl bg-neutral-800 shadow-2xl pt-8 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
					<div className="relative z-0">
						<WebsitesDemo />
					</div>

					<div className="absolute inset-x-0 bottom-0 h-1/5 bg-linear-to-t from-neutral-800 via-neutral-800/70 to-transparent pointer-events-none z-10" />

					<div className="absolute inset-x-0 bottom-12 flex flex-col items-center gap-4 pointer-events-none z-20">
						<p className="text-sm font-semibold text-white/60 uppercase tracking-wider">
							Trusted by Agencies & Brands
						</p>
						<div className="pointer-events-auto">
							<WhiteLogos count={4} opacity={0.4} brightness={1.5} />
						</div>
						<a
							href="/auth/signup"
							className="pointer-events-auto px-8 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
						>
							Browse Websites
							<span className="text-green-700/60 font-medium italic ml-2">— FREE</span>
						</a>
					</div>
				</div>
			</section>
	
			{/* ZIGZAG 1: FILTER SECTION */}
			<section className="mt-20 relative overflow-hidden">
				
				<div className="absolute 0 right-0 w-full h-full pointer-events-none opacity-20 ">
					<svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
						<path fill="#08BDBA" d="M50.8,-63.7C64.7,-59.9,73.9,-43.4,77,-26.7C80.1,-10,77.1,7.1,67.5,17.4C57.9,27.8,41.8,31.5,29.4,34C17.1,36.4,8.5,37.6,-2,40.4C-12.6,43.2,-25.2,47.6,-37.4,45.1C-49.6,42.6,-61.3,33.2,-61.8,22.3C-62.4,11.4,-51.7,-1,-48.5,-17.3C-45.2,-33.5,-49.5,-53.8,-42.7,-59.8C-35.8,-65.9,-17.9,-57.7,0.3,-58.1C18.5,-58.5,37,-67.4,50.8,-63.7Z" transform="translate(100 100)" />
					</svg>
				</div>

				<div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
						<div className="flex flex-col justify-center">
							<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
								Find Perfect-Match Publishers in Real Time
							</h2>
							<p className="text-2xl leading-relaxed text-gray-600 mb-8">
								Filter, click, order. No research rabbit holes. Perfect for keeping your guest posts timely and highly relevant in your niche.
							</p>
						</div>

						<div className="mt-4">
							<p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
								Website Data Verified by
							</p>
							<DataProviders />
						</div>
					</div>

					{/* Floating UI Elements */}
					<div className="-mt-8 mx-[5vw]">
						<FloatingDashboardUI />
					</div>
				</div>
			</section>

			{/* ZIGZAG 2: PROCESS SECTION */}
			<section className="my-20 bg-[#FB923C]/40 relative overflow-hidden">

				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path fill="#FFFFFF" d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"></path>
				</svg>

				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="grid lg:grid-cols-2 gap-12 items-center">

						<div className="space-y-10 mt-0 lg:-mt-[25vh]">
							<CampaignDashboard />
							<SignUpButton />
						</div>

						<div className="flex flex-col justify-center py-10 lg:py-32">
							<h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
								Place Orders, Track Progress, Get Links
							</h2>
							<p className="text-2xl leading-relaxed text-gray-600 mb-8">
								Simple bidding system. Publishers accept, write content, publish. You track everything in real-time from one dashboard.
							</p>
								<AdvertiserSticker
									number="2-4 days"
									label="Average Turnaround"
									rotation={-10}
									color="green"
								/>
						</div>
					</div>
				</div>
				
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="rotate-180">
					<path fill="#FFFFFF" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path> 
				</svg>
			</section>


			
			
			{/* ESCROW PROTECTION */}
			<section className="py-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">
							100% Escrow Protected
						</h2>
						<p className="text-2xl text-gray-600 max-w-2xl mx-auto">
							Your funds stay safe until content is live. Not satisfied? Full refund. Zero risk.
						</p>
					</div>

					<EscrowProcess />
				</div>
			</section>

			{/* TESTIMONIALS */}
			<section className="pt-20 sm:mx-6 lg:mx-8 bg-gray-50">

				<div className="py-16 relative rounded-2xl bg-neutral-800 shadow-2xl px-4 sm:px-6 lg:px-8 overflow-hidden">					
					<h2 className="text-center pb-8 text-white text-4xl lg:text-5xl font-bold mb-4">
						Trusted by SEO Professionals
					</h2>

					<TestimonialCards />
				</div>
			</section>

			{/* WORKFLOW - with yellow gradient */}
			<section className="py-24 bg-linear-to-b from-transparent via-yellow-100/30 to-yellow-200 relative">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl lg:text-5xl font-bold  mb-4">
							All things Guest Posting in One Place
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Track orders, manage campaigns, scale link building effortlessly
						</p>
					</div>
					<AdvertiserBenefits />

					{/* FINAL CTA inside this section */}
					<div className="mt-20 relative rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-2xl py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
						<div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl mx-auto text-center">
							<WhiteLogos count={4} opacity={0.6} brightness={1.8} />

							<div>
								<h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
									Ready to Boost Your Rankings?
								</h2>
								<p className="text-xl text-blue-100">
									Join thousands of marketers getting quality backlinks on verified sites
								</p>
							</div>

							<SignUpButton text="Start Ordering Free" />

							<p className="text-white/70 text-sm mt-2">
								Create a free account to find publishers
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}