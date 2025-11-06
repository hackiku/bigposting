// src/app/home/advertisers/demo/CampaignDashboard.tsx
"use client";

export function CampaignDashboard() {
	return (
		<div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
			{/* Header */}
			<div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
				<div className="flex items-center justify-between">
					<h3 className="text-2xl font-bold text-white">Active Campaigns</h3>
					<span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white font-semibold">
						12 backlinks/day
					</span>
				</div>
			</div>

			{/* Stats Row */}
			<div className="grid grid-cols-3 gap-4 p-6 bg-gray-50 border-b border-gray-200">
				<div className="text-center">
					<div className="text-3xl font-black text-blue-600">247</div>
					<div className="text-sm text-gray-600 font-medium">Total Orders</div>
				</div>
				<div className="text-center">
					<div className="text-3xl font-black text-green-600">189</div>
					<div className="text-sm text-gray-600 font-medium">Live Links</div>
				</div>
				<div className="text-center">
					<div className="text-3xl font-black text-orange-600">24</div>
					<div className="text-sm text-gray-600 font-medium">In Progress</div>
				</div>
			</div>

			{/* Campaign List */}
			<div className="p-6 space-y-4">
				{/* Campaign 1 */}
				<div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
					<div className="flex items-center gap-4">
						<div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
							<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<div>
							<div className="font-semibold text-gray-900">techblaster.co.uk</div>
							<div className="text-sm text-gray-600">Published 2 hours ago</div>
						</div>
					</div>
					<span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
						LIVE
					</span>
				</div>

				{/* Campaign 2 */}
				<div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
					<div className="flex items-center gap-4">
						<div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
							<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<div>
							<div className="font-semibold text-gray-900">newsbreak.com</div>
							<div className="text-sm text-gray-600">In Review - 1 day left</div>
						</div>
					</div>
					<span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
						PENDING
					</span>
				</div>

				{/* Campaign 3 */}
				<div className="flex items-center justify-between p-4 bg-orange-50 border border-orange-200 rounded-lg">
					<div className="flex items-center gap-4">
						<div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
							<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
							</svg>
						</div>
						<div>
							<div className="font-semibold text-gray-900">dgmnews.com</div>
							<div className="text-sm text-gray-600">Writing content</div>
						</div>
					</div>
					<span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
						WRITING
					</span>
				</div>
			</div>
		</div>
	);
}