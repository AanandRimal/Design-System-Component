import React from "react";
import Button from "../components/button/Button";

interface ModalFooterProps  {
  footerType?: "right" | "stretch" | "stacked";
  children?: React.ReactNode;
}

const ModalFooter: React.FC<ModalFooterProps> = ({ footerType = "right",children}) => {
  const footerClass = {
    right: "justify-end gap-2.5 p-2",
    stretch: "justify-start gap-2.5 p-2",
    stacked: "flex-col gap-2.5 p-2",
  }[footerType];

  return (
    <div className={`flex ${footerClass}`} >
 {children}
    </div>
  );
};

export default ModalFooter;
