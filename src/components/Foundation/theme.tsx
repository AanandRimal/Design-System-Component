interface ThemeColor {
  default?: string;
  hover?: string;
  focus?: string;
  accentBg?: string;
  stroke?: string;
  dark?: string;
  textcolor?:string;
  strong?: string; 
  decorative?: string; 
}
  
  interface ThemeType {
    primary: ThemeColor;
    secondary: ThemeColor;
    success: ThemeColor;
    destructive: ThemeColor;
    info: ThemeColor;
    warning: ThemeColor;
    stroke: Partial<Pick<ThemeColor, 'strong' | 'decorative'>>;
    background: string;
    text: string;
    Bg1: string;
    Bg2:string;
    Bg2Hover: string;
    Bg3: string;
    Bg4: string;
    Bg5:string;
    Bg5TableActive: string;
    Inverse: string;
    TabBg: string;
    Text1Title: string;
    Text2Subtitle: string;
    Text2Component:string;
    Text3Subtitle:string;
    Text3Disabled: string;
    InverseText: string;
    StaticWhite: string;
  }
  
  const colors: Record<string, Record<number, string>> = { primary: {
    50: "#F9F5FF", 100: "#F0E5FF", 200: "#E7D6FF", 300: "#D5B8FF",
    400: "#B885FF", 500: "#A05CFF", 600: "#893BF7", 700: "#731DED",
    800: "#6322BF", 900: "#492183", 950: "#281641",
  },
  green: {
    50: "#F5FFF8", 100: "#E5FFEF", 200: "#CCFFDF", 300: "#99FFBE",
    400: "#6EF790", 500: "#1AE561", 600: "#15C14F", 700: "#09AE43",
    800: "#157939", 900: "#194D2C", 950: "#0F2E1A",
  },
  red: {
    50: "#FFF5F5", 100: "#FFE5E6", 200: "#FFD6D7", 300: "#FFB8BA",
    400: "#FF8588", 500: "#F65055", 600: "#DD4145", 700: "#CF252A",
    800: "#AD1F23", 900: "#8A191C", 950: "#4A0D0F",
  },
  grey: {
    50: "#F9F9FA",
    100: "#F4F4F6",
    200: "#E3E3E8",
    300: "#D3D3DA",
    400: "#9C9CAA",
    500: "#6C6C7F",
    600: "#50505E",
    700: "#3D3D48",
    800: "#26262C",
    900: "#17171C",
    950: "#09090B",
  },
  blue:{
    50:"#F5FAFF",
    100:"#E5F2FF",
    200:"#D6EAFF",
    300:"#B8DAFF",
    400:"#85BFFF",
    500:"#479FFF",
    600:"#3891F0",
    700:"#007AFF",
    800:"#006BE0",
    900:"#004EA3",
    950:"#003166",
 },
 orange:{
  50:"#FFFBF5",
  100:"#FFF4E5",
  200:"#FFEED6",
  300:"#FFE1B8",
  400:"#FFCC85",
  500:"#FFB247",
  600:"#F4A433",
  700:"#FF9500",
  800:"#E08300",
  900:"#A35F00",
  950:"#663C00",
}, };
  
  const Themes: Record<string, ThemeType> = {
    light: {
      primary: { 
        default: colors.primary[700], hover: colors.primary[600], focus: colors.primary[100],
        accentBg: colors.primary[200], stroke: colors.primary[400], dark: colors.primary[900],textcolor:"#FFFFFF"
      },
      secondary: { 
        default: "#FFFFFF", hover: "#F9F9FA", focus: "#F4F4F6",
        accentBg: "#E3E3E8", stroke: "#D3D3DA", dark: "#3D3D48",textcolor:colors.grey[700]
      },
      stroke: { 
        strong: colors.grey[200], decorative: colors.grey[100]
      },
      success: { 
        default: colors.green[700], hover: colors.green[600], focus: colors.green[100],
        accentBg: colors.green[200], stroke: colors.green[400], dark: colors.green[900],textcolor:"#FFFFFF"
      },
      destructive: { 
        default: colors.red[700], hover: colors.red[600], focus: colors.red[100],
        accentBg: colors.red[200], stroke: colors.red[400], dark: colors.red[900],textcolor:"#FFFFFF"
      },
      info: { 
        default: colors.blue[700], hover: colors.blue[600], focus: colors.blue[100],
        accentBg: colors.blue[200], stroke: colors.blue[400], dark: colors.blue[900],textcolor:"#FFFFFF"
      },
      warning: { 
        default: colors.orange[700], hover: colors.orange[600], focus: colors.orange[100],
        accentBg: colors.orange[200], stroke: colors.orange[400], dark: colors.orange[900],textcolor:"#FFFFFF"
      },
      background: "#FFFFFF",
      text: "#09090B",
      Bg1: colors.grey[50], 
      Bg2Hover: colors.grey[50], 
      Bg2:"#FFFFFF",
      Bg3: colors.grey[100], 
      Bg4: colors.grey[200], 
      Bg5:colors.grey[300],
      Bg5TableActive: colors.grey[300], 
      Inverse: colors.grey[950], 
      TabBg: colors.grey[50], 
      Text1Title: colors.grey[950], 
      Text2Subtitle: colors.grey[500], 
      Text2Component:colors.grey[700],
      Text3Subtitle:colors.grey[500],
      Text3Disabled: colors.grey[400], 
      InverseText: "#FFFFFF", 
      StaticWhite: "#FFFFFF",
    },
    dark: {
      primary: { 
        default: colors.primary[600], hover: colors.primary[500], focus: colors.primary[950],
        accentBg: colors.primary[950], stroke: colors.primary[600], dark: colors.primary[500],textcolor:"#FFFFFF"
      },
      secondary: { 
        default: colors.grey[950], hover: colors.grey[900], focus: "#17171C",
        accentBg: "#17171C", stroke: "#50505E", dark: "#26262C",textcolor:colors.grey[300]
      },
      stroke: { 
        strong: colors.grey[800], decorative: colors.grey[800],
      },
      success: { 
        default: colors.green[600], hover: colors.green[500], focus: colors.green[950],
        accentBg: colors.green[950], stroke: colors.green[600], dark: colors.green[500],textcolor:"#FFFFFF"
      },
      destructive: { 
        default: colors.red[600], hover: colors.red[500], focus: colors.red[950],
        accentBg: colors.red[950], stroke: colors.red[600], dark: colors.red[500],textcolor:"#FFFFFF"
      },
      info: { 
        default: colors.blue[600], hover: colors.blue[500], focus: colors.blue[950],
        accentBg: colors.blue[950], stroke: colors.blue[600], dark: colors.blue[500],textcolor:"#FFFFFF"
      },
      warning: { 
        default: colors.orange[600], hover: colors.orange[500], focus: colors.orange[950],
        accentBg: colors.orange[950], stroke: colors.orange[600], dark: colors.orange[500],textcolor:"#FFFFFF"
      },
      background: "#09090B",
      text: "#FFFFFF",
      Bg1: colors.grey[950], 
      Bg2Hover: colors.grey[900], 
      Bg2:colors.grey[800],
      Bg3: colors.grey[800], 
      Bg4: colors.grey[700], 
      Bg5:colors.grey[600],
      Bg5TableActive: colors.grey[600], 
      Inverse: "#FFFFFF", 
      TabBg: colors.grey[600], 
      Text1Title: colors.grey[100],
      Text2Subtitle: colors.grey[400], 
      Text2Component:colors.grey[300],
      Text3Subtitle:colors.grey[400],
      Text3Disabled: colors.grey[400], 
      InverseText: colors.grey[950], 
      StaticWhite: "#FFFFFF", 
    },
  };
  
  interface SizeType {
    height: number;
    width: string;
    fontSize: number;
    iconSize: number;
    paddingY: number;
    paddingX: number;
    lineheight: number;
    fontWeight: number;
  }
  interface SocialMediaSize{
    paddingY:number | string,
    paddingX:number | string,
  }
  const Sizes: Record<number, SizeType> = {   
  32: { height: 32, width: "auto", fontSize: 14, iconSize: 20, paddingY: 6, paddingX: 10 ,lineheight:20, fontWeight:600, },
  36: { height: 36, width: "auto", fontSize: 14, iconSize: 20, paddingY: 8, paddingX: 12, lineheight:20, fontWeight:600, },
  40: { height: 40, width: "auto", fontSize: 14, iconSize: 20, paddingY: 10, paddingX: 12,lineheight:20, fontWeight:600, },
  44: { height: 44, width: "auto", fontSize: 16, iconSize: 20, paddingY: 12, paddingX: 14,lineheight:24,fontWeight:600, },
  48: { height: 48, width: "auto", fontSize: 16, iconSize: 24, paddingY: 14, paddingX: 14, lineheight:24,fontWeight:600, },  
  };
  const socialSizePadding: Record<number,SocialMediaSize  > = {
    32: { paddingY: 6, paddingX: 12 },
    36: { paddingY: 8, paddingX: 12},
    40: { paddingY: 10, paddingX: 12 },
    44: {paddingY:10,paddingX:14},
    48:{paddingY:12,paddingX:14},

  };
  
  export { Themes, Sizes, colors,socialSizePadding };
  