import React from "react";
import {ConfigProvider, Alert as AntAlert } from "antd";
import { AlertProps as AntAlertProps } from "antd/lib/alert";
import styled from "styled-components";
import { Themes} from "../foundation/Theme";
import { useTheme } from "../../contexthook/ThemeProvider";
type CustomAlertType = "primary" | "neutral" | "info" | "success" | "warning" | "error";
interface AlertProps extends AntAlertProps {
  Customtype?:CustomAlertType
  stroke?:boolean;
}
const Alert: React.FC<AlertProps> = ({
  Customtype,
  stroke=false,
  ...props
}) => {
  const { themeMode } = useTheme();
  const currentTheme=Themes[themeMode];
  const themeType = Customtype === "error" ? "destructive" : Customtype;
  const themeTypeKey = (currentTheme as any)[themeType as CustomAlertType] || currentTheme?.secondary;

    // const customSize = size && !isAntDSize && Sizes.hasOwnProperty(size as keyof typeof Sizes)
    //   ? Sizes[size as keyof typeof Sizes]
    //   : Sizes[32];

    const StyledAlert = styled(AntAlert)`
  .ant-alert-icon {
    position: relative;
    top: 14px; 
  }

  .ant-alert-close-icon {
    position: relative;
    top: 14px;
    margin-left:10px;
  }
    .ant-alert-action {
  margin-top: 6px;
}

`;
const alert = (
  <StyledAlert
    type={props.type || "info"}
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
            colorInfo: themeTypeKey.default,
            colorInfoHover: themeTypeKey.hover,
            colorInfoActive: themeTypeKey.default,
            colorInfoBg: stroke? "none" :themeTypeKey.focus,
            colorInfoBorder:stroke? themeTypeKey.stroke: "none",
            colorText:themeTypeKey.dark,
            colorTextHeading:themeTypeKey.dark,
            withDescriptionIconSize:20,
          colorIcon:themeTypeKey.stroke,
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
export type {CustomAlertType};
