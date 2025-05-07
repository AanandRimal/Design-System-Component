import React from "react";
import { Modal as AntModal, ModalProps, ConfigProvider } from "antd";
import { useTheme } from "../../context-hook/ThemeProvider";
import { Themes } from "../foundation/Theme";
import Title from "../../pages/Title";
import Footer from "../../pages/Footer";

interface CustomModalProps extends ModalProps {
  icon?: React.ReactNode;
  description?: React.ReactNode;
  content?: React.ReactNode;
  footerType?: "right" | "stretch" | "stacked";
  variant?: "default" | "divider";
  customFooter?:React.ReactNode;
}

const Modal: React.FC<CustomModalProps> = ({
  footerType = "right",
  variant = "divider",
  customFooter,
  ...modalProps
}) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];

  // Border classes only for "divider" variant
  const titleStyle = variant === "divider" ? { borderBottom: `1px solid ${currentTheme.stroke.strong}`, padding: "16px 20px", } : {};
  const footerStyle = variant === "divider" ? { borderTop: `1px solid ${currentTheme.stroke.strong}`, padding: "16px 20px",} : {};
  const contentClassName = variant === "divider" ? "px-5 py-5 flex flex-col gap-4" : "flex flex-col gap-4";
  const modalPadding = variant === "default" ? "20px" : "0px";

  return (
    <ConfigProvider
      theme={{
        token:{
      
        },
        components: {
          Modal: {
            marginXS: variant==="divider"? 0:20,
            headerBg: currentTheme.background.bg1,
            contentBg: currentTheme.background.bg1,
            footerBg: currentTheme.background.bg1,
            titleColor: currentTheme.text.t1Title,
            colorIcon: currentTheme.text.t3Disabled,
            borderRadius:12,
            
           
          },
        },
      }}
    >
     
     <AntModal
  {...modalProps}
  footer={null} //default footer had issue of reactnode + extra so needed more condition so used customfooter so se it null
  styles={{
    content: {
      padding: modalPadding,
      border: variant === "divider" ? `1px solid ${currentTheme.stroke.strong}` : "none"
    },
  }}
  title={
    (modalProps.title || modalProps.icon || modalProps.description) ? (
      <Title
        icon={modalProps.icon}
        title={modalProps.title}
        description={modalProps.description}
       variantStyle={titleStyle}
      />
    ) : undefined
  }
>
<div className={`flex flex-col ${variant !== "divider" ? "gap-5" : ""}`}>
  <div className={contentClassName} style={{ color: currentTheme.text.t3Subtitle }}>
    {modalProps.content}
  </div>
  {customFooter && (
    <Footer footerType={footerType} variantStyle={footerStyle}>
      {customFooter}
    </Footer>                        
  )}
  </div>
</AntModal>

    </ConfigProvider>
  );
};

export default Modal;
