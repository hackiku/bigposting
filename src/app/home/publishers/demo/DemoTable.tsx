// src/app/home/publishers/demo/DemoTable.tsx

"use client";

import { WhiteLogos } from '@/components/proof/WhiteLogos';
import { demoWebsites } from '../data/mini-table-data';
import { VerificationBadge } from './VerificationBadge';

export function DemoTable() {
	return (
		<div className="relative">
			{/* Compact Table */}
			<div className="bg-white rounded-lg shadow-sm overflow-hidden">
				<table className="w-full">
					<thead className="bg-gray-50 border-b">
						<tr>
							<th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Website
							</th>
							<th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
								Category
							</th>
							<th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
								DA
							</th>
							<th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
								Traffic
							</th>
							<th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
								Language
							</th>
							<th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
								Price
							</th>
							<th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
								Action
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{demoWebsites.map((website) => (
							<tr key={website.id} className="hover:bg-gray-50 transition-colors">
								{/* Website URL */}
								<td className="px-3 py-3">
									<div className="flex items-center gap-2">
										<a
											href={`https://${website.url}`}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1"
										>
											{website.url.replace(/^(www\.|https?:\/\/)/, '').split('/')[0]}
										</a>
										<VerificationBadge isVerified={website.verified} size="sm" />
									</div>
								</td>

								{/* Category (first only) */}
								<td className="px-3 py-3 text-center">
									<span className="inline-block text-xs text-gray-700 bg-gray-100 rounded px-2 py-1">
										{website.categories[0]}
									</span>
								</td>

								{/* Moz DA */}
								<td className="px-3 py-3 text-center">
									<div className="flex items-center justify-center gap-1">
										<span className="text-xs font-medium text-blue-600 bg-blue-50 rounded px-2 py-0.5">
											{website.moz_da}
										</span>
									</div>
								</td>

								{/* Traffic */}
								<td className="px-3 py-3 text-center">
									<span className="text-xs font-medium text-gray-900">
										{website.monthly_traffic >= 1000000
											? `${(website.monthly_traffic / 1000000).toFixed(1)}M`
											: website.monthly_traffic >= 1000
												? `${(website.monthly_traffic / 1000).toFixed(1)}K`
												: '<100'
										}
									</span>
								</td>

								{/* Language */}
								<td className="px-3 py-3 text-center">
									<span className="text-xs text-gray-600">{website.language}</span>
								</td>

								{/* Price (lowest service) */}
								<td className="px-3 py-3 text-center">
									<span className="text-sm font-bold text-green-600">
										${Math.min(
											website.mainServices.contentPlacement.enabled ? website.mainServices.contentPlacement.price : 999,
											website.mainServices.writingAndPlacement.enabled ? website.mainServices.writingAndPlacement.price : 999,
											website.mainServices.linkInsertion.enabled ? website.mainServices.linkInsertion.price : 999
										)}
									</span>
								</td>

								{/* Action */}
								<td className="px-3 py-3 text-center">
									<button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-xs font-medium transition-colors">
										Order
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Gradient Fade Overlay */}
			
		</div>
	);
}