// src/app/home/advertisers/demo/WebsiteSearch.tsx
"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface WebsiteSearchProps {
	totalResults: number;
	displayedResults: number;
}

export function WebsiteSearch({ totalResults, displayedResults }: WebsiteSearchProps) {
	const [daRange, setDaRange] = useState({ min: 40, max: 80 });
	const [selectedTopics, setSelectedTopics] = useState<string[]>(["Technology", "Business"]);
	const [selectedTraffic, setSelectedTraffic] = useState<string>("Any");

	const topics = ["Technology", "Business", "Health", "Finance", "Marketing", "Travel"];
	const trafficOptions = ["Any", "10K+", "50K+", "100K+", "500K+", "1M+"];

	const toggleTopic = (topic: string) => {
		setSelectedTopics(prev =>
			prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]
		);
	};

	const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value);
		setDaRange(prev => ({ ...prev, min: Math.min(value, prev.max - 5) }));
	};

	const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value);
		setDaRange(prev => ({ ...prev, max: Math.max(value, prev.min + 5) }));
	};

	return (
		<div className="space-y-4 mb-6">
			{/* Search Bar + Results Counter */}
			<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
				<div className="flex items-center gap-3">
					<FiSearch className="text-white/60" size={20} />
					<h3 className="text-xl font-semibold text-white">
						Found: <span className="text-green-400">{totalResults} Approved Websites</span>
					</h3>
				</div>
				<span className="text-sm text-white/50">
					Showing 1-{displayedResults} of {totalResults}
				</span>
			</div>

			{/* Compact Filters */}
			<div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
				<div className="grid md:grid-cols-3 gap-4">
					{/* DA Range */}
					<div>
						<label className="block text-xs font-medium text-white/60 uppercase tracking-wide mb-2">
							Domain Authority
						</label>
						<div className="flex items-center gap-2 text-xs text-white/80">
							<span>DA {daRange.min}</span>
							<div className="relative flex-1 h-1 bg-white/10 rounded-full">
								<div
									className="absolute h-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
									style={{
										left: `${daRange.min}%`,
										right: `${100 - daRange.max}%`,
									}}
								/>
								<input
									type="range"
									min="0"
									max="100"
									value={daRange.min}
									onChange={handleMinChange}
									className="absolute w-full h-1 appearance-none bg-transparent pointer-events-auto opacity-0"
								/>
								<input
									type="range"
									min="0"
									max="100"
									value={daRange.max}
									onChange={handleMaxChange}
									className="absolute w-full h-1 appearance-none bg-transparent pointer-events-auto opacity-0"
								/>
							</div>
							<span>DA {daRange.max}</span>
						</div>
					</div>

					{/* Topics */}
					<div>
						<label className="block text-xs font-medium text-white/60 uppercase tracking-wide mb-2">
							Topics
						</label>
						<div className="flex flex-wrap gap-1.5">
							{topics.map((topic) => (
								<button
									key={topic}
									onClick={() => toggleTopic(topic)}
									className={`px-2 py-1 rounded-md text-xs font-medium transition-all ${selectedTopics.includes(topic)
											? "bg-blue-500 text-white"
											: "bg-white/10 text-white/70 hover:bg-white/20"
										}`}
								>
									{topic}
								</button>
							))}
						</div>
					</div>

					{/* Traffic */}
					<div>
						<label className="block text-xs font-medium text-white/60 uppercase tracking-wide mb-2">
							Monthly Traffic
						</label>
						<div className="flex flex-wrap gap-1.5">
							{trafficOptions.map((option) => (
								<button
									key={option}
									onClick={() => setSelectedTraffic(option)}
									className={`px-2 py-1 rounded-md text-xs font-medium transition-all ${selectedTraffic === option
											? "bg-green-500 text-white"
											: "bg-white/10 text-white/70 hover:bg-white/20"
										}`}
								>
									{option}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}