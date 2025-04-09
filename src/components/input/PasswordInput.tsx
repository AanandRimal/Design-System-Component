import React, { useState } from "react";
import { CircleCheck } from "lucide-react";
import Input from "./Input"; // Import your custom Input component
import { Themes } from "../foundation/Theme";
import { useTheme } from "../../contexthook/ThemeProvider";

interface PasswordInputProps extends React.ComponentProps<typeof Input> {
  label?: string;

}

const PasswordInput: React.FC<PasswordInputProps> = ({ label = "Password", value, onChange, ...props }) => {
  const [password, setPassword] = useState<string>(String(value || "")); // Ensure value is a string
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];
  const isError =props.status==="error"
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
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      {/* Label */}
      {label && <label className="text-base-medium font-medium" style={{  color: currentTheme.text.t2Component}}>{label}</label>}

      {/* Password Input (Fix: Ensure value is a string) */}
      <Input type="password" value={password} onChange={handleChange} {...props} />
      <span
          className="text-xs mt-1.5"
          style={{
            color: isError
              ? currentTheme.destructive.default 
              : currentTheme.text.t3Subtitle, 
          }}
        >
          Error Text
        </span>

      {/* Password Validation Rules */}
      <div className="text-x-small-regular font-regular" style={{  color: currentTheme.text.t2Component, marginTop: "8px" }}>
        {passwordRules.map((rule, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <CircleCheck  size={12.67} color={rule.check ? "green" : currentTheme.text.t3Disabled}/>
            <span>{rule.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PasswordInput;
