// src/components/navigation/Header.tsx

"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { desktopNavLinks } from "@/data/navigation";
import { MobileNav } from "./MobileNav";

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const scrollDelta = currentScrollY - lastScrollY;

			if (Math.abs(scrollDelta) > 50) {
				setIsVisible(scrollDelta < 0 || currentScrollY < 100);
				setLastScrollY(currentScrollY);
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollY]);

	const isActive = (path: string) => pathname?.startsWith(path);

	return (
		<>
			<header className={`sticky top-0 z-50 w-full bg-background border-b border-border transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
				}`}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-20">

						{/* Logo */}
						<div className="flex items-center lg:flex-1">
							<Image
								src="/mark.png"
								alt="Bigposting"
								width={160}
								height={40}
								className="h-10 w-auto object-contain cursor-pointer"
								onClick={() => router.push("/home")}
							/>
						</div>

						{/* Desktop Navigation */}
						<nav className="hidden lg:flex items-center space-x-1">
							{desktopNavLinks.map((link) =>
								link.dropdown ? (
									<div key={link.label} className="relative group">
										<button
											onClick={() => router.push(link.path)}
											className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${isActive(link.path)
													? "text-primary"
													: "text-foreground/80 hover:text-primary hover:bg-muted"
												}`}
										>
											{link.label}
											<FiChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
										</button>

										<div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white shadow-lg rounded-lg overflow-hidden min-w-[220px] border border-border">
											{link.dropdown.map((item) => (
												<button
													key={item.label}
													onClick={() => router.push(item.href)}
													className={`w-full text-left px-4 py-3 text-sm transition-colors cursor-pointer ${isActive(item.href)
															? "text-primary bg-muted"
															: "text-foreground/80 hover:bg-muted hover:text-primary"
														}`}
												>
													{item.label}
												</button>
											))}
										</div>
									</div>
								) : (
									<button
										key={link.label}
										onClick={() => router.push(link.path)}
										className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${isActive(link.path)
												? "text-primary"
												: "text-foreground/80 hover:text-primary hover:bg-muted"
											}`}
									>
										{link.label}
									</button>
								)
							)}
						</nav>

						{/* Right Side Actions */}
						<div className="flex items-center gap-2 lg:flex-1 lg:justify-end">
							{/* Search - Desktop Only */}
							<button className="hidden lg:inline-flex p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer">
								<FiSearch className="w-5 h-5 text-muted-foreground" />
							</button>

							{/* Auth Buttons - Desktop Only */}
							<div className="hidden lg:flex items-center gap-3 ml-4">
								<button
									onClick={() => router.push("/auth/login")}
									className="px-5 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer"
								>
									Log In
								</button>
								<button
									onClick={() => router.push("/auth/signup")}
									className="px-5 py-2 rounded-lg text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 transition-colors cursor-pointer"
								>
									Sign Up
								</button>
							</div>

							{/* Mobile: Hamburger (right side) */}
							<button
								className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer"
								onClick={() => setMobileMenuOpen(true)}
								aria-label="Open menu"
							>
								<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
									<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</header>

			<MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
		</>
	);
}