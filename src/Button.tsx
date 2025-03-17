import React from "react";
import { ConfigProvider, Button as AntButton } from "antd";
import { Themes, Sizes ,socialSizePadding} from "./theme";
import { useTheme } from "./ThemeProvider";
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
const antSizeMapping: AntButtonProps["size"][] = ["small", "large"];

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
  const colorPrimary = (Themes[themeMode] as any)[type as CustomButtonType] || Themes[themeMode]?.secondary;
  const customSize = !isAntDSize && size ? Sizes[size as CustomSize] : undefined;
  const isSocialType = type === "social";
  const socialPadding = isSocialType ? socialSizePadding[size as number] : undefined;
  const finalPaddingY = isSocialType ? socialPadding?.paddingY : customSize?.paddingY;
  const finalPaddingX = isSocialType ? socialPadding?.paddingX : customSize?.paddingX;
  const lineheight = customSize?.lineheight ?? 16;

  const buttonStyle: React.CSSProperties = {
    color:( type ===  "secondary" || type === "social") && !disabled && !loading ? "#3D3D48" : undefined,
    borderColor: type === "secondary" ||"social" ? "#E3E3E8" : undefined,
    ...(loading && {
      backgroundColor: "#F9F9FA",
      color: "#9C9CAA",
    }),
  };

  const iconColor = disabled ? "#9C9CAA" : type === "secondary" ? "#6C6C7F" : "#FFFFFF";
  const iconSize = customSize?.iconSize || 20;
  const StyledIcon = ({ icon }: { icon: React.ReactNode }) => {
    const iconStyle = {
      width: iconSize,
      height: iconSize,
      stroke: iconColor,
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
      size={isAntDSize ? (size as AntButtonProps["size"]) : undefined}
      loading={loading}
      disabled={disabled}
      className={loading ? "custom-loading" : ""}
      style={{
        ...buttonStyle,
        gap: "6px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
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
        token: {},
        components: {
          Button: {
            colorPrimary: colorPrimary.default,
            colorPrimaryHover: colorPrimary.hover,
            colorPrimaryActive: colorPrimary.default,
            colorBorder: "none",
            colorTextDisabled: "#9C9CAA",
            colorBgContainerDisabled: "#F9F9FA",
            borderRadius: 8,
            fontWeight: customSize?.fontWeight,
            contentFontSize: customSize?.fontSize ,
            contentLineHeight: customSize?.lineheight,
            controlHeight: customSize?.height,
            paddingBlock: customSize?.paddingY,
            paddingInline: finalPaddingX,
            primaryShadow: "none",
          },
        },
      }}
    >
      {button}
    </ConfigProvider>
  );
};

export default Button;
