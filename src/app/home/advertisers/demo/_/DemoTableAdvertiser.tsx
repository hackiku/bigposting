// src/app/home/advertisers/demo/table/DemoTable.tsx

"use client";

import { demoWebsites } from "../data/advertiser-demo";

export function DemoTableAdvertiser() {
	return (
		<div className="relative">
			<table className="w-full">
				<thead className="bg-gray-50 border-b">
					<tr>
						<th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Website
						</th>
						<th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
							Category
						</th>
						<th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
							DA
						</th>
						<th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
							Traffic
						</th>
						<th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
							Price
						</th>
						<th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
							Action
						</th>
					</tr>
				</thead>
				<tbody className="bg-white divide-y divide-gray-200">
					{demoWebsites.map((website) => (
						<tr key={website.id} className="hover:bg-gray-50 transition-colors">
							{/* Website */}
							<td className="px-3 py-4">
								<div className="flex items-center gap-2">
									<a
										href={`https://${website.url}`}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm font-medium text-blue-600 hover:text-blue-800"
									>
										{website.url}
									</a>
									{website.verified && (
										<svg
											className="w-4 h-4 text-green-500"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											/>
										</svg>
									)}
								</div>
							</td>

							{/* Category */}
							<td className="px-3 py-4 text-center">
								<span className="inline-block text-xs text-gray-700 bg-gray-100 rounded px-2 py-1">
									{website.categories[0]}
								</span>
							</td>

							{/* DA */}
							<td className="px-3 py-4 text-center">
								<span className="text-sm font-medium text-blue-600 bg-blue-50 rounded px-2 py-1">
									{website.moz_da}
								</span>
							</td>

							{/* Traffic */}
							<td className="px-3 py-4 text-center">
								<span className="text-sm font-medium text-gray-900">
									{website.monthly_traffic >= 1000000
										? `${(website.monthly_traffic / 1000000).toFixed(1)}M`
										: website.monthly_traffic >= 1000
											? `${(website.monthly_traffic / 1000).toFixed(0)}K`
											: website.monthly_traffic}
								</span>
							</td>

							{/* Price */}
							<td className="px-3 py-4 text-center">
								<span className="text-sm font-bold text-green-600">
									${Math.min(
										website.mainServices.contentPlacement.enabled
											? website.mainServices.contentPlacement.price
											: 9999,
										website.mainServices.writingAndPlacement.enabled
											? website.mainServices.writingAndPlacement.price
											: 9999,
										website.mainServices.linkInsertion.enabled
											? website.mainServices.linkInsertion.price
											: 9999
									)}
								</span>
							</td>

							{/* Action */}
							<td className="px-3 py-4 text-center">
								<button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
									Order
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}