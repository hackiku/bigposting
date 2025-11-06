// src/app/home/publishers/content/EscrowFlow.tsx

export function EscrowFlow() {
	return (
		<div className="bg-white rounded-xl shadow-xl p-6">
			<div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
				<div className="font-semibold text-gray-900">Payment Protection</div>
				<svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
				</svg>
			</div>
			<div className="space-y-4">
				<div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
					<div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
					<div className="flex-1">
						<div className="text-sm font-medium text-gray-900">Advertiser Places Order</div>
						<div className="text-xs text-gray-600">Funds held in escrow</div>
					</div>
					<div className="text-green-600 font-semibold">$150</div>
				</div>
				<div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
					<div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
					<div className="flex-1">
						<div className="text-sm font-medium text-gray-900">You Publish Content</div>
						<div className="text-xs text-gray-600">Submit proof of publication</div>
					</div>
					<div className="text-blue-600 font-semibold">✓</div>
				</div>
				<div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
					<div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
					<div className="flex-1">
						<div className="text-sm font-medium text-gray-900">Get Paid Instantly</div>
						<div className="text-xs text-gray-600">Withdraw anytime</div>
					</div>
					<div className="text-purple-600 font-semibold">💰</div>
				</div>
			</div>
			<div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
				<span className="text-sm text-gray-600">Available Balance</span>
				<span className="text-2xl font-bold text-green-600">$3,250</span>
			</div>
		</div>
	);
}