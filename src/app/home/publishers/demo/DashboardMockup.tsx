// src/app/home/publishers/demo/DashboardMockup.tsx

export function DashboardMockup() {
	return (
		<div className="relative bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 lg:p-12">
			{/* Main Dashboard Card */}
			<div className="bg-white rounded-xl shadow-xl p-6 space-y-4 relative z-10">
				<div className="flex items-center justify-between pb-4 border-b border-gray-200">
					<div className="flex items-center gap-3">
						<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
							<svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
							</svg>
						</div>
						<div>
							<div className="font-semibold text-gray-900">yourwebsite.com</div>
							<div className="text-sm text-green-600 flex items-center gap-1">
								<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
								</svg>
								Verified
							</div>
						</div>
					</div>
					<div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
						Live
					</div>
				</div>
				<div className="space-y-3">
					<div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
						<span className="text-sm text-gray-600">Guest Post</span>
						<span className="text-lg font-bold text-gray-900">$150</span>
					</div>
					<div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
						<span className="text-sm text-gray-600">Link Insertion</span>
						<span className="text-lg font-bold text-gray-900">$75</span>
					</div>
				</div>
				<div className="pt-4 border-t border-gray-200">
					<div className="text-sm text-gray-500 mb-2">Monthly Earnings</div>
					<div className="text-3xl font-bold text-green-600">$2,400</div>
				</div>
			</div>

			{/* Organic Splatter/Cloud Badge - Bottom Right */}
			<div className="absolute -bottom-6 -right-6 z-20">
				<div className="relative w-40 h-40 sm:w-48 sm:h-48">
					{/* Organic blob background SVG */}
					<svg
						className="absolute inset-0 w-full h-full"
						viewBox="0 0 200 200"
						xmlns="http://www.w3.org/2000/svg"
					>
						<defs>
							<linearGradient id="splatter-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
								<stop offset="100%" style={{ stopColor: '#059669', stopOpacity: 1 }} />
							</linearGradient>
						</defs>
						{/* Organic splatter/cloud shape */}
						<path
							fill="url(#splatter-gradient)"
							d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.3C64.8,55.4,53.8,67,40.5,74.8C27.2,82.6,11.6,86.6,-3.4,92.8C-18.4,99,-36.8,107.4,-49.8,99.8C-62.8,92.2,-70.4,68.6,-76.9,47.1C-83.4,25.6,-88.8,6.2,-87.3,-12.4C-85.8,-31,-77.4,-48.8,-64.8,-56.7C-52.2,-64.6,-35.4,-62.6,-20.3,-69.4C-5.2,-76.2,8.2,-91.8,22.4,-91.4C36.6,-91,51.6,-74.6,44.7,-76.4Z"
							transform="translate(100 100) scale(0.9)"
						/>
					</svg>

					{/* Content on top of splatter */}
					<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
						<div className="text-white font-black text-2xl sm:text-3xl leading-tight mb-1">
							$2.4K
						</div>
						<div className="text-white/90 font-bold text-xs sm:text-sm uppercase tracking-wide">
							Monthly
						</div>
					</div>
				</div>
			</div>

			{/* Floating Orders Badge - Top Right */}
			<div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border-2 border-green-500 z-10">
				<div className="text-sm text-gray-600">Orders This Week</div>
				<div className="text-2xl font-bold text-gray-900">12</div>
			</div>
		</div>
	);
}