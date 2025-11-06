// src/app/home/page.tsx

"use client"

import Link from "next/link"
import { FiArrowRight } from "react-icons/fi"

export default function HomePage() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
			{/* Content Section */}
			<div className="flex-1 flex items-center justify-center px-4 py-20">
				<div className="w-full max-w-6xl">
					{/* Headline */}
					<div className="text-center mb-16">
						<h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">Choose Your Path</h1>
						<p className="text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto">
							Join as a publisher to earn from guest posts, or as an advertiser to find quality backlinks
						</p>
					</div>

					{/* Two-Card Section */}
					<section className="grid lg:grid-cols-2 gap-8">
						{/* Publishers Card */}
						<Link
							href="/home/publishers"
							className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 group-hover:from-green-100 group-hover:to-emerald-100 transition-colors" />
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-green-600/5 to-emerald-600/5" />

							<div className="relative p-12 flex flex-col justify-between h-96">
								{/* Header */}
								<div>
									<div className="inline-block mb-4 px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold text-sm">
										For Publishers
									</div>
									<h2 className="text-4xl font-bold text-gray-900 mb-4">
										Earn <span className="text-green-600">+$$</span> from Guest Posts
									</h2>
									<p className="text-lg text-gray-600">
										List your website, set your prices, and start earning from guest post opportunities. Fast approval,
										flexible pricing, and secure payments.
									</p>
								</div>

								{/* Footer with Icon */}
								<div className="flex items-center justify-between pt-8 border-t border-green-200 group-hover:border-green-300 transition-colors">
									<span className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
										Explore Publisher Platform
									</span>
									<FiArrowRight className="w-6 h-6 text-green-600 group-hover:translate-x-2 transition-transform" />
								</div>
							</div>
						</Link>

						{/* Advertisers Card */}
						<Link
							href="/home/advertisers"
							className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 transition-colors" />
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-600/5 to-indigo-600/5" />

							<div className="relative p-12 flex flex-col justify-between h-96">
								{/* Header */}
								<div>
									<div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm">
										For Advertisers
									</div>
									<h2 className="text-4xl font-bold text-gray-900 mb-4">
										Get Quality <span className="text-blue-600">Backlinks</span> Fast
									</h2>
									<p className="text-lg text-gray-600">
										Find verified publishers, place guest posts, and track results. 150K+ sites available with
										transparent pricing and escrow protection.
									</p>
								</div>

								{/* Footer with Icon */}
								<div className="flex items-center justify-between pt-8 border-t border-blue-200 group-hover:border-blue-300 transition-colors">
									<span className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
										Browse Advertiser Platform
									</span>
									<FiArrowRight className="w-6 h-6 text-blue-600 group-hover:translate-x-2 transition-transform" />
								</div>
							</div>
						</Link>
					</section>
				</div>
			</div>
		</main>
	)
}
