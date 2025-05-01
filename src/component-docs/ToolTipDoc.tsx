// components/docs/TooltipDoc.tsx
import React from "react";
import {  Space } from "antd";
import ComponentDocLayout from "./ComponentDocLayout";
import Tooltip from "../components/tooltip/TootTip";
import Badge from "../components/badge/Badge";
import Button from "../components/button/Button";

const TooltipDoc: React.FC = () => {
  const description = (
    <p className="text-base leading-relaxed">
      The <Badge type="filled" status="neutral" dot>Tooltip</Badge> component is a customized wrapper around Ant Design's{" "}
      <Badge type="filled" status="neutral" dot>Tooltip</Badge>. It replaces the native{" "}
      <Badge type="filled" status="neutral">title</Badge> prop with{" "}
      <Badge type="filled" status="info">customTitle</Badge> and supports an optional{" "}
      <Badge type="filled" status="info">customDescription</Badge>, which appears below the title.
      This ensures all tooltips follow your design system's typography and layout.
    </p>
  );

  const customProps = (
    <ul className="list-disc list-inside text-base space-y-2">
      <li>
        <strong><Badge type="filled" status="info">customTitle</Badge></strong> – Replaces AntD’s native <code>title</code> and uses design-system styling for headings.
      </li>
      <li>
        <strong><Badge type="filled" status="info">customDescription</Badge></strong> – Optional body text shown below the tooltip title, styled per your design system.
      </li>
    </ul>
  );

  const nativeProps = (
    <p className="text-base leading-relaxed">
      All native Ant Design{" "}
      <Badge type="filled" status="neutral" dot>Tooltip</Badge> props are supported — such as{" "}
      <code>placement</code>, <code>arrow</code>, <code>trigger</code>, <code>open</code>, <code>color</code>, and more.
    </p>
  );

  const placements = [
    "topLeft", "top", "topRight",
    "bottomLeft", "bottom", "bottomRight",
    "left", "right"
  ];

  const examples = [
    {
      label: "Custom Title Only",
      code: `
<Tooltip customTitle="Hello">
  <Button Customtype="primary">Hover me</Button>
</Tooltip>`,
      element: (
        <Tooltip customTitle="Hello">
          <Button Customtype="primary">Hover me</Button>
        </Tooltip>
      ),
    },
    {
      label: "Custom Title + Description",
      code: `
<Tooltip
  customTitle="Save Changes"
  customDescription="This will overwrite the existing file."
>
  <Button Customtype="primary">Hover me</Button>
</Tooltip>`,
      element: (
        <Tooltip
          customTitle="Save Changes"
          customDescription="This will overwrite the existing file."
        >
          <Button Customtype="primary">Hover me</Button>
        </Tooltip>
      ),
    },
    {
      label: "With Placement Variants",
      code: `// Supported placements: top, bottom, left, right, etc.`,
      element: (
        <Space wrap className="max-w-[600px]">
          {placements.map((placement) => (
            <Tooltip
              key={placement}
              customTitle={`Placement: ${placement}`}
              placement={placement as any}
            >
              <Button Customtype="secondary">{placement}</Button>
            </Tooltip>
          ))}
        </Space>
      ),
    },
    {
      label: "No Arrow Tooltip ",
      code: `
<Tooltip customTitle="No Arrow" arrow={false} >
  <Button Customtype="primary">Hover me</Button>
</Tooltip>`,
      element: (
        <Tooltip customTitle="No Arrow" arrow={false} >
          <Button Customtype="primary">Hover me</Button>
        </Tooltip>
      ),
    },
  ];

  const extra = (
    <div className="text-base leading-relaxed space-y-4">
      <h3 className="text-lg font-semibold">Use Cases</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Explain icons or actions on hover in compact UIs.</li>
        <li>Provide helpful details or warnings without cluttering the layout.</li>
        <li>Enhance accessibility by describing button or link intent.</li>
      </ul>
      <p>
        Your <code>Tooltip</code> component ensures consistent visual language while maintaining the flexibility of Ant Design’s native behavior.
      </p>
    </div>
  );

  return (
    <ComponentDocLayout
      title="Tooltip Documentation"
      description={description}
      customProps={customProps}
      nativeProps={nativeProps}
      examples={examples}
      extra={extra}
    />
  );
};

export default TooltipDoc;
