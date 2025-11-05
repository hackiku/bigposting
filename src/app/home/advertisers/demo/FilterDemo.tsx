// src/app/home/advertisers/demo/FilterDemo.tsx
"use client";

import { useState } from "react";

export function FilterDemo() {
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
		<div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm">
			<div className="space-y-5">
				{/* DA Range Slider */}
				<div>
					<label className="block text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">
						Domain Authority
					</label>
					<div className="relative pt-1 pb-6">
						<div className="flex justify-between mb-3 text-xs font-semibold">
							<span className="text-blue-600">DA {daRange.min}</span>
							<span className="text-blue-600">DA {daRange.max}</span>
						</div>

						{/* Track background */}
						<div className="relative h-1.5 bg-gray-200 rounded-full">
							{/* Active range highlight */}
							<div
								className="absolute h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
								style={{
									left: `${daRange.min}%`,
									right: `${100 - daRange.max}%`,
								}}
							/>

							{/* Min slider */}
							<input
								type="range"
								min="0"
								max="100"
								value={daRange.min}
								onChange={handleMinChange}
								className="absolute w-full h-1.5 appearance-none bg-transparent pointer-events-none 
									[&::-webkit-slider-thumb]:pointer-events-auto
									[&::-webkit-slider-thumb]:appearance-none
									[&::-webkit-slider-thumb]:w-4
									[&::-webkit-slider-thumb]:h-4
									[&::-webkit-slider-thumb]:rounded-full
									[&::-webkit-slider-thumb]:bg-white
									[&::-webkit-slider-thumb]:border-2
									[&::-webkit-slider-thumb]:border-blue-500
									[&::-webkit-slider-thumb]:shadow-sm
									[&::-webkit-slider-thumb]:cursor-pointer
									[&::-webkit-slider-thumb]:hover:scale-110
									[&::-webkit-slider-thumb]:transition-transform"
							/>

							{/* Max slider */}
							<input
								type="range"
								min="0"
								max="100"
								value={daRange.max}
								onChange={handleMaxChange}
								className="absolute w-full h-1.5 appearance-none bg-transparent pointer-events-none
									[&::-webkit-slider-thumb]:pointer-events-auto
									[&::-webkit-slider-thumb]:appearance-none
									[&::-webkit-slider-thumb]:w-4
									[&::-webkit-slider-thumb]:h-4
									[&::-webkit-slider-thumb]:rounded-full
									[&::-webkit-slider-thumb]:bg-white
									[&::-webkit-slider-thumb]:border-2
									[&::-webkit-slider-thumb]:border-blue-500
									[&::-webkit-slider-thumb]:shadow-sm
									[&::-webkit-slider-thumb]:cursor-pointer
									[&::-webkit-slider-thumb]:hover:scale-110
									[&::-webkit-slider-thumb]:transition-transform"
							/>
						</div>
					</div>
				</div>

				{/* Topics */}
				<div>
					<label className="block text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">
						Topics
					</label>
					<div className="flex flex-wrap gap-2">
						{topics.map((topic) => (
							<button
								key={topic}
								onClick={() => toggleTopic(topic)}
								className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${selectedTopics.includes(topic)
										? "bg-blue-600 text-white shadow-sm"
										: "bg-gray-100 text-gray-700 hover:bg-gray-200"
									}`}
							>
								{topic}
							</button>
						))}
					</div>
				</div>

				{/* Monthly Traffic - Circular Pills */}
				<div>
					<label className="block text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">
						Monthly Traffic
					</label>
					<div className="flex flex-wrap gap-2">
						{trafficOptions.map((option) => (
							<button
								key={option}
								onClick={() => setSelectedTraffic(option)}
								className={`w-14 h-14 rounded-full text-xs font-bold transition-all ${selectedTraffic === option
										? "bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-sm scale-105"
										: "bg-gray-100 text-gray-600 hover:bg-gray-200"
									}`}
							>
								{option}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}