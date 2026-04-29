"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { authClient } from "../../../lib/auth/auth-client";
import { BiInfoCircle } from "react-icons/bi";

const FieldError = ({ error }) =>
  error ? <p className="text-red-500 text-xs pt-3">{error.message}</p> : null;

const Register = () => {
  const router = useRouter();
  const [authError, setAuthError] = useState(null);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

  const onSubmit = async (data) => {
    setAuthError(null);
    try {
      await authClient.signUp.email(
        { name: data.name, email: data.email, password: data.password, image: data.photo_url },
        {
          onSuccess: () => router.push("/"),
          onError: (ctx) => setAuthError(ctx.error.message),
        }
      );
    } catch {
      setAuthError("Something went wrong");
    }
    reset();
  };

  return (
    <div className="min-h-[95dvh] flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl w-full max-w-108">
        <h2 className="text-2xl font-bold text-center mb-4">Register your account</h2>
        <div className="divider"></div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {authError && (
            <div role="alert" className="alert alert-error alert-soft font-medium">
              <BiInfoCircle size={20} />
              <span>{authError}</span>
            </div>
          )}

          <div>
            <label className="text-sm font-medium block mb-1">Your Name</label>
            <input type="text" placeholder="Enter your name" className="input input-bordered bg-base-200 w-full" {...register("name", { required: "Name is required" })} />
            <FieldError error={errors.name} />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">Photo URL</label>
            <input type="text" placeholder="Enter your photo url" className="input input-bordered bg-base-200 w-full" {...register("photo_url")} />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">Email</label>
            <input type="email" placeholder="Enter your email address" className="input input-bordered bg-base-200 w-full" {...register("email", { required: "Email is required" })} />
            <FieldError error={errors.email} />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">Password</label>
            <input type="password" placeholder="Enter your password" className="input input-bordered bg-base-200 w-full" {...register("password", { required: "Password is required" })} />
            <FieldError error={errors.password} />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="checkbox checkbox-sm" {...register("condition", { required: "You must accept the terms" })} />
              <span className="text-sm">Accept <span className="font-medium">Term & Conditions</span></span>
            </div>
            <FieldError error={errors.condition} />
          </div>

          <button type="submit" className="btn bg-neutral text-white w-full">
            {isSubmitting ? <span className="loading loading-spinner loading-sm" /> : "Register"}
          </button>

          <p className="text-sm text-center mt-2">
            Already Have An Account ?{" "}
            <Link href="/sign-in" className="text-red-500 font-medium">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;