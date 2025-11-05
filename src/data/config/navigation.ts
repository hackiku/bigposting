// src/data/navigation.ts

// Navigation configuration
export const desktopNavLinks = [
	{ label: "Publishers", path: "/home/publishers" },
	{ label: "Advertisers", path: "/home/advertisers" },
	{
		label: "Solutions",
		path: "/home/solutions",
		dropdown: [
			{ label: "Guest Posts", href: "/home/solutions/guest-posts" },
			{ label: "Link Insertions", href: "/home/solutions/link-insertions" }
		]
	},
	{ label: "FAQ", path: "/home/faq" },
	// { label: "About", path: "/home/about-us" },
	// { label: "About", path: "/home/about-us" },
	// { label: "Contact", path: "/home/contact" },
];

// Simplified mobile navigation
export const mobileNavLinks = [
	{ label: "Solutions", path: "/home/solutions" },
	{ label: "Publishers", path: "/home/publishers" },
	{ label: "Advertisers", path: "/home/advertisers" },
	{ label: "About", path: "/home/about-us" },
	{ label: "Contact", path: "/home/contact" },
];