import React from "react";
import { Pagination as AntPagination, ConfigProvider, PaginationProps } from "antd";
import { useTheme } from "../../context-hook/ThemeProvider";
import { Themes } from "../foundation/Theme";

const Pagination: React.FC<PaginationProps> = (props) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];

  return (
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            colorPrimary: currentTheme.text.t1Title,
            colorBgTextHover:currentTheme.fill.f2,

            colorPrimaryHover:currentTheme.text.t2Component,
            itemActiveBg: currentTheme.fill.f3,
            colorText: currentTheme.text.t2Component,
            itemBg: currentTheme.background.bg1,
            lineWidth:0,
            colorTextDisabled: currentTheme.text.t3Subtitle
  
          },
        },
      }}
    >
      <AntPagination {...props}     />
      <style>
    {`
      .ant-pagination-item-link {
        border: 1px solid ${currentTheme.stroke.strong} !important;
        color: ${currentTheme.text.t3Subtitle}
      }
    `}
  </style>
    </ConfigProvider>
  );
};

export default Pagination;
