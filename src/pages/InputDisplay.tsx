import React, { useState } from "react";
import { Space } from "antd";
import Table from "../components/table/Table";
import { ChevronDown } from "lucide-react";
import Switch from "../components/switch/Switch";
import Input from "../components/input/Input";

// Labeled Components
import LabeledInputText from "../components/input/Labeled/LabeledInputText";
import LabeledInputPassword from "../components/input/Labeled/LabeledInputPassword";
import LabeledInputOTP from "../components/input/Labeled/LabeledInputOTP";
import LabeledInputTextArea from "../components/input/Labeled/LabeledInputTextArea";
import LabeledInputSelect from "../components/input/Labeled/LabeledInputSelect";
import LabeledInputCard from "../components/input/Labeled/LabeledInputCard";

interface InputDataRow {
  key: string;
  type: string;
  size: number | string;
  default: React.ReactNode;
  filled: React.ReactNode;
  disabled: React.ReactNode;
  error: React.ReactNode;
}

const InputDisplay: React.FC = () => {
  const [showBottomLabel, setShowBottomLabel] = useState(true);

  const inputSizes = [32, 36, 40, 44, 48];
  const inputTypes = ["text", "password", "search", "otp", "textarea", "select", "card"] as const;

  const inputColumns = [
    {
      title: (
        <Space>
          <span>Type</span>
          <Switch checked={showBottomLabel} onChange={setShowBottomLabel} />
        </Space>
      ),
      dataIndex: "type",
      key: "type",
      width: 150,
    },
    { title: "Size", dataIndex: "size", key: "size", width: 100 },
    { title: "Default", dataIndex: "default", key: "default" },
    { title: "Filled", dataIndex: "filled", key: "filled" },
    { title: "Disabled", dataIndex: "disabled", key: "disabled" },
    { title: "Error", dataIndex: "error", key: "error" },
  ];

  const countryOptions = [
    { value: "us", label: "+997 United States", img: "https://flagcdn.com/w40/us.png" },
    { value: "gb", label: "United Kingdom", img: "https://flagcdn.com/w40/gb.png" },
    { value: "in", label: "India", img: "https://flagcdn.com/w40/in.png" },
  ];

  const LabeledInputComponents: Record<string, any> = {
    text: LabeledInputText,
    password:LabeledInputPassword,
    search: Input.Search,
    otp:LabeledInputOTP ,
    textarea: LabeledInputTextArea,
    select: LabeledInputSelect,
    card: LabeledInputCard,
  };

  const inputData: InputDataRow[] = [];

  inputTypes.forEach((type, typeIndex) => {
    if (typeIndex !== 0) {
      inputData.push({
        key: `spacer-${type}`,
        type: "",
        size: "",
        default: <div className="h-8" />,
        filled: "",
        disabled: "",
        error: "",
      });
    }

    const labelProps = {
      label: "Label",
      bottomLabel: showBottomLabel ? "This is required" : undefined,
    };

    const getInputByType = (size?: number, mode?: "default" | "filled" | "disabled" | "error") => {
      const commonProps = { customSize: size, ...labelProps };
      const propsMap: Record<string, any> = {
        default: {},
        filled: { value: "Sample Value" },
        disabled: { disabled: true },
        error: { status: "error", placeholder: "Error" },
      };
      const props = { ...commonProps, ...(mode ? propsMap[mode] : {}) };
    
      const Component = LabeledInputComponents[type];
    
      if (!Component) return "-";
    
      if (type === "select") {
        const flag_withlabel = (
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img src="https://flagcdn.com/w40/us.png" alt="IMG" style={{ width: 20, height: 13.1, borderRadius: "10%" }} />
            <span>Text Placeholder</span>
          </span>
        );
        return (
          <Component
            {...props}
            options={countryOptions}
            selectPlaceholder={flag_withlabel}
            suffixIcon={<ChevronDown size={16} />}
          />
        );
      }
    
      return <Component {...props} placeholder={type === "password" ? "Password" : "Text Placeholder"} />;
    };
    
    if (["otp", "textarea", "card"].includes(type)) {
      inputData.push({
        key: `${type}-no-size`,
        type: type.charAt(0).toUpperCase() + type.slice(1),
        size: "-",
        default: getInputByType(undefined, "default"),
        filled: getInputByType(undefined, "filled"),
        disabled: getInputByType(undefined, "disabled"),
        error: getInputByType(undefined, "error"),
      });
    } else {
      inputSizes.forEach((size, index) => {
        inputData.push({
          key: `${type}-${size}`,
          type: index === 0 ? type.charAt(0).toUpperCase() + type.slice(1) : "",
          size,
          default: getInputByType(size, "default"),
          filled: getInputByType(size, "filled"),
          disabled: getInputByType(size, "disabled"),
          error: getInputByType(size, "error"),
        });
      });
    }
  });

  return (
    <Table
      columns={inputColumns}
      dataSource={inputData}
      pagination={false}
      bordered
      scroll={{ x: "100%" }}
      style={{ maxWidth: "100%" }}
    />
  );
};

export default InputDisplay;
