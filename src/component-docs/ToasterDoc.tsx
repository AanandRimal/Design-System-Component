// components/docs/ToasterDoc.tsx
import React from "react";
import { Space } from "antd";
import ComponentDocLayout from "./ComponentDocLayout";
import Toaster from "../components/toaster/Toaster";
import Button from "../components/button/Button";
import Badge from "../components/badge/Badge";

const ToasterDoc: React.FC = () => {
  const description = (
    <p className="text-base leading-relaxed">
      The <Badge type="filled" status="neutral" dot>Toaster</Badge> component is a styled wrapper around Ant Design's{" "}
      <Badge type="filled" status="neutral" dot>Alert</Badge>, designed for transient feedback messages like success, warnings, errors, and more. It supports all native props from{" "}
      <Badge type="filled" status="neutral" dot>Alert</Badge>, while introducing a custom styling prop{" "}
      <Badge type="filled" status="info">CustomType</Badge> to align with your design system.
    </p>
  );

  const customProps = (
    <ul className="list-disc list-inside text-base space-y-2">
      <li>
        <strong><Badge type="filled" status="neutral" dot>CustomType</Badge></strong> – Defines visual intent using your theme system. Options include:{" "}
        <Badge type="filled" status="info">primary</Badge>,{" "}
        <Badge type="filled" status="success">success</Badge>,{" "}
        <Badge type="filled" status="warning">warning</Badge>,{" "}
        <Badge type="filled" status="destructive">destructive</Badge>,{" "}
        <Badge type="filled" status="neutral">neutral</Badge>,{" "}
        <Badge type="filled" status="info">info</Badge>.
      </li>
    </ul>
  );

  const nativeProps = (
    <p className="text-base leading-relaxed">
      Supports all native Ant Design{" "}
      <Badge type="filled" status="neutral" dot>Alert</Badge> props including{" "}
      <Badge type="filled" status="neutral" dot>message</Badge>,{" "}
      <Badge type="filled" status="neutral" dot>description</Badge>,{" "}
      <Badge type="filled" status="neutral" dot>closable</Badge>,{" "}
      <Badge type="filled" status="neutral" dot>type</Badge>,{" "}
      <Badge type="filled" status="neutral" dot>showIcon</Badge>,{" "}
      <Badge type="filled" status="neutral" dot>action</Badge>, and more.
    </p>
  );

  const toasterExample = (type: any) => (
    <Toaster
      CustomType={type}
      message="Toaster Title"
      description="This is the toaster message."
      showIcon
      closable
      action={
        <Space>
          <Button Customtype="secondary">Undo</Button>
        </Space>
      }
    />
  );

  const examples = [
    {
      label: "Primary Toaster",
      code: `
<Toaster
  CustomType="primary"
  message="Toaster Title"
  description="This is the toaster message."
  showIcon
  closable
  action={<Space><Button Customtype="secondary">Undo</Button></Space>}
/>`,
      element: toasterExample("primary"),
    },
    {
      label: "Success Toaster",
      code: `
<Toaster
  CustomType="success"
  message="Success"
  description="Action completed successfully."
  showIcon
  closable
/>`,
      element: toasterExample("success"),
    },
    {
      label: "Warning Toaster",
      code: `
<Toaster
  CustomType="warning"
  message="Warning"
  description="This action may have consequences."
  showIcon
  closable
/>`,
      element: toasterExample("warning"),
    },
    {
      label: "Destructive Toaster",
      code: `
<Toaster
  CustomType="destructive"
  message="Error"
  description="Something went wrong."
  showIcon
  closable
/>`,
      element: toasterExample("destructive"),
    },
    {
      label: "Neutral Toaster",
      code: `
<Toaster
  CustomType="neutral"
  message="FYI"
  description="This is a neutral informational message."
  showIcon
/>`,
      element: toasterExample("neutral"),
    },
  ];

  const extra = (
    <div className="text-base leading-relaxed">
      <h3 className="text-lg font-semibold mb-2">Use Cases</h3>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Show success messages after user actions.</li>
        <li>Warn users about irreversible steps.</li>
        <li>Communicate errors and allow corrective actions.</li>
        <li>Inform users with neutral or informative notices.</li>
      </ul>
      <p>
        Since <code>Toaster</code> wraps Ant Design's <code>Alert</code>, it inherits all native behavior, making it simple to adopt while allowing consistent styling through your <code>CustomType</code> system.
      </p>
    </div>
  );

  return (
    <ComponentDocLayout
      title="Toaster Documentation"
      description={description}
      customProps={customProps}
      nativeProps={nativeProps}
      examples={examples}
      extra={extra}
    />
  );
};

export default ToasterDoc;
