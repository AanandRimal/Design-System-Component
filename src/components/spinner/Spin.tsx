import React from "react";
import { ConfigProvider, Spin as AntSpin, SpinProps } from "antd";
import { useTheme } from "../../contexthook/ThemeProvider";
import { Themes } from "../foundation/Theme";

interface CustomSpinProps extends SpinProps {
  customSize?: number;
}

const Spin: React.FC<CustomSpinProps> = ({ customSize, ...props }) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];
  const spinsize = customSize ||20;

  return (
    <ConfigProvider
      theme={{
        components: {
          Spin: {
            colorPrimary: currentTheme.primary.default,
            colorFillSecondary: currentTheme.stroke.strong,
            dotSize: spinsize,
          },
        },
      }}
    >
      <AntSpin {...props} />
    </ConfigProvider>
  );
};

export default Spin;
