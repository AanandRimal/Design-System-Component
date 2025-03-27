import React from "react";
import { Avatar as AntAvatar, AvatarProps, ConfigProvider } from "antd";
import { Themes } from "../Foundation/theme";
import { useTheme } from "../../contexthook/ThemeProvider";
import { avatarSizes } from "./AvatarSizes";
import Badge from "../Ant_Badge/Badge";

interface CustomAvatarProps extends AvatarProps {
  customSize?: number;
}

const Avatar: React.FC<CustomAvatarProps> = ({ icon, customSize, ...props }) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];
  
  const resolvedSize = avatarSizes.hasOwnProperty(customSize as keyof typeof avatarSizes)
    ? avatarSizes[customSize as keyof typeof avatarSizes]
    : avatarSizes[120];

  const iconSize = resolvedSize.base * 0.8;
  const translateY = resolvedSize.base * 0.15;

  return (
    <ConfigProvider
      theme={{
        components: {
          Avatar: {
            colorBgContainer: currentTheme.Bg1,
            colorText: currentTheme.Text1Title,
            colorTextLightSolid: currentTheme.Bg2Hover,
            colorBorder: "#ffff",
            containerSize: resolvedSize.base,
            fontSize: 500,
          },
        },
      }}
    >
      <Badge dot customSize={resolvedSize.status} offset={[-2, 17]}>
        <AntAvatar
          icon={
            React.isValidElement(icon)
              ? React.cloneElement(icon as React.ReactElement<any>, {
                  style: {
                    height: `${iconSize}px`,
                    width: `${iconSize}px`,
                    transform: `translateY(${translateY}px)`,
                    ...(icon.props && typeof icon.props === "object"
                      ? (icon.props as { style?: React.CSSProperties }).style
                      : {}),
                  },
                })
              : icon
          }
          {...props}
        />
      </Badge>
    </ConfigProvider>
  );
};

export default Avatar;
