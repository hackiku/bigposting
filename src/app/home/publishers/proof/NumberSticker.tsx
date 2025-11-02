// src/app/home/publishers/proof/LogoBar.tsx

const trustedBy = [
	{ name: "TechCrunch", logo: "TC" },
	{ name: "Forbes", logo: "FB" },
	{ name: "Entrepreneur", logo: "ENT" },
	{ name: "Mashable", logo: "MSH" },
	{ name: "VentureBeat", logo: "VB" },
	{ name: "Business Insider", logo: "BI" },
];

export function LogoBar() {
	return (
		<section className="py-16 bg-white border-t border-gray-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-10">
					<p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
						Trusted by Publishers From
					</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
					{trustedBy.map((company) => (
						<div
							key={company.name}
							className="group relative"
						>
							{/* Logo placeholder - replace with actual logos */}
							<div className="w-32 h-16 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200 transition-all group-hover:border-green-300 group-hover:shadow-md">
								<span className="text-2xl font-bold text-gray-400 group-hover:text-gray-600 transition-colors">
									{company.logo}
								</span>
							</div>
							{/* Tooltip on hover */}
							<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
								<span className="text-xs text-gray-600 whitespace-nowrap">
									{company.name}
								</span>
							</div>
						</div>
					))}
				</div>

				{/* Stats underneath */}
				<div className="mt-12 pt-8 border-t border-gray-100 grid grid-cols-3 gap-8 text-center">
					<div>
						<div className="text-3xl font-bold text-gray-900">500+</div>
						<div className="text-sm text-gray-600 mt-1">Media Sites</div>
					</div>
					<div>
						<div className="text-3xl font-bold text-gray-900">10K+</div>
						<div className="text-sm text-gray-600 mt-1">Active Publishers</div>
					</div>
					<div>
						<div className="text-3xl font-bold text-gray-900">98%</div>
						<div className="text-sm text-gray-600 mt-1">Satisfaction Rate</div>
					</div>
				</div>
			</div>
		</section>
	);
}