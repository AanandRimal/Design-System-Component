import { ConfigProvider } from "antd";
import { useTheme } from "../../context-hook/ThemeProvider";
import { Sizes, Themes } from "../foundation/Theme";
interface InputConfigProviderProps {
    CustomSize?: keyof typeof Sizes // Size is optional and should be a number
    children: React.ReactNode; // Children should be a valid React node
  }
  

  const InputConfigProvider: React.FC<InputConfigProviderProps> = ({ CustomSize = 40, children }) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];
  const customSize = Sizes[CustomSize as any] || Sizes[40];

  return (
    <ConfigProvider
      theme={{
        token: { borderRadius: 8 },
        components: {
          Input: {
            colorIcon: currentTheme.text.t3Disabled,
            activeShadow: `0 0 0 4px ${currentTheme.primary.focus}`,
            colorError: currentTheme.destructive.stroke,
            colorErrorBorderHover: currentTheme.destructive.stroke,
            colorBorder: currentTheme.stroke.strong,
            activeBorderColor: currentTheme.primary.stroke,
            colorText: currentTheme.text.t2Component,
            colorTextPlaceholder: currentTheme.text.t3Disabled,
            hoverBorderColor: "none",
            colorBgContainer: currentTheme.background.bg1,
            colorBgContainerDisabled: currentTheme.background.bg2Hover,
            colorTextDisabled: currentTheme.text.t3Disabled,
            inputFontSizeLG: customSize?.fontSize,
            paddingBlockLG: customSize?.paddingY,
            paddingInlineLG: customSize?.paddingX,
            controlHeightLG: customSize?.height,
            borderRadiusLG: 8,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default InputConfigProvider;
