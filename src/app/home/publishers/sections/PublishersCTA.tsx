// src/app/home/publishers/sections/PublishersCTA.tsx

import { Container } from "@/app/_components/ui/Container";
import { Button } from "@/app/_components/ui/Button";

export function PublishersCTA() {
	return (
		<section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
			<div className="max-w-3xl mx-auto text-center text-white">
				<h2 className="text-3xl lg:text-5xl font-bold mb-6">
					Start Earning Today
				</h2>
				<p className="text-xl mb-8 text-green-100">
					Join thousands of publishers monetizing their websites
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button href="/auth/signup" variant="primary">
						List Your Site Free
					</Button>
					<button className="px-8 py-3 rounded-lg font-medium text-white border-2 border-white hover:bg-white hover:text-green-600 transition-colors">
						Calculate Earnings
					</button>
				</div>
			</div>
		</section>
	);
}