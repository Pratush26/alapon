"use client"
import { useForm } from "react-hook-form"
import '@/utils/styles/form.css'
import { toast } from "sonner"
import { Button } from "../ui/button"
import { LogIn } from "lucide-react"
import { authClient } from "@/lib/auth-client"

interface userInfo {
    email: string;
    password: string;
    rememberMe: boolean;
}
export default function LoginForm() {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<userInfo>()

    const formSubmit = async (userData: userInfo) => {
        try {
            const { data, error } = await authClient.signIn.email({
                email: userData.email,
                password: userData.password,
                rememberMe: userData.rememberMe,
                callbackURL: "/dashboard",
            }, {
                onSuccess: (ctx) => {
                    toast.success(`Welcome Back ${ctx.data?.user?.name}`);
                    reset()
                },
                onError: (ctx) => {
                    toast.error(ctx.error.message);
                }
            });
        } catch (err) {
            console.error(err)
            toast.error("Something went wrong!")
        }
    };
    return (
        <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col items-center justify-center gap-5 w-full">
            <div className="w-full">
                {errors.email ? <p className="text-sm text-rose-600">{errors.email.message as string}</p> : <label htmlFor="email">Email :</label>}
                <input type="email" {...register("email", { required: "Email is required" })} placeholder="Enter your email" id="email" />
            </div>
            <div className="w-full">
                {errors.password ? <p className="text-sm text-rose-600">{errors.password.message as string}</p> : <label htmlFor="password">Password :</label>}
                <input type="password" {...register("password", { required: "Password is required" })} minLength={8} placeholder="Enter password" id="password" />
            </div>
            <div className="flex items-center gap-4 w-full">
                <div className="w-fit">
                    <input type="checkbox" {...register("rememberMe")} className="accent-primary" />
                </div>
                {errors.rememberMe ? <p className="text-sm text-rose-600">{errors.rememberMe.message as string}</p> : <p className="text-sm">Remember Me</p>}
            </div>
            <Button disabled={isSubmitting} className="py-3 px-6 hover:bg-primary/95 hover:scale-103 cursor-pointer flex gap-2">{isSubmitting ? "Loging in..." : "Login"}<LogIn /></Button>
        </form>
    )
}