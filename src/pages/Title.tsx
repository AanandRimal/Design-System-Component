import React from "react";
import { useTheme } from "../context-hook/ThemeProvider";
import { Themes } from "../components/foundation/Theme";

interface TitleProps {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  variantStyle?:React.CSSProperties;

}

const Title: React.FC<TitleProps> = ({ icon, title, description,variantStyle }) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];

  return (
    <div className={`flex gap-3  ${description ? "items-start" : "items-center"}`} style={variantStyle}>
      {icon}
      <div className="flex flex-col gap-1.5">
        <h5 className="text-h5-semibold font-semibold ">{title}</h5>
        {description && (
          <p className="text-base-regular font-regular" style={{ color: currentTheme.text.t3Subtitle }}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Title;
