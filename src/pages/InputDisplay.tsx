import React, { useState } from "react";
import { Table, Space, Switch } from "antd";
import { ChevronDown } from 'lucide-react';
import Input from "../components/input/Input";
import CustomInput from "../components/input/CustomInput";
import PasswordInput from "../components/input//PasswordInput";

const InputDisplay = () => {
  const [showBottomLabel, setShowBottomLabel] = useState<boolean>(true);
  const inputSizes: number[] = [32, 36, 40, 44, 48];
  type CustomInputType = "text" | "password" | "search" | "otp" | "textarea" | "select" | "card";
  const inputTypes: CustomInputType[] = ["text", "password", "search", "otp", "textarea", "select", "card"];

  const inputColumns = [
    {
      title: (
        <Space>
          <span>Type</span>
          <Switch checked={showBottomLabel} onChange={checked => setShowBottomLabel(checked)} />
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
  interface InputData {
    key: string;
    type: string;
    size: number | string;
    default: React.ReactNode;
    filled: React.ReactNode;
    disabled: React.ReactNode;
    error: React.ReactNode;
  }


  const inputData: InputData[] = [];

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
    if (type === "otp" || type === "textarea") {
      inputData.push({
        key: `${type}-no-size`,
        type: type.charAt(0).toUpperCase() + type.slice(1),
        size: "-",
        default: <CustomInput type={type} placeholder="Place Holder Text" label="Label"bottomLabel={showBottomLabel ? "This is required" : undefined}/>,
        filled: <CustomInput type={type} value="Place Holder Text" label="Label" bottomLabel={showBottomLabel ? "This is required" : undefined}/>,
        disabled: <CustomInput type={type} disabled placeholder="Place Holder Text" label="Label" bottomLabel={showBottomLabel ? "This is required" : undefined}/>,
        error: <CustomInput type={type} status="error" placeholder="Error" label="Label" bottomLabel={showBottomLabel ? "This is required" : undefined} />,
      });
    } else if (type === "search") {
      inputSizes.forEach((size, index) => {
        inputData.push({
          key: `${type}-${size}`,
          type: index === 0 ? type.charAt(0).toUpperCase() + type.slice(1) : "",
          size,
          default: <Input type="search" size={size} placeholder="Search..." />,
          filled: <Input type="search" size={size} value="Search Query" />,
          disabled: <Input type="search" size={size} disabled placeholder="Search..." />,
          error: "-",
        });
      });
    } else if (type === "card") {
      inputData.push({
        key: `${type}-no-size`,
        type: type.charAt(0).toUpperCase() + type.slice(1),
        size: "-",
        default: <Input type="card" placeholder="7777786766" />,
        filled: <Input type="card" value="7777786766" />,
        disabled: <Input type="card" disabled placeholder="7777786766" />,
        error: <Input type="card" status="error" placeholder="Invalid Card" />,
      });
    } else if (type === "select") {
      inputSizes.forEach((size, index) => {
        inputData.push({
          key: `${type}-${size}`,
          type: index === 0 ? "Select" : "",
          size,
          default: <CustomInput type={type} size={size} defaultValue={{ value: "us", label: "TextPlaceholder" }} options={countryOptions}   label="Label" bottomLabel={showBottomLabel ? "This is required" : undefined} suffixIcon={<ChevronDown  size={16} />}/>,
          filled: <CustomInput type={type} size={size} defaultValue={{ value: "us", label: "TextPlaceholder" }}  options={countryOptions}  label="Label" bottomLabel={showBottomLabel ? "This is required" : undefined} suffixIcon={<ChevronDown  size={16} />} />,
          disabled:  <CustomInput type={type} size={size} defaultValue={{ value: "us", label: "TextPlaceholder" }} options={countryOptions}  label="Label" bottomLabel={showBottomLabel ? "This is required" : undefined} disabled  suffixIcon={<ChevronDown  size={16} />}/>,
          error:   <CustomInput type={type} size={size} defaultValue={{ value: "us", label: "TextPlaceholder" }} status="error" options={countryOptions}  label="Label" bottomLabel={showBottomLabel ? "This is required" : undefined}  suffixIcon={<ChevronDown  size={16} />}/>,
        });
      });
    } else {
      inputSizes.forEach((size, index) => {
        inputData.push({
          key: `${type}-${size}`,
          type: index === 0 ? type.charAt(0).toUpperCase() + type.slice(1) : "",
          size,
          default: type === "password" ? <PasswordInput size={size} placeholder="Enter your Password" /> : <CustomInput type={type} size={size} placeholder="Text Placeholder" label="Label" bottomLabel={showBottomLabel ? "This is required" : undefined}/>,
          filled: type === "password" ? <PasswordInput size={size} value="Enter your Password" /> : <CustomInput type={type} size={size} value="Text Placeholder" label="Label" bottomLabel={showBottomLabel ? "This is required" : undefined}/>,
          disabled: type === "password" ? <></> : <CustomInput type={type} size={size} disabled placeholder="Text Placeholder" label="Label" bottomLabel={showBottomLabel ? "This is required" : undefined} />,
          error: type === "password" ? <PasswordInput size={size} status="error" placeholder="Error" /> : <CustomInput type={type} size={size} status="error" placeholder="Text Placeholder" label="Label" bottomLabel={showBottomLabel ? "This is required" : undefined}/>,
        });
      });
    }
  });
  return        <Table
  columns={inputColumns}
  dataSource={inputData}
  pagination={false}
  bordered
  scroll={{ x: "100%" }} 
  style={{ maxWidth: "100%" }} 
/>;
};

export default InputDisplay;
