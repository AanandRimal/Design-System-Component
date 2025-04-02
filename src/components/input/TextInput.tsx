import { Input as AntInput, InputProps } from "antd";
import InputConfigProvider from "./InputConfigProvider";

interface CustomInputProps extends InputProps {
  customSize?: number; 
}

const TextInput: React.FC<CustomInputProps> = ({ customSize, ...props }) => {
  return (
    <InputConfigProvider CustomSize={customSize}>
      <AntInput {...props} />
    </InputConfigProvider>
  );
};

export default TextInput;
