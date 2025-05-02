import React from "react";
import Input from "../Input";
import { CustomTextProps } from "../InputText";
import LabeledInput from "./LabeledInput";


interface Props extends CustomTextProps {
  label?: string;
  bottomLabel?: string;
}

const LabeledInputText: React.FC<Props> = ({ label, bottomLabel,  status, disabled, ...props }) => (
    <LabeledInput label={label} bottomLabel={bottomLabel} status={status} disabled={disabled}>
      <Input.Text  status={status} {...props} />
    </LabeledInput>
);

export default LabeledInputText;
