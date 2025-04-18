import React from "react";
import { Themes } from "../foundation/Theme";
import {useTheme} from "../../context-hook/ThemeProvider";
import Progress from "./ProgressBar";

interface ProgesswithLabelProps extends React.ComponentProps<typeof Progress> {
  label?: string;
  bottomLabel?: string;
}
const ProgressWithLabel: React.FC<ProgesswithLabelProps> = ({
  label,
  bottomLabel,
  ...props
}) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];
  return (
    <div className="flex flex-col">
      {label && (
        <label
          className="text-base-medium font-medium mb-1.5"
          style={{ color: currentTheme.text.t2Component }} 
        >
          {label}
        </label>
      )}
      <Progress {...props} percent={props.percent}/>
      {bottomLabel && (
        <span
          className="text-xs mt-1.5"
          style={{
            color: currentTheme.text.t3Subtitle, 
          }}
        >
          {bottomLabel}
        </span>
      )}
    </div>
  );
};

export default ProgressWithLabel;
