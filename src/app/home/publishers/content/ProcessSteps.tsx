// src/app/home/publishers/content/ProcessSteps.tsx

const steps = [
	{
		number: 1,
		title: "List Your Website",
		description: "Add your site details, set your prices, and submit for verification. Get approved in 24-48 hours.",
		gradient: "from-green-400 to-green-600",
	},
	{
		number: 2,
		title: "Receive Orders",
		description: "Advertisers discover your site and place orders. Funds are held securely in escrow.",
		gradient: "from-blue-400 to-blue-600",
	},
	{
		number: 3,
		title: "Get Paid",
		description: "Publish the content, submit proof, and receive instant payment. Withdraw anytime.",
		gradient: "from-purple-400 to-purple-600",
	},
];

export function ProcessSteps() {
	return (
		<div className="grid md:grid-cols-3 gap-8 relative">
			{/* Connection Line - Desktop */}
			<div
				className="hidden md:block absolute top-16 h-1 bg-gradient-to-r from-green-200 via-blue-200 to-purple-200"
				style={{ width: 'calc(100% - 200px)', left: '100px' }}
			/>

			{steps.map((step) => (
				<div key={step.number} className="relative">
					<div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative z-10">
						<div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto`}>
							{step.number}
						</div>
						<h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
							{step.title}
						</h3>
						<p className="text-gray-600 text-center">
							{step.description}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}