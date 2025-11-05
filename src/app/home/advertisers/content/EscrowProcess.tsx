// src/app/home/advertisers/content/EscrowProcess.tsx
"use client";

const steps = [
	{
		number: "1",
		title: "Place Order",
		description: "Funds held in escrow",
		amount: "$500",
		color: "from-purple-400 to-purple-600",
		delay: "0ms"
	},
	{
		number: "2",
		title: "Content Published",
		description: "Verify live link",
		icon: "✓",
		color: "from-blue-400 to-blue-600",
		delay: "150ms"
	},
	{
		number: "3",
		title: "Release Payment",
		description: "Publisher gets paid",
		icon: "💰",
		color: "from-green-400 to-green-600",
		delay: "300ms"
	},
];

export function EscrowProcess() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
			{steps.map((step, index) => (
				<div
					key={step.number}
					className="group relative w-full md:w-72"
					style={{
						animation: `slideInDiagonal 0.6s ease-out forwards`,
						animationDelay: step.delay,
						opacity: 0,
						transform: index % 2 === 0 ? 'translate(-20px, 20px)' : 'translate(20px, -20px)'
					}}
				>
					{/* Card */}
					<div className={`
						relative bg-white rounded-2xl p-6 shadow-lg border-2 
						${step.number === "1" ? "border-purple-200" : ""}
						${step.number === "2" ? "border-blue-200" : ""}
						${step.number === "3" ? "border-green-200" : ""}
						hover:shadow-xl hover:-translate-y-1 transition-all duration-300
					`}>
						{/* Number badge */}
						<div className={`
							absolute -top-4 -left-4 w-12 h-12 rounded-full 
							bg-gradient-to-br ${step.color}
							flex items-center justify-center text-white font-black text-xl
							shadow-lg
						`}>
							{step.number}
						</div>

						{/* Content */}
						<div className="mt-4">
							<h3 className="text-xl font-bold text-gray-900 mb-2">
								{step.title}
							</h3>
							<p className="text-sm text-gray-600 mb-4">
								{step.description}
							</p>

							{/* Amount or Icon */}
							<div className="text-center py-3">
								{step.amount ? (
									<span className={`
										text-3xl font-black
										${step.number === "1" ? "text-purple-600" : ""}
										${step.number === "2" ? "text-blue-600" : ""}
										${step.number === "3" ? "text-green-600" : ""}
									`}>
										{step.amount}
									</span>
								) : (
									<span className="text-4xl">
										{step.icon}
									</span>
								)}
							</div>
						</div>
					</div>

					{/* Arrow connector (hidden on last item) */}
					{index < steps.length - 1 && (
						<div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
							<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
								<path d="M4 16H28M28 16L20 8M28 16L20 24" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</div>
					)}
				</div>
			))}

			<style jsx>{`
				@keyframes slideInDiagonal {
					to {
						opacity: 1;
						transform: translate(0, 0);
					}
				}
			`}</style>
		</div>
	);
}