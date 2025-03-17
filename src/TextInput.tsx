import React from "react";
import Input from "./Input"; // Your existing Input component

interface TextInputProps extends React.ComponentProps<typeof Input> {
  label?: string;
  bottomLabel?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  bottomLabel,
  status,
  ...props
}) => {
  const isError = status === "error"; // Check if status is error

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {/* Top Label */}
      {label && (
        <label style={{ fontSize: "14px", fontWeight: "500" }}>
          {label}
        </label>
      )}

      {/* Input Field */}
      <Input status={status} {...props} />

      {/* Bottom Label (Turns red if error) */}
      {bottomLabel && (
        <span style={{ fontSize: "12px", color: isError ? "#FF8588" : "#9C9CAA" }}>
          {bottomLabel}
        </span>
      )}
    </div>
  );
};

export default TextInput;
