import React from "react";
import { Tabs as AntTabs, TabsProps as AntTabsProps, ConfigProvider } from "antd";
import { useTheme } from "../../context-hook/ThemeProvider";
import { Themes } from "../foundation/Theme";
import styled from "styled-components";
type CustomType = "box" | "underline";
type AntTabItem = NonNullable<AntTabsProps['items']>[number];

type ExtendedTabItem = AntTabItem & {
  customIcon?: React.ReactNode;
};

interface TabsProps extends AntTabsProps {
  Customtype?: CustomType;
  items?: ExtendedTabItem[];
}
const TabLabel = styled.div<{ isBox: boolean; isActive: boolean; theme: any }>`
  padding: 12px;
  display: flex;
  gap: 6px;

  background: ${(props) => (props.isActive ? props.theme.background.bg1 : "none")};

  &:hover {
    background: ${(props) => props.theme.fill.f2}; 
  }

  ${(props) =>
    props.isBox &&
    `
    padding: 8px 12px;
    border-radius: 8px;
    background: ${props.isActive ? props.theme.background.bg2 : props.theme.background.bg0};
    border: ${props.isActive ? `1px solid ${props.theme.stroke.strong}` : "none"};
    box-shadow: ${props.isActive ? "0px 1px 2px 0px rgba(0, 0, 0, 0.051)" : "none"};

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
            controlHeight: isBox ? 36 : 44,
            itemSelectedColor: currentTheme.text.t1Title,
            inkBarColor: isBox ? "transparent" : currentTheme.primary.default,
            colorText: currentTheme.text.t2Component,
            horizontalItemGutter: isBox ? 2 : 0,
            horizontalItemPadding: "4px 4px",
            itemHoverColor: currentTheme.text.t2Component,
            colorBorderSecondary: isBox ? "none" : currentTheme.stroke.strong,
            itemActiveColor: "none",
          },
        },
      }}
    >
      <AntTabs
        {...props}
        tabBarStyle={{
          background: isBox ? currentTheme.background.bg0: "none",
          borderRadius: isBox ? "8px" : "none",
        }}
        items={props.items?.map((tab) => {
          const { icon, label, customIcon, ...rest } = tab;
        
          return {
            ...rest,
            label: (
              <TabLabel
                isBox={isBox}
                isActive={props.activeKey === tab.key}
                theme={currentTheme}
              >
                  {icon}
                  {label}
                {customIcon}
              </TabLabel>
            ),
          };
    
        
        })}
      />
    </ConfigProvider>
  );
};

export default Tabs;
