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
		<div className="w-full max-w-md mx-auto">
			<div className="grid grid-cols-2 gap-6">
				{providers.map((provider, index) => (
					<div
						key={provider.name}
						className="relative group flex items-center justify-center"
						style={{
							animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
							animationDelay: `${index * 0.2}s`,
						}}
					>
						<div className="relative w-20 h-20 sm:w-24 sm:h-24 transition-transform group-hover:scale-110 duration-300">
							<Image
								src={provider.icon}
								alt={provider.alt}
								fill
								className="object-contain"
								onError={(e) => {
									const target = e.target as HTMLImageElement;
									target.style.display = 'none';
								}}
							/>
						</div>
					</div>
				))}
			</div>

			<style jsx>{`
				@keyframes float {
					0%, 100% {
						transform: translateY(0px);
					}
					50% {
						transform: translateY(-8px);
					}
				}
			`}</style>
		</div>
	);
}