import React from "react";
import Input from "../Input"; // your custom Input.OTP component
import LabeledInput from "./LabeledInput";

interface Props extends React.ComponentProps<typeof Input.Select> {
  label?: string;
  bottomLabel?: string;

}

const LabeledInputSelect: React.FC<Props> = ({ label, bottomLabel,  status,  ...props }) => (
    <LabeledInput label={label} bottomLabel={bottomLabel} status={status}  >
      <Input.Select status={status}  {...props} />
    </LabeledInput>
);

export default LabeledInputSelect;
