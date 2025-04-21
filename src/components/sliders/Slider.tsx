import React from 'react';
import { Slider as AntSlider, ConfigProvider, SliderSingleProps as AntSliderSingleProps, } from 'antd';
import { useTheme } from '../../context-hook/ThemeProvider';
import { Themes } from '../foundation/Theme';

const Slider: React.FC<AntSliderSingleProps> = (props
) => {
    const { themeMode } = useTheme();
    const currentTheme = Themes[themeMode];
  return (
    <ConfigProvider 
    theme={{
         token: {
    },
    components: {
      Slider: {
        railSize: 6,
        handleSize: 12,
        handleColor:"#00000014",
        handleActiveColor:currentTheme.primary.default,
        trackHoverBg:currentTheme.primary.hover,
        railHoverBg:currentTheme.background.bg3,
        railBg:currentTheme.background.bg3,
        trackBg: currentTheme.primary.default,
        handleLineWidth:0.5   
      },
    },
}
  }
>
      <AntSlider {...props} />
    </ConfigProvider>
  );
};

export default Slider;
