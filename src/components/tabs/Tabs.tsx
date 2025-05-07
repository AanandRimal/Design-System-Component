import React from "react";
import {
  Tabs as AntTabs,
  TabsProps as AntTabsProps,
  ConfigProvider,
} from "antd";
import { useTheme } from "../../context-hook/ThemeProvider";
import { Themes } from "../foundation/Theme";
import styled from "styled-components";

type CustomType = "box" | "underline" | "ghost";
type AntTabItem = NonNullable<AntTabsProps["items"]>[number];

type ExtendedTabItem = AntTabItem & {
  customIcon?: React.ReactNode;
};

interface TabsProps extends AntTabsProps {
  Customtype?: CustomType;
  items?: ExtendedTabItem[];
} 

// 🎨 Visual style mapping per tab type
const tabTypeStyles = {
  underline: {
    background: "transparent",
    border: "none",
    hoverBg: (theme: any) => theme.fill.f2,
    activeBg: "none",
    activeBorder: "none",

  },
  box: {
    background: (theme: any) => theme.background.bg0,
    border: (theme: any) => theme.background.bg0,
    hoverBg: (theme: any) => theme.fill.f2,
    activeBg: (theme: any) => theme.background.bg2,
    activeBorder: (theme: any) => theme.stroke.strong,
  },
  ghost: {
    background: "transparent",
    border: () => "transparent",
    hoverBg: (theme: any) => theme.fill.f1,
    activeBg: (theme: any) => theme.background.bg1,
    activeBorder: (theme: any) => theme.stroke.strong,
  },
};

// 📐 Layout style mapping per tab type
const tabTypeLayoutStyles = {
  underline: {
    padding: "12px",
    borderRadius: "0px",
    boxShadow: "none",
  },
  box: {
    padding: "8px 12px",
    borderRadius: "8px",
    boxShadow: (isActive: boolean) =>
      isActive ? "0px 1px 2px rgba(0, 0, 0, 0.051)" : "none",
  },
  ghost: {
    padding: "8px 12px",
    borderRadius: "8px",
    boxShadow: "none",
  },
};

// 🧩 Styled TabLabel using both visual + layout configs
const TabLabel = styled.div<{
  isActive: boolean;
  theme: any;
  type: CustomType;
}>`
  display: flex;
  gap: 6px;
 height: ${({ type }) => (type === "box" ? "36px" : "44px")}; 
 align-items:center;
 justify-content:center;
  ${({ theme, isActive, type }) => {
    const visual = tabTypeStyles[type];
    const layout = tabTypeLayoutStyles[type];

    const getVisual = (val: any) =>
      typeof val === "function" ? val(theme) : val;
    const getShadow = (val: any) =>
      typeof val === "function" ? val(isActive) : val;

    return `
      padding: ${layout.padding};
      border-radius: ${layout.borderRadius};
      box-shadow: ${getShadow(layout.boxShadow)};
      background: ${isActive ? getVisual(visual.activeBg) : getVisual(visual.background)};
      border: 1px solid ${isActive ? getVisual(visual.activeBorder) : getVisual(visual.border)}; 
      ${!isActive ? `
        &:hover {
          background: ${getVisual(visual.hoverBg)};
        }
      ` : ""}
    `;
  }}
`;
//applied hover if not active if i set hover none it inherit the bg color so applied only hover whne not active tab alos added height as antd config height is not working 
// 🚀 Main Tabs Component
const Tabs: React.FC<TabsProps> = ({ Customtype = "underline", ...props }) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];
  const isGhost =Customtype === "ghost" 
  const isBox = Customtype === "box";

  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            controlHeight: isBox ? 36 : 44,
            itemSelectedColor: currentTheme.text.t1Title,
            inkBarColor: Customtype === "underline"? currentTheme.primary.default : "transparent",
            colorText: currentTheme.text.t2Component,
            horizontalItemGutter: isBox ? 2 : isGhost? 4: 0,
            horizontalItemPadding: "0px 0px",
            itemHoverColor: currentTheme.text.t2Component,
            colorBorderSecondary:Customtype === "underline" ? currentTheme.stroke.strong: "transparent",
            itemActiveColor: "none",
            lineHeight:0,

            
          },
        },
      }}
    >
      <AntTabs
        {...props}
        tabBarStyle={{
            background:
            Customtype === "box" ? currentTheme.background.bg0 : "none",
            borderRadius: Customtype === "box" ? "8px" : "none",
            padding:Customtype === "box" ?  "4px" :"0px",
        }}
        items={props.items?.map((tab) => {
          const { icon, label, customIcon, ...rest } = tab;
          return {
            ...rest,
            label: (
              <TabLabel
                isActive={props.activeKey === tab.key}
                type={Customtype}
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
