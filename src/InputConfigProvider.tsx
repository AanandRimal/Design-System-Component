import { ConfigProvider } from "antd";
import { Sizes } from "./theme";

type AntSize = "small" | "middle" | "large";
type CustomSize = keyof typeof Sizes;
type ExtendedSize = AntSize | CustomSize;

interface InputConfigProviderProps {
  size?: ExtendedSize;
  status?: "error" | "warning" | undefined;
  disabled?: boolean;
  children: React.ReactNode;
}

const InputConfigProvider: React.FC<InputConfigProviderProps> = ({
  size = "small", // Default to AntD's "small"
  status,
  disabled,
  children,
}) => {
  const isAntSize = ["small", "middle", "large"].includes(size as AntSize);
  const customSize = !isAntSize ? Sizes[size as CustomSize] : undefined;

  // Conditional Styles
  const isError = status === "error";
  const placeholderTextColor = isError ? "#09090B" : "#9C9CAA";
  const borderColor = isError ? "#FF8588" : "#E3E3E8";

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            // Only apply custom size if it's NOT one of AntD's default sizes
            controlHeightSM: customSize?.height,
            inputFontSizeSM: customSize?.fontSize,
            paddingBlockSM: customSize?.paddingY,
            paddingInlineSM: customSize?.paddingX,

            // Shared styling
            colorIcon: "#9C9CAA",
            activeShadow: "transparent",
            activeBorderColor: "transparent",
            colorError: "#FF8588",
            colorErrorBorderHover: "#FF8588",
            colorBorder: borderColor,
            colorTextPlaceholder: placeholderTextColor,
            hoverBorderColor: "transparent",
            colorBgContainerDisabled: "#F9F9FA",
            colorTextDisabled: disabled ? "#9C9CAA" : undefined,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default InputConfigProvider;
