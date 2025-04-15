import React, { useState } from "react";
import { Table, Checkbox } from "antd";
import CheckBox from "../components/checkbox/CheckBox"; // your custom checkbox component

const CheckboxGroup = Checkbox.Group;

const options = ["Option A", "Option B", "Option C"];
const checkboxSizes = [16, 20, 24];

const CheckboxMatrixWithCheckAll: React.FC = () => {
  const [checkedLists, setCheckedLists] = useState<Record<number, string[]>>(() =>
    Object.fromEntries(checkboxSizes.map(size => [size, []]))
  );

  const onGroupChange = (size: number, list: string[]) => {
    setCheckedLists(prev => ({
      ...prev,
      [size]: list,
    }));
  };

  const onCheckAllChange = (size: number, checked: boolean) => {
    setCheckedLists(prev => ({
      ...prev,
      [size]: checked ? options : [],
    }));
  };

  const checkboxColumns = [
    { title: "Size", dataIndex: "size", key: "size", width: 100 },
    { title: "Default", dataIndex: "default", key: "default" },
    { title: "Indeterminate (Check All)", dataIndex: "indeterminate", key: "indeterminate" },
    { title: "Disabled", dataIndex: "disabled", key: "disabled" },
  ];

  const checkboxData = checkboxSizes.map((size) => {
    const checkedList = checkedLists[size];
    const allChecked = checkedList.length === options.length;
    const isIndeterminate = checkedList.length > 0 && !allChecked;

    return {
      key: `checkbox-${size}`,
      size,
      default: <CheckBox size={size}>This is the CheckBox Label</CheckBox>,

      indeterminate: (
        <div>
          <CheckBox
            size={size}
            indeterminate={isIndeterminate}
            checked={allChecked}
            onChange={(e) => onCheckAllChange(size, e.target.checked)}
          >
            Check All
          </CheckBox>
          <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 4 }}>
            <CheckboxGroup
              value={checkedList}
              onChange={(list) => onGroupChange(size, list as string[])}
            >
              {options.map((opt) => (
                <CheckBox key={opt} size={size} value={opt}>
                  {opt}
                </CheckBox>
              ))}
            </CheckboxGroup>
          </div>
        </div>
      ),

      disabled: <CheckBox size={size} disabled>This is the CheckBox Label</CheckBox>,
    };
  });

  return (
    <Table
      columns={checkboxColumns}
      dataSource={checkboxData}
      pagination={false}
      bordered
    />
  );
};

export default CheckboxMatrixWithCheckAll;
