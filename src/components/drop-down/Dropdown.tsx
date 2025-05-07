import { ConfigProvider, Dropdown as AntDropdown, DropDownProps as AntDropdownProps } from "antd";
import { useTheme } from "../../context-hook/ThemeProvider";
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
    color: ${currentTheme.text.t3Subtitle};
    margin-right: 8px !important;
  }
  .ant-dropdown-menu-vertical {
    border: 1px solid ${currentTheme.stroke.strong};
  }
 
`}
</style>


    <ConfigProvider
      theme={{
        token: {
     
        },
        components: {
          Dropdown: {
            colorIcon:currentTheme.text.t3Subtitle,
            colorBgElevated:currentTheme.background.bg2,
        colorText:currentTheme.text.t2Component,
        colorTextDescription:currentTheme.text.t3Subtitle,
        controlItemBgHover:currentTheme.fill.f2,
        colorTextDisabled:currentTheme.text.t2Subtitle,
        paddingXXS:4,
        marginXS:0,
        paddingBlock:6,
        controlPaddingHorizontal:8,
             boxShadowSecondary: '0px 3px 4px 0px rgba(0, 0, 0, 0.12)',
             colorPrimaryBorder:currentTheme.stroke.strong,
      
          },
        },
      }}
    >
      <AntDropdown

       {...dropdownProps}> 
       {dropdownProps.children}
      </AntDropdown>
   </ConfigProvider></>       // this if in same line it say react only singlechild if i hd wrtten in same line so i wortte line by line no error 
  );
};

export default Dropdown;
