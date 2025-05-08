"use client";

import { useAuth } from "@/hooks/useAuth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

// Validate form inputs
const loginSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(32, "Username must be at most 32 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username cannot contain quotes or symbols"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  remember: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const { login, loading, error } = useAuth();
  const [loginError, setLoginError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setLoginError(null);
    try {
      await login(data.username, data.password);

      // save "remember me" logic to localStorage if needed
      if (data.remember) {
        localStorage.setItem("remember_username", data.username);
      } else {
        localStorage.removeItem("remember_username");
      }
    } catch (err: any) {
      setLoginError(err.message || "Login failed.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6"
    >
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Welcome back!</h1>
        <p className="text-gray-600 text-sm">Please log in to continue</p>
      </div>

      {(error || loginError) && (
        <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">
          {error || loginError}
        </div>
      )}

      {/* Username */}
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          placeholder="Enter your username"
          {...register("username")}
        />
        {errors.username && (
          <p className="text-sm text-red-500">{errors.username.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" {...register("remember")} />
          <Label htmlFor="remember">Remember me</Label>
        </div>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        className="w-full bg-branded-900 hover:bg-branded-800 text-white"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Log in"}
      </Button>

      {/* Signup Link */}
      <div className="text-center text-sm text-branded-600">
        <Link href="/signup" className="hover:underline">
          No account yet? Sign up here
        </Link>
      </div>
    </form>
  );
}
