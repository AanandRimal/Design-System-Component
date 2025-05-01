// components/docs/TableDoc.tsx
import React, { useState } from "react";
import Table from "../components/table/Table";
import Badge from "../components/badge/Badge";
import Checkbox from "../components/checkbox/CheckBox";
import Avatar from "../components/avatars/Avatar";
import { LeftIcon } from "../components/icons/LeftIcon";
import ComponentDocLayout from "./ComponentDocLayout";
import type { ColumnsType } from "antd/es/table";

// 📌 Description
const description = (
  <p className="text-base leading-relaxed">
    The <Badge type="filled" status="primary">Table</Badge> component is a fully customized and themed wrapper over Ant Design's native Table.
    It supports all native props and behaviors,basically we use Table same like as of Ant D Table but render custom cell incorporates our design system with <strong>custom checkboxes</strong>, <strong>badges</strong>, 
    and <strong>avatar integration while displaying its upto user itself</strong>.
  </p>
);

// 📌 Custom Props Section
const customProps = (
  <ul className="list-disc list-inside text-base space-y-2">
    <li>
      <Badge type="filled" status="success">Themed Styling</Badge> – Customized colors, spacing, borders to match our design system.
    </li>
    <li>
      <Badge type="stroke" status="info">Custom Checkbox Integration</Badge> – Fully replaces default checkboxes for row selection, including indeterminate state.
    </li>
    <li>
      <Badge type="stroke" status="warning">Flexible Cell Rendering</Badge> – Avatars, icons, badges, and more can be rendered inside table cells using our custom components.
    </li>
  </ul>
);

// 📌 Native Props Section
const nativeProps = (
  <p className="text-base leading-relaxed">
    All native Ant Design <code>Table</code> props like <code>columns</code>, <code>dataSource</code>, <code>pagination</code>, <code>sorter</code>, 
    and <code>rowSelection</code> are fully supported and behave the same.
  </p>
);

// 📌 Full Example Component
const TableExample = () => {
  const initialData = Array.from({ length: 8 }, (_, i) => ({
    key: i,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    phone: '9853342322',
    date: 'Jan 24, 2025',
    text: 'Table Label',
  }));

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectAllHandler = (checked: boolean) => {
    setSelectedRowKeys(checked ? initialData.map(item => item.key) : []);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(newSelectedRowKeys);
    },
    renderCell: (_: boolean, record: any) => (
      <Checkbox
        checked={selectedRowKeys.includes(record.key)}
        onChange={e => {
          const isChecked = e.target.checked;
          const updated = isChecked
            ? [...selectedRowKeys, record.key]
            : selectedRowKeys.filter(key => key !== record.key);
          setSelectedRowKeys(updated);
        }}
      />
    ),
    columnTitle: () => {
      const isIndeterminate =
        selectedRowKeys.length > 0 && selectedRowKeys.length < initialData.length;
      const isChecked = selectedRowKeys.length === initialData.length;

      return (
        <Checkbox
          indeterminate={isIndeterminate}
          checked={isChecked}
          onChange={e => onSelectAllHandler(e.target.checked)}
        />
      );
    },
  };

  const columns: ColumnsType<any> = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      showSorterTooltip: false,
      render: (name: string) => (
        <div className="flex items-center gap-2">
          <Avatar customSize={24}>K</Avatar>
          <span>{name}</span>
        </div>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: true,
      showSorterTooltip: false,
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      render: (phone: string) => (
        <div className="flex items-center gap-2">
          <img
            src="https://flagcdn.com/w40/us.png"
            alt="USA"
            className="w-4 h-4 rounded-full"
          />
          <span>{phone}</span>
          <Badge type="stroke" size={20}>Badge</Badge>
        </div>
      ),
    },
    {
      title: 'Badges',
      render: () => (
        <div className="flex flex-row gap-2">
          <Badge size={20} type="stroke" dot>Dot</Badge>
          <Badge size={20} type="stroke" dot>Dot</Badge>
        </div>
      ),
    },
    {
      title: 'Action',
      render: () => (
        <div className="flex flex-row gap-2">
          <LeftIcon />
          <LeftIcon />
        </div>
      ),
    },
    {
      title: 'Text',
      dataIndex: 'text',
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={initialData}
      rowKey="key"
      bordered
      pagination={false}
      rowSelection={rowSelection}
    />
  );
};

// 📌 Code string for SyntaxHighlighter inside ComponentDocLayout
const tableCode = `import Table from './Table';
import Checkbox from '../checkbox/CheckBox';
import Avatar from '../avatars/Avatar';
import Badge from '../badge/Badge';
import { useState } from 'react';


const initialData = Array.from({ length: 8 }, (_, i) => ({
    key: i,
  name: \`User \${i + 1}\`,
  l email = \`user \${i + 1}@example.com\`;
    phone: '9853342322',
    date: 'Jan 24, 2025',
    text: 'Table Label',
  }));

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectAllHandler = (checked: boolean) => {
    setSelectedRowKeys(checked ? initialData.map(item => item.key) : []);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(newSelectedRowKeys);
    },
    renderCell: (_: boolean, record: any) => (
      <Checkbox
        checked={selectedRowKeys.includes(record.key)}
        onChange={e => {
          const isChecked = e.target.checked;
          const updated = isChecked
            ? [...selectedRowKeys, record.key]
            : selectedRowKeys.filter(key => key !== record.key);
          setSelectedRowKeys(updated);
        }}
      />
    ),
    columnTitle: () => {
      const isIndeterminate =
        selectedRowKeys.length > 0 && selectedRowKeys.length < initialData.length;
      const isChecked = selectedRowKeys.length === initialData.length;

      return (
        <Checkbox
          indeterminate={isIndeterminate}
          checked={isChecked}
          onChange={e => onSelectAllHandler(e.target.checked)}
        />
      );
    },
  };

  const columns: ColumnsType<any> = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      showSorterTooltip: false,
      render: (name: string) => (
        <div className="flex items-center gap-2">
          <Avatar customSize={24}>K</Avatar>
          <span>{name}</span>
        </div>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: true,
      showSorterTooltip: false,
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      render: (phone: string) => (
        <div className="flex items-center gap-2">
          <img
            src="https://flagcdn.com/w40/us.png"
            alt="USA"
            className="w-4 h-4 rounded-full"
          />
          <span>{phone}</span>
          <Badge type="stroke" size={20}>Badge</Badge>
        </div>
      ),
    },
    {
      title: 'Badges',
      render: () => (
        <div className="flex flex-row gap-2">
          <Badge size={20} type="stroke" dot>Dot</Badge>
          <Badge size={20} type="stroke" dot>Dot</Badge>
        </div>
      ),
    },
    {
      title: 'Action',
      render: () => (
        <div className="flex flex-row gap-2">
          <LeftIcon />
          <LeftIcon />
        </div>
      ),
    },
    {
      title: 'Text',
      dataIndex: 'text',
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={initialData}
      rowKey="key"
      bordered
      pagination={false}
      rowSelection={rowSelection}
    />
  );
`;
// 📌 Main Documentation Component
const TableDoc: React.FC = () => {
  return (
    <ComponentDocLayout
      title="Table Documentation"
      description={description}
      customProps={customProps}
      nativeProps={nativeProps}
      examples={[
        {
          label: "Selectable Table with Custom Components",
          code: tableCode,
          element: <TableExample />,
        },
      ]}
    />
  );
};

export default TableDoc;
