import React from "react";
import { Space } from "antd";
import Table from "../components/table/Table";
import Switch from "../components/switch/Switch";
const switchSizes : ( 20 | 24 )[] = [20,24];

const switchColumns = [
  { title: "Size", dataIndex: "size", key: "size", width: 100 },
  { title: "Default", dataIndex: "default", key: "default" },
  { title: "Checked", dataIndex: "checked", key: "checked" },
  { title: "Default: Disabled", dataIndex: "defaultDisabled", key: "defaultDisabled" },
  { title: "Checked: Disabled", dataIndex: "checkedDisabled", key: "checkedDisabled" },
];

const switchData = switchSizes.map((size) => ({
  key: `switch-${size}`,
  size,
  default: (
    <Space size={8}>
      <Switch customSize={size} />
      <span>Switch Label Here</span>
    </Space>
  ),
  checked: (
    <Space size={8}>
      <Switch customSize={size} checked />
      <span>Switch Label Here</span>
    </Space>
  ),
  defaultDisabled: (
    <Space size={8}>
      <Switch customSize={size} disabled />
      <span>Switch Label Here</span>
    </Space>
  ),
  checkedDisabled: (
    <Space size={8}>
      <Switch customSize={size} checked disabled />
      <span>Switch Label Here</span>
    </Space>
  ),
}));

const SwitchDisplay: React.FC = () => {
  return (
    <Table
      columns={switchColumns}
      dataSource={switchData}
      pagination={false}
      bordered
    />
  );
};

export default SwitchDisplay;
