import React from "react";
import Input from "./Input";
import { Themes } from "../foundation/Theme";
import { useTheme } from "../../context-hook/ThemeProvider";

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
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];
  const isError = status === "error";

  return (
    <div className="flex flex-col">
      {label && (
        <label
          className="text-base-medium font-medium mb-1"
          style={{ color:props.disabled? currentTheme.text.t3Disabled: currentTheme.text.t2Component }} 
        >
          {label}
        </label>
      )}
      <Input type={type} status={status} {...props} />
      {bottomLabel && (
        <span
          className="text-xs mt-1.5"
          style={{
            color: isError
              ? currentTheme.destructive.default :
              props.disabled? currentTheme.text.t3Disabled
              : currentTheme.text.t3Subtitle, 
          }}
        >
          {bottomLabel}
        </span>
      )}
    </div>
  );
};

export default CustomInput;
