import React from "react";
import { Switch as AntSwitch, ConfigProvider, SwitchProps } from "antd";
import { useTheme } from "../../context-hook/ThemeProvider"; 
import { Themes } from "../foundation/Theme";
import { switchSizes } from "./SwitchSizes"; 
type CustomTrackSize = keyof typeof switchSizes; 
type ExtendedSwitchSize = Exclude<SwitchProps["size"], undefined> | CustomTrackSize; 
interface CustomSwitchProps extends SwitchProps {
  customSize?: ExtendedSwitchSize 
}
const Switch: React.FC<CustomSwitchProps> = ({ customSize = 20, ...props }) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];
  const disabledText = currentTheme.text.staticWhite
  const customTrackHeight = switchSizes.hasOwnProperty(customSize as keyof typeof switchSizes) //switchSizes[size as keyof typeof switchSizes] || switchSizes[20];
  ? switchSizes[customSize as keyof typeof switchSizes]
  : switchSizes[20];
  return (
    <ConfigProvider
      theme={{
        token:{
        },
        components: {
          Switch: {
            colorPrimary: props.disabled && props.checked ? currentTheme.success.accentBg : currentTheme.success.default,
            colorPrimaryHover: currentTheme.success.default,
            colorTextQuaternary: currentTheme.fill.f4,
            colorTextDisabled: disabledText,
            colorBgContainerDisabled: currentTheme.fill.f4,
            trackHeight: customTrackHeight.trackHeight,
            handleSize:customTrackHeight.ballSize,
            handleBg:currentTheme.text.staticWhite,
            trackMinWidth:customTrackHeight.trackWidth,
            trackPadding:customTrackHeight.padding,
            handleShadow:`0px 1px 2px 0px rgba(0, 0, 0, 0.05)`,
          },
        },
      }}
    >
      <AntSwitch 
      size="default"
    //right now size small wont take as itt will make it defualt
       {...props} />
    </ConfigProvider>
  );
};

export default Switch;
