import React from "react";
import Input from "./Input"; 

interface OtpInputProps extends React.ComponentProps<typeof Input> {
  label?: string;
  bottomLabel?: string;
}

const OtpInput: React.FC<OtpInputProps> = ({
  label,
  bottomLabel,
  status,
  ...props
}) => {
  const isError = status === "error"; 

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {label && (
        <label style={{ fontSize: "14px", fontWeight: "500" }}>
          {label}
        </label>
      )}
      <Input type="otp" status={status} {...props} />
      {bottomLabel && (
        <span style={{ fontSize: "12px", color: isError ? "#FF8588" : "#9C9CAA" }}>
          {bottomLabel}
        </span>
      )}
    </div>
  );
};

export default OtpInput;
