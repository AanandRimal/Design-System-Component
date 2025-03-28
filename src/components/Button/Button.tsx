import React from "react";
import { ConfigProvider, Button as AntButton } from "antd";
import { ButtonProps as AntButtonProps } from "antd/lib/button";
import { useTheme } from "../../contexthook/ThemeProvider";
import { Themes, Sizes ,socialSizePadding} from "../foundation/Theme";
type Customtype = "primary"| "secondary" | "success" | "info" | "destructive" | "warning" | "social"; // made so that no other type can be passed
type CustomSize = keyof typeof Sizes;//same dfor szie as well no other than key of typeszies be passed 
interface ButtonProps extends AntButtonProps { // adding extra porps with extending the exisintg button prop of ant 
Customtype?: Customtype;
Customsize?:CustomSize;
leftIcon?:React.ReactNode;
rightIcon?:React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({
  //removed explicit type and rathe rpassed the type while passing button itslef
  Customtype,
  Customsize,
  leftIcon,
  rightIcon,
  ...props 
}) => {
  const { themeMode } = useTheme();
  const currentTheme=Themes[themeMode];
  const colorPrimary = (currentTheme as any)[Customtype as Customtype]||currentTheme.secondary; // taken obj from theme to use colors and default to secondary if no type find as i used social and it uses secnodary color so did default to secondary
  // console.log(colorPrimary)
  const customSize = Customsize  && Sizes.hasOwnProperty(Customsize as keyof typeof Sizes) // if given size has size mapped then it takes else it defualt to size 32 
   ? Sizes[Customsize as keyof typeof Sizes]
    : Sizes[32];
  const isSocialType = Customtype === "social"; // social button padding, is different so handled here 
  const socialPadding = isSocialType ? socialSizePadding[Customsize as number] : undefined;
  const finalPaddingY = isSocialType ? socialPadding?.paddingY : customSize?.paddingY;
  const finalPaddingX = isSocialType ? socialPadding?.paddingX : customSize?.paddingX;
  const lineheight = customSize?.lineheight ?? 16;
  const buttonStyle: React.CSSProperties = {
    borderColor: (Customtype === "secondary" || Customtype === "social") ? currentTheme.stroke.strong : undefined, // as border color is there for social and soecndary so used css
    ...(props.loading && { // loading case we dont have token so handled with css for all button
      backgroundColor: currentTheme.Bg2Hover,
      color: currentTheme.Text3Disabled,
      paddingBlock: finalPaddingY,
      lineHeight: `${lineheight / 16}rem`
    }),
  };
    const iconColor = props.disabled ? currentTheme.Text3Disabled   : isSocialType //for all disbaled state icon color is same so text3diabeld and then for type socila icon color is defualt when exported the svg color  and  for type secondary icon color is different then other so handling 
  ? undefined : Customtype === "secondary" ? currentTheme.Text3Subtitle : "#FFFFFF";
  const iconSize = customSize?.iconSize || 20;
  const StyledIcon = ({ icon }: { icon: React.ReactNode }) => {
    const iconStyle = {
      width: iconSize,
      height: iconSize,
      fill: iconColor,
      color: iconColor,
      flexShrink: 0,
    };
    if (React.isValidElement(icon)) {
      const existingStyle = (icon.props as any).style || {};
      return React.cloneElement(icon as React.ReactElement<any>, {
        style: { ...iconStyle, ...existingStyle },
      });
    }
    return <span style={iconStyle}>{icon}</span>;
  };

  const button = (
    <AntButton
    type={props.type?props.type:"primary"}//type provided as if not type given it is priamry as we have default primary prop if the type of pther proivded it takes that and config token is not applied 
      style={{
        ...buttonStyle,
      }}
      {...props}
    >
      {!props.loading && leftIcon && <StyledIcon icon={leftIcon} />}
      {props.children}
      {!props.loading && rightIcon && <StyledIcon icon={rightIcon} />}
    </AntButton>
  );
  return (
    <ConfigProvider
      theme={{
        token: {
        },
        components: {
          Button: {
            colorPrimary: colorPrimary.default,
            colorPrimaryHover: colorPrimary.hover,
            colorPrimaryActive: colorPrimary.default,
            colorBorder: "none",
            colorPrimaryBorder:colorPrimary.focus,
            colorTextDisabled: currentTheme.Text3Disabled,
            colorBgContainerDisabled: currentTheme.Bg2Hover,
            colorTextLightSolid:colorPrimary.textcolor,
            borderRadius: 8,
            marginXS:6,
            fontWeight: customSize?.fontWeight,
            contentFontSize: customSize?.fontSize ,
            contentLineHeight: customSize?.lineheight,
            controlHeight: customSize?.height,
            paddingInline: finalPaddingX,
            primaryShadow: "none",
            opacityLoading:1,
          },
        },
      }}
    >
      {button}
    </ConfigProvider>
  );
};
export default Button;
