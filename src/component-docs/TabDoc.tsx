// components/docs/TabsDoc.tsx
import React, { useState } from "react";
import ComponentDocLayout from "./ComponentDocLayout";
import Tabs from "../components/tabs/Tabs";
import Badge from "../components/badge/Badge";
import TabCustomIcon from "../components/icons/TabCustomIcon";

const TabDisplayExamples: React.FC = () => {
  const [boxactiveKey, setboxActiveKey] = useState("1");
  const [underlineactiveKey, setunderlineActiveKey] = useState("1");
  const [ghostactiveKey, setghostActiveKey] = useState("1");

  const tabItems = [
    {
      key: "1",
      label: "Home",
      customIcon: <Badge>22</Badge>,
      icon: <TabCustomIcon />,
      children: "Content for Home",
    },
    {
      key: "2",
      label: "Setting",
      customIcon: <Badge>22</Badge>,
      children: "Content for Settings",
    },
    {
      key: "3",
      label: "Profile",
      customIcon: <Badge>22</Badge>,
      children: "Content for Profile",
    },
    {
      key: "4",
      label: "Notify",
      customIcon: <Badge>22</Badge>,
      children: "Content for Notify",
    },
    {
      key: "5",
      label: "Message",
      customIcon: <Badge>22</Badge>,
      children: "Content for Message",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 p-4">
      <div>
        <h2 className="text-lg font-semibold mb-4">Box Tab</h2>
        <Tabs Customtype="box" items={tabItems} activeKey={boxactiveKey} onChange={setboxActiveKey} />
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-4">Underline Tab</h2>
        <Tabs Customtype="underline" items={tabItems} activeKey={underlineactiveKey} onChange={setunderlineActiveKey} />
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-4">Ghost Tab</h2>
        <Tabs Customtype="ghost" items={tabItems} activeKey={ghostactiveKey} onChange={setghostActiveKey} />
      </div>
    </div>
  );
};

const TabsDoc: React.FC = () => {
  const description = (
    <p className="text-base leading-relaxed">
      Our <Badge type="filled" status="neutral" dot>Tabs</Badge> component builds on Ant Design’s{" "}
      <Badge type="filled" status="neutral" dot>Tabs</Badge> and adds 3 different types  using the{" "}
      <Badge type="filled" status="info">Customtype</Badge> prop, along with the ability to display a{" "}
      <Badge type="filled" status="info">customIcon</Badge> inside each tab.
    </p>
  );

  const customProps = (
    <ul className="list-disc list-inside text-base space-y-2">
      <li>
        <strong><Badge type="filled" status="neutral" dot>Customtype</Badge></strong> – Defines the visual style of the tab:{" "}
        <Badge type="filled" status="info">box</Badge>,{" "}
        <Badge type="filled" status="info">underline</Badge>, or{" "}
        <Badge type="filled" status="info">ghost</Badge>.
      </li>
      <li>
        <strong><Badge type="filled" status="neutral" dot>customIcon</Badge></strong> – Allows injecting a custom icon or indicator (e.g., <Badge>22</Badge>) into individual tab items we have <Badge>icon</Badge>prop of defualt Tab but if we want to add another icon we use customIcon prop .This customIcon prop is added inside items.
      </li>
    </ul>
  );

  const nativeProps = (
    <p className="text-base leading-relaxed">
      Supports all native Ant Design <Badge type="filled" status="neutral" dot>Tabs</Badge> props like{" "}
      <Badge type="filled" status="neutral" dot>activeKey</Badge>,{" "}
      <Badge type="filled" status="neutral" dot>onChange</Badge>,{" "}
      <Badge type="filled" status="neutral" dot>items</Badge>, etc.
    </p>
  );

  const examples = [
    {
      label: "Box, Underline, and Ghost Tabs",
      code: `
import React, { useState } from "react";
import Tabs from "../components/tabs/Tabs";
import Badge from "../components/badge/Badge";
import TabCustomIcon from "../components/icons/TabCustomIcon";
const [boxactiveKey, setboxActiveKey] = useState("1");
  const [underlineactiveKey, setunderlineActiveKey] = useState("1");
  const [ghostactiveKey, setghostActiveKey] = useState("1");
const tabItems = [
  {
    key: "1",
    label: "Home",
    icon: <TabCustomIcon />,
    customIcon: <Badge>22</Badge>,
    children: "Content for Home",
  },
  {
    key: "2",
    label: "Setting",
    customIcon: <Badge>22</Badge>,
    children: "Content for Settings",
  },
  ...
];

<Tabs Customtype="box" items={tabItems} activeKey={key} onChange={setKey} />
<Tabs Customtype="underline" items={tabItems} activeKey={key} onChange={setKey} />
<Tabs Customtype="ghost" items={tabItems} activeKey={key} onChange={setKey} />
      `,
      element: <TabDisplayExamples />,
    },
  ];

  const extra = (
    <div className="text-base leading-relaxed">
      <h3 className="text-lg font-semibold mb-2">Custom Tab Styling</h3>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li><strong>Box</strong>: Solid styled tabs with background highlighting for active state.</li>
        <li><strong>Underline</strong>: Minimal tab with active tab highlighted via underline.</li>
        <li><strong>Ghost</strong>: No border or background, ideal for secondary navs.</li>
      </ul>
      <p>
        Each tab item can also show a <code>customIcon</code>—useful for counters, badges, or indicators—next to the label or icon.
      </p>
    </div>
  );

  return (
    <ComponentDocLayout
      title="Tabs Documentation"
      description={description}
      customProps={customProps}
      nativeProps={nativeProps}
      examples={examples}
      extra={extra}
    />
  );
};

export default TabsDoc;
