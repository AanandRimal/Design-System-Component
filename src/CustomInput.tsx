import React from "react";
import Input from "./Input"; // Your existing Input component

interface CustomInputProps extends React.ComponentProps<typeof Input> {
  label?: string;
  bottomLabel?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  bottomLabel,
  status,
  type = "text", // Default to text input
  ...props
}) => {
  const isError = status === "error"; // Check if status is error

  return (
    <div className="flex flex-col">
      {/* Top Label */}
      {label && (
        <label className="text-sm font-medium leading-5 mb-1 text-grey-950">
          {label}
        </label>
      )}

      {/* Input Field */}
      <Input type={type} status={status} {...props} />

      {/* Bottom Label (6px gap from input to bottom label) */}
      {bottomLabel && (
        <span className={`text-xs ${isError ? "text-red-700" : "text-grey-500"} mt-1.5`}>
          {bottomLabel}
        </span>
      )}
    </div>
  );
};

export default CustomInput;

