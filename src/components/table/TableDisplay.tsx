import React, { useState } from 'react';
import Table from './Table';
import Checkbox from '../checkbox/CheckBox'; // your custom checkbox
import Avatar from '../avatars/Avatar';
import Badge from '../badge/Badge';
import { LeftIcon } from '../icons/LeftIcon';
import type { ColumnsType } from 'antd/es/table';

const initialData = Array.from({ length: 15 }, (_, i) => ({
  key: i,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  phone: '9853342322',
  date: 'Jan 24, 2025',
  text: 'Table Label',
}));

const TableDisplayComponent = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [data] = useState(initialData);
  const onSelectAllHandler = (checked: boolean) => {
    const newKeys = checked ? data.map(item => item.key) : [];
    setSelectedRowKeys(newKeys);
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
          const checked = e.target.checked;
          const newSelected = checked
            ? [...selectedRowKeys, record.key]
            : selectedRowKeys.filter(k => k !== record.key);
          setSelectedRowKeys(newSelected);
        }}
      />
    ),
    columnTitle: () => {
      const isIndeterminate =
        selectedRowKeys.length > 0 && selectedRowKeys.length < data.length;
      const isChecked = selectedRowKeys.length === data.length;
  
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
      showSorterTooltip:false,
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
      showSorterTooltip:false,
      render: (email: string) => <span>{email}</span>,
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
          <Badge type="stroke" size={20}>
            Badge
          </Badge>
        </div>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      sorter: true,
      showSorterTooltip:false,
      render: (date: string) => <span>{date}</span>,
    },
    {
      title: 'Badges',
      sorter: true,
      showSorterTooltip:false,
      render: () => (
        <div className="flex flex-row gap-3">
          <Badge size={20} type="stroke" dot>
            Badge
          </Badge>
          <Badge size={20} type="stroke" dot>
            Badge
          </Badge>
          <Badge size={20} type="stroke" dot>
            Badge
          </Badge>
        </div>
      ),
    },
    {
      title: 'Action',
      render: () => (
        <div className="flex flex-row gap-2">
          <LeftIcon />
          <LeftIcon />
          <LeftIcon />
        </div>
      ),
    },
    {
      title: 'Text',
      dataIndex: 'text',
      render: (text: string) => <span>{text}</span>,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey="key"
      pagination={false}
      bordered
      rowSelection={rowSelection}
    />
  );
};

export default TableDisplayComponent;
// import React, { useState } from 'react';
// import Table from './Table';
// import Avatar from '../avatars/Avatar';
// import Badge from '../badge/Badge';
// import { LeftIcon } from '../icons/LeftIcon';
// import type { ColumnsType } from 'antd/es/table';

// const initialData = Array.from({ length: 15 }, (_, i) => ({
//   key: i,
//   name: `User ${i + 1}`,
//   email: `user${i + 1}@example.com`,
//   phone: '9853342322',
//   date: 'Jan 24, 2025',
//   text: 'Table Label',
// }));

// const TableDisplayComponent = () => {
//   const [data, setData] = useState(initialData);
//   const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

//   const rowSelection = {
//     selectedRowKeys,
//     onChange: (newSelectedRowKeys: React.Key[]) => {
//       setSelectedRowKeys(newSelectedRowKeys);
//     },
//   };

//   const columns: ColumnsType<any> = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       sorter: true,
//       render: (name: string) => (
//         <div className="flex items-center gap-2">
//           <Avatar customSize={24}>K</Avatar>
//           <span>{name}</span>
//         </div>
//       ),
//     },
//     {
//       title: 'Email',
//       dataIndex: 'email',
//       sorter: true,
//       render: (email: string) => <span>{email}</span>,
//     },
//     {
//       title: 'Phone Number',
//       dataIndex: 'phone',
//       render: (phone: string) => (
//         <div className="flex items-center gap-2">
//           <img
//             src="https://flagcdn.com/w40/us.png"
//             alt="USA"
//             className="w-4 h-4 rounded-full"
//           />
//           <span>{phone}</span>
//           <Badge type="stroke" size={20}>
//             Badge
//           </Badge>
//         </div>
//       ),
//     },
//     {
//       title: 'Date',
//       dataIndex: 'date',
//       sorter: true,
//       render: (date: string) => <span>{date}</span>,
//     },
//     {
//       title: 'Badges',
//       sorter: true,
//       render: () => (
//         <div className="flex flex-row gap-3">
//           <Badge size={20} type="stroke" dot>
//             Badge
//           </Badge>
//           <Badge size={20} type="stroke" dot>
//             Badge
//           </Badge>
//           <Badge size={20} type="stroke" dot>
//             Badge
//           </Badge>
//         </div>
//       ),
//     },
//     {
//       title: 'Action',
//       render: () => (
//         <div className="flex flex-row gap-2">
//           <LeftIcon />
//           <LeftIcon />
//           <LeftIcon />
//         </div>
//       ),
//     },
//     {
//       title: 'Text',
//       dataIndex: 'text',
//       render: (text: string) => <span>{text}</span>,
//     },
//   ];

//   return (
//     <Table
//       columns={columns}
//       dataSource={data}
//       rowKey="key"
//       pagination={false}
//       bordered
//       rowSelection={rowSelection}
//     />
//   );
// };

// export default TableDisplayComponent;
