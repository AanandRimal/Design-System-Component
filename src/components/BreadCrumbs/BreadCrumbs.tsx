import React from "react";
import { Breadcrumb as AntBreadcrumb, ConfigProvider, BreadcrumbProps } from "antd";
import { Icon } from "@iconify/react";
import { Themes} from "../Foundation/theme";
import { useTheme } from "../../contexthook/ThemeProvider";

interface BreadcrumbsProps {
  items: BreadcrumbProps["items"];
}

const Breadcrumb: React.FC<BreadcrumbsProps> = ({ items }) => {
    const { themeMode } = useTheme();
    const currentTheme=Themes[themeMode];
  const breadcrumbItems: BreadcrumbProps["items"] = [
        {
            href: '',
            title:  <Icon icon="mage:home-2" />
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
        separator={<Icon icon="mage:chevron-right" />}
        items={breadcrumbItems}
      />
    </ConfigProvider>
  );
};

export default Breadcrumb;
