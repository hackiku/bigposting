// src/components/cta/SignUpButton.tsx

interface SignUpButtonProps {
	text: string;
	href?: string;
}

export function SignUpButton({ text, href = "/auth/signup" }: SignUpButtonProps) {
	return (
	<a
		href = { href }
			className = "inline-block px-8 py-4 bg-yellow-400 text-gray-900 font-bold text-lg rounded-full border-2 border-yellow-600 shadow-lg hover:shadow-xl hover:scale-105 hover:bg-yellow-300 transition-all duration-200"
		>
		{ text }
		</a >
	);
}