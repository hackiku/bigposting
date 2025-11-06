// src/components/proof/TestimonialCards.tsx
// import { FiQuoteLeft } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
	{
		name: "Sarah Mitchell",
		role: "Travel Blogger",
		avatar: "from-green-400 to-green-600",
		rating: 5,
		text: "Bigposting has completely transformed how I monetize my blog. The platform is easy to use and payments are always on time.",
		results: { metric: "12 backlinks", period: "per day" }
	},
	{
		name: "Mike Chen",
		role: "Tech Publisher",
		avatar: "from-blue-400 to-blue-600",
		rating: 5,
		text: "The escrow system gives me peace of mind. I've earned over $15k in 6 months with zero payment issues.",
		results: { metric: "$15k earned", period: "in 6 months" }
	},
	{
		name: "Emma Rodriguez",
		role: "Food & Lifestyle",
		avatar: "from-purple-400 to-purple-600",
		rating: 5,
		text: "Getting verified was quick and easy. I started receiving orders within 48 hours of listing my site.",
		results: { metric: "48 hours", period: "to first order" }
	},
];

export function TestimonialCards() {
	return (
		<div className="grid md:grid-cols-3 gap-8">
			{testimonials.map((testimonial) => (
				<div
					key={testimonial.name}
					className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative group hover:-translate-y-1"
				>
					{/* Quote Icon */}
					<div className="absolute -top-4 left-6">
						<div className="bg-blue-500 rounded-full p-3 shadow-lg">
							<FaQuoteLeft className="w-5 h-5 text-white" />
						</div>
					</div>

					{/* Rating */}
					<div className="flex items-center gap-1 mb-4 mt-4">
						{[...Array(testimonial.rating)].map((_, idx) => (
							<svg key={idx} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
						))}
					</div>

					{/* Quote Text */}
					<p className="text-gray-700 mb-6 leading-relaxed text-lg">
						"{testimonial.text}"
					</p>

					{/* Results Box */}
					<div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-3 mb-6">
						<div className="flex items-center justify-between">
							<div>
								<div className="text-xs text-gray-600 font-medium uppercase tracking-wide">Results</div>
								<div className="text-2xl font-black text-green-600">{testimonial.results.metric}</div>
							</div>
							<div className="text-xs text-gray-500">{testimonial.results.period}</div>
						</div>
					</div>

					{/* Author */}
					<div className="flex items-center gap-3">
						<div className={`w-14 h-14 bg-gradient-to-br ${testimonial.avatar} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md`}>
							{testimonial.name.charAt(0)}
						</div>
						<div>
							<div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
							<div className="text-sm text-gray-600">{testimonial.role}</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}