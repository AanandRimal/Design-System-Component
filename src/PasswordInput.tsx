import React, { useState } from "react";
import { CheckCircleFilled } from "@ant-design/icons";
import Input from "./Input"; // Import your custom Input component

interface PasswordInputProps extends React.ComponentProps<typeof Input> {
  label?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label = "Password", value, onChange, ...props }) => {
  const [password, setPassword] = useState<string>(String(value || "")); // Ensure value is a string

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword); // Update state
    onChange?.(e); // Call the passed onChange function if it exists
  };

  // Password validation rules
  const passwordRules = [
    { label: "Minimum 8 characters", check: password.length >= 8 },
    { label: "At least one uppercase letter", check: /[A-Z]/.test(password) },
    { label: "At least one number", check: /[0-9]/.test(password) },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {/* Label */}
      {label && <label style={{ fontSize: "14px", fontWeight: "500" }}>{label}</label>}

      {/* Password Input (Fix: Ensure value is a string) */}
      <Input type="password" value={password} onChange={handleChange} {...props} />

      {/* Password Validation Rules */}
      <div style={{ fontSize: "12px", color: "#9C9CAA", marginTop: "4px" }}>
        {passwordRules.map((rule, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <CheckCircleFilled style={{ color: rule.check ? "green" : "#9C9CAA" }} />
            <span>{rule.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PasswordInput;
