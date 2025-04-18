// import React from "react";
// import { ConfigProvider, Table } from "antd";
// import type { ColumnsType } from "antd/es/table";
// import CheckBox from "../components/checkbox/CheckBox"; // Assuming you have this custom CheckBox component
// import Avatar from "../components/avatars//Avatar";     // Assuming you have this custom Avatar component
// const dataSource= [
//   {
//     key: "1",
//     checkboxLabel: "Option 1",
//     name: "Kavya",
//     avatarText: "K",
//   },
//   {
//     key: "2",
//     checkboxLabel: "Option 2",
//     name: "Ravi",
//     avatarText: "R",
//   },
//   {
//     key: "3",
//     checkboxLabel: "Option 3",
//     name: "Anita",
//     avatarText: "A",
//   },
// ];

// const columns= [
//   {
//     title: "CheckBox",
//     dataIndex: "checkboxLabel",
//     key: "checkbox",
//     render: (text: string) => (
//       <CheckBox size={20}>{text}</CheckBox>
//     ),
//   },
//   {
//     title: "Name",
//     dataIndex: "name",
//     key: "name",
//     render: (_: string, record: DataType) => (
//       <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//         <Avatar customSize={24} dot>
//           {record.avatarText}
//         </Avatar>
//         <span>{record.name}</span>
//       </div>
//     ),
//   },
// ];

// const TableComponent = () => {
//   return (
//     <ConfigProvider
//       theme={{
//         // Add your token overrides here
//       }}
//     >
//       <Table
//         dataSource={dataSource}
//         columns={columns}
//         pagination={false}
//         bordered
//       />
//     </ConfigProvider>
//   );
// };

// export default TableComponent;
import React from "react";
import { ConfigProvider,Table as AntTable,TableProps as AntTableProps } from "antd";
import { useTheme } from "../../context-hook/ThemeProvider";
import { Themes } from "../foundation/Theme";

const Table: React.FC<AntTableProps> = (props) => {
    const { themeMode } = useTheme();
    const currentTheme = Themes[themeMode];
  return (
    <ConfigProvider
      theme={{
        token: {

        },
        components:{
            Table: {
                headerBg: currentTheme.fill.f2,
                headerColor:currentTheme.text.t2Component,
                borderColor:currentTheme.stroke.decorative,
                colorBgContainer:currentTheme.background.bg1,
                rowHoverBg:currentTheme.background.bg2,
                rowSelectedHoverBg:currentTheme.background.bg2,
                colorText:currentTheme.text.t2Component,
                headerSplitColor:currentTheme.stroke.strong,
                cellPaddingBlock:8,
                cellPaddingInline:10,
                rowSelectedBg:currentTheme.background.bg3,
            },
          },
      }}
    >
      <AntTable {...props} />
    </ConfigProvider>
  );
};
export default Table;