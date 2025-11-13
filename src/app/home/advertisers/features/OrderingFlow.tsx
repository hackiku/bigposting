// src/app/home/advertisers/content/OrderingFlow.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BrowserMockup } from "@/components/ui/BrowserMockup";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
	{
		id: 1,
		image: "/screenshots/advertisers/select-service.png",
		title: "Select Service & Pricing",
		description: "Choose between Guest Post, Writing & Placement, or Link Insertion with transparent pricing",
	},
	{
		id: 2,
		image: "/screenshots/advertisers/order-details.png",
		title: "Submit Order Details",
		description: "Upload your content or provide requirements, add notes, and submit your order in seconds",
	},
];

export function OrderingFlow() {
	const [currentSlide, setCurrentSlide] = useState(0);

	// Auto-rotate every 3 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	const goToSlide = (index: number) => {
		setCurrentSlide(index);
	};

	const goToPrev = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	const goToNext = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	return (
		<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			{/* Header */}

			{/* Browser Mockup with Carousel */}
			<div className="relative">
				<BrowserMockup title={slides[currentSlide].title}>
					{/* Screenshot overlaid on blurry background */}
					<div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
						<div className="relative w-full h-full max-w-[90%] max-h-[90%]">
							<Image
								src={slides[currentSlide].image}
								alt={slides[currentSlide].title}
								fill
								className="object-contain drop-shadow-2xl"
								sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 1000px"
								priority={currentSlide === 0}
							/>
						</div>
					</div>
				</BrowserMockup>

				{/* Navigation Buttons */}
				<button
					onClick={goToPrev}
					className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 
							bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all
							hover:scale-110 border border-gray-200 z-20"
					aria-label="Previous slide"
				>
					<FiChevronLeft className="w-6 h-6 text-gray-700" />
				</button>

				<button
					onClick={goToNext}
					className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12
							bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all
							hover:scale-110 border border-gray-200 z-20"
					aria-label="Next slide"
				>
					<FiChevronRight className="w-6 h-6 text-gray-700" />
				</button>
			</div>

			{/* Slide Description */}
			<div className="text-center mt-8">
				<p className="text-lg text-gray-700 max-w-2xl mx-auto">
					{slides[currentSlide].description}
				</p>
			</div>

			{/* Dots Indicator */}
			<div className="flex justify-center gap-2 mt-6">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						className={`h-2 rounded-full transition-all ${index === currentSlide
							? "w-8 bg-orange-500"
							: "w-2 bg-gray-300 hover:bg-gray-400"
							}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
}