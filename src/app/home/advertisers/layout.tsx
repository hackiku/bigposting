import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Advertisers: Buy Guest Posts & Link Insertions - Bigposting',
  description: 'For advertisers: discover vetted sites for guest posts and link insertions. Filter by traffic and DA/DR, manage campaigns at scale, and pay securely via escrow.',
  keywords: 'for advertisers, buy backlinks, guest posting service, link insertion marketplace, SEO outreach, vetted publishers',
  openGraph: {
    title: 'For Advertisers: Buy Guest Posts & Link Insertions - Bigposting',
    description: 'For advertisers: discover vetted sites for guest posts and link insertions. Filter by traffic and DA/DR, manage campaigns at scale, and pay securely via escrow.',
    url: 'https://www.bigposting.com/home/advertisers',
    siteName: 'Bigposting',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Advertisers: Buy Guest Posts & Link Insertions - Bigposting',
    description: 'For advertisers: discover vetted sites for guest posts and link insertions. Filter by traffic and DA/DR, manage campaigns at scale, and pay securely via escrow.',
  }
};

export default function AdvertisersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
