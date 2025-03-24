// import {
//   ConfigProvider,
//   Input as AntInput,
//   InputProps as AntInputProps,
// } from "antd";
// import { Sizes, Themes } from "./theme";
// import SearchIcon from "./SearchIcon";
// import { useTheme } from "./ThemeProvider";

// type AntSize = "small" | "middle" | "large";
// type CustomSize = keyof typeof Sizes;
// type ExtendedSize = AntSize | CustomSize;

// interface CustomInputProps extends Omit<AntInputProps, "size"> {
//   size?: ExtendedSize;
//   type?: "text" | "password" | "search" | "textarea" |"otp";
//   autoSize?: boolean | { minRows?: number; maxRows?: number }; 
// }

// const antSizeMapping: AntSize[] = ["small", "middle", "large"];

// const Input: React.FC<CustomInputProps> = ({
//   size = "small",
//   status,
//   disabled,
//   value,
//   placeholder,
//   type = "text",
//   autoSize, 
//   ...props
// }) => {
//   const { themeMode } = useTheme();
//   const isError = status === "error";
//   const isAntDSize = antSizeMapping.includes(size as AntSize);
//   const borderColor = "#E3E3E8";
//   const placeholderTextColor = isError ? "#09090B" : "#9C9CAA";
//   const customSize = !isAntDSize ? Sizes[size as CustomSize] : undefined;

//   return (
//     <ConfigProvider
//       theme={{
//         token: {
//           controlHeightSM: customSize?.height,
//           "borderRadius":8
          
//         },
//         components: {
//           Input: {
//             colorIcon: "#9C9CAA",
//             activeShadow: "transparent",
//             activeBorderColor: "transparent",
//             colorError: "#FF8588",
//             colorErrorBorderHover: "#FF8588",
//             colorBorder: borderColor,
//             colorTextPlaceholder: placeholderTextColor,
//             hoverBorderColor: "transparent",
//             colorBgContainerDisabled: "#F9F9FA",
//             colorTextDisabled: "#9C9CAA",
//             inputFontSizeSM: customSize?.fontSize,
//             paddingBlockSM: customSize?.paddingY,
//             paddingInlineSM: customSize?.paddingX,
//             controlHeightSM: customSize?.height,
//             "borderRadiusSM":8
           
//           },
//         },
//       }}
//     >
//       {type === "password" ? (
//         <AntInput.Password
//           size={isAntDSize ? (size as AntSize) : "small"}
//           status={isError ? "error" : undefined}
//           disabled={disabled}
//           value={value}
//           placeholder={placeholder}
//           {...props}
//         />
//       ) : type === "search" ? (
//         <AntInput
//           size={isAntDSize ? (size as AntSize) : "small"}
//           status={isError ? "error" : undefined}
//           disabled={disabled}
//           value={value}
//           placeholder={placeholder}
//           prefix={<SearchIcon size={customSize?.iconSize} theme={themeMode} />}
//           {...props}
//         />
//       ) : type === "textarea" ? (
//         <AntInput.TextArea
//           status={isError ? "error" : undefined}
//           disabled={disabled}
//           value={value}
//           placeholder={placeholder}
//           maxLength={props.maxLength}
//           showCount={props.showCount}
//           autoSize={autoSize} 
      
//         />
//       ) : type === "otp" ? ( 
//         <AntInput.OTP
//           status={isError ? "error" : undefined}
//           disabled={disabled}
//           inputMode="numeric" 
//           maxLength={6} 
//           pattern="[0-9]*"
//             {...(props as Omit<typeof props, "defaultValue" | "prefix" | "onChange" |"onInput">)} 
//         />
//       ) : (
//         <AntInput
//           size={isAntDSize ? (size as AntSize) : "small"}
//           status={isError ? "error" : undefined}
//           disabled={disabled}
//           value={value}
//           placeholder={placeholder}
//           {...props}
//         />
//       )}
//     </ConfigProvider>
//   );
// };

// export default Input;
import {
  ConfigProvider,
  Input as AntInput,
  InputProps as AntInputProps,
  Select as AntSelect,
  SelectProps as AntSelectProps,
} from "antd";
import CardInput from "./CardInput";
import { Sizes,Themes } from "../Foundation/theme";
import SearchIcon from "../Icon/SearchIcon";
import { useTheme } from "../../ThemeProvider";
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
  status,
  disabled,
  value,
  placeholder,
  type = "text",
  autoSize,
  options,
  defaultValue,
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
  disabled={disabled}
  placeholder={placeholder} 
  defaultValue={{ value: "us", label: "Textplaceholder" }}
  options={options}
  optionRender={(option) => (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      {option.data.img && (
        <img
          src={option.data.img}
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
          disabled={disabled}
          value={value}
          placeholder={placeholder}
          {...props}
        />
      ): type === "card" ? (
        <CardInput
          size={isAntDSize ? (size as AntSize) : undefined}
          disabled={disabled}
          status={isError ? "error" : undefined}
          placeholder={placeholder}
          {...props}
        />
      ) : type === "search" ? (
        <AntInput
          size={isAntDSize ? (size as AntSize) : "large"}
          status={isError ? "error" : undefined}
          disabled={disabled}
          value={value}
          placeholder={placeholder}
          prefix={<SearchIcon size={customSize?.iconSize} theme={themeMode} />}
          {...props}
        />
      ) : type === "textarea" ? (
        <AntInput.TextArea
          status={isError ? "error" : undefined}
          disabled={disabled}
          value={value}
          placeholder={placeholder}
          maxLength={props.maxLength}
          showCount={props.showCount}
          autoSize={autoSize}
        />
      ) : type === "otp" ? (
        <AntInput.OTP
          status={isError ? "error" : undefined}
          disabled={disabled}
          inputMode="numeric"
          maxLength={6}
          pattern="[0-9]*"
          {...(props as Omit<typeof props, "defaultValue" | "prefix" | "onChange" | "onInput">)}
        />
      ) : (
        <AntInput
          size={isAntDSize ? (size as AntSize) : "large"}
          status={isError ? "error" : undefined}
          disabled={disabled}
          value={value}
          placeholder={placeholder}
          {...props}
        />
      )}
    </ConfigProvider>
  );
};
export  type {CustomComponentProps} ;
export default Input;
