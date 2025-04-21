
import { Themes } from "../foundation/Theme";
export const getNeutralTheme = (themeMode: keyof typeof Themes) => {
  const currentTheme = Themes[themeMode];
  return {
    default: currentTheme.text.t1Title,
    focus:currentTheme.fill.f3,
    dark: currentTheme.text.t3Subtitle,
    textcolor: currentTheme.text.t3Disabled,

  };
};
