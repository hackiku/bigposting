// src/data/testimonials.ts
// "use client";

export interface Testimonial {
	id: string;
	name: string;
	role: string;
	company?: string;
	text: string;
	shoutout: string;
	avatarSrc?: string;
	type: "publisher" | "advertiser";
	rating: 5;
	timeAgo: string;
}

export const testimonials: Testimonial[] = [
	// ── PUBLISHERS ─────────────────────────────────────────────────────
	{
		id: "pub-1",
		name: "Sofia Alvarez",
		role: "Content Creator",
		company: "TechBit Daily",
		text: "I listed my tech blog on Bigposting three months ago and haven't looked back. The verification process was smooth, orders started coming in within 48 hours, and the escrow system means I actually get paid—no chasing invoices or dealing with flaky advertisers. I've earned over $3,200 so far with zero hassle.",
		shoutout: "Orders started coming in within 48 hours, and I've earned over $3,200 with zero hassle.",
		type: "publisher",
		rating: 5,
		timeAgo: "2 weeks ago",
	},
	{
		id: "pub-2",
		name: "Malik Thompson",
		role: "Website Owner",
		company: "Renovate Hub",
		text: "As someone who runs multiple niche blogs, monetization has always been a pain point. Bigposting changed that completely. I love that I set my own prices and only work with verified advertisers—no spam, no lowball offers. The 9% fee is totally fair when you consider I don't have to do any of the outreach myself.",
		shoutout: "I set my own prices and only work with verified advertisers—no spam, no lowball offers.",
		type: "publisher",
		rating: 5,
		timeAgo: "1 month ago",
	},
	{
		id: "pub-3",
		name: "Elena Moreau",
		role: "Lifestyle Blogger",
		company: "Café & Compass",
		text: "Bigposting helped me monetize my lifestyle blog effortlessly. I was skeptical at first, but orders arrived in the first week! The dashboard makes it super easy to track everything, and withdrawing to PayPal is instant. This is now my main passive income stream.",
		shoutout: "Orders arrived in the first week and this is now my main passive income stream.",
		type: "publisher",
		rating: 5,
		timeAgo: "3 weeks ago",
	},
	{
		id: "pub-4",
		name: "Jae-Hyun Kim",
		role: "Finance Publisher",
		company: "WealthPath Insights",
		text: "I've tried selling guest posts directly before and it was exhausting—constant negotiation, payment issues, and time-wasters. Bigposting handles all of that. Escrow protection means I can publish with confidence, knowing the money is already secured. Game changer for publishers.",
		shoutout: "Escrow protection means I can publish with confidence, knowing the money is already secured.",
		type: "publisher",
		rating: 5,
		timeAgo: "5 days ago",
	},
	{
		id: "pub-5",
		name: "Priya Desai",
		role: "Health & Wellness Writer",
		company: "VitalFlow Wellness",
		text: "The verification badge has been huge for me. Once I got verified, my listing moved up in search results and I started getting premium orders from established brands. The quality of advertisers on this platform is noticeably higher than other marketplaces I've tried.",
		shoutout: "The verification badge moved me up in search results and I started getting premium orders.",
		type: "publisher",
		rating: 5,
		timeAgo: "2 months ago",
	},

	// ── ADVERTISERS ───────────────────────────────────────────────────
	{
		id: "adv-1",
		name: "Derek O’Connell",
		role: "SEO Manager",
		company: "ScaleUp Digital",
		text: "I've tried countless link building services and outreach platforms, but none compared to the simplicity and effectiveness of Bigposting. The filtering system is fantastic—I can find DA 50+ sites in my exact niche in minutes. The escrow protection means no more wasted money on publishers who ghost after payment. My client sites have seen a 200% increase in organic search traffic in just 3 months.",
		shoutout: "My client sites have seen a 200% increase in organic traffic in just 3 months.",
		type: "advertiser",
		rating: 5,
		timeAgo: "3 weeks ago",
	},
	{
		id: "adv-2",
		name: "Rania Al-Sayed",
		role: "Content Marketing Lead",
		company: "Nexlify SaaS",
		text: "The real-time filtering and transparent pricing changed how we do link building. No more sending cold emails and waiting days for a maybe. I can browse 6,000+ verified sites, filter by DR, traffic, and niche, then place orders instantly. The average turnaround is 2-4 days, which is insane compared to traditional outreach.",
		shoutout: "I can browse 6,000+ verified sites and place orders instantly with 2-4 day turnaround.",
		type: "advertiser",
		rating: 5,
		timeAgo: "1 week ago",
	},
	{
		id: "adv-3",
		name: "Tomasz Nowak",
		role: "Founder & CEO",
		company: "EcoForge Products",
		text: "Bigposting completely transformed my link building process. I used to spend hours researching sites, negotiating prices, and chasing publishers for status updates. Now I can launch a campaign in 15 minutes and track everything from one dashboard. The quality of sites is excellent—real traffic, real authority.",
		shoutout: "I can launch a campaign in 15 minutes and track everything from one dashboard.",
		type: "advertiser",
		rating: 5,
		timeAgo: "4 days ago",
	},
	{
		id: "adv-4",
		name: "Jocelyn Rivera",
		role: "SEO Specialist",
		company: "Freelance SEO Pro",
		text: "The best freemium-ish service out there for link building. You get what you pay for with Bigposting, and the results speak for themselves. I love that I can provide my clients with transparent, trackable link building campaigns without the headache. My clients love the detailed reports and the quality of placements.",
		shoutout: "Transparent, trackable campaigns without the headache—my clients love it.",
		type: "advertiser",
		rating: 5,
		timeAgo: "2 weeks ago",
	},
	{
		id: "adv-5",
		name: "Arjun Mehta",
		role: "Digital Marketing Director",
		company: "PayPulse FinTech",
		text: "I manage link building for 12 clients and Bigposting has become my secret weapon. The escrow system is brilliant—funds are protected until content goes live, so there's zero risk. I've placed over 100 orders in the last quarter and had maybe 2 issues, both resolved quickly. The ROI is undeniable.",
		shoutout: "I've placed over 100 orders with zero risk thanks to escrow protection.",
		type: "advertiser",
		rating: 5,
		timeAgo: "6 days ago",
	},
	{
		id: "adv-6",
		name: "Sven Larsson",
		role: "CEO",
		company: "LinkNest Agency",
		text: "I've tried countless publishers and outreach methods, but none compared to the simplicity and effectiveness of Bigposting. This platform has saved me countless hours while drastically improving my website's domain authority. The quality of publishers is consistently high, and the support team is responsive when needed.",
		shoutout: "This platform has saved me countless hours while drastically improving my domain authority.",
		type: "advertiser",
		rating: 5,
		timeAgo: "1 month ago",
	},
	{
		id: "adv-7",
		name: "Lina Petrova",
		role: "Marketing Manager",
		company: "GreenWave Ventures",
		text: "What I love most about Bigposting is the predictability. Clear pricing, verified publishers, and fast turnaround times mean I can actually plan my link building campaigns with confidence. No more guessing games or dealing with unreliable publishers. This is how guest posting should work.",
		shoutout: "Clear pricing and verified publishers mean I can plan campaigns with confidence.",
		type: "advertiser",
		rating: 5,
		timeAgo: "2 months ago",
	},
];

// ── Helper functions ─────────────────────────────────────────────────
export const getPublisherTestimonials = () =>
	testimonials.filter((t) => t.type === "publisher");

export const getAdvertiserTestimonials = () =>
	testimonials.filter((t) => t.type === "advertiser");

export const getRandomTestimonials = (count: number, type?: "publisher" | "advertiser", shuffle: boolean = true) => {
	const pool = type ? testimonials.filter((t) => t.type === type) : testimonials;
	if (!shuffle) {
		return pool.slice(0, count);
	}
	const shuffled = [...pool].sort(() => Math.random() - 0.5);
	return shuffled.slice(0, count);
};