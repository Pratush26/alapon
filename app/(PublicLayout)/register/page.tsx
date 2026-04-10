import RegistrationForm from "@/components/forms/Register";
import Link from "next/link";

export default function page() {
    return (
        <main>
            <section className="w-11/12 mx-auto my-12 overflow-hidden rounded-2xl grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col gap-3 items-center justify-center bg-primary text-white p-10">
                    <h1 className="text-4xl font-semibold outfit">Create Account</h1>
                    <p>Welcome to Alapon</p>
                </div>
                <div className="flex flex-col gap-3 items-center justify-center bg-card p-10">
                    <RegistrationForm />
                    <p className="text-sm mt-4">Already have an account? <Link href={"/login"} className="text-primary font-semibold hover:text-primary/80 trns">Sign In</Link></p>
                </div>
            </section>
        </main>
    )
}