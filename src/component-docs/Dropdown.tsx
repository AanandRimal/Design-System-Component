// components/docs/DropdownDoc.tsx
import React from "react";
import ComponentDocLayout from "./ComponentDocLayout";
import Badge from "../components/badge/Badge";
import Dropdown from "../components/drop-down/Dropdown";
import Button from "../components/button/Button";
import { LeftIcon } from "../components/icons/LeftIcon";
import type { MenuProps } from "antd";

const items = [
  { key: "1", label: "Option 1" },
  { key: "2", label: "Option 2" },
  { key: "3", label: "Option 3" },
];

const itemsWithIcon = [
  { key: "1", label: "Option 1", icon: <LeftIcon /> },
  { key: "2", label: "Option 2", icon: <LeftIcon /> },
  { key: "3", label: "Option 3", icon: <LeftIcon /> },
];

const multipleSectionItems: MenuProps["items"] = [
  {
    type: "group",
    label: "Dropdown Heading",
    key: "group-1",
    children: [
      { key: "1-1", label: "Option A", icon: <LeftIcon /> },
      { key: "1-2", label: "Option B", icon: <LeftIcon /> },
    ],
  },
  {
    type: "group",
    label: "Dropdown Heading",
    key: "group-2",
    children: [
      { key: "2-1", label: "Option A", icon: <LeftIcon /> },
      { key: "2-2", label: "Option B", icon: <LeftIcon /> },
    ],
  },
  {
    key: "2",
    label: "Sub menu",
    children: [
      { key: "2-1", label: "Option C" },
      { key: "2-2", label: "Option D" },
    ],
  },
  {
    key: "3",
    label: "Option 3",
    icon: <LeftIcon />,
  },
  {
    key: "4",
    label: "Option 4",
  },
  {
    key: "5",
    label: "Disabled sub menu",
    disabled: true,
    children: [
      { key: "5-1", label: "Option E" },
      { key: "5-2", label: "Option F" },
    ],
  },
];

const DropdownDoc: React.FC = () => {
  const description = (
    <p className="text-base leading-relaxed">
      The <Badge type="filled" status="neutral" dot>Dropdown</Badge> component uses Ant Design’s native Dropdown but is styled according to our design system. It accepts all AntD Dropdown props and is mainly customized by passing in styled <code>items</code> and optional icons.
    </p>
  );

  const customProps = (
    <ul className="list-disc pl-4 text-base space-y-2">
      <li><strong>menu.items</strong>: Array of items to show, supporting <code>label</code>, <code>icon</code>, and <code>children</code> for nesting or grouping.</li>
      <li><strong>placement</strong>: Position of dropdown relative to trigger (e.g., <code>bottomLeft</code>).</li>
      <li>Item icons are styled using our design system components like <code>&lt;LeftIcon /&gt;</code>.</li>
      <li>Supports group headings, submenus, and disabled items out of the box.</li>
    </ul>
  );

  const nativeProps = (
    <p className="text-base">
      Fully supports all <code>Dropdown</code> props from Ant Design like <code>trigger</code>, <code>placement</code>, <code>arrow</code>, <code>onClick</code>, and more.
    </p>
  );

  const examples = [
    {
      label: "Basic Dropdown",
      code: `
<Dropdown menu={{ items }}>
  <Button Customtype="secondary">Open Dropdown</Button>
</Dropdown>`,
      element: (
        <Dropdown menu={{ items }} placement="bottomLeft">
          <Button Customtype="secondary">Open Dropdown</Button>
        </Dropdown>
      ),
    },
    {
      label: "Dropdown with Icons",
      code: `
<Dropdown menu={{ items: itemsWithIcon }}>
  <Button Customtype="secondary" icon={<LeftIcon />}>
    Open Dropdown with icon
  </Button>
</Dropdown>`,
      element: (
        <Dropdown menu={{ items: itemsWithIcon }} placement="bottomLeft">
          <Button Customtype="secondary" icon={<LeftIcon />}>
            Open Dropdown with icon
          </Button>
        </Dropdown>
      ),
    },
    {
      label: "Dropdown with Sections",
      code: `
<Dropdown menu={{ items: multipleSectionItems }}>
  <Button Customtype="secondary" icon={<LeftIcon />}>
    Dropdown with sections
  </Button>
</Dropdown>`,
      element: (
        <Dropdown menu={{ items: multipleSectionItems }} placement="bottomLeft">
          <Button Customtype="secondary" icon={<LeftIcon />}>
            Dropdown with sections
          </Button>
        </Dropdown>
      ),
    },
  ];

  const extra = (
    <div className="space-y-2 text-base leading-relaxed">
      <p>
        To maintain layout consistency, every dropdown item (with or without icon) uses an <strong>8px gap</strong> between icon and label.
      </p>
      <p>
        Our dropdown automatically inherits spacing, colors, and typography from the design system. For advanced logic or conditional visibility, use Ant Design’s native features.
      </p>
    </div>
  );

  return (
    <ComponentDocLayout
      title="Dropdown Documentation"
      description={description}
      customProps={customProps}
      nativeProps={nativeProps}
      examples={examples}
      extra={extra}
    />
  );
};

export default DropdownDoc;
