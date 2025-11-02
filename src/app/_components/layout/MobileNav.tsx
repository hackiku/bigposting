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
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/30" onClick={onClose} />

			{/* Slide-in Menu */}
			<aside className="absolute left-0 top-0 h-full w-[85vw] max-w-sm bg-white shadow-xl flex flex-col">
				{/* Header */}
				<div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
					<Image
						src="/mark.png"
						alt="Bigposting"
						width={120}
						height={30}
						className="h-7 w-auto object-contain cursor-pointer"
						onClick={() => handleNavigate("/home")}
					/>
					<button
						className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
								className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive(link.path)
										? "bg-[#FFD700]/10 text-[#FFD700]"
										: "text-gray-700 hover:bg-gray-50"
									}`}
							>
								{link.label}
							</button>
						))}
					</div>
				</nav>

				{/* CTA Buttons */}
				<div className="px-6 py-6 border-t border-gray-100 space-y-3">
					<button
						onClick={() => handleNavigate("/auth/login")}
						className="w-full px-6 py-3 rounded-lg font-medium text-gray-700 hover:text-[#FFD700] border border-gray-300 hover:border-[#FFD700] transition-colors"
					>
						Log In
					</button>
					<button
						onClick={() => handleNavigate("/auth/signup")}
						className="w-full px-6 py-3 rounded-lg font-medium text-black bg-[#FFD700] hover:bg-[#FFC700] transition-colors"
					>
						Sign Up
					</button>
				</div>

				{/* Footer */}
				<div className="px-6 py-4 border-t border-gray-100 text-xs text-gray-500">
					© {new Date().getFullYear()} Bigposting. All rights reserved.
				</div>
			</aside>
		</div>
	);
}