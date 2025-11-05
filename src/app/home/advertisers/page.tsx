// src/app/home/advertisers/page.tsx

import type { Metadata } from "next";
import { FiSearch } from "react-icons/fi";
// components
import { WhiteLogos } from "@/components/proof/WhiteLogos";
import { SignUpButton } from "@/components/cta/SignUpButton";
import { DataProviders } from "@/components/proof/DataProviders";
import { SvgBackground } from "@/components/ui/SvgBackground";
import { TestimonialCards } from "@/components/proof/TestimonialCards";
// content
import { AdvertiserSticker } from "./content/AdvertiserSticker";
import { AdvertiserBenefits } from "./content/AdvertiserBenefits";
import { EscrowProcess } from "./content/EscrowProcess";
// demo
import { WebsiteSearchDemo } from "./demo/WebsiteSearchDemo"
import { FilterDemo } from "./demo/FilterDemo";
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
				<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 -z-10" />

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
					<h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
						Keep your Backlinks Flowing <span className="text-blue-600">Fresh + Fast</span>
						{/* TODO: hand drawn-ish underline under blue span */}
					</h1>
					<p className="text-3xl text-gray-600 mb-8 max-w-2xl mx-auto">
						Negotiate guest posts directly with publishers at clear prices secured by escrow.
					</p>
					<div className="flex justify-center">
						<SignUpButton text="Become an Advertiser" />
					</div>
				</div>
			</section>

			{/* DEMO TABLE */}
			<section className="relative mx-4 sm:mx-8 lg:mx-12 z-20">
				<div className="relative rounded-2xl bg-neutral-800 shadow-2xl pt-4 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
					<div className="text-white flex gap-2 items-center my-6">
						<FiSearch size={"24"} />
						<h3 className=" text-4xl font-bold text-white">
							Post on{" "}
							<span className="text-primary font-black">
								{websiteNumber.toLocaleString()}
							</span>{" "}
							Verified Websites
						</h3>
					</div>

					<div className="relative z-0">
						<WebsitesDemo />
						{/* <DemoTableAdvertiser /> */}
					</div>

					<div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-neutral-800 via-neutral-800/80 to-transparent pointer-events-none z-10" />

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
							<span className="text-green-700/60 font-medium italic"> — FREE</span>
						</a>
					</div>
				</div>
			</section>

			{/* FILTER SECTION */}
			<section className="py-24 bg-white relative overflow-hidden">
				<SvgBackground side="right" color="blue" />

				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="grid lg:grid-cols-2 gap-12 items-start">

						<div className="flex flex-col justify-center">
							<h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
								Find The Perfect Publisher in ~10s
							</h2>
							<p className="text-3xl leading-relaxed text-gray-600 mb-8">
								Detailed DA 40+? Tech niche? English only? Under $200?
								Filter, click, order. No research rabbit holes.
							</p>
						</div>
						<div className="mt-4">
							<p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
								Data verified by
							</p>
							<DataProviders />
						</div>
					</div>
						<div className="lg:max-w-md">
							<FilterDemo />
						</div>
				</div>
			</section>

			<section className="py-24 bg-white relative overflow-hidden">
				<SvgBackground side="left" color="orange" />

				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="grid lg:grid-cols-2 gap-12 items-start">
						<div className="flex flex-col justify-center">
							<h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
								Something something process
							</h2>
							<p className="text-3xl leading-relaxed text-gray-600 mb-8">
								Explain who posts when etc. How its bidding system
							</p>
						</div>
					</div>
						<div className="lg:max-w-md">
							<FilterDemo />
						</div>
				</div>
			</section>

			{/* ESCROW PROTECTION */}
			<section className="py-24 relative max-w-[1920px] px-4 pt-40 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
				<SvgBackground side="left" color="purple" />

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center mb-16">
						<h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
							100% Escrow Protected
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Your funds stay safe until content is live. Not satisfied? Full refund. Zero risk.
						</p>
					</div>

					<EscrowProcess />
				</div>
			</section>
			
			<section className="py-24 relative max-w-[1920px] px-4 pt-40 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
				<TestimonialCards />
			</section>

			{/* WORKFLOW */}
			<section className="py-24 relative max-w-[1920px] px-4 pt-40 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
				<SvgBackground side="right" color="green" />

				<div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center mb-16">
						<h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
							All things Guest Posting
						</h2>
						<p className="text-2xl leading-relaxed text-gray-600 max-w-2xl mx-auto">
							Track orders, manage campaigns, scale link building effortlessly
						</p>
					</div>
					<AdvertiserBenefits />
				</div>
			</section>

			{/* FINAL CTA */}
			<section className="relative mx-4 sm:mx-8 lg:mx-12 mb-24">
				<div className="relative rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-2xl py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
					</div>
				</div>
			</section>
		</main>
	);
}