// components/docs/SwitchDoc.tsx
import React from "react";
import Switch from "../components/switch/Switch";
import Badge from "../components/badge/Badge";
import ComponentDocLayout from "./ComponentDocLayout";

const description = (
  <p className="text-base leading-relaxed">
    The <Badge type="filled" status="primary">Switch</Badge> component is an extended version of Ant Design’s switch. 
    It introduces a custom <Badge type="stroke" status="success">customSize</Badge> prop for consistent sizing across the design system while preserving 
    all native Ant Design <code>Switch</code> behaviors.
  </p>
);

const customProps = (
  <ul className="list-disc list-inside text-base space-y-2">
    <li>
      <strong><Badge type="filled" status="success">customSize</Badge></strong> – Controls the size of the switch. 
      Accepts  
        <Badge type="filled" status="info">20</Badge>,{" "}
        <Badge type="filled" status="info">24</Badge>. Ensures visual consistency with the rest of your components.
    </li>
    <li>
      <strong><Badge type="stroke" status="info">All native Ant Design Switch props supported</Badge></strong> – Includes <code>checked</code>, <code>defaultChecked</code>, 
      <code>disabled</code>, <code>onChange</code>, etc.
    </li>
  </ul>
);

const nativeProps = (
  <p className="text-base leading-relaxed">
    All native Ant Design <code>Switch</code> props are fully supported in this customized version.
  </p>
);

const examples = [
  {
    label: "Default Switch",
    code: `<Switch customSize={20} />\n<span>Switch Label Here</span>`,
    element: (
      <div className="flex items-center gap-3">
        <Switch customSize={20} />
        <span>Switch Label Here</span>
      </div>
    ),
  },
  {
    label: "Checked Switch",
    code: `<Switch customSize={20} checked />\n<span>Switch Label Here</span>`,
    element: (
      <div className="flex items-center gap-3">
        <Switch customSize={20} checked />
        <span>Switch Label Here</span>
      </div>
    ),
  },
  {
    label: "Disabled Switch",
    code: `<Switch customSize={20} disabled />\n<span>Switch Label Here</span>`,
    element: (
      <div className="flex items-center gap-3">
        <Switch customSize={20} disabled />
        <span>Switch Label Here</span>
      </div>
    ),
  },
  {
    label: "Checked & Disabled Switch",
    code: `<Switch customSize={20} checked disabled />\n<span>Switch Label Here</span>`,
    element: (
      <div className="flex items-center gap-3">
        <Switch customSize={20} checked disabled />
        <span>Switch Label Here</span>
      </div>
    ),
  },
];

const SwitchDoc: React.FC = () => {
  return (
    <ComponentDocLayout
      title="Switch Documentation"
      description={description}
      customProps={customProps}
      nativeProps={nativeProps}
      examples={examples}
    />
  );
};

export default SwitchDoc;
