"use client";

interface PasswordRequirementsProps {
  passwordValue: string;
}

export default function PasswordRequirements({ passwordValue }: PasswordRequirementsProps) {
  const meetsLength = passwordValue.length >= 8;
  const hasUpper = /[A-Z]/.test(passwordValue);
  const hasLower = /[a-z]/.test(passwordValue);
  const hasNumberOrSymbol = /[\d\W]/.test(passwordValue);

  const reqs = [
    { label: "At least 8 characters", met: meetsLength },
    { label: "One uppercase letter", met: hasUpper },
    { label: "One lowercase letter", met: hasLower },
    { label: "A number or symbol", met: hasNumberOrSymbol },
  ];

  return (
    <ul className="text-sm mt-2 space-y-1 text-gray-600">
      {reqs.map((req, idx) => (
        <li key={idx} className={req.met ? "text-green-600" : "text-red-500"}>
          {req.label}
        </li>
      ))}
    </ul>
  );
}
