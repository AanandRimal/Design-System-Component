import React from "react";
import {ConfigProvider, Alert as AntAlert } from "antd";
import { AlertProps as AntAlertProps } from "antd/lib/alert";
import styled from "styled-components";
import { Themes} from "../foundation/Theme";
import { useTheme } from "../../contexthook/ThemeProvider";
type CustomAlertType = "primary" | "neutral";
type ExtendedAlertType = AntAlertProps["type"] | CustomAlertType;
interface AlertProps extends Omit<AntAlertProps, "type" > {
  type?: ExtendedAlertType;
  stroke?:boolean;
}
const Alert: React.FC<AlertProps> = ({
  type = "info",
  stroke=false,
  ...props
}) => {
  const { themeMode } = useTheme();
  const currentTheme=Themes[themeMode];
  const themeType = type === "error" ? "destructive" : type;
  const colorInfo = (currentTheme as any)[themeType as CustomAlertType] || currentTheme?.secondary;

    // const customSize = size && !isAntDSize && Sizes.hasOwnProperty(size as keyof typeof Sizes)
    //   ? Sizes[size as keyof typeof Sizes]
    //   : Sizes[32];

    const StyledAlert = styled(AntAlert)`
  .ant-alert-icon {
    position: relative;
    top: 8px; 
  }

  .ant-alert-close-icon {
    position: relative;
    top: 8px;
    margin-left:10px;
  }

`;
const alert = (
  <StyledAlert
    type="info"
    {...props}
    message={<span className="text-medium-semibold font-semibold">{props.message}</span>}
    description={<span className="text-base-regular font-regular">{props.description}</span>}
  />
);
        
  return (
    <ConfigProvider
      theme={{
        token: {
        },
        components: {
          Alert: {
            colorInfo: colorInfo.default,
            colorInfoHover: colorInfo.hover,
            colorInfoActive: colorInfo.default,
            colorInfoBg: stroke? "none" :colorInfo.focus,
            colorInfoBorder:stroke? colorInfo.stroke: "none",
            colorText:colorInfo.dark,
            colorTextHeading:colorInfo.dark,
            withDescriptionIconSize:20,
          colorIcon:colorInfo.stroke,
          fontSizeIcon:16,
          withDescriptionPadding:"12px 14px",
          marginXS:2,
        
            // colorInfoBorder:colorInfo.focus,
            // colorTextDisabled: currentTheme.Text3Disabled,
            // colorBgContainerDisabled: currentTheme.Bg2Hover,
            // colorTextLightSolid:colorInfo.textcolor,
            // borderRadius: 8,
            // marginXS:6,
            // opacityLoading:1,
          },
        },
      }}
    >
    {alert}
    </ConfigProvider>
  );
};
export default Alert;
export type {ExtendedAlertType};
