import React from "react";
import Input from "../Input"; 
import LabeledInput from "./LabeledInput";

interface Props extends React.ComponentProps<typeof Input.TextArea> {
  label?: string;
  bottomLabel?: string;

}

const LabeledInputTextArea: React.FC<Props> = ({ label, bottomLabel, customSize, status,  ...props }) => (
    <LabeledInput label={label} bottomLabel={bottomLabel} status={status}  >
      <Input.TextArea status={status}  {...props} />
    </LabeledInput>
);

export default LabeledInputTextArea;
