import React from "react";
import { Radio as AntRadio, ConfigProvider, RadioProps } from "antd";
import { useTheme } from "../contexthook/ThemeProvider";
import { Themes } from "./foundation/Theme";
interface CustomRadioProps extends RadioProps {
  size?: number;
}
  const Radio: React.FC<CustomRadioProps> = ({ size = 16, children, ...props }) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];
  const primaryColor = currentTheme?.primary?.default;
  const dotSize = size / 2;
  return (
    <ConfigProvider
      theme={{
        components: {
          Radio: {
            colorPrimary: primaryColor, // Active radio color
            dotColorDisabled: "red",
            colorPrimaryHover: primaryColor,
            colorPrimaryBorder: currentTheme.Bg5TableActive,
            colorBgContainer: currentTheme.Bg1,
            colorBorder: currentTheme.stroke.strong, // diabeld ko border linxa 
            colorBgContainerDisabled: currentTheme.Bg5TableActive,
            colorTextDisabled: currentTheme.Text3Disabled,
            colorText: currentTheme.Text2Component,
            colorWhite: currentTheme.Bg1, //this is dot color
            dotSize:dotSize,
            radioSize:size,// tick mark color
            // borderRadiusSM: 5,
            // lineWidthBold: 2,
            // controlInteractiveSize: size,
          },
        },
      }}
    >
      <AntRadio
     {... props} >
        {children}
      </AntRadio>
    </ConfigProvider>
  );
};
export default Radio;
