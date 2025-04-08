import { ConfigProvider, Dropdown as AntDropdown, DropDownProps as AntDropdownProps } from "antd";
import { useTheme } from "../../contexthook/ThemeProvider";
import { Themes } from "../foundation/Theme";
import React from "react";

const Dropdown: React.FC<AntDropdownProps> = ({  ...dropdownProps }) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];

  return (
    <>
    <style>
    {`
      .ant-dropdown-menu-item-icon {
        color:${currentTheme.text.t3Subtitle}
      }
    `}
  </style>
    <ConfigProvider
      theme={{
        token: {
     
        },
        components: {
          Dropdown: {
            colorBgElevated:currentTheme.background.bg2,
        colorText:currentTheme.text.t2Component,
        controlItemBgHover:currentTheme.fill.f2,
        marginXS:8,
        paddingXXS:4,
        paddingBlock:6,
        controlPaddingHorizontal:8
          },
        },
      }}
    >
      <AntDropdown {...dropdownProps}> 
       {dropdownProps.children}
      </AntDropdown>
   </ConfigProvider></>       // this if in same line it say react only singlechild if i hd wrtten in same line so i wortte line by line no error 
  );
};

export default Dropdown;
