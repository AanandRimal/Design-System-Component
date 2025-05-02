import React from "react";
import { Input } from "antd";
import { InputProps } from "antd";
import { Sizes } from "../foundation/Theme";
import BaseInputTheme from "./BaseInputTheme";

interface CustomTextProps extends InputProps {
  customSize?: keyof typeof Sizes;
}

const Text: React.FC<CustomTextProps> = ({ customSize, ...props }) => (
  
  <BaseInputTheme customSize={customSize} >
    <Input size="large"  {...props} />
  </BaseInputTheme>
);
export type {CustomTextProps}
export default Text;
