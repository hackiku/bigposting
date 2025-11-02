// src/app/home/publishers/sections/PublishersHero.tsx

import { Container } from "@/app/_components/ui/Container";
import { Button } from "@/app/_components/ui/Button";

export function PublishersHero() {
	return (
		<section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20 lg:py-28">
			<Container>
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
						Monetize Your Website with <span className="text-green-600">Guest Posts</span>
					</h1>
					<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
						List your site, set your price, and earn from guest posts and link insertions. Get verified and start receiving orders.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button href="/auth/signup" variant="primary">
							List Your Website
						</Button>
						<Button href="/home/faq" variant="ghost">
							How It Works
						</Button>
					</div>
				</div>
			</Container>
		</section>
	);
}