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
import { Sizes } from "./theme";
import SearchIcon from "./SearchIcon";
import { useTheme } from "./ThemeProvider";

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
  type?: "text" | "password" | "search" | "textarea" | "otp" | "select";
  autoSize?: boolean | { minRows?: number; maxRows?: number };
  options?:  CustomOption[];
}

const antSizeMapping: AntSize[] = ["small", "middle", "large"];

const Input: React.FC<CustomComponentProps> = ({
  size = "small",
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
  const isAntDSize = antSizeMapping.includes(size as AntSize);
  const borderColor = "#E3E3E8";
  const placeholderTextColor = isError ? "#09090B" : "#9C9CAA";
  const customSize = !isAntDSize ? Sizes[size as CustomSize] : undefined;

  return (
    <ConfigProvider
      theme={{
        token: {
          controlHeightSM: customSize?.height,
          borderRadius: 8,
        },
        components: {
          Input: {
            colorIcon: "#9C9CAA",
            activeShadow: "transparent",
            activeBorderColor: "transparent",
            colorError: "#FF8588",
            colorErrorBorderHover: "#FF8588",
            colorBorder: borderColor,
            colorTextPlaceholder: placeholderTextColor,
            hoverBorderColor: "transparent",
            colorBgContainerDisabled: "#F9F9FA",
            colorTextDisabled: "#9C9CAA",
            inputFontSizeSM: customSize?.fontSize,
            paddingBlockSM: customSize?.paddingY,
            paddingInlineSM: customSize?.paddingX,
            controlHeightSM: customSize?.height,
            borderRadiusSM: 8,
          },
          Select: {
            activeBorderColor: borderColor,
            colorTextPlaceholder: placeholderTextColor,
            controlHeightSM: customSize?.height,
            borderRadiusSM: 8,
            hoverBorderColor: "transparent",
            showArrowPaddingInlineEnd: 1,
          },
        },
      }}
    >
      {type === "select" ? (
        <AntSelect
  labelInValue
  size={isAntDSize ? (size as AntSize) : "small"}
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
          style={{ width: 16, height: 16, borderRadius: "50%" }}
        />
      )}
      <span>{option.label}</span>
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
            style={{ width: 16, height: 16, borderRadius: "50%" }}
          />
        )}
        <span>{selectedOption?.label}</span>
      </div>
    );
  }}
  {...(props as AntSelectProps)}
/>



      ) : type === "password" ? (
        <AntInput.Password
          size={isAntDSize ? (size as AntSize) : "small"}
          status={isError ? "error" : undefined}
          disabled={disabled}
          value={value}
          placeholder={placeholder}
          {...props}
        />
      ) : type === "search" ? (
        <AntInput
          size={isAntDSize ? (size as AntSize) : "small"}
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
          size={isAntDSize ? (size as AntSize) : "small"}
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

export default Input;
