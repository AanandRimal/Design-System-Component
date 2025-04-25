import React from "react";
import { Input } from "antd";
import { TextAreaProps } from "antd/es/input";
import BaseInputTheme from "./BaseInputTheme";
import { Sizes } from "../foundation/Theme";
interface CustomTextAreaProps extends TextAreaProps {
  customSize?: keyof typeof Sizes;
}

const TextArea: React.FC<CustomTextAreaProps> = ({ customSize,  ...props }) => (
  <BaseInputTheme customSize={customSize} >
    <Input.TextArea {...props} />
  </BaseInputTheme>
);

export default TextArea;
