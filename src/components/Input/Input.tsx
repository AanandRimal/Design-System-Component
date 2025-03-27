import {
  ConfigProvider,
  Input as AntInput,
  InputProps as AntInputProps,
  Select as AntSelect,
  SelectProps as AntSelectProps,} from "antd";
import CardInput from "./CardInput";
import { Sizes,Themes } from "../Foundation/theme";
import SearchIcon from "../Icon/SearchIcon";
import { useTheme } from "../../contexthook/ThemeProvider";
type AntSize = "small" | "middle" | "large";
type CustomSize = keyof typeof Sizes;
type ExtendedSize = AntSize | CustomSize;
interface CustomOption {
  value: string;
  label: string;
  img?: string; 
}
interface CustomComponentProps extends Omit<AntInputProps & AntSelectProps, "size"> {
  size?: ExtendedSize;
  type?: "text" | "password" | "search" | "textarea" | "otp" | "select"|"card";
  autoSize?: boolean | { minRows?: number; maxRows?: number };
  options?:  CustomOption[];
}
const antSizeMapping: AntSize[] = ["small", "middle", "large"];
const Input: React.FC<CustomComponentProps> = ({
  size = "large",
  type = "text",
  status,
  autoSize,
  options,
  ...props
}) => {
  const { themeMode } = useTheme();
  const isError = status === "error";
  const currentTheme=Themes[themeMode];
  const isAntDSize = antSizeMapping.includes(size as AntSize);
  const borderColor = currentTheme.stroke.strong;
  const placeholderTextColor = isError ? currentTheme.Text2Component : currentTheme.Text3Disabled;
  const customSize = Sizes[size as CustomSize] || Sizes[40];
console.log(customSize);
  return (
    <ConfigProvider
      theme={{
        token: {
          // controlHeightSM: customSize?.height,
          borderRadius: 8,
        },
        components: {
          Input: {
            colorIcon: currentTheme.Text3Disabled,
            activeShadow:  `0 0 0 4px ${currentTheme.primary.focus}`,
            colorError: currentTheme.destructive.stroke,
            colorErrorBorderHover: currentTheme.destructive.stroke,
            colorBorder: borderColor,
            activeBorderColor: currentTheme.primary.stroke,
            colorText: currentTheme.Text2Component,
            colorTextPlaceholder: placeholderTextColor,
            hoverBorderColor: "none",
            colorBgContainer:currentTheme.Bg1,
            colorBgContainerDisabled: currentTheme.Bg2Hover,
            colorTextDisabled: currentTheme.Text3Disabled,
            inputFontSizeLG: customSize?.fontSize,
            paddingBlockLG: customSize?.paddingY,
            paddingInlineLG: customSize?.paddingX,
            controlHeightLG: customSize?.height,
            borderRadiusLG: 8,
          },
          Select: {
            activeBorderColor:currentTheme.primary.stroke,
            colorText:currentTheme.Text2Component,
            colorTextPlaceholder: placeholderTextColor,
            controlHeightLG: customSize?.height,
            borderRadiusLG: 10,
            colorBorder:borderColor,
            paddingLG: customSize?.paddingX,
            controlPaddingHorizontal:customSize?.paddingY,
            colorErrorBorderHover: currentTheme.destructive.stroke,
            colorBgContainer:currentTheme.Bg1,
            colorBgElevated:currentTheme.Bg1,
            optionSelectedBg:currentTheme.Bg1,
            // lineHeight:customSize?.lineheight,
            // paddingInlineSM: customSize?.paddingX,
            activeOutlineColor:  currentTheme.primary.focus,
            hoverBorderColor: "none",
            boxShadowSecondary:  `0 0 0 4px ${currentTheme.primary.focus}`,
            colorTextQuaternary:currentTheme.Text3Disabled,
            colorBgContainerDisabled: currentTheme.Bg2Hover,
            // showArrowPaddingInlineEnd: ,
          },
        },
      }}
    >
      {type === "select" ? (
        <AntSelect
  labelInValue
  size={isAntDSize ? (size as AntSize) : "large"}
  status={isError ? "error" : undefined}
  defaultValue={{ value: "us", label: "Textplaceholder" }}
  options={options}
  optionRender={(option) => (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      {option.data.img && (
        <img
          src={option.data.img}
          alt="option img"
          style={{ width: 20, height: 13.1, borderRadius: "10%" }}
        />
      )}
      <span >{option.label}</span>
    </div>
  )}
  labelRender={(selected) => {
    const selectedOption = options?.find(option => option.value === selected.value);
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {selectedOption?.img && (
          <img
            src={selectedOption.img}
            alt={selectedOption.label}
            style={{ width: 20, height: 13.1, borderRadius: "10%" }}
          />
        )}
        <span> {selectedOption?.label}</span>
      </div>
    );
  }}
  {...(props as AntSelectProps)}
/>
      ) : type === "password" ? (
        <AntInput.Password
        size={isAntDSize ? (size as AntSize) : "large"}
          status={isError ? "error" : undefined}
          {...props}
        />
      ): type === "card" ? (
        <CardInput
          size={isAntDSize ? (size as AntSize) : undefined}
          status={isError ? "error" : undefined}
          {...props}
        />
      ) : type === "search" ? (
        <AntInput
          size={isAntDSize ? (size as AntSize) : "large"}
          status={isError ? "error" : undefined}
          prefix={<SearchIcon size={customSize?.iconSize} theme={themeMode} />}
          {...props}
        />
      ) : type === "textarea" ? (
        <AntInput.TextArea
          status={isError ? "error" : undefined}
          maxLength={props.maxLength}
          showCount={props.showCount}
          autoSize={autoSize}
        />
      ) : type === "otp" ? (
        <AntInput.OTP
          status={isError ? "error" : undefined}
          inputMode="numeric"
          maxLength={6}
          pattern="[0-9]*"
          {...(props as Omit<typeof props, "defaultValue" | "prefix" | "onChange" | "onInput">)}
        />
      ) : (
        <AntInput
          size={isAntDSize ? (size as AntSize) : "large"}
          status={isError ? "error" : undefined}
          {...props}
        />
      )}
    </ConfigProvider>
  );
};
export  type {CustomComponentProps} ;
export default Input;
