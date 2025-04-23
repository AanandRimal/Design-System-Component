import React from "react";
import {
  ConfigProvider,
  Select as AntSelect,
  SelectProps as AntSelectProps,
} from "antd";
import { useTheme } from "../../context-hook/ThemeProvider";
import { Sizes, Themes } from "../foundation/Theme";

type CustomSize = keyof typeof Sizes;

interface CustomOption {
  value: string;
  label: string;
  img?: string;
}

interface SelectProps extends AntSelectProps {
  customSize?: CustomSize;
  options?: CustomOption[];
  selectPlaceholder?: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({
  status,
  customSize = 36,
  options,
  ...props
}) => {
  const { themeMode } = useTheme();
  const isError = status === "error";
  const currentTheme = Themes[themeMode];
  const borderColor = currentTheme.stroke.strong;
  const placeholderTextColor = isError
    ? currentTheme.text.t2Component
    : currentTheme.text.t3Disabled;

  const customSizeKey = Sizes[customSize as CustomSize] || Sizes[40];

  return (
    <ConfigProvider
      theme={{
        token: {},
        components: {
          Select: {
            activeBorderColor: currentTheme.primary.stroke,
            colorText: currentTheme.text.t2Component,
            colorTextPlaceholder: placeholderTextColor,
            controlHeightLG: customSizeKey.height,
            borderRadiusLG: 10,
            fontSizeLG: customSizeKey.fontSize,
            colorBorder: borderColor,
            paddingLG: customSizeKey.paddingX,
            controlPaddingHorizontal: customSizeKey.paddingY,
            colorErrorBorderHover: currentTheme.destructive.stroke,
            colorBgContainer: currentTheme.background.bg1,
            colorBgElevated: currentTheme.background.bg1,
            optionSelectedBg: currentTheme.background.bg1,
            activeOutlineColor: currentTheme.primary.focus,
            hoverBorderColor: "none",
            colorTextQuaternary: currentTheme.text.t3Disabled,
            colorBgContainerDisabled: currentTheme.background.bg2Hover,
            colorIcon: currentTheme.text.t3Subtitle,
          },
        },
      }}
    >
      <AntSelect
        labelInValue
        size="large"
        status={isError ? "error" : undefined}
        options={options}
        placeholder={props.selectPlaceholder}
        optionRender={(option) => (
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {option.data.img && (
              <img
                src={option.data.img}
                alt="option img"
                style={{ width: 20, height: 13.1, borderRadius: "10%" }}
              />
            )}
            <span>{option.label}</span>
          </div>
        )}
        labelRender={(selected) => {
          const selectedOption = options?.find(
            (option) => option.value === selected.value
          );
          if (selected.label) {
            return (
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {selectedOption?.img && (
                  <img
                    src={selectedOption.img}
                    alt={selectedOption.label}
                    style={{ width: 20, height: 13.1, borderRadius: "10%" }}
                  />
                )}
                <span>{selectedOption?.label}</span>
              </div>
            );
          }
          return null;
        }}
        {...props}
      />
    </ConfigProvider>
  );
};
export type { SelectProps };
export default Select;
