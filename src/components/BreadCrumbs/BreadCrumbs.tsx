import React from "react";
import { Breadcrumb as AntBreadcrumb, ConfigProvider, BreadcrumbProps } from "antd";
import { Icon } from "@iconify/react";
import { useTheme } from "../../contexthook/ThemeProvider";
import { Themes } from "../foundation/Theme";

interface BreadcrumbsProps {
  items: BreadcrumbProps["items"];
}

const Breadcrumb: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];

  const breadcrumbItems: BreadcrumbProps["items"] = [
    {
      href: "",
      title: (
        <Icon
          icon="mage:home-2"
          width="20px"
          height="20px"
          style={{ fontSize: "30px" }}
        />
      ),
    },
    ...(items || []),
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Breadcrumb: {
            itemColor: currentTheme.Text3Subtitle,
            separatorColor: currentTheme.Text3Disabled,
            lastItemColor: currentTheme.Text2Component,
            linkColor: currentTheme.Text3Subtitle,
            separatorMargin: 6,
          },
        },
      }}
    >
      <AntBreadcrumb
        separator={
          <span style={{ display: "inline-flex", alignItems: "center" }}>  
          <Icon icon="mage:chevron-right" fontSize="12px" />
        </span>// in this we can set hieght and widht with fonsize in iconify and for alignmet as the bredcrumb are in inline but seprrator szie id small so it was upward so used span to make it center
        }
        items={breadcrumbItems} 
      />
    </ConfigProvider>
  );
};

export default Breadcrumb;
