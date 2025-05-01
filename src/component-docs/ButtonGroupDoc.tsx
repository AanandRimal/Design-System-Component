// components/docs/ButtonGroupDoc.tsx
import React from "react";
import ComponentDocLayout from "./ComponentDocLayout";
import ButtonGroup from "../components/button-group/ButtonGroup";
import { Icon } from "@iconify/react";
import Badge from "../components/badge/Badge";

const description = (
  <div className="text-base leading-relaxed space-y-4">
    <p>
      The <Badge type="filled" status="neutral" dot>ButtonGroup</Badge> component is a horizontal grouping of buttons 
      designed to appear visually connected, maintaining consistent spacing and border control.
    </p>
    <p>
      It supports both <strong>solid</strong> and <strong>outline</strong> styles and allows a consistent <code>customSize</code> 
      across all grouped buttons. It accepts an array of button objects with individual <code>label</code>, optional <code>leftIcon</code>, 
      and <code>onClick</code> handlers.
    </p>
  </div>
);

const customProps = (
  <ul className="list-disc list-inside text-base space-y-2">
    <li>
      <strong><Badge type="filled" status="neutral" dot>type</Badge></strong> – Determines the visual appearance of grouped buttons.
      Options:
      <Badge type="filled" status="primary">solid</Badge>,{" "}
      <Badge type="filled" status="neutral">outline</Badge>
    </li>
    <li>
      <strong><Badge type="filled" status="neutral" dot>customSize</Badge></strong> – Controls height and spacing of buttons.
      Supported sizes:{" "}
      <Badge type="filled" status="info">32</Badge>,{" "}
      <Badge type="filled" status="info">36</Badge>,{" "}
      <Badge type="filled" status="info">40</Badge>,{" "}
      <Badge type="filled" status="info">44</Badge>,{" "}
      <Badge type="filled" status="info">48</Badge>
    </li>
    <li>
      <strong><Badge type="filled" status="neutral" dot>buttons</Badge></strong> – An array of objects, each containing:
      <ul className="ml-4 list-disc">
        <li><code>label</code> – Text to display inside the button.</li>
        <li><code>leftIcon?</code> – Optional icon element shown before the label.</li>
        <li><code>onClick?</code> – Optional click handler for each button.</li>
      </ul>
    </li>
    <li>
      <strong><Badge type="filled" status="neutral" dot>className</Badge></strong> – Optional styling for the wrapper element.
    </li>
  </ul>
);

const nativeProps = (
  <p className="text-base leading-relaxed">
    Each individual button in the group supports native Ant Design button props via our internal <code>&lt;Button /&gt;</code> component.
  </p>
);

const examples = [
  {
    label: "Solid Button Group (Size 40)",
    code: `<ButtonGroup
  type="solid"
  customSize={40}
  buttons={[
    { label: "Left", leftIcon: <Icon icon="ph:arrow-left-bold" /> },
    { label: "Middle" },
    { label: "Right", leftIcon: <Icon icon="ph:arrow-right-bold" /> }
  ]}
/>`,
    element: (
      <ButtonGroup
        type="solid"
        customSize={40}
        buttons={[
          { label: "Left", leftIcon: <Icon icon="ph:arrow-left-bold" /> },
          { label: "Middle" },
          { label: "Right", leftIcon: <Icon icon="ph:arrow-right-bold" /> },
        ]}
      />
    ),
  },
  {
    label: "Outline Button Group (Size 36)",
    code: `<ButtonGroup
  type="outline"
  customSize={36}
  buttons={[
    { label: "One" },
    { label: "Two" },
    { label: "Three" }
  ]}
/>`,
    element: (
      <ButtonGroup
        type="outline"
        customSize={36}
        buttons={[
          { label: "One" },
          { label: "Two" },
          { label: "Three" },
        ]}
      />
    ),
  },
];

const ButtonGroupDoc: React.FC = () => {
  return (
    <ComponentDocLayout
      title="Button Group Documentation"
      description={description}
      customProps={customProps}
      nativeProps={nativeProps}
      examples={examples}
    />
  );
};

export default ButtonGroupDoc;
