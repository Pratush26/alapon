import Image from "next/image";
import NavLink from "../NavLink";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const links = [
    { link: "/", label: "Home" },
    { link: "/about", label: "About Us" },
    { link: "/contact", label: "Contact Us" },
    { link: "/blog", label: "Blog" },
]
export default function Navbar() {
    return (
        <header className="bg-white w-full py-4">
            <nav className="flex w-11/12 mx-auto justify-between items-center gap-4">
                <Link href={"/"} className="flex outfit gap-1 items-center text-2xl font-bold text-primary">
                    <Image src={"/logo.svg"} width={50} height={50} alt="logo" className="object-contain" />
                    Alapon
                </Link>
                <div className="space-x-4">
                    {
                        links.map((e, i) => <NavLink key={i} href={e.link} label={e.label} />)
                    }
                </div>
                <div className="space-x-4">
                    <Link href={"/login"}><Button variant={"outline"} className="px-10 py-5 font-bold hover:scale-105 cursor-pointer">Login</Button></Link>
                    <Link href={"/register"}><Button variant={"default"} className="px-10 py-5 font-bold hover:bg-primary/90 hover:scale-105 cursor-pointer">Join Now</Button></Link>
                </div>
            </nav>
        </header>
    )
}