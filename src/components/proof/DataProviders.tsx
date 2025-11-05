// src/components/proof/DataProviders.tsx
"use client";

import Image from "next/image";

const providers = [
	{ name: "Ahrefs", icon: "/logos/tools/ahrefs.svg", alt: "Ahrefs Logo" },
	{ name: "Moz", icon: "/logos/tools/moz.svg", alt: "Moz Logo" },
	{ name: "Google Analytics", icon: "/logos/tools/google-analytics.svg", alt: "Google Analytics Logo" },
	{ name: "Semrush", icon: "/logos/tools/semrush.svg", alt: "Semrush Logo" },
];

export function DataProviders() {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
				{providers.map((provider, index) => (
					<div
						key={provider.name}
						className="relative group"
						style={{
							animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
							animationDelay: `${index * 0.2}s`,
						}}
					>
						
								<div className="relative  sm:w-24 sm:h-24 md:w-28 md:h-28 transition-transform group-hover:scale-110 duration-300">
									<Image
										src={provider.icon}
										alt={provider.alt}
										fill
										className="object-contain rounded-2xl"
										onError={(e) => {
											// Fallback to text if image fails
											const target = e.target as HTMLImageElement;
											target.style.display = 'none';
											const parent = target.parentElement;

										}}
									/>
								</div>

						{/* HOVER NAME */}
						{/* <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
							<span className="text-xs font-semibold text-gray-600 whitespace-nowrap">
								{provider.name}
							</span>
						</div> */}
					</div>
				))}
			</div>


			<style jsx>{`
				@keyframes float {
					0%, 100% {
						transform: translateY(0px) rotate(0deg);
					}
					50% {
						transform: translateY(-10px) rotate(2deg);
					}
				}
			`}</style>
		</div>
	);
}