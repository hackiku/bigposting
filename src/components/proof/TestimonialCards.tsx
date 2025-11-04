// src/components/proof/TestimonialCards.tsx

const testimonials = [
	{
		name: "Sarah Mitchell",
		role: "Travel Blogger",
		avatar: "from-green-400 to-green-600",
		rating: 5,
		text: "Bigposting has completely transformed how I monetize my blog. The platform is easy to use and payments are always on time.",
	},
	{
		name: "Mike Chen",
		role: "Tech Publisher",
		avatar: "from-blue-400 to-blue-600",
		rating: 5,
		text: "The escrow system gives me peace of mind. I've earned over $15k in 6 months with zero payment issues.",
	},
	{
		name: "Emma Rodriguez",
		role: "Food & Lifestyle",
		avatar: "from-purple-400 to-purple-600",
		rating: 5,
		text: "Getting verified was quick and easy. I started receiving orders within 48 hours of listing my site.",
	},
];

export function TestimonialCards() {
	return (
		<div className="grid md:grid-cols-3 gap-8">
			{testimonials.map((testimonial) => (
				<div key={testimonial.name} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
					<div className="flex items-center gap-1 mb-4">
						{[...Array(testimonial.rating)].map((_, idx) => (
							<svg key={idx} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
						))}
					</div>
					<p className="text-gray-700 mb-6 leading-relaxed">
						"{testimonial.text}"
					</p>
					<div className="flex items-center gap-3">
						<div className={`w-12 h-12 bg-gradient-to-br ${testimonial.avatar} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
							{testimonial.name.charAt(0)}
						</div>
						<div>
							<div className="font-semibold text-gray-900">{testimonial.name}</div>
							<div className="text-sm text-gray-500">{testimonial.role}</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}