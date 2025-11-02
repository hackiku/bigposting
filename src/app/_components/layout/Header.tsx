// src/app/_components/layout/Header.tsx

"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { desktopNavLinks } from "@/data/config/navigation";
import { MobileNav } from "./MobileNav";

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	const isActive = (path: string) => pathname?.startsWith(path);

	return (
		<>
			<header className="sticky top-0 z-50 w-full bg-[#F5F8FA] border-b border-gray-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-20">

						{/* Mobile: Hamburger */}
						<button
							className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors -ml-2"
							onClick={() => setMobileMenuOpen(true)}
							aria-label="Open menu"
						>
							<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
							</svg>
						</button>

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
											className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${isActive(link.path)
													? "text-[#FFD700]"
													: "text-gray-700 hover:text-[#FFD700] hover:bg-gray-50"
												}`}
										>
											{link.label}
											<FiChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
										</button>

										{/* Dropdown */}
										<div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white shadow-lg rounded-lg overflow-hidden min-w-[220px] border border-gray-100">
											{link.dropdown.map((item) => (
												<button
													key={item.label}
													onClick={() => router.push(item.href)}
													className={`w-full text-left px-4 py-3 text-sm transition-colors ${isActive(item.href)
															? "text-[#FFD700] bg-gray-50"
															: "text-gray-700 hover:bg-gray-50 hover:text-[#FFD700]"
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
										className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${isActive(link.path)
												? "text-[#FFD700]"
												: "text-gray-700 hover:text-[#FFD700] hover:bg-gray-50"
											}`}
									>
										{link.label}
									</button>
								)
							)}
						</nav>

						{/* Right Side Actions */}
						<div className="flex items-center gap-2 lg:flex-1 lg:justify-end">
							{/* Search */}
							<button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
								<FiSearch className="w-5 h-5 text-gray-600" />
							</button>

							{/* Auth Buttons - Desktop Only */}
							<div className="hidden lg:flex items-center gap-3 ml-4">
								<button
									onClick={() => router.push("/auth/login")}
									className="px-5 py-2 text-sm font-medium text-gray-700 hover:text-[#FFD700] transition-colors"
								>
									Log In
								</button>
								<button
									onClick={() => router.push("/auth/signup")}
									className="px-5 py-2 rounded-lg text-sm font-medium text-black bg-[#FFD700] hover:bg-[#FFC700] transition-colors"
								>
									Sign Up
								</button>
							</div>
						</div>
					</div>
				</div>
			</header>

			{/* Mobile Navigation */}
			<MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
		</>
	);
}