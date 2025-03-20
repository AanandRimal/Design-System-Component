import React from "react";
import Input from "./Input"; 
import { Themes } from "./theme";

interface CustomInputProps extends React.ComponentProps<typeof Input> {
  label?: string;
  bottomLabel?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  bottomLabel,
  status,
  type = "text",
  ...props
}) => {
  const isError = status === "error"; 

  return (
    <div className="flex flex-col">
       {label && (
        <label className="text-base-medium font-medium mb-1 text-grey-700">
          {label}
        </label>
      )}

      <Input type={type} status={status} {...props} />

      {bottomLabel && (
        <span className={`text-xs ${isError ? "text-red-700" : "text-grey-500"} mt-1.5`}>
          {bottomLabel}
        </span>
      )}
    </div>
  );
};

export default CustomInput;

