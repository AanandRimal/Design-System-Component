import React from "react";
import Input from "../Input";
import { CustomTextProps } from "../InputText";
import LabeledInput from "./LabeledInput";
import { useTheme } from "../../../context-hook/ThemeProvider";
import { Sizes } from "../../foundation/Theme";
import MaximizeIcon from "../../icons/Maximize";
interface Props extends CustomTextProps {
  label?: string;
  bottomLabel?: string;
}

const LabeledInputText: React.FC<Props> = ({ label, bottomLabel,  status, disabled, ...props }) => {
    const { themeMode } = useTheme();
    const iconSize = Sizes[props.customSize || 36]?.iconSize;
    return(
    <LabeledInput label={label} bottomLabel={bottomLabel} status={status} disabled={disabled}>
      <Input.Text  status={status} disabled={disabled} 
      prefix={<MaximizeIcon size={iconSize} theme={themeMode} />}
      suffix={<MaximizeIcon size={iconSize} theme={themeMode} />} 
      {...props}  />
    </LabeledInput>
);
};

export default LabeledInputText;
