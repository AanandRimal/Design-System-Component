import React from "react";

import Button from "../components/button/Button"; // Ensure this is the correct import path
import { Icon } from "@iconify/react";
import { GoogleIcon, AppleIcon } from "../components/icons/Icon"; // Ensure these are correctly imported
import Table from "../components/table/Table";

const sizes: number[] = [32, 36, 40, 44, 48];
type CustomButtonType = "primary" | "secondary" | "success" | "info" | "destructive" | "warning" |"ghost";
const buttonTypes: CustomButtonType[] = ["primary", "secondary", "success", "info", "destructive", "warning","ghost"];

const columns = [
  { title: "Type", dataIndex: "Customtype", key: "type", width: 150 },
  { title: "Size", dataIndex: "Customsize", key: "size", width: 100 },
  { title: "Default", dataIndex: "default", key: "default" },
  { title: "Hover", dataIndex: "hover", key: "hover" },
  { title: "Clicked", dataIndex: "clicked", key: "clicked" },
  { title: "Loading", dataIndex: "loading", key: "loading" },
  { title: "Disabled", dataIndex: "disabled", key: "disabled" },
];

interface ButtonData {
  key: string;
  Customtype: string;
  Customsize: number | string;
  default: React.ReactNode;
  hover: React.ReactNode;
  clicked: React.ReactNode;
  loading: React.ReactNode;
  disabled: React.ReactNode;
}

const ButtonDisplay: React.FC = () => {
  const data: ButtonData[] = [];

  buttonTypes.forEach((type) => {
    sizes.forEach((size, index) => {
      data.push({
        key: `${type}-${size}`,
        Customtype: index === 0 ? type.charAt(0).toUpperCase() + type.slice(1) : "",
        Customsize: size,
   default: <Button Customtype={type} Customsize={size} leftIcon={<Icon icon="mage:select-box"/>} rightIcon={<Icon icon="mage:select-box"/>}>Button Label</Button>,
   hover: <Button Customtype={type} Customsize={size} leftIcon={<Icon icon="mage:select-box" />} rightIcon={<Icon icon="mage:select-box" />}>Button Label</Button>,
   clicked: <Button Customtype={type} Customsize={size} leftIcon={<Icon icon="mage:select-box" />} rightIcon={<Icon icon="mage:select-box" />}>Button Label</Button>,
   loading: <Button Customtype={type} Customsize={size} loading>Button Label</Button>,
   disabled: <Button Customtype={type} Customsize={size} disabled leftIcon={<Icon icon="mage:select-box" />} rightIcon={<Icon icon="mage:select-box" />}>Button Label</Button>
      });
    });
    data.push({ key: `${type}-spacer`, Customtype: "", Customsize: "", default: <></>, hover: <></>, clicked: <></>, loading: <></>, disabled: <></> });
  });

  ["google", "apple"].forEach((platform) => {
    sizes.forEach((size, index) => {
      const Icon = platform === "google" ? GoogleIcon : AppleIcon;
      const label = `Sign in with ${platform.charAt(0).toUpperCase() + platform.slice(1)}`;
      data.push({
        key: `social-${platform}-${size}`,
        Customtype: index === 0 ? `Social (${platform.charAt(0).toUpperCase() + platform.slice(1)})` : "",
        Customsize: size,
        default: <Button Customtype="social" Customsize={size} leftIcon={<Icon />}>{label}</Button>,
        hover: <Button Customtype="social" Customsize={size} leftIcon={<Icon />}>{label}</Button>,
        clicked: <Button Customtype="social" Customsize={size} leftIcon={<Icon />}>{label}</Button>,
        loading: "",
        disabled: <Button Customtype="social" Customsize={size} disabled leftIcon={<Icon />}>{label}</Button>,
      });
    });
    data.push({ key: `social-${platform}-spacer`, Customtype: "", Customsize: "", default: <></>, hover: <></>, clicked: <></>, loading: <></>, disabled: <></> });
  });

  return <Table columns={columns} dataSource={data} pagination={false} bordered />;
};

export default ButtonDisplay;
