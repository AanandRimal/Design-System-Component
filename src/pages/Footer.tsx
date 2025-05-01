import React from "react";
interface FooterProps    {
  footerType?: "right" | "stretch" | "stacked";
  children?: React.ReactNode;
  variantStyle?:React.CSSProperties;
}

const Footer: React.FC<FooterProps> = ({ footerType = "right",children ,variantStyle}) => {
  const footerClass = {
    right: "justify-end gap-2.5 ",
    stretch: "justify-start gap-2.5 ",
    stacked: "flex-col gap-2.5 ",
  }[footerType];

  return (
    <div className={`flex ${footerClass} `}  style={variantStyle}>
 {children}
    </div>
  );
};

export default Footer;
