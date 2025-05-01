interface ThemeColor {
  default?: string;
  hover?: string;
  focus?: string;
  accentBg?: string;
  stroke?: string;
  dark?: string;
  textcolor?: string;
  strong?: string;
  decorative?: string;
}

interface BackgroundColor {
  bg0?: string;
  bg1?: string;
  bg2?: string;
  bg2Hover?: string;
  bg3?: string;
  bg4?: string;
  bg5?: string;
  bg5TableActive?: string;
  inverse?: string;
  tabBg?: string;
}

interface TextColor {
  t1Title?: string;
 t2Subtitle?: string;
  t2Component?: string;
  t3Subtitle?: string;
  t3Disabled?: string;
  inverse?: string;
  staticWhite?: string;
}

interface FillColor {
  f1?: string;
  f2?: string;
  f3?: string;
  f4?:string;
}
interface Inverse{
  inverseblack?:string;
  inversewhite?:string;
}

interface ThemeType {
  primary: ThemeColor;
  neutral: ThemeColor;
  secondary: ThemeColor;
  success: ThemeColor;
  destructive: ThemeColor;
  info: ThemeColor;
  warning: ThemeColor;
  stroke: Partial<Pick<ThemeColor, 'strong' | 'decorative'>>;
  background: BackgroundColor;
  text: TextColor;
  fill: FillColor;
  inverse:Inverse
}

  
  const colors: Record<string, Record<number, string>> = { primary: {
    50: "#F9F5FF", 100: "#F0E5FF", 200: "#E7D6FF", 300: "#D5B8FF",
    400: "#B885FF", 500: "#A05CFF", 600: "#893BF7", 700: "#731DED",
    800: "#6322BF", 900: "#492183", 950: "#281641",
  },
  green: {
    50: "#F6FEF8", 100: "#E6FEEF", 200: "#CFFCDF", 300: "#9EFABF",
    400: "#77EE94", 500: "#21DE64", 600: "#15C14F", 700: "#09AE43",
    800: "#157939", 900: "#194D2C", 950: "#143E22",
  },
  red: {
    50: "#FFF5F5", 100: "#FFE5E6", 200: "#FFD6D7", 300: "#FFB8BA",
    400: "#FF8588", 500: "#F65055", 600: "#DD4145", 700: "#CF252A",
    800: "#AD1F23", 900: "#8A191C", 950: "#570F12",
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
},
ab:{
  2:"	#17171C05",
  4:"#17171C0A",
  6:"#17171C0F",
  8:"#17171C14",
  12:"#17171C1F",
  16:"#17171C29",
},
aw: {
  2: "#FFFFFF05",
  4: "#FFFFFF0A",
  6: "#FFFFFF0F",
  8: "#FFFFFF14",
  12: "#FFFFFF1F",
  16: "#FFFFFF29"
},
};
const bw="#FFFFFF";
const background = {
  bg0: colors.grey[100],
  bg1: bw,
  bg2: bw,
  bg2Hover: colors.grey[50],
  bg3: bw,
  bg4: colors.grey[200],
  bg5: colors.grey[300],
  bg5TableActive: colors.grey[300],
  tabBg: colors.grey[50],
};
const text = {
  t1Title: colors.grey[950],
  t2Subtitle: colors.grey[500],
  t2Component: colors.grey[700],
  t3Subtitle:colors.grey[500],
  t3Disabled: colors.grey[400],
  inverse: bw,
  staticWhite: bw
};
const fill = {
  f1:colors.ab[2],  
  f2:colors.ab[4],
  f3:colors.ab[8],
  f4:colors.ab[16],
};
const stroke = {  
  strong: colors.ab[12],
  decorative: colors.ab[6],
};
const inverse={   
  inverseblack: colors.grey[900],
  inversewhite:bw
};
const darkBackground = {
  bg0: colors.grey[950],
  bg1: colors.grey[900],
  bg2: colors.grey[800],
  bg2Hover: colors.grey[900],
  bg3: colors.grey[700],
  bg4: colors.grey[700],
  bg5: colors.grey[600],
  bg5TableActive: colors.grey[600],
  tabBg: colors.grey[600],
};

const darkText = {
  t1Title: colors.grey[100],
  t2Subtitle: colors.grey[400],
  t2Component: colors.grey[300],
  t3Subtitle: colors.grey[400],
  t3Disabled: colors.grey[400],
  inverse: colors.grey[950],
  staticWhite: bw,
};

const darkFill = {
  f1: colors.aw[2],
  f2: colors.aw[4],
  f3: colors.aw[8],
  f4: colors.aw[16],
};

const darkStroke = {
  strong: colors.aw[12],
  decorative: colors.aw[6],
};

const darkInverse = {
  inverseblack: bw,
  inversewhite: colors.grey[900],
};


  const Themes: Record<string, ThemeType> = {
    light: {
      ...{
        bw,
        background, 
        text,
        fill,
        stroke,
        inverse,
      primary: { 
        default: colors.primary[700], hover: colors.primary[600], focus: colors.primary[100],
        accentBg: colors.primary[200], stroke: colors.primary[400], dark: colors.primary[900],textcolor:"#FFFFFF"
      },
     neutral: { 
       default:text.t3Subtitle,focus: fill.f2, hover: fill.f1, dark:text.t1Title,textcolor:text.t3Subtitle,
    },
      
     secondary: { 
        default:background.bg1 , hover: fill.f2, focus: "#F4F4F6",
        accentBg: "#E3E3E8", stroke: "#D3D3DA", dark: "#3D3D48",textcolor:colors.grey[700]
      },
      success: { 
        default: colors.green[700], hover: colors.green[600], focus: colors.green[100],
        accentBg: colors.green[200], stroke: colors.green[500], dark: colors.green[900],textcolor:"#FFFFFF"
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

    },
    },
    dark: {
      ...{
        bw,
        background: darkBackground,
        text: darkText,
        fill: darkFill,
        stroke: darkStroke,
        inverse:darkInverse,

      primary: { 
        default: colors.primary[600], hover: colors.primary[500], focus: colors.primary[950],
        accentBg: colors.primary[950], stroke: colors.primary[600], dark: colors.primary[500],textcolor:"#FFFFFF"
      },
      neutral: {  
        default: darkText.t3Subtitle, focus: darkFill.f2, hover: darkFill.f1, dark:darkText.t1Title,textcolor:darkText.t3Subtitle
      },
      secondary: { 
        default: darkBackground.bg1, hover: darkFill.f2, focus: "#17171C",
        accentBg: "#17171C", stroke: "#50505E", dark: "#26262C",textcolor:colors.grey[300]
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

 
    },
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

  const Sizes: Record<number, SizeType> = {   
  32: { height: 32, width: "auto", fontSize: 14, iconSize: 20, paddingY: 6, paddingX: 10 ,lineheight:20, fontWeight:600, },
  36: { height: 36, width: "auto", fontSize: 14, iconSize: 20, paddingY: 8, paddingX: 12, lineheight:20, fontWeight:600, },
  40: { height: 40, width: "auto", fontSize: 14, iconSize: 20, paddingY: 10, paddingX: 12,lineheight:20, fontWeight:600, },
  44: { height: 44, width: "auto", fontSize: 16, iconSize: 20, paddingY: 12, paddingX: 14,lineheight:24,fontWeight:600, },
  48: { height: 48, width: "auto", fontSize: 16, iconSize: 24, paddingY: 14, paddingX: 14, lineheight:24,fontWeight:600, },  
  };

  
  export { Themes, Sizes, colors };
  