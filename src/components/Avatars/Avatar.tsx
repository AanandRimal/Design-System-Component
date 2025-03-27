import React from "react";
import { Avatar as AntAvatar, AvatarProps, ConfigProvider } from "antd";
import { Themes } from "../Foundation/theme";
import { useTheme } from "../../contexthook/ThemeProvider";
import { avatarSizes } from "./AvatarSizes";
import Badge from "../Ant_Badge/Badge"
const Avatar: React.FC<AvatarProps> = ({ icon,...props }) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];
  const customSize = avatarSizes.hasOwnProperty(props.size as keyof typeof avatarSizes) 
    ? avatarSizes[props.size as keyof typeof avatarSizes]   //yesko chai size arkai cusotmpro bata line becuase ant le chai direct size bata nai change gardo raixa so
    : avatarSizes[120];
    const iconSize = customSize.base * 0.8; // Adjust ratio as needed
    const translateY = customSize.base * 0.15; // Adjust positioning dynamically
  return ( 
    <ConfigProvider
      theme={{
        token: {
        },
        components: {
          Avatar: {
            colorBgContainer: currentTheme.Bg1,
            colorText: currentTheme.Text1Title,
            colorTextLightSolid:currentTheme.Bg2Hover,
            colorBorder: "#ffff",
            containerSize:customSize.base,
            fontSize:200
            
          },
        },
      }}
    >  
      <Badge dot customSize={customSize.status} offset={[customSize.dotplacement, customSize.dotplacement]}>
        <AntAvatar
        icon={
          React.isValidElement(icon) // Ensure icon is a valid ReactElement
            ? React.cloneElement(icon as React.ReactElement<any>, {
                style: {
                  height: `${iconSize}px`, // Auto-set height
                  width: `${iconSize}px`, // Auto-set width
                  transform: `translateY(${translateY}px)`, // Auto-set positioning
                  ...(icon.props && typeof icon.props === "object" 
                    ? (icon.props as { style?: React.CSSProperties }).style 
                    : {}), // Preserve existing styles safely
                },
              })
            : icon // If not a valid element, pass it as is
        }
        {...props}
      />
      </Badge>
    </ConfigProvider>
  );
};

export default Avatar;
