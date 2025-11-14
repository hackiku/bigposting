// src/components/proof/TrustpilotBar.tsx

export function TrustpilotBar() {
	return (
		<div className="w-full flex justify-center bg-white">
			<a
				href="https://www.trustpilot.com/review/bigposting.com"
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center flex-wrap p-2 gap-2 hover:opacity-90 transition-opacity cursor-pointer"
			>
				{/* Reviews count and stars */}
				<div className="flex items-center gap-1.5">
					<span className="text-gray-700 font-medium">Reviews</span>
					<span className="font-semibold text-gray-900">55</span>

					{/* 5 stars */}
					<div className="flex items-center">
						{[...Array(5)].map((_, i) => (
							<svg
								key={i}
								className="w-5 h-5 text-[#00b67a]"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
							</svg>
						))}
					</div>

					<span className="font-semibold text-gray-900">4.6</span>

					{/* Info icon */}
					<button className="ml-1 group">
						<svg
							className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<circle cx="12" cy="12" r="10" />
							<path d="M12 16v-4M12 8h.01" />
						</svg>
					</button>
				</div>

				{/* Text */}
				<div className="text-sm text-gray-600">
					See our <span className="font-medium">55</span> reviews on
				</div>

				{/* Trustpilot logo */}
				<img
					alt="Trustpilot"
					className="h-8 object-contain"
					src="/logos/trustpilot.png"
				/>
			</a>
		</div>
	);
}