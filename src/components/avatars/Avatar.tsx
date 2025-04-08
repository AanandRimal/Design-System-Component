import React from "react";
import styled from "styled-components";
import { Avatar as AntAvatar, AvatarProps, ConfigProvider } from "antd";
import { useTheme } from "../../contexthook/ThemeProvider";
import { Themes } from "../foundation/Theme";
import Badge from "../avatar-badge/AvatarBadge";
import { avatarSizes } from "./AvatarSizes";

interface CustomAvatarProps extends AvatarProps {
  customSize?: number;
  dot?:boolean;
}

// const StyledIconWrapper = styled.div<{ iconSize: number; translateY: number }>`
//   height: ${(props) => props.iconSize}px;
//   width: ${(props) => props.iconSize}px;
//   transform: translateY(${(props) => props.translateY}px);
// `;

const Avatar: React.FC<CustomAvatarProps> = ({ customSize, icon, ...props }) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];
  const avatarSizeobj = avatarSizes[customSize as keyof typeof avatarSizes] || avatarSizes[120];
  const userIconSize = avatarSizeobj.base * 0.8;
  const translateY = avatarSizeobj.base * 0.19;

  return (
    <ConfigProvider
      theme={{
        components: {
          Avatar: {
            colorTextPlaceholder: icon ? currentTheme.background.bg5 : currentTheme.primary.default,
            colorText: currentTheme.text.t1Title,
            colorTextLightSolid: icon ? currentTheme.background.bg2Hover : currentTheme.text.staticWhite,
            colorBorder: "#ffff",
            containerSize: avatarSizeobj.base,
            textFontSize: userIconSize,
          },
        },
      }}
    >
      <Badge dot={props.dot} customSize={avatarSizeobj.status} offset={[0, avatarSizeobj.dotplacement]} customStatus="online">
        <AntAvatar
          icon={
            // React.isValidElement(icon) ? (
            //   <StyledIconWrapper iconSize={userIconSize} translateY={translateY}>
            //     {React.cloneElement(icon as React.ReactElement<any>)}
            //   </StyledIconWrapper>
            // ) : (
              icon
            
          }
          {...props}
        />
      </Badge>
    </ConfigProvider>
  );
};

export default Avatar;
