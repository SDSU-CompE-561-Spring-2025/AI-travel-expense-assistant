"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export function LoginForm() {
  const { login, loading, error } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(formData.username, formData.password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6"
    >
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Welcome back!</h1>
        <p className="text-gray-600 text-sm">Please log in to continue</p>
      </div>

      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">
          {error}
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          name="username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="remember"
            checked={formData.remember}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, remember: !!checked })
            }
          />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Link
          href="/forgot-password"
          className="text-sm text-branded-600 hover:underline"
        >
          Forgot password?
        </Link>
      </div>

      <Button
      type="submit"
      className="w-full bg-branded-900 hover:bg-branded-800 text-white"
      disabled={loading}
      >
        {loading ? "Logging in..." : "Log in"}
        </Button>


      <div className="text-center text-sm text-branded-600">
        <Link href="/signup" className="hover:underline">
          No account yet? Sign up here
        </Link>
      </div>
    </form>
  );
}
