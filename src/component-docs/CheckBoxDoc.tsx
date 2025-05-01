import React from "react";
import ComponentDocLayout from "./ComponentDocLayout";
import Badge from "../components/badge/Badge";
import CheckBox from "../components/checkbox/CheckBox";
import { Checkbox } from "antd";
const GroupedCheckboxExample = () => {
    const [checkedList, setCheckedList] = React.useState<string[]>(["Option A"]);
    const options = ["Option A", "Option B"];
    const allChecked = checkedList.length === options.length;
    const isIndeterminate = checkedList.length > 0 && !allChecked;
  
    return (
      <div className="flex flex-col gap-2">
        <CheckBox
          size={20}
          indeterminate={isIndeterminate}
          checked={allChecked}
          onChange={(e) => {
            setCheckedList(e.target.checked ? options : []);
          }}
        >
          Check All
        </CheckBox>
        <Checkbox.Group
          value={checkedList}
          onChange={(list) => setCheckedList(list as string[])}
        >
          {options.map((opt) => (
            <CheckBox size={20} key={opt} value={opt}>
              {opt}
            </CheckBox>
          ))}
        </Checkbox.Group>
      </div>
    );
  };
  
const CheckboxDoc: React.FC = () => {
  const description = (
    <p className="text-base leading-relaxed">
      The <Badge type="filled" status="neutral" dot>CheckBox</Badge> component extends Ant Design's{" "}
      <Badge type="filled" status="neutral" dot>Checkbox</Badge> by introducing a new{" "}
      <Badge type="filled" status="info">size</Badge> prop and customizing indeterminate styles. It supports grouped behavior using{" "}
      <Badge type="filled" status="neutral" dot>Checkbox.Group</Badge> and enables features like Check-All and partial selection using the{" "}
      <Badge type="filled" status="info">indeterminate</Badge> prop.
    </p>
  );

  const customProps = (
    <ul className="list-disc list-inside text-base space-y-2">
      <li>
        <strong><Badge type="filled" status="neutral" dot>size</Badge></strong> – Custom checkbox sizing:{" "}
        <Badge type="filled" status="info">16</Badge>,{" "}
        <Badge type="filled" status="info">20</Badge>,{" "}
        <Badge type="filled" status="info">24</Badge>
      </li>
      <li>
        <strong><Badge type="filled" status="neutral" dot>indeterminate</Badge></strong> – Boolean prop for partial selection (useful for Check-All logic).
      </li>
    </ul>
  );

  const nativeProps = (
    <p className="text-base leading-relaxed">
      All native Ant Design <Badge type="filled" status="neutral" dot>Checkbox</Badge> props are supported including{" "}
      <Badge type="filled" status="neutral" dot>disabled</Badge>,{" "}
      <Badge type="filled" status="neutral" dot>checked</Badge>,{" "}
      <Badge type="filled" status="neutral" dot>onChange</Badge>, etc.
    </p>
  );

  const examples = [
    {
      label: "Different Sizes",
      code: `
<CheckBox size={16}>Small</CheckBox>
<CheckBox size={20}>Medium</CheckBox>
<CheckBox size={24}>Large</CheckBox>`,
      element: (
        <div className="flex flex-col gap-2">
          <CheckBox size={16}>Small</CheckBox>
          <CheckBox size={20}>Medium</CheckBox>
          <CheckBox size={24}>Large</CheckBox>
        </div>
      ),
    },
    {
        label: "Indeterminate + Grouped Checkboxes",
        code: `
      const [checkedList, setCheckedList] = useState<string[]>(["Option A"]);
      const options = ["Option A", "Option B"];
      const allChecked = checkedList.length === options.length;
      const isIndeterminate = checkedList.length > 0 && !allChecked;
      
      <CheckBox
        size={20}
        indeterminate={isIndeterminate}
        checked={allChecked}
        onChange={(e) => {
          setCheckedList(e.target.checked ? options : []);
        }}
      >
        Check All
      </CheckBox>
      <Checkbox.Group
        value={checkedList}
        onChange={(list) => setCheckedList(list as string[])}
      >
        {options.map((opt) => (
          <CheckBox size={20} key={opt} value={opt}>{opt}</CheckBox>
        ))}
      </Checkbox.Group>
      `,
   element:<GroupedCheckboxExample />,
    },
      
    {
      label: "Disabled Checkbox",
      code: `<CheckBox size={20} disabled>Disabled Checkbox</CheckBox>`,
      element: <CheckBox size={20} disabled>Disabled Checkbox</CheckBox>,
    },
  ];

  const extra = (
    <div className="text-base leading-relaxed">
      <h3 className="font-semibold text-lg mb-2">Checkbox Group Behavior</h3>
      <p className="mb-3">
        We use Ant Design’s <code>Checkbox.Group</code> to build grouped checkboxes. It enables functionality such as:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li><strong>Batch selection</strong> using a "Check All" checkbox.</li>
        <li><strong>Indeterminate state</strong> when not all items are checked.</li>
        <li>Integration with controlled React state for custom logic.</li>
      </ul>
      <p>
        Indeterminate state is controlled by checking whether selected items are a subset of total options, and is toggled using the <code>indeterminate</code> boolean.
      </p>
    </div>
  );

  return (
    <ComponentDocLayout
      title="Checkbox Documentation"
      description={description}
      customProps={customProps}
      nativeProps={nativeProps}
      examples={examples}
      extra={extra}
    />
  );
};

export default CheckboxDoc;
