import Image from "next/image";
import NavLink from "../NavLink";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggleBtn } from "@/components/button/ThemeToggle";

const links = [
    { link: "/", label: "Home" },
    { link: "/about", label: "About Us" },
    { link: "/contact", label: "Contact Us" },
    { link: "/blog", label: "Blog" },
]
export default function Navbar() {
    return (
        <header className="bg-sidebar w-full py-4 sticky top-0 z-40">
            <nav className="flex w-11/12 mx-auto justify-between items-center gap-4">
                <Link href={"/"} className="flex outfit gap-1 items-center text-2xl font-bold text-primary">
                    <Image src={"/logo.svg"} width={50} height={50} alt="logo" className="w-14 h-auto object-contain" />
                    Alapon
                </Link>
                <div className="space-x-4">
                    {
                        links.map((e, i) => <NavLink key={i} href={e.link} label={e.label} />)
                    }
                </div>
                <div className="space-x-4">
                    <ThemeToggleBtn />
                    <Link href={"/login"}><Button variant={"outline"} className=" font-bold hover:scale-105 cursor-pointer">Login</Button></Link>
                    <Link href={"/register"}><Button variant={"default"} className=" font-bold hover:bg-primary/90 hover:scale-105 cursor-pointer">Join Now</Button></Link>
                </div>
            </nav>
        </header>
    )
}