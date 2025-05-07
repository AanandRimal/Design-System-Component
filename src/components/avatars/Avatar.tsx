import React from "react";
import styled from "styled-components";
import { Avatar as AntAvatar, AvatarProps, ConfigProvider } from "antd";
import { useTheme } from "../../context-hook/ThemeProvider";
import { Themes } from "../foundation/Theme";
import Badge from "../avatar-badge/AvatarBadge";
import { avatarSizes } from "./AvatarSizes";

interface CustomAvatarProps extends AvatarProps {
  customSize?: number;
  dot?:boolean;
  customStatus?:"online"|"offline";
}
//****Used absolute and top and left as with offsett leftt was not applied and added div to make exact container  if just offset then form left it was not applied like it was but form badge not frm avater look women shouder justtt touched not touched body but with top and left it touched  */
const StyledIconWrapper = styled.span<{ iconSize: number; translateY: number }>`
  height: ${(props) => props.iconSize}px;
  width: ${(props) => props.iconSize}px;
  transform: translateY(${(props) => props.translateY}px);
`;
// const Wrapper = styled.div<{ size:number; }>`
//     position: relative;
//     height: ${(props) => props.size}px;
//   width: ${(props) => props.size}px;
// `;
const getChildrenLabel = (children: React.ReactNode, maxChars: number) => {
  if (typeof children === "string") {
    return children.slice(0, maxChars).toUpperCase();
  }
  return children;
};
const Avatar: React.FC<CustomAvatarProps> = ({customStatus, customSize, icon, ...props }) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];
  const avatarSizeobj = avatarSizes[customSize as keyof typeof avatarSizes] || avatarSizes[120];
  const userIconSize =  icon ?  avatarSizeobj.base * 1: avatarSizeobj.base *0.5  ;
  const translateY = avatarSizeobj.base * 0.19;

  const maxChars = avatarSizeobj.base <= 24 ? 1 : 2;
  

  return (
    <ConfigProvider
      theme={{
        components: {
          Avatar: {
            colorTextPlaceholder: icon ? currentTheme.fill.f4 : currentTheme.primary.default,
            colorText: currentTheme.text.t1Title,
            colorTextLightSolid: icon ? currentTheme.background.bg2Hover : currentTheme.text.staticWhite,
            containerSize: avatarSizeobj.base,
            textFontSize: userIconSize, //icon size
            fontSize:userIconSize,//textlabel size
         
          },
        },
      }}
    >
   {/* <Wrapper  size={avatarSizeobj.base}> */}
     <Badge dot={props.dot} customSize={avatarSizeobj.status} offset={[0, avatarSizeobj.dotplacement]} customStatus={customStatus} >
      <AntAvatar
        style={{ fontWeight: 600 }}
  icon={
    React.isValidElement(icon) ? (
      <StyledIconWrapper iconSize={userIconSize} translateY={translateY}>
        {React.cloneElement(icon as React.ReactElement<any>)}
      </StyledIconWrapper>
    ) : undefined // only pass icon if it's valid
  }
  {...props}
>
  {getChildrenLabel(props.children, maxChars)}
</AntAvatar>

      </Badge>
      {/* </Wrapper> */}
    </ConfigProvider>
  );
};

export default Avatar;
