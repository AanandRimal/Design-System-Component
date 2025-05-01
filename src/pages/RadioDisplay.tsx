import React from "react";
import Table from "../components/table/Table";
import Radio from "../components/Radio"; 

const RadioDisplay: React.FC = () => {
    const radioSizes : (16 | 20 | 24 )[] = [16,20,24];

  interface RadioRow {
    key: string;
    size: number;
    default: React.ReactNode;
    checked: React.ReactNode;
    disabled: React.ReactNode;
  }

  const columns = [
    { title: "Size", dataIndex: "size", key: "size", width: 100 },
    { title: "Default", dataIndex: "default", key: "default" },
    { title: "Checked", dataIndex: "checked", key: "checked" },
    { title: "Disabled", dataIndex: "disabled", key: "disabled" },
  ];

  const data: RadioRow[] = radioSizes.map((size) => ({
    key: `radio-${size}`,
    size,
    default: <Radio size={size}>This is the Radio Label</Radio>,
    checked: <Radio size={size} checked>This is the Radio Label</Radio>,
    disabled: <Radio size={size} disabled>This is the Radio Label</Radio>,
  }));

  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default RadioDisplay;
