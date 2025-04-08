import React from "react";
import { Tabs as AntTabs, TabsProps as AntTabsProps, ConfigProvider } from "antd";
import { useTheme } from "../../contexthook/ThemeProvider";
import { Themes } from "../foundation/Theme";
import styled from "styled-components";

type CustomType = "box" | "underline";

interface TabsProps extends AntTabsProps {
  Customtype?: CustomType;
}

const TabLabel = styled.div<{ isBox: boolean; isActive: boolean; theme: any }>`
  padding: 12px;
  background: ${(props) => (props.isActive ? props.theme.background.bg1 : "none")};

  &:hover {
    background: ${(props) => props.theme.fill.f2}; 
  }

  ${(props) =>
    props.isBox &&
    `
    padding: 8px 16px;
    border-radius: 8px;
    background: ${props.isActive ? props.theme.background.bg2 : "none"};
    border: ${props.isActive ? "1px solid #17171C1F" : "1px solid transparent"};

    &:hover {
      background: ${props.theme.fill.f2}; 
    }
  `}
`;

const Tabs: React.FC<TabsProps> = ({ Customtype = "underline", ...props }) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];

  const isBox = Customtype === "box";

  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            itemSelectedColor: currentTheme.text.t1Title,
            inkBarColor: isBox ? "transparent" : currentTheme.primary.default,
            colorText: currentTheme.text.t2Component,
            horizontalItemGutter: 1,
            itemHoverColor: currentTheme.text.t2Component,
            paddingSM: 1,
          },
        },
      }}
    >
      <AntTabs
        {...props}
        items={props.items?.map((tab) => {
          const { icon, label, ...rest } = tab;
          return {
            ...rest,
            label: (
              <TabLabel
                isBox={isBox}
                isActive={props.activeKey === tab.key}
                theme={currentTheme} 
              >
                <span>{label}</span>
                {icon}
              </TabLabel>
            ),
          };
        })}
      />
    </ConfigProvider>
  );
};

export default Tabs;
