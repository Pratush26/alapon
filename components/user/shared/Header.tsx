import { auth } from "@/lib/auth";
import { EllipsisVertical, User } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default async function Header() {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    return (
        <header className="bg-white w-full py-4">
            <nav className="flex w-11/12 mx-auto justify-between items-center gap-4">
                <Link href={"/"} className="flex outfit gap-1 items-center text-2xl font-bold text-primary">
                    Alapon
                </Link>
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-2">
                        <div className="bg-muted rounded-full overflow-hidden relative w-8 h-8 sm:w-10 sm:h-10">
                            {
                                session?.user?.image ?
                                    <Image src={session?.user?.image} alt="user image" fill={true} sizes="40px" className="w-full object-center object-cover" />
                                    :
                                    <User className="m-2" />
                            }
                        </div>
                        <span>
                            <h6 className="font-semibold text-sm sm:text-base">{session?.user?.name}</h6>
                            <p className="text-xs">{session?.user?.email}</p>
                        </span>
                    </span>
                    <EllipsisVertical size={29} className="trns hover:bg-muted rounded-full p-1 cursor-pointer " />
                </div>
            </nav>
        </header>
    )
}