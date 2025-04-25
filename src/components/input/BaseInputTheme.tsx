import React from "react";
import { ConfigProvider } from "antd";
import { useTheme } from "../../context-hook/ThemeProvider";
import { Sizes, Themes } from "../foundation/Theme";

type CustomSize = keyof typeof Sizes;

interface BaseInputProps {
  children: React.ReactNode;
  customSize?: CustomSize;
}

const  BaseInputTheme: React.FC<BaseInputProps> = ({ children, customSize = 36 }) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];
  const customSizeKey = Sizes[customSize] || Sizes[40];

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorIcon: currentTheme.text.t3Disabled,
            activeShadow: `0 0 0 4px ${currentTheme.primary.focus}`,
            colorError: currentTheme.destructive.stroke,
            colorWarning: currentTheme.warning.stroke,
            colorErrorBorderHover: currentTheme.destructive.stroke,
            colorBorder: currentTheme.stroke.strong,
            activeBorderColor: currentTheme.primary.stroke,
            colorText: currentTheme.text.t2Component,
            colorTextPlaceholder: currentTheme.text.t3Disabled,
            hoverBorderColor: "none",
            colorBgContainer: currentTheme.background.bg1,
            colorBgContainerDisabled: currentTheme.fill.f2,
            colorTextDisabled: currentTheme.text.t3Disabled,
            inputFontSizeLG: customSizeKey.fontSize,
            paddingInlineLG: customSizeKey.paddingX,
            controlHeightLG: customSizeKey.height,
            borderRadiusLG: 8,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
export type {BaseInputProps};
export default BaseInputTheme;
