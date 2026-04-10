import LoginForm from "@/components/forms/Login";
import Link from "next/link";

export default function page() {
    return (
        <main>
            <section className="w-11/12 mx-auto my-12 overflow-hidden rounded-2xl grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col gap-3 items-center justify-center bg-primary text-white p-10">
                    <h1 className="text-4xl font-semibold outfit">Log In</h1>
                    <p>Welcome Back</p>
                </div>
                <div className="flex flex-col gap-3 items-center justify-center bg-card p-10">
                    <LoginForm />
                    <p className="text-sm mt-4">Do not have an account? <Link href={"/register"} className="text-primary font-semibold hover:text-primary/80 trns">Register</Link></p>
                </div>
            </section>
        </main>
    )
}