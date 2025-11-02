// src/app/home/publishers/demo/DashboardMockup.tsx

export function DashboardMockup() {
	return (
		<div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 lg:p-12 relative">
			<div className="bg-white rounded-xl shadow-xl p-6 space-y-4">
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
			{/* Floating stats */}
			<div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border-2 border-green-500">
				<div className="text-sm text-gray-600">Orders This Week</div>
				<div className="text-2xl font-bold text-gray-900">12</div>
			</div>
		</div>
	);
}