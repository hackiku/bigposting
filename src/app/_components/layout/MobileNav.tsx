// src/app/_components/layout/MobileNav.tsx
"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { mobileNavLinks } from "@/data/config/navigation";

interface MobileNavProps {
	isOpen: boolean;
	onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
	const router = useRouter();
	const pathname = usePathname();

	if (!isOpen) return null;

	const handleNavigate = (path: string) => {
		router.push(path);
		onClose();
	};

	const isActive = (path: string) => pathname?.startsWith(path);

	return (
		<div className="fixed inset-0 z-[10000] lg:hidden">
			<div className="absolute inset-0 bg-black/30 cursor-pointer" onClick={onClose} />

			<aside className="absolute right-0 top-0 h-full w-[85vw] max-w-sm bg-white shadow-xl flex flex-col">
				{/* Header */}
				<div className="flex items-center justify-between px-6 py-5 border-b border-border">
					<Image
						src="/mark.png"
						alt="Bigposting"
						width={120}
						height={30}
						className="h-7 w-auto object-contain cursor-pointer"
						onClick={() => handleNavigate("/home")}
					/>
					<button
						className="p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer"
						onClick={onClose}
						aria-label="Close menu"
					>
						<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
							<line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
							<line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
						</svg>
					</button>
				</div>

				{/* Navigation Links */}
				<nav className="flex-1 overflow-y-auto px-6 py-6">
					<div className="space-y-1">
						{mobileNavLinks.map((link) => (
							<button
								key={link.label}
								onClick={() => handleNavigate(link.path)}
								className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors cursor-pointer ${isActive(link.path)
										? "bg-primary/10 text-primary"
										: "text-foreground/80 hover:bg-muted"
									}`}
							>
								{link.label}
							</button>
						))}
					</div>
				</nav>

				{/* CTA Buttons */}
				<div className="px-6 py-6 border-t border-border space-y-3">
					<button
						onClick={() => handleNavigate("/auth/login")}
						className="w-full px-6 py-3 rounded-lg font-medium text-foreground/80 hover:text-primary border border-border hover:border-primary transition-colors cursor-pointer"
					>
						Log In
					</button>
					<button
						onClick={() => handleNavigate("/auth/signup")}
						className="w-full px-6 py-3 rounded-lg font-medium text-primary-foreground bg-primary hover:bg-primary/90 transition-colors cursor-pointer"
					>
						Sign Up
					</button>
				</div>

				{/* Footer */}
				<div className="px-6 py-4 border-t border-border text-xs text-muted-foreground">
					© {new Date().getFullYear()} Bigposting. All rights reserved.
				</div>
			</aside>
		</div>
	);
}