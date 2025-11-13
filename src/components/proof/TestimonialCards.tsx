// src/components/proof/TestimonialCards.tsx
"use client";

import { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { getRandomTestimonials } from "@/data/testimonials";

export function TestimonialCards({ type }: { type?: "publisher" | "advertiser" }) {
	// Initialize with first 4 testimonials (deterministic for SSR)
	const [testimonials, setTestimonials] = useState(() =>
		getRandomTestimonials(4, type, false) // false = no shuffle
	);

	// Shuffle on client mount only
	useEffect(() => {
		setTestimonials(getRandomTestimonials(4, type, true)); // true = shuffle
	}, [type]);

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
			{/* First testimonial - tall, spans 2 rows */}
			<div className="md:row-span-2 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative group hover:-translate-y-1">
				<div className="absolute -top-4 left-6">
					<div className={`rounded-full p-3 shadow-lg ${testimonials[0]?.type === "publisher"
							? "bg-gradient-to-br from-brand-green to-teal-600"
							: "bg-gradient-to-br from-brand-red to-red-600"
						}`}>
						<FaQuoteLeft className="w-5 h-5 text-white" />
					</div>
				</div>

				<div className="flex items-center gap-1 mb-4 mt-4">
					{[...Array(5)].map((_, idx) => (
						<svg key={idx} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
					))}
					<span className="ml-2 text-sm text-gray-500">{testimonials[0]?.timeAgo}</span>
				</div>

				<p className="text-gray-700 mb-6 leading-relaxed text-lg">
					"{testimonials[0]?.text}"
				</p>

				<div className="mt-auto pt-4">
					<div className="flex items-center gap-3">
						<div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md ${testimonials[0]?.type === "publisher"
								? "bg-gradient-to-br from-brand-green to-teal-600"
								: "bg-gradient-to-br from-brand-red to-red-600"
							}`}>
							{testimonials[0]?.name.charAt(0)}
						</div>
						<div>
							<div className="font-bold text-gray-900">{testimonials[0]?.name}</div>
							<div className="text-sm text-gray-600">{testimonials[0]?.role}</div>
							{testimonials[0]?.company && (
								<div className="text-xs text-gray-500">{testimonials[0].company}</div>
							)}
						</div>
					</div>
				</div>
			</div>

			{/* Second testimonial - compact, uses shoutout */}
			<div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative group hover:-translate-y-1">
				<div className="absolute -top-4 left-6">
					<div className={`rounded-full p-3 shadow-lg ${testimonials[1]?.type === "publisher"
							? "bg-gradient-to-br from-brand-green to-teal-600"
							: "bg-gradient-to-br from-brand-red to-red-600"
						}`}>
						<FaQuoteLeft className="w-4 h-4 text-white" />
					</div>
				</div>

				<div className="flex items-center gap-1 mb-3 mt-4">
					{[...Array(5)].map((_, idx) => (
						<svg key={idx} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
					))}
				</div>

				<p className="text-gray-700 mb-4 leading-relaxed">
					"{testimonials[1]?.shoutout}"
				</p>

				<div className="flex items-center gap-3">
					<div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md ${testimonials[1]?.type === "publisher"
							? "bg-gradient-to-br from-brand-green to-teal-600"
							: "bg-gradient-to-br from-brand-red to-red-600"
						}`}>
						{testimonials[1]?.name.charAt(0)}
					</div>
					<div>
						<div className="font-bold text-gray-900 text-sm">{testimonials[1]?.name}</div>
						<div className="text-xs text-gray-600">{testimonials[1]?.role}</div>
					</div>
				</div>
			</div>

			{/* Third testimonial - compact, uses shoutout */}
			<div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative group hover:-translate-y-1">
				<div className="absolute -top-4 left-6">
					<div className={`rounded-full p-3 shadow-lg ${testimonials[2]?.type === "publisher"
							? "bg-gradient-to-br from-brand-green to-teal-600"
							: "bg-gradient-to-br from-brand-orange to-orange-600"
						}`}>
						<FaQuoteLeft className="w-4 h-4 text-white" />
					</div>
				</div>

				<div className="flex items-center gap-1 mb-3 mt-4">
					{[...Array(5)].map((_, idx) => (
						<svg key={idx} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
					))}
				</div>

				<p className="text-gray-700 mb-4 leading-relaxed">
					"{testimonials[2]?.shoutout}"
				</p>

				<div className="flex items-center gap-3">
					<div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md ${testimonials[2]?.type === "publisher"
							? "bg-gradient-to-br from-brand-green to-teal-600"
							: "bg-gradient-to-br from-brand-orange to-orange-600"
						}`}>
						{testimonials[2]?.name.charAt(0)}
					</div>
					<div>
						<div className="font-bold text-gray-900 text-sm">{testimonials[2]?.name}</div>
						<div className="text-xs text-gray-600">{testimonials[2]?.role}</div>
					</div>
				</div>
			</div>

			{/* Fourth testimonial - medium height */}
			<div className="md:col-span-2 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative group hover:-translate-y-1">
				<div className="absolute -top-4 left-6">
					<div className={`rounded-full p-3 shadow-lg ${testimonials[3]?.type === "publisher"
							? "bg-gradient-to-br from-brand-green to-teal-600"
							: "bg-gradient-to-br from-blue-500 to-blue-600"
						}`}>
						<FaQuoteLeft className="w-5 h-5 text-white" />
					</div>
				</div>

				<div className="flex items-center gap-1 mb-4 mt-4">
					{[...Array(5)].map((_, idx) => (
						<svg key={idx} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
					))}
					<span className="ml-2 text-sm text-gray-500">{testimonials[3]?.timeAgo}</span>
				</div>

				<p className="text-gray-700 mb-6 leading-relaxed text-lg">
					"{testimonials[3]?.text}"
				</p>

				<div className="flex items-center gap-3">
					<div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md ${testimonials[3]?.type === "publisher"
							? "bg-gradient-to-br from-brand-green to-teal-600"
							: "bg-gradient-to-br from-blue-500 to-blue-600"
						}`}>
						{testimonials[3]?.name.charAt(0)}
					</div>
					<div>
						<div className="font-bold text-gray-900">{testimonials[3]?.name}</div>
						<div className="text-sm text-gray-600">{testimonials[3]?.role}</div>
						{testimonials[3]?.company && (
							<div className="text-xs text-gray-500">{testimonials[3].company}</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}