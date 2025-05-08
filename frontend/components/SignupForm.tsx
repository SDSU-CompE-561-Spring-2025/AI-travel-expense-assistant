"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import PasswordRequirements from "@/components/PasswordRequirements";

export function SignupForm() {
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [usernameWarning, setUsernameWarning] = useState(false);
  const [emailWarning, setEmailWarning] = useState(false); // NEW
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "username") {
      const hasSpecialChars = /[^a-zA-Z0-9_]/.test(value);
      setUsernameWarning(hasSpecialChars);
      if (hasSpecialChars) return;
    }

    if (name === "email") {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // NEW
      setEmailWarning(!isValidEmail); // NEW
    }

    if (name === "password") {
      setPasswordValue(value);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      agreeToTerms: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.agreeToTerms) {
      setError("You must agree to the terms and privacy policy.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to sign up. Please check your details.");
      }

      // Immediately log in after signup
      await login(formData.username, formData.password);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Signup failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6"
    >
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Sign Up!</h1>
        <p className="text-gray-600 text-sm">Begin your trip planning today!</p>
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
          placeholder="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        {usernameWarning && (
          <p className="text-sm text-red-500">No special characters allowed</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {emailWarning && (
          <p className="text-sm text-red-500">Please enter a valid email address</p> // NEW
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="********"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {passwordValue && <PasswordRequirements passwordValue={passwordValue} />}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="********"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        {formData.confirmPassword &&
          formData.confirmPassword !== formData.password && (
            <p className="text-sm text-red-500">Passwords do not match</p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="agreeToTerms"
          checked={formData.agreeToTerms}
          onCheckedChange={(checked) => handleCheckboxChange(!!checked)}
        />
        <Label htmlFor="agreeToTerms" className="text-sm">
          I agree to the terms and privacy policy
        </Label>
      </div>

      <Button
        type="submit"
        className="w-full bg-branded-900 hover:bg-branded-800 text-white"
      >
        Create Account
      </Button>

      <div className="text-center text-sm text-branded-600">
        <Link href="/login" className="hover:underline">
          Already have an account? Log in here
        </Link>
      </div>
    </form>
  );
}