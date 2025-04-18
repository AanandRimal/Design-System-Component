import React from "react";
import { Drawer as AntDrawer, DrawerProps, ConfigProvider } from "antd";
import { useTheme } from "../../context-hook/ThemeProvider";
import { Themes } from "../foundation/Theme";
import ModalTitle from "../../pages/Title";
import ModalFooter from "../../pages/Footer";
import { CloseOutlined } from "@ant-design/icons";
interface CustomDrawerProps extends DrawerProps {
  icon?: React.ReactNode;
  description?: React.ReactNode;
  footerType?: "right" | "stretch" | "stacked";
}
const Drawer: React.FC<CustomDrawerProps> = ({ footerType = "right", icon,description,  ...drawerProps }) => {
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
        title={
          <div className="flex justify-between items-center ">
            <ModalTitle icon={icon} title={drawerProps.title} description={description} />
            <CloseOutlined className="cursor-pointer text-lg "
                    width="16px"
                    height="16px"
                    style={{color:currentTheme.text.t3Disabled ,marginTop:"-25px" }} 
                   onClick={drawerProps.onClose}/>
          </div>
        }
        closeIcon={null}
        footer={<ModalFooter footerType={footerType}  > {drawerProps.footer} </ModalFooter>}
      >
        <div className="space-y-4" style={{ color: currentTheme.text.t3Subtitle }}>
          {drawerProps.children}
        </div>
      </AntDrawer>
    </ConfigProvider>
  );
};

export default Drawer;
