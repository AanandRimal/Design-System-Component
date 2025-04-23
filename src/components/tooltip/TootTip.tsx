import React from "react";
import { ConfigProvider, Tooltip as AntToolTip } from "antd";
import type { TooltipProps } from "antd";
import { useTheme } from "../../context-hook/ThemeProvider";
import {Themes} from "../foundation/Theme";

type CustomTooltipProps = TooltipProps & {
  customTitle?: React.ReactNode;
  customDescription?: React.ReactNode;
};

const Tooltip: React.FC<CustomTooltipProps> = ({
  customTitle,
  customDescription,

  ...props
}) => {
    const {themeMode}=useTheme();
    const currentTheme=Themes[themeMode];
const isDescription = !!customDescription;
  const customContent = customTitle || customDescription ? (
    <>
      {customTitle && <span>{customTitle}</span>}
      </>
  ) : (
   undefined
  );

  return (
    <ConfigProvider
    theme={{
    token:{

    },
    components:{
    Tooltip:{
        colorBgSpotlight:currentTheme.inverse.inverseblack,
        colorTextLightSolid:currentTheme.inverse.inversewhite,
        borderRadius:6,
        paddingSM: isDescription? 24 :8,
        paddingXS: isDescription? 12:8,
        fontSize:13,

    },
    },

    }}
    >
    <AntToolTip title={customContent ? customContent:props.title } {...props}>
      {props.children}
    </AntToolTip>
    </ConfigProvider>
  );
};

export default Tooltip;
