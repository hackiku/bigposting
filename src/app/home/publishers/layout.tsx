import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Publishers: Sell Guest Posts & Earn - Bigposting',
  description: 'For publishers: list your website, set your price, and earn from guest posts or link insertions. Get verified, receive orders, and withdraw fast with low fees.',
  keywords: 'sell guest posts, monetize website, publisher marketplace, list your site, earn from backlinks, verification badge',
  openGraph: {
    title: 'For Publishers: Sell Guest Posts & Earn - Bigposting',
    description: 'For publishers: list your website, set your price, and earn from guest posts or link insertions. Get verified, receive orders, and withdraw fast with low fees.',
    url: 'https://www.bigposting.com/home/publishers',
    siteName: 'Bigposting',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Publishers: Sell Guest Posts & Earn - Bigposting',
    description: 'For publishers: list your website, set your price, and earn from guest posts or link insertions. Get verified, receive orders, and withdraw fast with low fees.',
  }
};

export default function PublishersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
