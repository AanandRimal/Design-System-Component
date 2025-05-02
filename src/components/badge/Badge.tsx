import React from 'react';
import { Themes} from "../foundation/Theme";
import { badgeSizes } from './BadgeSizes';
import { useTheme } from "../../context-hook/ThemeProvider"; 

type CustomStatus = 'success' | 'warning' | 'destructive' | 'info' | 'primary'|'neutral' ; 
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
  const themeTypeKey = (currentTheme as any)[status] || currentTheme.primary;
  const badgeSizeKey = badgeSizes[size] || badgeSizes[20];
  const bgColor =
    type === 'solid' ? status === 'neutral' ? currentTheme.text.t1Title:  themeTypeKey?.default ?? 'transparent' :
    type === 'filled' ? status === 'neutral' ? currentTheme.fill.f2:   themeTypeKey?.focus ?? 'transparent' :
    'transparent';
  const borderColor = type === 'stroke' ? currentTheme.stroke.strong : 'transparent';
  const textColor =
    type === 'stroke' ? currentTheme?.text.t2Component :
    type === 'solid'
    ? (status === 'neutral' ? currentTheme.inverse.inversewhite : currentTheme.text.staticWhite)
    : type ==='filled'    ? (status === 'neutral' ? currentTheme.text.t3Subtitle : themeTypeKey.dark):'inherit'
  
    const iconStyles = {
      color: type === 'solid'
        ? status === "neutral"
        ? currentTheme.text.inverse :currentTheme.text.staticWhite                    
        : status === "neutral"
          ? currentTheme.text.t3Disabled                     
          : themeTypeKey?.default ?? 'inherit'              
    };
    
  const dotStyles = {
    width: 6,
    height: 6,
    borderRadius: '50%',
    backgroundColor: type === 'solid' ?  status === "neutral"
    ? currentTheme.text.inverse: currentTheme.text.staticWhite :   status === "neutral"
    ? currentTheme.text.t3Disabled : themeTypeKey?.default ?? 'inherit',
    display:"flex",
    alignItems:"center",
    paddingLeft: 2,
  };

  return (
    <div
    className={`inline-flex items-center justify-center border rounded-full   
      ${type === 'solid' ?  'font-semibold' : 'font-medium'}`}    
      style={{
        backgroundColor: bgColor,
        borderColor,
        height: badgeSizeKey.height,
        padding: `${badgeSizeKey.paddingY}px ${badgeSizeKey.paddingX}px`,
        borderRadius: `${badgeSizeKey.borderadius}px`,
        // lineHeight:"18px", // because of lineheightt icon adn label is not laigned  ********* PREVIOUSLY AVATR WAS MISLAIGNED AS I CHEANGED AVATR COMPONET AND ADDED BLOCK LEVEL DIV SO BECUASE OF IT IT WAS SLIGHTTLY LOWER SO I DID DEFUALT AVATAR WITH BADGEOFFSET AND CANCELD WRAPPED 
        fontSize: badgeSizeKey.fontSize,

      }}
    >
{(icon || dot || children) && (
  <div className="flex items-center" style={{ gap: "2px" }}>
    {icon ? (
      <span style={{ ...iconStyles, display: 'flex', alignItems: 'center' }}>{icon}</span>
    ) : dot ? (
      <span style={dotStyles}></span>
    ) : null}
    {children && (
      <span style={{ color: textColor, paddingInline: 2 }}>{children}</span>
    )}
  </div>
)}
</div>
  );
};

export default Badge;
