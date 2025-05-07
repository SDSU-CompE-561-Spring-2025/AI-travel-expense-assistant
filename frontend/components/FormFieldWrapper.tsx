"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useId } from "react";

interface FormFieldWrapperProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description?: string;
  required?: boolean;
}

export default function FormFieldWrapper({
  name,
  label,
  type = "text",
  placeholder = "",
  autoComplete,
  value,
  onChange,
  description,
  required = false,
}: FormFieldWrapperProps) {
  const inputId = useId();

  return (
    <div className="space-y-2">
      <Label htmlFor={inputId}>{label}</Label>
      <Input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        required={required}
      />
      {description && (
        <p className="text-xs text-gray-500">{description}</p>
      )}
    </div>
  );
}
