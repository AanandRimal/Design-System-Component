import React from "react";
import Select from "../select/Select";
import { SelectProps } from "../select/Select";

const SelectInput: React.FC<SelectProps> = ({ customSize, status, ...props }) => ( //no need to wrap wih baseinputheme as select is differen has its own deifne dalready a maincomponentt so use itt
    <Select size="large"customSize={customSize} {...props} />
);

export default SelectInput;
