import React from "react";
import { Input } from "antd";
import { OTPProps } from "antd/es/input/OTP";
import BaseInputTheme from "./BaseInputTheme";
import { Sizes } from "../foundation/Theme";
interface CustomOtpProps extends OTPProps {
  customSize?: keyof typeof Sizes;
}

const OTP: React.FC<CustomOtpProps> = ({ customSize, ...props }) => (
  <BaseInputTheme customSize={customSize}>
    <Input.OTP
      {...props}
    />
  </BaseInputTheme>
);

export default OTP;
