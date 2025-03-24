import React from "react";
import { Checkbox, ConfigProvider, CheckboxProps } from "antd";
import { Themes } from "../Foundation/theme";
import { useTheme } from "../../ThemeProvider"; 
import "./check.css";
interface CustomCheckBoxProps extends CheckboxProps {
  size?: number;
}
const CheckBox: React.FC<CustomCheckBoxProps> = ({ size = 16, children, ...props }) => {
  const { themeMode } = useTheme(); 
  const currentTheme=Themes[themeMode];
  const primaryColor = Themes[themeMode]?.primary?.default;
  const disabledColor = "#F1F1F3";
  const disabledText = currentTheme.Text3Disabled;
  return (
    <ConfigProvider
      theme={{
        components: {
          Checkbox: {

            colorPrimary: primaryColor,
            colorPrimaryHover: primaryColor,
            colorPrimaryBorder:currentTheme.Bg5TableActive,//THIS IS FOCUS COLOR 
            colorBgContainer:currentTheme.Bg1,
            colorBorder:currentTheme.stroke.strong,
            colorBgContainerDisabled: disabledColor,
            colorTextDisabled: disabledText,
            colorText:currentTheme.Text2Component,
            colorWhite:currentTheme.StaticWhite,
            borderRadius: 5,
            lineWidthBold:2,
            controlInteractiveSize: size, 
          },
        },
      }}
    >
      <Checkbox className={props.indeterminate ? "custom-indeterminate" : " "} {...props}>
        
        {children}
      </Checkbox>
    </ConfigProvider>
    
  );
};
export default CheckBox;
