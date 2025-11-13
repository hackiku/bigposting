// src/components/ui/BrowserMockup.tsx
"use client";

import Image from "next/image";

interface BrowserMockupProps {
	title: string;
	children: React.ReactNode;
}

export function BrowserMockup({ title, children }: BrowserMockupProps) {
	return (
		<div className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
			{/* Browser Chrome */}
			<div className="bg-gray-100 border-b border-gray-300 px-4 py-3 flex items-center gap-2">
				{/* Traffic Lights */}
				<div className="flex items-center gap-2">
					<div className="w-3 h-3 rounded-full bg-red-500"></div>
					<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
					<div className="w-3 h-3 rounded-full bg-green-500"></div>
				</div>

				{/* Title/URL Bar */}
				<div className="flex-1 ml-4">
					<div className="bg-white rounded-md px-4 py-1.5 text-sm text-gray-600 border border-gray-200">
						{title}
					</div>
				</div>
			</div>

			{/* Content with blurry background - aspect ratio 839:537 */}
			<div className="relative bg-white" style={{ aspectRatio: '839 / 537' }}>
				{/* Blurry Background - explicitly z-0 */}
				<div className="absolute inset-0 z-0">
					<Image
						src="/screenshots/blurry-background.webp"
						alt="Background"
						fill
						className="object-cover pointer-events-none select-none"
						priority={false}
					/>
				</div>

				{/* Content on top - explicitly z-10 and must be direct child of relative parent */}
				{children}
			</div>
		</div>
	);
}