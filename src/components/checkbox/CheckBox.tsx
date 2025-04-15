import React from "react";
import { Checkbox, ConfigProvider, CheckboxProps } from "antd";
import { useTheme } from "../../contexthook/ThemeProvider"; 
import { Themes } from "../foundation/Theme";
import { checkSizes } from "./CheckSizes";
import "./check.css";
interface CustomCheckBoxProps extends CheckboxProps {
  size?: number;
}
const CheckBox: React.FC<CustomCheckBoxProps> = ({ size = 16,  ...props }) => {
  const { themeMode } = useTheme(); 
  const currentTheme=Themes[themeMode];
  const checksize=checkSizes[size];
  const indeterminateWidth = checksize.linewidth
  const indeterminateborderwidth=checksize.linewidthbold
  console.log(props.indeterminate)
  return (
    <ConfigProvider
      theme={{
        components: {
          Checkbox: {
            colorPrimary: currentTheme.primary.default,
            colorPrimaryHover: currentTheme.primary.default,
            colorPrimaryBorder:currentTheme.background.bg5TableActive,//THIS IS FOCUS COLOR 
            colorBgContainer:currentTheme.background.bg1,
            colorBorder:currentTheme.stroke.strong,
            colorBgContainerDisabled: currentTheme.background.bg3,
            colorTextDisabled:currentTheme.text.t3Disabled,
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
          "--indeterminate-width-bold":`${indeterminateborderwidth}px`, 
          display: "flex",
          alignItems: "center",
        } as React.CSSProperties} className={props.indeterminate ? "custom-indeterminate" : " "}   
      {...props}>
        
        {props.children}
      </Checkbox>
    </ConfigProvider>
    
  );
};
export default CheckBox;
