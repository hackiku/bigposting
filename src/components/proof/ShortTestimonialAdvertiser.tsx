// src/components/proof/ShortTestimonial.tsx

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

export function ShortTestimonial() {
	return (
		<div className="max-w-3xl mx-auto my-12 px-4">
			<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative">
				{/* Quote icon */}
				<div className="absolute -top-4 left-8">
					<div className="rounded-full p-3 shadow-lg bg-linear-to-br from-brand-green to-teal-600">
						<FaQuoteLeft className="w-4 h-4 text-white" />
					</div>
				</div>

				{/* Stars */}
				<div className="flex items-center gap-1 mb-4 mt-2">
					{[...Array(5)].map((_, idx) => (
						<svg key={idx} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
					))}
				</div>

				{/* Testimonial text */}
				<p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
					"Thank you very much for posting our articles so quickly. Your service is really outstanding and publishing time fast. I will definitely come with more orders next year. I hope you can offer more websites!"
				</p>

				{/* Author */}
				<div className="flex items-center gap-4">
					<div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-green-100">
						<Image
							src="/avatars/jenny-smith.png"
							alt="Jenny S."
							fill
							className="object-cover"
						/>
					</div>
					<div>
						<div className="font-bold text-gray-900">Jenny S.</div>
						<div className="text-sm text-gray-600">Travel Blogger</div>
					</div>
				</div>
			</div>
		</div>
	);
}