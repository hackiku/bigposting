// src/app/home/layout.tsx

import { Header } from "@/app/_components/layout/Header";
import { Footer } from "@/app/_components/layout/Footer";


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