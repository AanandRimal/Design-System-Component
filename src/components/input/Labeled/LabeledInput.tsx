import React from "react";
import { useTheme } from "../../../context-hook/ThemeProvider";
import { Themes } from "../../foundation/Theme";
import { InputProps } from "antd";

interface LabeledInputProps extends InputProps {
  label?: string;
  bottomLabel?: string;
  children: React.ReactNode;
}

const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  bottomLabel,
  status,
  children,
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
          style={{ color: props.disabled ? currentTheme.text.t3Disabled : currentTheme.text.t2Component }}
        >
          {label}
        </label>
      )}

      {children}

      {bottomLabel && (
        <span
          className="text-xs mt-1.5"
          style={{
            color: isError
              ? currentTheme.destructive.default
              : props.disabled
              ? currentTheme.text.t3Disabled
              : currentTheme.text.t3Subtitle,
          }}
        >
          {bottomLabel}
        </span>
      )}
    </div>
  );
};

export default LabeledInput;
