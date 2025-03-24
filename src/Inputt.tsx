import { Input as AntInput, InputProps as AntInputProps } from "antd";
import InputConfigProvider from "./InputConfigProvider";
import { Sizes } from "./components/Foundation/theme";

type AntSize = "small" | "middle" | "large";
type ExtendedSize = AntSize | keyof typeof Sizes;

interface Inputt extends Omit<AntInputProps, "size"> {
  size?: ExtendedSize;
}

const TextInput: React.FC<Inputt> = ({ size = "small", status, disabled, ...props }) => {
  return (
    <InputConfigProvider size={size} status={status || undefined} disabled={disabled}>
      <AntInput
        size={["small", "middle", "large"].includes(size as AntSize) ? (size as AntSize) : "small"}
        status={status}
        disabled={disabled}
        {...props}
      />
    </InputConfigProvider>
  );
};

export default Inputt;
