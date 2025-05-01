// ButtonDoc.tsx
import ComponentDocLayout from "./ComponentDocLayout";
import { CheckOutlined} from "@ant-design/icons";
import Button from "../components/button/Button";
import Badge from "../components/badge/Badge";
// components/docs/ButtonDoc.tsx
import React from "react";
import { LeftIcon } from "../components/icons/LeftIcon";


const ButtonDoc: React.FC = () => {
  const description = (
    <p className="text-base leading-relaxed">
      The <Badge type="filled" status="neutral" dot>Button</Badge> component extends Ant Design’s default{" "}
      <Badge type="filled" status="neutral" dot>Button</Badge> by supporting additional visual types, custom
      sizes, and icon support on both sides of the label.
    </p>
  );

  const customProps = (
    <ul className="list-disc list-inside text-base space-y-2">
      <li>
        <strong>
          <Badge type="filled" status="neutral" dot>Customtype</Badge>
        </strong>{" "}
        – Custom styles like{" "}
        <Badge type="filled" status="primary">primary</Badge>,{" "}
        <Badge type="filled" status="neutral">secondary</Badge>,{" "}
        <Badge type="filled" status="info">info</Badge>,{" "}
        <Badge type="filled" status="success">success</Badge>,{" "}
        <Badge type="filled" status="destructive">destructive</Badge>,{" "}
        <Badge type="filled" status="warning">warning</Badge>,{" "}
        <Badge type="filled" status="neutral">ghost</Badge>

      </li>
      <li>
        <strong>
          <Badge type="filled" status="neutral" dot>Customsize</Badge>
        </strong>{" "}
        – Sizes:{" "}
        <Badge type="filled" status="info">32</Badge>,{" "}
        <Badge type="filled" status="info">36</Badge>,{" "}
        <Badge type="filled" status="info">40</Badge>,{" "}
        <Badge type="filled" status="info">44</Badge>,{" "}
        <Badge type="filled" status="info">48</Badge>
      </li>
      <li>
        <strong>
          <Badge type="filled" status="neutral" dot>leftIcon</Badge>
        </strong>{" "}
        – Accepts any valid React icon.
      </li>
      <li>
        <strong>
          <Badge type="filled" status="neutral" dot>rightIcon</Badge>
        </strong>{" "}
        – Accepts any valid React icon.
      </li>
    </ul>
  );

  const nativeProps = (
    <p className="text-base leading-relaxed">
      You can still use all native AntD props like{" "}
      <Badge type="filled" status="neutral" dot>type</Badge>,{" "}
      <Badge type="filled" status="neutral" dot>danger</Badge>,{" "}
      <Badge type="filled" status="neutral" dot>shape</Badge>,{" "}
      <Badge type="filled" status="neutral" dot>block</Badge>,{" "}
      <Badge type="filled" status="neutral" dot>loading</Badge>, etc.
    </p>
  );

  const examples = [
    {
      label: "Success Button with Left Icon",
      code: `<Button Customtype="success" Customsize={40} leftIcon={<CheckOutlined />}>Success</Button>`,
      element: (
        <Button Customtype="success" Customsize={40} leftIcon={<CheckOutlined />}>
          Success
        </Button>
      ),
    },
    {
      label: "Default Button with Right Icon",
      code: `<Button Customtype="primary" Customsize={36} rightIcon={<LeftIcon />}>Next</Button>`,
      element: (
        <Button Customtype="primary" Customsize={36} rightIcon={<LeftIcon />}>
          Next
        </Button>
      ),
    },
  ];

  return (
    <ComponentDocLayout
      title="Button Documentation"
      description={description}
      customProps={customProps}
      nativeProps={nativeProps}
      examples={examples}
    />
  );
};

export default ButtonDoc;
