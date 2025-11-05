// src/app/home/publishers/demo/WebsitesDemo.tsx

"use client";

import { useState } from 'react';
import { demoWebsites } from './data';
import { VerificationBadge } from './VerificationBadge';
import { getFlagUrlForLanguage } from './utils/languageFlags';
import { formatTrafficTable, formatReferringDomainsTable } from './utils/formatMetrics';

const formatDomainAge = (years: number) => (years > 0 ? `${years}y` : '0y');

export default function WebsitesDemo() {
	const [favorites, setFavorites] = useState<Set<string>>(new Set());
	const [blacklist, setBlacklist] = useState<Set<string>>(new Set());

	const toggleFavorite = (id: string) => {
		setFavorites(prev => {
			const next = new Set(prev);
			next.has(id) ? next.delete(id) : next.add(id);
			return next;
		});
	};

	const toggleBlacklist = (id: string) => {
		setBlacklist(prev => {
			const next = new Set(prev);
			next.has(id) ? next.delete(id) : next.add(id);
			return next;
		});
	};

	const filteredWebsites = demoWebsites.filter(w => !blacklist.has(w.id));

	return (
			<div className="mx-auto w-full">
				{/* Header */}
				<div className="bg-white rounded-lg shadow-sm p-4 mb-6">
					<div className="flex items-center justify-between">
						<h2 className="text-lg font-semibold text-gray-800">
							{/* x1535  */}
							Found: <span className="text-blue-600">{filteredWebsites.length} Approved Websites</span>
							<span className="text-sm text-gray-500 ml-2">
								Showing 1-{filteredWebsites.length} of {filteredWebsites.length}
							</span>
						</h2>
					</div>
				</div>

				{/* Table */}
				<div className="bg-white rounded-lg shadow-sm overflow-hidden">
					<div className="overflow-x-auto">
						<table className="w- full">
							<thead className="bg-gray-50 border-b">
								<tr>
									<th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Website URL</th>
									<th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Categories</th>
									<th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Moz DA</th>
									<th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Monthly Traffic</th>
									<th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Linking Root Domains</th>
									<th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Domain Age</th>
									<th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Keywords Count</th>
									<th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Language</th>
									<th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Publisher</th>
									<th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
									<th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{filteredWebsites.map((website) => {
									const isFav = favorites.has(website.id);
									const isBl = blacklist.has(website.id);

									return (
										<tr key={website.id} className="hover:bg-gray-50">
											{/* URL + Fav/Blacklist */}
											<td className="px-4 py-4">
												<div className="flex items-center">
													<div className="flex flex-col space-y-1 mr-3">
														<button
															onClick={() => toggleFavorite(website.id)}
															className={`p-1.5 rounded-full text-xs transition-all ${isFav
																? 'bg-gradient-to-r from-pink-500 to-red-500 text-white'
																: 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600 border border-gray-200'
																}`}
															title={isFav ? 'Remove favorite' : 'Add favorite'}
														>
															<svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
																<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
															</svg>
														</button>
														<button
															onClick={() => toggleBlacklist(website.id)}
															className={`p-1.5 rounded-full text-xs transition-all ${isBl
																? 'bg-gradient-to-r from-red-500 to-red-600 text-white'
																: 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600 border border-gray-200'
																}`}
															title={isBl ? 'Remove blacklist' : 'Add blacklist'}
														>
															<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
																<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
															</svg>
														</button>
													</div>
													<div>
														<div className="flex gap-1 items-center">
															<a
																href={`https://${website.url}`}
																target="_blank"
																rel="noopener noreferrer"
																className="text-lg font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1"
															>
																{website.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
																<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																	<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2M14 4h6m0 0v6m0-6L10 14" />
																</svg>
															</a>
															<VerificationBadge isVerified={website.verified} size="sm" />
														</div>
														{website.bestArticles.length > 0 && (
															<div className="mt-2">
																<a
																	href={website.bestArticles[0]}
																	target="_blank"
																	rel="noopener noreferrer"
																	className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100"
																>
																	<svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
																	</svg>
																	Sample Post
																</a>
															</div>
														)}
													</div>
												</div>
											</td>

											{/* Categories */}
											<td className="px-4 py-4">
												<div className="space-y-1">
													{website.categories.slice(0, 3).map((cat, i) => (
														<div key={i} className="text-sm text-gray-900 bg-gray-100 rounded px-2 py-1">{cat}</div>
													))}
													{website.categories.length > 3 && (
														<div className="text-xs text-gray-500">+{website.categories.length - 3} more</div>
													)}
												</div>
											</td>

											{/* Moz DA */}
											<td className="px-4 py- 4">
												<div className="flex flex-col items-center">
													<div className="flex items-center">
														<div className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full mr-2" style={{ backgroundColor: 'rgba(71, 156, 207, 0.1)', color: '#479CCF' }}>
															DA
														</div>
														<span className="text-sm font-medium text-gray-900">{website.moz_da}</span>
													</div>
													<div className="mt-1 text-xs text-gray-500">
														Spam Score {website.spam_score}%
													</div>
												</div>
											</td>

											{/* Traffic */}
											<td className="px-4 py-4 text-center">
												<div className="flex items-center justify-center">
													<svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
													</svg>
													<span className="text-sm font-medium text-gray-900">
														{formatTrafficTable(website.monthly_traffic)}
													</span>
												</div>
											</td>

											{/* Referring Domains */}
											<td className="px-4 py-4 text-center">
												<div className="flex items-center justify-center">
													<svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
													</svg>
													<span className="text-sm font-medium text-gray-900">
														{formatReferringDomainsTable(website.referring_domains)}
													</span>
												</div>
											</td>

											{/* Domain Age */}
											<td className="px-4 py-4 text-center">
												<div className="flex items-center justify-center">
													<svg className="w-4 h-4 text-purple-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
													</svg>
													<span className="text-sm font-medium text-purple-600">
														{formatDomainAge(website.domain_age_years)}
													</span>
												</div>
											</td>

											{/* Keywords */}
											<td className="px-4 py-4 text-center">
												<div className="flex items-center justify-center">
													<svg className="w-4 h-4 text-blue-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
													</svg>
													<span className="text-sm font-medium text-gray-900">
														{website.serpstats_keywords_count > 0 ? website.serpstats_keywords_count.toLocaleString() : '-'}
													</span>
												</div>
											</td>

											{/* Language */}
											<td className="px-4 py-4 text-center">
												<div className="flex flex-col items-center gap-1">
													<img
														src={getFlagUrlForLanguage(website.language, 'w40')}
														alt={website.language}
														className="w-8 h-5 object-cover rounded-xs"
													/>
													<span className="text-sm text-gray-900">{website.language}</span>
												</div>
											</td>

											{/* Publisher */}
											<td className="px-4 py-4 text-center">
												<div className="flex flex-col">
													<span className="font-medium text-blue-600">{website.publisher_name}</span>
													<span className="text-xs text-gray-500">({website.role})</span>
												</div>
											</td>

											{/* Price */}
											<td className="px-4 py-4 text-center">
												<div className="space-y-1">
													{website.mainServices.contentPlacement.enabled && website.mainServices.contentPlacement.price > 0 && (
														<div className="text-xs text-gray-600 bg-gray-50 rounded px-2 py-1">
															<span className="font-medium">Guest Post:</span> <span className="font-bold">${website.mainServices.contentPlacement.price}</span>
														</div>
													)}
													{website.mainServices.writingAndPlacement.enabled && website.mainServices.writingAndPlacement.price > 0 && (
														<div className="text-xs text-gray-600 bg-gray-50 rounded px-2 py-1">
															<span className="font-medium">Writing & Placement:</span> <span className="font-bold">${website.mainServices.writingAndPlacement.price}</span>
														</div>
													)}
													{website.mainServices.linkInsertion.enabled && website.mainServices.linkInsertion.price > 0 && (
														<div className="text-xs text-gray-600 bg-gray-50 rounded px-2 py-1">
															<span className="font-medium">Link Insertion:</span> <span className="font-bold">${website.mainServices.linkInsertion.price}</span>
														</div>
													)}
												</div>
											</td>

											{/* Action */}
											<td className="px-4 py-4">
												<div className="flex flex-col space-y-2">
													<button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded text-xs font-medium flex items-center justify-center">
														<svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
														</svg>
														Order
													</button>
													<button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded text-xs font-medium border border-gray-300">
														Details
													</button>
												</div>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
	);
}