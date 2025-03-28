import React from "react";
import { Badge as AntBadge, ConfigProvider, BadgeProps } from "antd";
import { useTheme } from "../../contexthook/ThemeProvider";
import { Themes } from "../foundation/Theme";
interface CustomBadgeProps extends BadgeProps{
  customSize?:number
}
const Badge: React.FC<CustomBadgeProps> = ({customSize=16,...props }) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];
  return (
    <ConfigProvider
      theme={{
        components: {
          Badge: {
            indicatorHeight:customSize,
            dotSize:customSize,
            colorError:currentTheme.success.default,
            colorBorderBg:currentTheme.Bg1,
            lineWidth:2
          },
        },
      }}
    >
      <AntBadge  {...props} >
        {props.children}
        </AntBadge>
    </ConfigProvider>
  );
};

export default Badge;
