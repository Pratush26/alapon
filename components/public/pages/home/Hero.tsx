import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 items-center-safe justify-items-center-safe gap-10 py-10 min-h-[70vh]">
            <div className="space-y-3">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl outfit font-bold">Alapon — Where Every Conversation Finds a Home</h1>
                <p className="mb-6">Connect instantly, express freely, and stay close to the people who matter most. Alapon makes chatting simple, beautiful, and meaningful.</p>
                <Link href={"/register"}><Button className="py-6 px-10 hover:bg-primary/90 hover:scale-105 cursor-pointer">Get Started</Button></Link>
                <div className="mt-4 flex divide-x divide-primary text-sm items-center">
                    <span className="px-4">3000<span className="text-lg">+</span> Users</span>
                    <span className="px-4">100<span className="text-lg">+</span> Groups</span>
                    <span className="px-4">24/7 supports</span>
                </div>
            </div>
            <div className="w-full max-h-[70vh] relative aspect-square rounded-2xl overflow-hidden">
                <Image src={"/hero.jpg"} fill={true} alt="hero image" style={{objectFit: "cover"}} />
            </div>
        </section>
    )
}