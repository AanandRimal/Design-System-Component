import React from "react";
import LabeledInput from "./LabeledInput";
import CardInput from "../InputCard";

interface Props extends React.ComponentProps<typeof CardInput> {
  label?: string;
  bottomLabel?: string;

}

const LabeledInputCard: React.FC<Props> = ({ label, bottomLabel,  status,  ...props }) => (
    <LabeledInput label={label} bottomLabel={bottomLabel} status={status}  >
      <CardInput status={status}  {...props} />
    </LabeledInput>
);

export default LabeledInputCard;
