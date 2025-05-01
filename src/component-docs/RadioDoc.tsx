import React from "react";
import ComponentDocLayout from "./ComponentDocLayout";
import Radio from "../components/Radio";
import Badge from "../components/badge/Badge";

const description = (
  <p className="text-base leading-relaxed">
    The <Badge type="filled" status="primary">Radio</Badge> component extends Ant Design's default radio with an extra 
    <Badge type="filled" status="success">size</Badge> prop, allowing for visual scaling. 
    All native props from Ant Design’s <code>Radio</code> are supported.
  </p>
);

const customProps = (
  <ul className="list-disc list-inside text-base space-y-2">
    <li>
      <strong><Badge type="filled" status="neutral" dot>size</Badge></strong> – Accepts         <Badge type="filled" status="info">16</Badge>,{" "}
        <Badge type="filled" status="info">20</Badge>, or {" "}
        <Badge type="filled" status="info">24</Badge>. Controls the size of the radio icon.
    </li>
    <li>
      <strong><Badge type="stroke" status="info" dot>All Ant Design Radio props supported</Badge></strong> – Props like <code>checked</code>, <code>disabled</code>, <code>onChange</code>, etc. are fully functional.
    </li>
  </ul>
);

const nativeProps = (
  <p className="text-base leading-relaxed">
    All native Ant Design <code>Radio</code> props are supported. 
    This component simply adds optional scaling via the <code>size</code> prop without changing expected behavior.
  </p>
);

const examples = [
  {
    label: "Default Radio",
    code: `<Radio size={20}>This is the Radio Label</Radio>`,
    element: <Radio size={20}>This is the Radio Label</Radio>,
  },
  {
    label: "Checked Radio",
    code: `<Radio size={20} checked>This is the Radio Label</Radio>`,
    element: <Radio size={20} checked>This is the Radio Label</Radio>,
  },
  {
    label: "Disabled Radio",
    code: `<Radio size={20} disabled>This is the Radio Label</Radio>`,
    element: <Radio size={20} disabled>This is the Radio Label</Radio>,
  },
  {
    label: "Size 16 Radio",
    code: `<Radio size={16}>Radio Size 16</Radio>`,
    element: <Radio size={16}>Radio Size 16</Radio>,
  },
  {
    label: "Size 24 Radio",
    code: `<Radio size={24}>Radio Size 24</Radio>`,
    element: <Radio size={24}>Radio Size 24</Radio>,
  },
];

const RadioDoc: React.FC = () => {
  return (
    <ComponentDocLayout
      title="Radio Documentation"
      description={description}
      customProps={customProps}
      nativeProps={nativeProps}
      examples={examples}
    />
  );
};

export default RadioDoc;
