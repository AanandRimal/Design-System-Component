import React from "react";
import { Input } from "antd";
import { PasswordProps } from "antd/es/input";
import { Sizes } from "../foundation/Theme";
import BaseInputTheme from "./BaseInputTheme";

interface CustomPasswordProps extends PasswordProps {
  customSize?: keyof typeof Sizes;
}

const Password: React.FC<CustomPasswordProps> = ({ customSize, ...props }) => (
  <BaseInputTheme customSize={customSize}>
    <Input.Password size="large" {...props} />
  </BaseInputTheme>
);

export default Password;
