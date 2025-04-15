import React from "react";

interface LoadingCircleProps {
  size?: number;
  strokeWidth?: number;
  progress?: number; // percentage (0–100)
  primaryColor?: string;
  backgroundColor?: string;
  duration?: number; // spin duration in seconds
}

const LoadingCircle: React.FC<LoadingCircleProps> = ({
  size = 48,
  strokeWidth = 4,
  progress = 30,
  primaryColor = "#1677ff",
  backgroundColor = "#e5e5e5",
  duration = 1.5,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress / 100);

  const spinnerStyle: React.CSSProperties = {
    width: size,
    height: size,
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
        <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
          {/* Background Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={backgroundColor}
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress Arc */}
          <circle
            cx={size / 2}
            cy={size / 2}
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
