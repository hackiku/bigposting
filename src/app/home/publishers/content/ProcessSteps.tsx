// src/app/home/publishers/content/ProcessSteps.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BrowserMockup } from "@/components/ui/BrowserMockup";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const steps = [
	{
		id: 1,
		number: "1",
		title: "Add Your Website",
		description: "Fill out the simple form with your site details and pricing preferences",
		image: "/screenshots/publishers/add-website.png",
		gradient: "from-green-400 to-green-600",
	},
	{
		id: 2,
		number: "2",
		title: "Get Verified",
		description: "Quick 24-48 hour approval process to verify ownership and quality",
		image: "/screenshots/publishers/verification.png",
		gradient: "from-blue-400 to-blue-600",
	},
	{
		id: 3,
		number: "3",
		title: "Receive Guest Post Orders",
		description: "Advertisers discover your site and place orders with escrow-protected payments",
		image: "/screenshots/publishers/orders-view.png",
		gradient: "from-purple-400 to-purple-600",
	},
	{
		id: 4,
		number: "4",
		title: "Withdraw Your Earnings",
		description: "Publish content, submit proof, and receive instant payment to PayPal or bank",
		image: "/screenshots/publishers/withdraw.png",
		gradient: "from-orange-400 to-orange-600",
	},
];

export function ProcessSteps() {
	const [currentStep, setCurrentStep] = useState(0);

	// Auto-rotate every 4 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentStep((prev) => (prev + 1) % steps.length);
		}, 4000);

		return () => clearInterval(interval);
	}, []);

	const goToStep = (index: number) => {
		setCurrentStep(index);
	};

	const goToPrev = () => {
		setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
	};

	const goToNext = () => {
		setCurrentStep((prev) => (prev + 1) % steps.length);
	};

	const currentStepData = steps[currentStep];

	if (!currentStepData) return null;

	return (
		<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
			{/* Step Cards - Above browser mockup */}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
				{steps.map((step, index) => (
					<button
						key={step.id}
						onClick={() => goToStep(index)}
						className={`relative p-6 rounded-xl transition-all cursor-pointer ${
							index === currentStep
								? "bg-white shadow-xl scale-105 ring-2 ring-green-400"
								: "bg-white/80 shadow-md hover:shadow-lg hover:scale-102"
						}`}
					>
						{/* Number badge */}
						<div
							className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 mx-auto transition-transform ${
								index === currentStep ? "scale-110" : ""
							}`}
						>
							{step.number}
						</div>

						{/* Title */}
						<h3
							className={`text-sm md:text-base font-bold text-center transition-colors ${
								index === currentStep ? "text-gray-900" : "text-gray-600"
							}`}
						>
							{step.title}
						</h3>

						{/* Active indicator */}
						{index === currentStep && (
							<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-green-500 rounded-full" />
						)}
					</button>
				))}
			</div>

			{/* Browser Mockup with Carousel */}
			<div className="relative">
				<BrowserMockup title={currentStepData.title}>
					<div className="absolute inset-0 z-10 flex items-center justify-center p-4 sm:p-8">
						<div className="relative w-full h-full max-w-[90%] max-h-[90%] min-h-[300px] sm:min-h-[400px]">
							<Image
								src={currentStepData.image}
								alt={currentStepData.title}
								fill
								className="object-contain drop-shadow-2xl pointer-events-none"
								sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 1000px"
								priority={currentStep === 0}
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
					aria-label="Previous step"
				>
					<FiChevronLeft className="w-6 h-6 text-gray-700" />
				</button>

				<button
					onClick={goToNext}
					className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12
							bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all
							hover:scale-110 border border-gray-200 z-20"
					aria-label="Next step"
				>
					<FiChevronRight className="w-6 h-6 text-gray-700" />
				</button>
			</div>

			{/* Step Description */}
			<div className="text-center mt-8">
				<p className="text-lg text-gray-700 max-w-2xl mx-auto mb-4">
					{currentStepData.description}
				</p>
			</div>

			{/* Dots Indicator */}
			<div className="flex justify-center gap-2 mt-6">
				{steps.map((_, index) => (
					<button
						key={index}
						onClick={() => goToStep(index)}
						className={`h-2 rounded-full transition-all ${
							index === currentStep
								? "w-8 bg-green-500"
								: "w-2 bg-gray-300 hover:bg-gray-400"
						}`}
						aria-label={`Go to step ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
}