import React from "react";
import { Badge as AntBadge, ConfigProvider, BadgeProps } from "antd";
import { Themes } from "../Foundation/theme";
import { useTheme } from "../../contexthook/ThemeProvider";
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
            colorError:currentTheme.success.default
          },
        },
      }}
    >
      <AntBadge  {...props} />
    </ConfigProvider>
  );
};

export default Badge;
