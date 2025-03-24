import React from "react";
import { ConfigProvider, Button as AntButton } from "antd";
import { Themes, Sizes ,socialSizePadding} from "../Foundation/theme";
import { useTheme } from "../../ThemeProvider";
import { ButtonProps as AntButtonProps } from "antd/lib/button";
type CustomButtonType = "secondary" | "success" | "info" | "destructive" | "warning" | "social";
type ExtendedButtonType = AntButtonProps["type"] | CustomButtonType;
type CustomSize = keyof typeof Sizes;
type ExtendedSize = AntButtonProps["size"] | CustomSize;
interface ButtonProps extends Omit<AntButtonProps, "type" | "size" | "icon"> {
  type?: ExtendedButtonType;
  size?: ExtendedSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
const antSupportedTypes: AntButtonProps["type"][] = ["primary", "default", "dashed", "text", "link"];
const antSizeMapping: AntButtonProps["size"][] = ["small","large"];//defualt not working as middle is passed fomr ant d 
const Button: React.FC<ButtonProps> = ({
  type = "primary",
  size = "default",
  loading,
  disabled,
  children,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const isAntSupportedType = antSupportedTypes.includes(type as AntButtonProps["type"]);
  const isAntDSize = antSizeMapping.includes(size as AntButtonProps["size"]);
  const { themeMode } = useTheme();
  const currentTheme=Themes[themeMode];
  const colorPrimary = (Themes[themeMode] as any)[type as CustomButtonType] || Themes[themeMode]?.secondary;

  const customSize = size && !isAntDSize && Sizes.hasOwnProperty(size as keyof typeof Sizes)
    ? Sizes[size as keyof typeof Sizes]
    : Sizes[32];
  console.log(customSize);
  const isSocialType = type === "social";
  const socialPadding = isSocialType ? socialSizePadding[size as number] : undefined;
  const finalPaddingY = isSocialType ? socialPadding?.paddingY : customSize?.paddingY;
  const finalPaddingX = isSocialType ? socialPadding?.paddingX : customSize?.paddingX;
  const lineheight = customSize?.lineheight ?? 16;
  const buttonStyle: React.CSSProperties = {
    borderColor: (type === "secondary" || type === "social") ? currentTheme.stroke.strong : undefined,
    ...(loading && {
      backgroundColor: currentTheme.Bg2Hover,
      color: currentTheme.Text3Disabled,
    }),
  };
    const iconColor = disabled ? currentTheme.Text3Disabled   : isSocialType //for all disbaled state icon color is same so text3diabeld and then for type socila icon color is defualt when exported and  for type secondary icon color is different then other so handling 
  ? undefined : type === "secondary" ? currentTheme.Text3Subtitle : "#FFFFFF";
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
      type={isAntSupportedType ? (type as AntButtonProps["type"]) : "primary"}
      size={isAntDSize ? (size as AntButtonProps["size"]) : undefined} /// undeifned gave me error
      loading={loading}
      disabled={disabled}
      style={{
        ...buttonStyle,
        
        paddingBlock: finalPaddingY,
        lineHeight: `${lineheight / 16}rem`
      }}
      {...props}
    >
      {!loading && leftIcon && <StyledIcon icon={leftIcon} />}
      {children}
      {!loading && rightIcon && <StyledIcon icon={rightIcon} />}
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
