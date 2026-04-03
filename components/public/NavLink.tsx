"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

interface propsType {
    href: string;
    label: string;
}
export default function NavLink({href, label}: propsType) {
    const path = usePathname()
    return (
        <Link href={href} className={`${path == href ? "underline text-primary" : ""} trns text-sm hover:text-primary font-medium decoration-primary`}>{label}</Link>
    )
}