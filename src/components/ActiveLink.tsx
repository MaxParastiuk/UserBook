"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkProps {
	children: string;
	to: string;
}

const ActiveLink = ({ children, to }: LinkProps) => {
	const router = usePathname();
	const isMatch = router === to;
	return (
		<Link
			href={to}
			className={
				isMatch
					? "font-lemon bg-gray-600 text-lg text-red-500 hover:bg-blue-800 rounded-md p-3 duration-500"
					: " font-lemon bg-gray-600 text-lg text-white hover:bg-blue-800 rounded-md p-3 duration-500"
			}>
			{children}
		</Link>
	);
};

export default ActiveLink;
