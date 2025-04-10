import React from "react";
import { ConfigProvider, Tooltip as AntToolTip } from "antd";
import type { TooltipProps } from "antd";
import { useTheme } from "../../contexthook/ThemeProvider";
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
    <div>
      {customTitle && <div >{customTitle}</div>}
      {customDescription && (
        <div  className="text-x-small-regular font-regular"style={{ color: currentTheme.text.t3Disabled ,marginTop:"4px" }}>{customDescription}</div>
      )}
    </div>
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
        lineHeight:1.1
    },
    },

    }}
    >
    <AntToolTip title={customContent ? customContent:props.title} {...props}>
      {props.children}
    </AntToolTip>
    </ConfigProvider>
  );
};

export default Tooltip;
