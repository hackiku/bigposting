// src/data/navigation.ts

// Navigation configuration
export const desktopNavLinks = [
	{
		label: "Solutions",
		path: "/home/solutions",
		dropdown: [
			{ label: "Guest Posts", href: "/home/solutions/guest-posts" },
			{ label: "Link Insertions", href: "/home/solutions/link-insertions" }
		]
	},
	{ label: "For Publishers", path: "/home/publishers" },
	{ label: "For Advertisers", path: "/home/advertisers" },
	{ label: "About", path: "/home/about-us" },
	{ label: "Contact", path: "/home/contact" },
];

// Simplified mobile navigation
export const mobileNavLinks = [
	{ label: "Solutions", path: "/home/solutions" },
	{ label: "Publishers", path: "/home/publishers" },
	{ label: "Advertisers", path: "/home/advertisers" },
	{ label: "About", path: "/home/about-us" },
	{ label: "Contact", path: "/home/contact" },
];