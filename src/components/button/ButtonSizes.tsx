  
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
  interface IconButtonSize{
    paddingY:number | string,
    paddingX:number | string,
  }
  const ButtonSizes: Record<number, SizeType> = {   
  32: { height: 32, width: "auto", fontSize: 14, iconSize: 20, paddingY: 6, paddingX: 10 ,lineheight:20, fontWeight:600, },
  36: { height: 36, width: "auto", fontSize: 14, iconSize: 20, paddingY: 8, paddingX: 12, lineheight:20, fontWeight:600, },
  40: { height: 40, width: "auto", fontSize: 14, iconSize: 20, paddingY: 10, paddingX: 12,lineheight:20, fontWeight:600, },
  44: { height: 44, width: "auto", fontSize: 16, iconSize: 20, paddingY: 12, paddingX: 14,lineheight:24,fontWeight:600, },
  48: { height: 48, width: "auto", fontSize: 16, iconSize: 24, paddingY: 14, paddingX: 14, lineheight:24,fontWeight:600, },  
  };
  const butttonSocialSizePadding: Record<number,SocialMediaSize  > = {
    32: { paddingY: 6, paddingX: 12 },
    36: { paddingY: 8, paddingX: 12},
    40: { paddingY: 10, paddingX: 12 },
    44: {paddingY:10,paddingX:14},
    48:{paddingY:12,paddingX:14},

  };
  const IconButtonPadding: Record<number,IconButtonSize  > = {
    32: { paddingY: 6, paddingX: 6 },
    36: { paddingY: 8, paddingX: 8},
    40: { paddingY: 10, paddingX: 10 },
    44: {paddingY:12,paddingX:12},
    48:{paddingY:12,paddingX:12},

  };
  export  {ButtonSizes,butttonSocialSizePadding,IconButtonPadding};