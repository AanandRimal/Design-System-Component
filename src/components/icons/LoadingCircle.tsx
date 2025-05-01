import React from "react";
import { useTheme } from "../../context-hook/ThemeProvider";
import { Themes } from "../foundation/Theme";
interface LoadingCircleProps {
  customSize?: 20|24|36|40;
  strokeWidth?: number;
  progress?: number; // percentage (0–100)
  primaryColor?: string;
  backgroundColor?: string;
  duration?: number; // spin duration in seconds
}
const LoadingCircle: React.FC<LoadingCircleProps> = ({
  customSize = 20,
  strokeWidth = 3,
  progress = 30,
  duration = 1.5,
  ...props
}) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];
  const primaryColor = props.primaryColor || currentTheme.primary.default;
  const backgroundColor = props.backgroundColor || currentTheme.stroke.strong;
  const radius = (customSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress / 100);

  const spinnerStyle: React.CSSProperties = {
    width: customSize,
    height: customSize,
    display: "inline-block",
    animation: `spin ${duration}s linear infinite`,
  };

  const keyframes = `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;

  return (
    <>
      {/* Inject keyframes once (or move this to a higher-level component if reused often) */}
      <style>{keyframes}</style>

      <div style={spinnerStyle}>
        <svg width={customSize} height={customSize} style={{ transform: "rotate(-90deg)" }}>
          {/* Background Circle */}
          <circle
            cx={customSize / 2}
            cy={customSize / 2}
            r={radius}
            stroke={backgroundColor}
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress Arc */}
          <circle
            cx={customSize / 2}
            cy={customSize / 2}
            r={radius}
            stroke={primaryColor}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
      </div>
    </>
  );
};

export default LoadingCircle;
