import React from "react";
import { useTheme } from "../context-hook/ThemeProvider";
import { Themes } from "../components/foundation/Theme";

interface TitleProps {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ icon, title, description }) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];

  return (
    <div className={`flex gap-3 ${description ? "items-start" : "items-center"}`}>
      {icon}
      <div className="flex flex-col">
        <h5 className="text-h6-semibold font-semibold ">{title}</h5>
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
