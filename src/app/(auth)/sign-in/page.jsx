"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { authClient } from "../../../lib/auth/auth-client";
import { BiInfoCircle, BiShow, BiHide } from "react-icons/bi";

const FieldError = ({ error }) =>
  error ? <p className="text-red-500 text-xs mt-3">{error.message}</p> : null;

const Login = () => {
  const router = useRouter();
  const [authError, setAuthError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setAuthError(null);
    try {
      await authClient.signIn.email(
        { email: data.email, password: data.password },
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
    <div className="min-h-[80dvh] flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-4">Login your account</h2>
        <div className="divider"></div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {authError && (
            <div role="alert" className="alert alert-error alert-soft font-medium">
              <BiInfoCircle size={20} />
              <span>{authError}</span>
            </div>
          )}

          <div>
            <label className="text-sm font-medium block mb-1">Email address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered bg-base-200 w-full"
              {...register("email", { required: "Email is required" })}
            />
            <FieldError error={errors.email} />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered bg-base-200 w-full pr-10"
                {...register("password", { required: "Password is required" })}
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-lg"
              >
                {showPassword ? <BiHide /> : <BiShow />}
              </button>
            </div>

            <FieldError error={errors.password} />
          </div>

          <button type="submit" className="btn bg-neutral text-white w-full">
            {isSubmitting ? <span className="loading loading-spinner loading-sm" /> : "Login"}
          </button>
        </form>

        <p className="text-sm text-center mt-6">
          Don&apos;t Have An Account ?{" "}
          <Link href="/sign-up" className="text-red-500 font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;