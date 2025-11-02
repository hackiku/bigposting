// src/app/_components/ui/Button.tsx

import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	href?: string;
	onClick?: () => void;
	variant?: "primary" | "secondary" | "ghost";
	className?: string;
}

export function Button({
	children,
	href,
	onClick,
	variant = "primary",
	className = ""
}: ButtonProps) {
	const baseStyles = "px-6 py-3 rounded-lg font-medium transition-colors inline-block text-center";

	const variants = {
		primary: "bg-[#FFD700] text-black hover:bg-[#FFC700]",
		secondary: "bg-blue-500 text-white hover:bg-blue-600",
		ghost: "text-gray-700 hover:text-[#FFD700] border border-gray-300 hover:border-[#FFD700]",
	};

	const classes = `${baseStyles} ${variants[variant]} ${className}`;

	if (href) {
		return (
			<Link href={href} className={classes}>
				{children}
			</Link>
		);
	}

	return (
		<button onClick={onClick} className={classes}>
			{children}
		</button>
	);
}