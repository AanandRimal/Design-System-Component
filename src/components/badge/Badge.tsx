import React from 'react';
import { Themes} from "../foundation/Theme";
import { badgeSizes } from './BadgeSizes';
import { useTheme } from "../../contexthook/ThemeProvider";
type CustomStatus = 'success' | 'warning' | 'destructive' | 'info' | 'primary' ;
interface BadgeProps {
  size?: number;
  type?: 'solid' | 'filled' | 'stroke';
  status?: CustomStatus;
  icon?: React.ReactNode;
  dot?: boolean; 
  children?: React.ReactNode;
}
const Badge: React.FC<BadgeProps> = ({ size = 32, type = 'stroke', status = 'primary', icon, dot = false, children }) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];
  const themeStatus = currentTheme[status];
  const sizeConfig = badgeSizes[size] || badgeSizes[20];
  const bgColor =
    type === 'solid' ? themeStatus?.default ?? 'transparent' :
    type === 'filled' ? themeStatus?.focus ?? 'transparent' :
    'transparent';
  const borderColor = type === 'stroke' ? currentTheme.stroke.strong : 'transparent';
  const textColor =
    type === 'stroke' ? currentTheme?.text.t2Component :
    type === 'solid' ? currentTheme.text.staticWhite :
    themeStatus?.dark ?? 'inherit';
  const iconStyles = { color: type === 'solid' ? currentTheme.text.staticWhite : themeStatus?.default ?? 'inherit' };
  const dotStyles = {
    width: 6,
    height: 6,
    borderRadius: '50%',
    backgroundColor: type === 'solid' ?  currentTheme.text.staticWhite:themeStatus?.default ?? 'inherit',
    marginRight: 4,
  };

  return (
    <div
    className={`inline-flex items-center justify-center border rounded-full  
      ${type === 'solid' ? 'text-small-semibold font-semibold' : 'text-x-small-medium font-medium'}`}    
      style={{
        backgroundColor: bgColor,
        borderColor,
        height: sizeConfig.height,
        padding: `${sizeConfig.paddingY}px ${sizeConfig.paddingX}px`,
        display: 'inline-flex',
        alignItems: 'center',
        borderRadius: size=== 20 ? "4px" : "6px",
      }}
    >
      {icon ? (
        <span style={{ ...iconStyles, fontSize: sizeConfig.iconSize, marginRight: 4 }}>{icon}</span>
      ) : dot ? (
        <span style={dotStyles}></span>
      ) : null}
      <span style={{ color: textColor }}>{children}</span>
    </div>
  );
};

export default Badge;
