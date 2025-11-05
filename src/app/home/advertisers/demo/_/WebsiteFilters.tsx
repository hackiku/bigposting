// @ts-nocheck
// src/app/home/advertisers/demo/WebsiteFilters.tsx

"use client";

import { useState } from "react";

export function WebsiteFilters() {
	const [mozRange, setMozRange] = useState([40, 80]);
	const [selectedTopics, setSelectedTopics] = useState<string[]>(["Technology", "Business"]);

	const topics = [
		"Technology",
		"Business",
		"Health",
		"Finance",
		"Marketing",
		"Travel",
		"Education",
		"Lifestyle",
	];

	const toggleTopic = (topic: string) => {
		setSelectedTopics((prev) =>
			prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
		);
	};

	return (
		<div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
			<div className="flex items-center justify-between mb-8">
				<h3 className="text-xl font-bold text-gray-900">Filter Websites</h3>
				<span className="text-sm font-medium text-blue-600">20+ search filters</span>
			</div>

			<div className="space-y-8">
				{/* Moz DA Range Slider */}
				<div>
					<label className="block text-sm font-semibold text-gray-900 mb-4">
						Moz Domain Authority
					</label>
					<div className="relative pt-2 pb-6">
						{/* Range display */}
						<div className="flex justify-between mb-4">
							<span className="text-sm font-medium text-gray-700">DA {mozRange[0]}</span>
							<span className="text-sm font-medium text-gray-700">DA {mozRange[1]}</span>
						</div>
						{/* Track */}
						<div className="relative h-2 bg-gray-200 rounded-full">
							{/* Active range */}
							<div
								className="absolute h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
								style={{
									left: `${(mozRange[0] / 100) * 100}%`,
									right: `${100 - (mozRange[1] / 100) * 100}%`,
								}}
							/>
							{/* Left knob */}
							<div
								className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-blue-500 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform"
								style={{ left: `${(mozRange[0] / 100) * 100}%` }}
							/>
							{/* Right knob */}
							<div
								className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-blue-500 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform"
								style={{ left: `${(mozRange[1] / 100) * 100}%` }}
							/>
						</div>
					</div>
				</div>

				{/* Topics */}
				<div>
					<label className="block text-sm font-semibold text-gray-900 mb-3">Topics</label>
					<div className="flex flex-wrap gap-2">
						{topics.map((topic) => (
							<button
								key={topic}
								onClick={() => toggleTopic(topic)}
								className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedTopics.includes(topic)
										? "bg-blue-600 text-white shadow-md"
										: "bg-gray-100 text-gray-700 hover:bg-gray-200"
									}`}
							>
								{topic}
							</button>
						))}
					</div>
				</div>

				{/* Traffic Range */}
				<div>
					<label className="block text-sm font-semibold text-gray-900 mb-3">
						Monthly Traffic
					</label>
					<select className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
						<option>Any</option>
						<option>10K+</option>
						<option>50K+</option>
						<option>100K+</option>
						<option>500K+</option>
						<option>1M+</option>
					</select>
				</div>

				{/* Language */}
				<div>
					<label className="block text-sm font-semibold text-gray-900 mb-3">Language</label>
					<select className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
						<option>All Languages</option>
						<option>English</option>
						<option>Spanish</option>
						<option>German</option>
						<option>French</option>
						<option>Portuguese</option>
					</select>
				</div>

				{/* Search Button */}
				<button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg">
					Search Websites
				</button>
			</div>
		</div>
	);
}