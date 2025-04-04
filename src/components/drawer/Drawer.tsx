import React from "react";
import { Drawer as AntDrawer, DrawerProps, ConfigProvider } from "antd";
import { useTheme } from "../../contexthook/ThemeProvider";
import { Themes } from "../foundation/Theme";
import ModalTitle from "../../pages/Title";
import ModalFooter from "../../pages/Footer";
import { CloseOutlined } from "@ant-design/icons";

interface CustomDrawerProps extends DrawerProps {
  icon?: React.ReactNode;
  description?: React.ReactNode;
  footerType?: "right" | "stretch" | "stacked";
}

const Drawer: React.FC<CustomDrawerProps> = ({ footerType = "right", onClose, ...drawerProps }) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];

  return (
    <ConfigProvider
      theme={{
        components: {
          Drawer: {
            colorBgElevated: currentTheme.background.bg1,
            colorText:currentTheme.text.t2Component,
            colorSplit:"none"
          },
        },
      }}
    >
      <AntDrawer
        {...drawerProps}
        closable={false} 
        onClose={onClose} 
        title={
          <div className="flex justify-between items-center ">
            <ModalTitle icon={drawerProps.icon} title={drawerProps.title} description={drawerProps.description} />
            <CloseOutlined className="cursor-pointer text-lg "
                    width="16px"
                    height="16px"
                    style={{color:currentTheme.text.t3Disabled ,marginTop:"-25px" }} 
                   onClick={onClose}/>
          </div>
        }
        footer={<ModalFooter footerType={footerType}  />}
      >
        <div className="space-y-4" style={{ color: currentTheme.text.t3Subtitle }}>
          {drawerProps.children}
        </div>
      </AntDrawer>
    </ConfigProvider>
  );
};

export default Drawer;
