import React from "react";
import { Checkbox, ConfigProvider, CheckboxProps } from "antd";
import { Themes } from "./theme";
import { useTheme } from "./ThemeProvider"; 
import "./check.css";
interface CustomCheckBoxProps extends CheckboxProps {
  size?: number;
}
const CheckBox: React.FC<CustomCheckBoxProps> = ({ size = 16, children, ...props }) => {
  const { themeMode } = useTheme(); 
  const primaryColor = Themes[themeMode]?.primary?.default;
  const disabledColor = "#F1F1F3";
  const disabledText = "#9C9CAA";
  return (
    <ConfigProvider
      theme={{
        components: {
          Checkbox: {
            colorPrimary: primaryColor,
            colorPrimaryHover: primaryColor,
            colorBgContainerDisabled: disabledColor,
            colorTextDisabled: disabledText,
            borderRadiusSM: 5,
            controlInteractiveSize: size, 
          },
        },
      }}
    >
      <Checkbox className={props.indeterminate ? "custom-indeterminate" : ""} {...props}>
        {children}
      </Checkbox>
    </ConfigProvider>
  );
};
export default CheckBox;
