import React from "react";
import { Checkbox, ConfigProvider, CheckboxProps } from "antd";
import { useTheme } from "../../contexthook/ThemeProvider"; 
import { Themes } from "../foundation/Theme";
import { checkSizes } from "./CheckSizes";
import "./check.css";
interface CustomCheckBoxProps extends CheckboxProps {
  size?: number;
}
const CheckBox: React.FC<CustomCheckBoxProps> = ({ size = 16, children, ...props }) => {
  const { themeMode } = useTheme(); 
  const currentTheme=Themes[themeMode];
  const primaryColor = Themes[themeMode]?.primary?.default;
  const disabledColor = "#F1F1F3";
  const disabledText = currentTheme.text.t3Disabled;
  const checksize=checkSizes[size];
  const indeterminateWidth = checksize.linewidth
  const indeterminateborderwidth=checksize.linewidthbold
  return (
    <ConfigProvider
      theme={{
        components: {
          Checkbox: {
            colorPrimary: primaryColor,
            colorPrimaryHover: primaryColor,
            colorPrimaryBorder:currentTheme.background.bg5TableActive,//THIS IS FOCUS COLOR 
            colorBgContainer:currentTheme.background.bg1,
            colorBorder:currentTheme.stroke.strong,
            colorBgContainerDisabled: disabledColor,
            colorTextDisabled: disabledText,
            colorText:currentTheme.text.t2Component,
            colorWhite:currentTheme.text.staticWhite,
            borderRadiusSM: checksize.borderadius,
            lineWidthBold:checksize.linewidthbold,
            controlInteractiveSize: size, 
          },
        },
      }}
    >
      <Checkbox      style={{ 
          "--indeterminate-width": `${indeterminateWidth}px`,
          "--indeterminate-width-bold":`${indeterminateborderwidth}px` 
        } as React.CSSProperties} className={props.indeterminate ? "custom-indeterminate" : " "}   
      {...props}>
        
        {children}
      </Checkbox>
    </ConfigProvider>
    
  );
};
export default CheckBox;
