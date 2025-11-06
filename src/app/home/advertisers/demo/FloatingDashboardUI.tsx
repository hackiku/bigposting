// src/app/home/advertisers/demo/FloatingDashboardUI.tsx
"use client";

export function FloatingDashboardUI() {
	return (
		<div className="relative w-full h-[350px]">
			{/* DA Filter Card - Top Left */}
			<div
				className="absolute top-0 left-0 bg-white rounded-xl shadow-lg p-4 border border-gray-200 w-48"
				style={{ transform: 'rotate(-2deg)' }}
			>
				<div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
					Domain Authority
				</div>
				<div className="flex items-center gap-2">
					<span className="text-sm font-bold text-blue-600">DA 40</span>
					<div className="flex-1 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
					<span className="text-sm font-bold text-blue-600">80</span>
				</div>
			</div>

			{/* Traffic Card - Top Right */}
			<div
				className="absolute top-8 right-8 bg-white rounded-xl shadow-lg p-4 border border-gray-200 w-56"
				style={{ transform: 'rotate(3deg)' }}
			>
				<div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
					Monthly Traffic
				</div>
				<div className="flex gap-2">
					<span className="px-3 py-1.5 bg-green-500 text-white rounded-full text-xs font-bold">100K+</span>
					<span className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">500K+</span>
				</div>
			</div>

			{/* Categories - Center */}
			<div
				className="absolute top-24 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg p-4 border border-gray-200 w-64"
				style={{ transform: 'translateX(-50%) rotate(1deg)' }}
			>
				<div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
					Categories
				</div>
				<div className="flex flex-wrap gap-2">
					<span className="px-3 py-1 bg-blue-500 text-white rounded-md text-xs font-semibold">Technology</span>
					<span className="px-3 py-1 bg-blue-500 text-white rounded-md text-xs font-semibold">Business</span>
					<span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">Health</span>
				</div>
			</div>

			{/* Price Range - Bottom Left */}
			<div
				className="absolute bottom-0 left-12 bg-white rounded-xl shadow-lg p-4 border border-gray-200 w-52"
				style={{ transform: 'rotate(-1deg)' }}
			>
				<div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
					Price Range
				</div>
				<div className="flex items-center justify-between">
					<div className="text-center">
						<div className="text-xs text-gray-500">Min</div>
						<div className="text-lg font-bold text-gray-900">$15</div>
					</div>
					<div className="text-gray-300">━</div>
					<div className="text-center">
						<div className="text-xs text-gray-500">Max</div>
						<div className="text-lg font-bold text-gray-900">$200</div>
					</div>
				</div>
			</div>

			{/* Results Counter - Bottom Right */}
			<div
				className="absolute bottom-4 right-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg p-4 text-white w-56"
				style={{ transform: 'rotate(2deg)' }}
			>
				<div className="text-xs font-semibold uppercase tracking-wide mb-1 opacity-90">
					Results Found
				</div>
				<div className="text-3xl font-black">6,246</div>
				<div className="text-xs opacity-90">Verified Websites</div>
			</div>
		</div>
	);
}