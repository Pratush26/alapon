import Image from "next/image";
import Link from "next/link";

const quickLinks = [
    { link: "/", label: "Home" },
    { link: "/blog", label: "Blog" },
    { link: "/about", label: "About Us" },
    { link: "/contact", label: "Contact Us" }
]
const supportLinks = [
    { link: "/terms", label: "Terms & Condition" },
    { link: "/policy", label: "Privacy & Policy" },
    { link: "/help", label: "Help & Support" }
]
export default function Footer() {
    return (
        <footer className="w-full bg-white py-10">
            <section className="grid grid-cols-1 sm:grid-cols-3 justify-items-center-safe gap-4 w-11/12 mx-auto">
                <div className="flex flex-col gap-1">
                    <Link href={"/"} className="flex outfit gap-1 items-center text-2xl font-bold text-primary">
                        <Image src={"/logo.svg"} width={50} height={50} alt="logo" className="object-contain" />
                        Alapon
                    </Link>
                    <h6 className="font-medium mt-2">Meaningful conversations start here.</h6>
                    <p className="text-sm text-gray-600">Alapon is a modern chat platform built for real human connection. Whether you are catching up with a friend, coordinating with a team, Alapon gives you a smooth, private, and joyful place to talk.</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h5 className="font-bold text-lg">Quick Links</h5>
                    {
                        quickLinks.map((e, i) => <Link key={i} href={e.link} className="trns hover:text-primary text-sm">{e.label}</Link>)
                    }
                </div>
                <div className="flex flex-col gap-4">
                    <h5 className="font-bold text-lg">Support & Conditions</h5>
                    {
                        supportLinks.map((e, i) => <Link key={i} href={e.link} className="trns hover:text-primary text-sm">{e.label}</Link>)
                    }
                </div>
            </section>
            <div className="flex w-11/12 mx-auto justify-between gap-4 text-sm pt-8">
                <p>&copy; - All rights are reserved by Alapon | Copyright - {new Date().getFullYear()}</p>
                <p>Developed by <a href="/" target="_blank">Probash</a></p>
            </div>
        </footer>
    )
}