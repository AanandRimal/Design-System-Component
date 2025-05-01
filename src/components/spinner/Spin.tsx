import React from "react";
import { ConfigProvider, Spin as AntSpin, SpinProps } from "antd";
import { useTheme } from "../../context-hook/ThemeProvider";
import { Themes } from "../foundation/Theme";

interface CustomSpinProps extends SpinProps {
  customSize?: 20|24|36|40;
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
