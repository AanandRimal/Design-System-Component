// components/docs/AlertDoc.tsx
import React from "react";
import ComponentDocLayout from "./ComponentDocLayout";
import Alert from "../components/alerts/Alerts";
import Badge from "../components/badge/Badge";
import Button from "../components/button/Button";
import { Space } from "antd";

const description = (
  <p className="text-base leading-relaxed">
    The <Badge type="filled" status="neutral" dot>Alert</Badge> component builds on Ant Design’s default alert,
    with support for all native props and introduces two additional props for greater control over appearance and style.
  </p>
);

const customProps = (
  <ul className="list-disc list-inside text-base space-y-2">
    <li>
      <strong><Badge type="filled" status="neutral" dot>Customtype</Badge></strong> – Supports values:{" "}
      <Badge type="filled" status="primary">primary</Badge>,{" "}
      <Badge type="filled" status="neutral">neutral</Badge>,{" "}
      <Badge type="filled" status="warning">warning</Badge>,{" "}
      <Badge type="filled" status="destructive">destructive</Badge>,{" "}
      <Badge type="filled" status="success">success</Badge>,{" "}
      <Badge type="filled" status="info">info</Badge>.
    </li>
    <li>
      <strong><Badge type="filled" status="neutral" dot>stroke</Badge></strong> – A boolean to indicate border-only (stroke) style. When <Badge type="filled" status="success">true</Badge>, the alert has a bordered stroke style; otherwise, it's filled. Default is <Badge type="filled" status="neutral">false</Badge>.
    </li>
  </ul>
);

const nativeProps = (
  <p className="text-base leading-relaxed">
    All native AntD props like{" "}
    <Badge type="filled" status="neutral" dot>message</Badge>,{" "}
    <Badge type="filled" status="neutral" dot>description</Badge>,{" "}
    <Badge type="filled" status="neutral" dot>type</Badge>,{" "}
    <Badge type="filled" status="neutral" dot>closable</Badge>,{" "}
    <Badge type="filled" status="neutral" dot>showIcon</Badge>, and{" "}
    <Badge type="filled" status="neutral" dot>action</Badge> are fully supported.
  </p>
);

const examples = [
  {
    label: "Primary Alert (Filled)",
    code: `<Alert
  message="This is a primary alert"
  description="This is a Description Text"
  Customtype="primary"
  showIcon
  closable
  action={
    <Space>
      <Button Customtype="primary">Button Label</Button>
    </Space>
  }
/>`,
    element: (
      <Alert
        message="This is a primary alert"
        description="This is a Description Text"
        Customtype="primary"
        showIcon
        closable
        action={
          <Space>
            <Button Customtype="primary">Button Label</Button>
          </Space>
        }
      />
    ),
  },
  {
    label: "Warning Alert (Stroke)",
    code: `<Alert
  message="This is a warning alert"
  description="This is a Description Text"
  Customtype="warning"
  stroke
  showIcon
  closable
  action={
    <Space>
      <Button Customtype="warning">Button Label</Button>
    </Space>
  }
/>`,
    element: (
      <Alert
        message="This is a warning alert"
        description="This is a Description Text"
        Customtype="warning"
        stroke
        showIcon
        closable
        action={
          <Space>
            <Button Customtype="warning">Button Label</Button>
          </Space>
        }
      />
    ),
  },
];

const AlertDoc: React.FC = () => {
  return (
    <ComponentDocLayout
      title="Alert Documentation"
      description={description}
      customProps={customProps}
      nativeProps={nativeProps}
      examples={examples}
    />
  );
};

export default AlertDoc;
