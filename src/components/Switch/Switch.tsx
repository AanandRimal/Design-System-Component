import React from "react";
import { Switch as AntSwitch, ConfigProvider, SwitchProps } from "antd";
import { Themes } from "../Foundation/theme";
import { useTheme } from "../../contexthook/ThemeProvider"; 
import { switchSizes } from "./SwitchSizes"; 
type CustomTrackSize = keyof typeof switchSizes; 
type ExtendedSwitchSize = Exclude<SwitchProps["size"], undefined> | CustomTrackSize; 
interface CustomSwitchProps extends Omit<SwitchProps, "size"> {
  size?: ExtendedSwitchSize 
}
const Switch: React.FC<CustomSwitchProps> = ({ size = "default", ...props }) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];
  const disabledText = currentTheme.Text3Disabled;
  const customTrackHeight = switchSizes.hasOwnProperty(size as keyof typeof switchSizes) //switchSizes[size as keyof typeof switchSizes] || switchSizes[20];
  ? switchSizes[size as keyof typeof switchSizes]
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
            colorTextQuaternary: props.disabled? currentTheme.Bg3:currentTheme.Bg5,
            colorTextDisabled: disabledText,
            colorBgContainerDisabled: currentTheme.Bg3,
            trackHeight: customTrackHeight.trackHeight,
            handleSize:customTrackHeight.ballSize,
            handleBg:currentTheme.Bg1,
            trackMinWidth:customTrackHeight.trackWidth,
            trackPadding:customTrackHeight.padding,
            handleShadow:`0px 1px 2px 0px rgba(0, 0, 0, 0.05)`,
          },
        },
      }}
    >
      <AntSwitch 
      size="default"
      style={{ border: props.disabled && !props.checked ? `1px solid ${currentTheme.stroke.strong}` : undefined }}
    //right now size small wont take as itt will make it defualt
       {...props} />
    </ConfigProvider>
  );
};

export default Switch;
