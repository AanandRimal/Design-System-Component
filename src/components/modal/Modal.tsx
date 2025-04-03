import React from "react";
import { Modal as AntModal, ModalProps, ConfigProvider } from "antd";
import Button from "../button/Button";
import { useTheme } from "../../contexthook/ThemeProvider";
import { Themes } from "../foundation/Theme";

interface CustomModalProps extends ModalProps {
  icon?: React.ReactNode;
  description?: React.ReactNode;
  content?: React.ReactNode;
  footerType?: "right" | "stretch" | "stacked";
}

const Modal: React.FC<CustomModalProps> = ({
  footerType = "right",
  ...modalProps
}) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];

  const footerClass = {
    right: "justify-end gap-2.5",
    stretch: "justify-start gap-2.5",
    stacked: "flex-col gap-2.5",
  }[footerType];

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
        title={
          <div
            className={`flex gap-4 ${modalProps.description ? "items-start" : "items-center"}`}
          >
            {modalProps.icon}
            <div className="flex flex-col">
              <h5 className="text-h6-semibold font-semibold">{modalProps.title}</h5>
              <p
                className="text-base-regular font-regular"
                style={{ color: currentTheme.text.t3Subtitle }}
              >
                {modalProps.description}
              </p>
            </div>
          </div>
        }
        footer={
          <div className={`flex ${footerClass}`}>
            <Button key="cancel" Customtype="secondary" onClick={modalProps.onCancel}>
              Cancel
            </Button>
            <Button key="submit" Customtype="primary" onClick={modalProps.onOk}>
              Button Label
            </Button>
          </div>
        }
      >
        <div className="space-y-4" style={{ color: currentTheme.text.t3Subtitle }}>
          {modalProps.content}
        </div>
      </AntModal>
    </ConfigProvider>
  );
};

export default Modal;
