module.exports = {
  purge: [],
  darkMode: false,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind should scan all these files
  ], // or 'media' or 'class'
  theme: {
    extend: {    colors: {
      primary: {
        50: "#F9F5FF",
        100: "#F0E5FF",
        200: "#E7D6FF",
        300: "#D5B8FF",
        400: "#B885FF",
        500: "#A05CFF",
        600: "#893BF7",
        700: "#731DED",
        800: "#6322BF",
        900: "#492183",
        950: "#281641",
      },
  "primary-default-light": "#731DED", 
      "primary-hover-light": "#893BF7", 
      "primary-focus-light": "#F9F5FF",

      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
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
  green:{
     50:"#F5FFF8",
     100:"#E5FFEF",
     200:"#CCFFDF",
     300:"#99FFBE",
     400:"#6EF790",
     500:"#1AE561",
     600:"#15C14F",
     700:"#09AE43",
     800:"#157939",
     900:"#194D2C",
     950:"0F2E1A",

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
  red:{
     50:"#FFF5F5",
     100:"#FFE5E6",
     200:"#FFD6D7",
     300:"#FFB8BA",
     400:"#FF8588",
     500:"#F65055",
     600:"#DD4145",
     700:"#CF252A",
     800:"#AD1F23",
     900:"#8A191C",
     950:"#4A0D0F",
  },
    },
    borderRadius: {
      lg: "16px",
      md: "12px",
      sm: "8px",
    },
    fontSize: {
      "h1-medium": ["32px", { lineHeight: "130%", fontWeight: "500" }],
      "h1-semibold": ["32px", { lineHeight: "130%", fontWeight: "600" }],
      "h1-bold": ["32px", { lineHeight: "130%", fontWeight: "700" }],

      "h2-medium": ["28px", { lineHeight: "130%", fontWeight: "500" }],
      "h2-semibold": ["28px", { lineHeight: "130%", fontWeight: "600" }],
      "h2-bold": ["28px", { lineHeight: "130%", fontWeight: "700" }],

      "h3-medium": ["24px", { lineHeight: "130%", fontWeight: "500" }],
      "h3-semibold": ["24px", { lineHeight: "130%", fontWeight: "600" }],
      "h3-bold": ["24px", { lineHeight: "130%", fontWeight: "700" }],

      "h4-medium": ["20px", { lineHeight: "130%", fontWeight: "500" }],
      "h4-semibold": ["20px", { lineHeight: "130%", fontWeight: "600" }],
      "h4-medium": ["20px", { lineHeight: "130%", fontWeight: "700" }],

      "h5-medium": ["18px", { lineHeight: "130%", fontWeight: "500" }],
      "h5-semibold": ["18px", { lineHeight: "130%", fontWeight: "600" }],
      "h5-bold": ["18px", { lineHeight: "130%", fontWeight: "700" }],

      "h6-medium": ["16px", { lineHeight: "130%", fontWeight: "500" }],
      "h6-semibold": ["16px", { lineHeight: "130%", fontWeight: "600" }],
      "h6-bold": ["16px", { lineHeight: "130%", fontWeight: "700" }],

     
      "large-regular":["16px",{lineHeight:"24px",fontWeight:"400"}],
      "large-medium":["16px",{lineHeight:"24px",fontWeight:"500"}],
      "large-semibold":["16px",{lineHeight:"24px",fontWeight:"600"}],

      "medium-regular":["15px",{lineHeight:"22px",fontWeight:"400"}],
      "medium-medium":["15px",{lineHeight:"22px",fontWeight:"500"}],
      "medium-semibold":["15px",{lineHeight:"22px",fontWeight:"600"}],

      "base-regular":["14px",{lineHeight:"20px",fontWeight:"400"}],
      "base-medium":["14px",{lineHeight:"20px",fontWeight:"500"}],
      "base-semibold":["14px",{lineHeight:"20px",fontWeight:"600"}],

      "small-regular":["13px",{lineHeight:"18px",fontWeight:"400"}],
      "small-medium":["13px",{lineHeight:"18px",fontWeight:"500"}],
      "small-semibold":["13px",{lineHeight:"18px",fontWeight:"600"}],

      "x-small-regular":["12px",{lineHeight:"16px",fontWeight:"400"}],
      "x-small-medium":["12px",{lineHeight:"16px",fontWeight:"500"}],
      "x-small-semibold":["12px",{lineHeight:"16px",fontWeight:"600"}],
    },
    fontWeight: {
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
