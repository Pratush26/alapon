"use client"

import { useForm } from "react-hook-form"
import '@/utils/styles/form.css'
import { toast } from "sonner";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { authClient } from "@/lib/auth-client";

interface userInfo {
  name: string;
  email: string;
  password: string;
  photo: FileList;
  phone: string;
  address: string;
}

export default function RegistrationForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<userInfo>()
  const formSubmit = async (userdata: userInfo) => {
    if (!userdata?.photo) {
      toast.error("Image not found!");
      return;
    }
    const formData = new FormData();
    formData.append("file", userdata?.photo?.[0]);
    formData.append("upload_preset", `${process.env.NEXT_PUBLIC_Cloudinary_Upload_Preset}`);
    formData.append("folder", "user_images");
    try {
      const ImgRes = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_Cloudinary_CloudName}/image/upload`, {
        method: "POST",
        body: formData,
      });

      const uploadResult = await ImgRes.json();
      if (!uploadResult?.secure_url) {
        toast.error("Image upload failed!");
        return;
      }

      const { data, error } = await authClient.signUp.email({
        name: userdata.name,
        email: userdata.email,
        password: userdata.password,
        image: uploadResult.secure_url,
        callbackURL: "/dashboard",
      }, {
        onRequest: (ctx) => {
          //show loading
        },
        onSuccess: (ctx) => {
          //redirect to the dashboard or sign in page
          console.log('ctx', ctx)
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        }
      });

    } catch (err) {
      console.error(err)
      toast.error("Something went wrong!");
    }
  };
  return (
    <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col items-center justify-center gap-5 w-full">
      <div className="w-full">
        {errors.name ? <p className="text-sm text-rose-600">{errors.name.message as string}</p> : <label htmlFor="name">Name :</label>}
        <input type="text" {...register("name", { required: "Name is required" })} placeholder="Enter your name" id="name" />
      </div>
      <div className="w-full">
        {errors.email ? <p className="text-sm text-rose-600">{errors.email.message as string}</p> : <label htmlFor="email">Email :</label>}
        <input type="email" {...register("email", { required: "Email is required" })} placeholder="Enter your email" id="email" />
      </div>
      <div className="w-full">
        {errors.photo ? <p className="text-sm text-rose-600">{errors.photo.message as string}</p> : <label htmlFor="photo">Photo :</label>}
        <input type="file" accept="image/*" {...register("photo", { required: "Photo is required" })} placeholder="Enter photo" id="photo" />
      </div>
      <div className="w-full">
        {errors.password ? <p className="text-sm text-rose-600">{errors.password.message as string}</p> : <label htmlFor="password">password :</label>}
        <input type="password" {...register("password", { required: "Password is required" })} minLength={8} placeholder="Enter password" id="password" />
      </div>
      <Button disabled={isSubmitting} className="py-5 px-8 hover:bg-primary/95 hover:scale-103 cursor-pointer flex gap-2">{isSubmitting ? "Registering..." : "Register"}<ArrowRight /></Button>
    </form>
  )
}