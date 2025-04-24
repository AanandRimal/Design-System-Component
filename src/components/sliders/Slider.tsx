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
        handleColor:currentTheme.primary.default,
        handleActiveColor:currentTheme.primary.default,
        trackHoverBg:currentTheme.primary.hover,
        colorPrimaryBorderHover:currentTheme.primary.default,
        railHoverBg:currentTheme.fill.f3,
        railBg:currentTheme.fill.f3,
        trackBg: currentTheme.primary.default,
        handleLineWidth:1.5   
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
