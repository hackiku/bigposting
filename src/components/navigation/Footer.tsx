// src/components/navigation/Footer.tsx

"use client";

import { useRouter } from "next/navigation";

const footerSections = {
	company: {
		title: "Company",
		links: [
			{ label: "About Us", href: "/home/about-us" },
			{ label: "Contact", href: "/home/contact" },
			{ label: "Blog", href: "/home/blog" },
		],
	},
	solutions: {
		title: "Solutions",
		links: [
			{ label: "Guest Posts", href: "/home/solutions/guest-posts" },
			{ label: "Link Insertions", href: "/home/solutions/link-insertions" },
		],
	},
	forYou: {
		title: "For You",
		links: [
			{ label: "Publishers", href: "/home/publishers" },
			{ label: "Advertisers", href: "/home/advertisers" },
			{ label: "FAQ", href: "/home/faq" },
		],
	},
	legal: {
		title: "Legal",
		links: [
			{ label: "Terms & Conditions", href: "/home/terms" },
			{ label: "Privacy Policy", href: "/home/privacy" },
		],
	},
};

export function Footer() {
	const router = useRouter();

	return (
		<footer className="w-full bg-white">
			{/* Main Footer */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{Object.values(footerSections).map((section) => (
						<div key={section.title}>
							<h3 className="font-semibold text-gray-900 text-sm mb-4">
								{section.title}
							</h3>
							<ul className="space-y-3">
								{section.links.map((link) => (
									<li key={link.label}>
										<button
											onClick={() => router.push(link.href)}
											className="text-sm text-gray-600 hover:text-[#FFD700] transition-colors"
										>
											{link.label}
										</button>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-gray-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
					<div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
						<div>
							© Copyright 2025 Bigposting.com. All rights reserved
						</div>
						<div className="flex items-center gap-6">
							<button
								onClick={() => router.push("/home/terms")}
								className="hover:text-[#FFD700] transition-colors"
							>
								Terms
							</button>
							<button
								onClick={() => router.push("/home/privacy")}
								className="hover:text-[#FFD700] transition-colors"
							>
								Privacy
							</button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}