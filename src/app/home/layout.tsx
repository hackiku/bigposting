// src/app/home/layout.tsx

import { Header } from "@/components/navigation/Header"
import { Footer } from "@/components/navigation/Footer";


// This layout wraps all /home/* routes
// Root layout handles TRPC, this handles navigation
export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}