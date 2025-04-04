import React from "react";
import { Modal as AntModal, ModalProps, ConfigProvider } from "antd";
import { useTheme } from "../../contexthook/ThemeProvider";
import { Themes } from "../foundation/Theme";
import Title from "../../pages/Title";
import Footer from "../../pages/Footer";

interface CustomModalProps extends ModalProps {
  icon?: React.ReactNode;
  description?: React.ReactNode;
  content?: React.ReactNode;
  footerType?: "right" | "stretch" | "stacked";
}

const Modal: React.FC<CustomModalProps> = ({ footerType = "right", ...modalProps }) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];

  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            marginXS: 20,
            headerBg: currentTheme.background.bg1,
            contentBg: currentTheme.background.bg1,
            footerBg: currentTheme.background.bg1,
            titleColor: currentTheme.text.t1Title,
            colorIcon: currentTheme.text.t3Disabled,
          },
        },
      }}
    >
      <AntModal
        {...modalProps}
        title={<Title icon={modalProps.icon} title={modalProps.title} description={modalProps.description} />}
        footer={<Footer footerType={footerType} />}
      >
        <div className="space-y-4" style={{ color: currentTheme.text.t3Subtitle }}>
          {modalProps.content}
        </div>
      </AntModal>
    </ConfigProvider>
  );
};

export default Modal;
