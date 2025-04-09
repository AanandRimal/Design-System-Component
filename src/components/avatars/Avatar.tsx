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
//****Used absolute and top and left as with offsett leftt was not applied and added div to make exact container  if just offset then form left it was not applied like it was but form badge not frm avater look women shouder justtt touched not touched body but with top and left it touched  */
const StyledIconWrapper = styled.div<{ iconSize: number; translateY: number }>`

  height: ${(props) => props.iconSize}px;
  width: ${(props) => props.iconSize}px;
  transform: translateY(${(props) => props.translateY}px);
`;
const Wrapper = styled.div<{ margin:number; size:number; }>`
    position: relative;
    height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;

`;

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
            textFontSize: userIconSize, //icon size
            fontSize:userIconSize,//textlabel size
         
          },
        },
      }}
    >
   <Wrapper margin={avatarSizeobj.dotplacement} size={avatarSizeobj.base}>
      <Badge dot={props.dot} customSize={avatarSizeobj.status}  customStatus="online" style={{position:"absolute",top:avatarSizeobj.dotplacement, left:avatarSizeobj.dotplacement }}>
        <AntAvatar
          icon={
            React.isValidElement(icon) ? (
              <StyledIconWrapper iconSize={userIconSize} translateY={translateY}>
                {React.cloneElement(icon as React.ReactElement<any>)}
              </StyledIconWrapper>
            ) : (
              icon
            
   ) }
          {...props}
        />
      </Badge>
      </Wrapper>
    </ConfigProvider>
  );
};

export default Avatar;
