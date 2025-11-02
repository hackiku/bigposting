// src/app/home/publishers/demo/data.ts

export interface Website {
	id: string;
	url: string;
	role: string;
	language: string;
	categories: string[];
	mainServices: {
		contentPlacement: { price: number; enabled: boolean };
		writingAndPlacement: { price: number; enabled: boolean };
		linkInsertion: { price: number; enabled: boolean };
	};
	verified: boolean;
	publisher_name: string;
	bestArticles: string[];
	moz_da: number;
	spam_score: number;
	monthly_traffic: number;
	referring_domains: number;
	domain_age_years: number;
	serpstats_keywords_count: number;
}

export const demoWebsites: Website[] = [
	{
		id: '1',
		url: 'influencersgonewild.ca',
		role: 'owner',
		language: 'English',
		categories: ['Business', 'Mobile', 'Sports'],
		mainServices: {
			contentPlacement: { price: 1, enabled: true },
			writingAndPlacement: { price: 2, enabled: true },
			linkInsertion: { price: 2, enabled: true },
		},
		verified: true,
		publisher_name: 'Gulam Moin',
		bestArticles: ['https://influencersgonewild.ca/sample-post-1'],
		moz_da: 31,
		spam_score: 2,
		monthly_traffic: 100,
		referring_domains: 4980,
		domain_age_years: 0,
		serpstats_keywords_count: 32,
	},
	{
		id: '2',
		url: 'www.newsbreak.com',
		role: 'contributor',
		language: 'English',
		categories: ['Business', 'News and Media', 'Personal Blogs'],
		mainServices: {
			contentPlacement: { price: 4, enabled: true },
			writingAndPlacement: { price: 4.5, enabled: true },
			linkInsertion: { price: 0, enabled: false },
		},
		verified: true,
		publisher_name: 'Gulam Moin',
		bestArticles: ['https://www.newsbreak.com/sample'],
		moz_da: 78,
		spam_score: 1,
		monthly_traffic: 2064309,
		referring_domains: 54108,
		domain_age_years: 28,
		serpstats_keywords_count: 4433159,
	},
	{
		id: '3',
		url: 'roamsummit.com',
		role: 'owner',
		language: 'English',
		categories: ['Nature', 'Travelling', 'Leisure and Hobbies'],
		mainServices: {
			contentPlacement: { price: 4.99, enabled: true },
			writingAndPlacement: { price: 10, enabled: true },
			linkInsertion: { price: 15, enabled: true },
		},
		verified: true,
		publisher_name: 'Nanda Dila',
		bestArticles: ['https://roamsummit.com/best-hike'],
		moz_da: 36,
		spam_score: 1,
		monthly_traffic: 100,
		referring_domains: 613,
		domain_age_years: 0,
		serpstats_keywords_count: 0,
	},
	{
		id: '4',
		url: '39116gallery.com',
		role: 'owner',
		language: 'English',
		categories: ['Health'],
		mainServices: {
			contentPlacement: { price: 4.99, enabled: true },
			writingAndPlacement: { price: 10, enabled: true },
			linkInsertion: { price: 15, enabled: true },
		},
		verified: true,
		publisher_name: 'felicia',
		bestArticles: ['https://39116gallery.com/health-tips'],
		moz_da: 66,
		spam_score: 0,
		monthly_traffic: 100,
		referring_domains: 1993,
		domain_age_years: 5,
		serpstats_keywords_count: 0,
	},
];