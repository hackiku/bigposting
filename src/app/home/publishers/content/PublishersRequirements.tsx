// src/app/home/publishers/content/PublisherRequirements.tsx

import { FiCheck, FiX } from "react-icons/fi";

const requirements = [
	"You must own or manage the website",
	"1,000+ monthly unique visitors",
	"Original, high-quality content",
	"Mobile-responsive website design",
	"Clear navigation and professional layout",
	"Regular content updates",
];

const notAllowed = [
	"Adult or explicit content",
	"Illegal or harmful activities",
	"Spam or low-quality content",
	"Copyright-infringing material",
	"Excessive pop-ups or intrusive ads",
];

export function PublisherRequirements() {
	return (
		<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
			{/* Minimum Requirements */}
			<div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
				<div className="flex items-center gap-3 mb-6">
					<div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center">
						<FiCheck className="w-6 h-6 text-white" />
					</div>
					<h3 className="text-2xl font-bold text-gray-900">
						Minimum Requirements
					</h3>
				</div>
				<ul className="space-y-3">
					{requirements.map((req, idx) => (
						<li key={idx} className="flex items-start gap-3">
							<FiCheck className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
							<span className="text-gray-700">{req}</span>
						</li>
					))}
				</ul>
			</div>

			{/* Not Allowed */}
			<div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-8 border-2 border-red-200">
				<div className="flex items-center gap-3 mb-6">
					<div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center">
						<FiX className="w-6 h-6 text-white" />
					</div>
					<h3 className="text-2xl font-bold text-gray-900">
						Not Allowed
					</h3>
				</div>
				<ul className="space-y-3">
					{notAllowed.map((item, idx) => (
						<li key={idx} className="flex items-start gap-3">
							<FiX className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
							<span className="text-gray-700">{item}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}