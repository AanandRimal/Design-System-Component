import React from "react";
import { ConfigProvider, Progress as AntProgress, ProgressProps } from "antd";
import { useTheme } from "../../context-hook/ThemeProvider";
import { Themes } from "../foundation/Theme";
const Progress: React.FC<ProgressProps> = (props) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];

  return (
    <ConfigProvider
      theme={{
        components: {
          Progress: {
            defaultColor:currentTheme.primary.default,
            remainingColor:currentTheme.fill.f3,
            colorText:currentTheme.text.t2Component
          },
        },
      }}
    >
      <AntProgress {...props} />
    </ConfigProvider>
  );
};

export default Progress;
