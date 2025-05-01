// components/docs/AvatarDoc.tsx
import React from "react";
import ComponentDocLayout from "./ComponentDocLayout";
import Avatar from "../components/avatars/Avatar";
import Badge from "../components/badge/Badge";
import { Icon } from "@iconify/react";

const description = (
  <p className="text-base leading-relaxed">
    The <Badge type="filled" status="neutral" dot>Avatar</Badge> component supports three rendering methods:
    image (via <Badge type="filled" status="neutral" dot>src</Badge>), icon (via <Badge type="filled" status="neutral" dot>icon</Badge>), and text (via children).
    It also supports presence indicators through <Badge type="filled" status="neutral" dot>dot</Badge> and <Badge type="filled" status="neutral" dot>customStatus</Badge>.
  </p>
);

const customProps = (
  <ul className="list-disc list-inside text-base space-y-2">
    <li>
      <strong><Badge type="filled" status="neutral" dot>customSize</Badge></strong> – Supports sizes:{" "}
      <Badge type="filled" status="info">14</Badge>,{" "}
      <Badge type="filled" status="info">20</Badge>,{" "}
      <Badge type="filled" status="info">24</Badge>,{" "}
      <Badge type="filled" status="info">32</Badge>,{" "}
      <Badge type="filled" status="info">36</Badge>,{" "}
      <Badge type="filled" status="info">40</Badge>,{" "}
      <Badge type="filled" status="info">48</Badge>,{" "}
      <Badge type="filled" status="info">64</Badge>,{" "}
      <Badge type="filled" status="info">80</Badge>,{" "}
      <Badge type="filled" status="info">120</Badge>
    </li>
    <li>
      <strong><Badge type="filled" status="neutral" dot>dot</Badge></strong> – A boolean to show presence indicator.
    </li>
    <li>
      <strong><Badge type="filled" status="neutral" dot>customStatus</Badge></strong> – Can be{" "}
      <Badge type="filled" status="success">online</Badge> or{" "}
      <Badge type="filled" status="destructive">offline</Badge>.
    </li>
  </ul>
);

const nativeProps = (
  <p className="text-base leading-relaxed">
    You can still use all native Ant Design props like{" "}
    <Badge type="filled" status="neutral" dot>shape</Badge>,{" "}
    <Badge type="filled" status="neutral" dot>style</Badge>,{" "}
    <Badge type="filled" status="neutral" dot>size</Badge>, etc.
  </p>
);

const examples = [
  {
    label: "Avatar with Image",
    code: `<Avatar customSize={40} src={<img src={"./Female 2.png"} alt="avatar" />} dot />`,
    element: (
      <Avatar customSize={40} src={<img src={"./Female 2.png"} alt="avatar" />} dot />
    ),
  },
  {
    label: "Avatar with Text",
    code: `<Avatar customSize={40} dot customStatus="online">KD</Avatar>`,
    element: (
      <Avatar customSize={40} dot customStatus="online">
        KD
      </Avatar>
    ),
  },
  {
    label: "Avatar with Icon",
    code: `<Avatar customSize={40} icon={"mage:user-fill" } dot customStatus="offline" />`,
    element: (
      <Avatar customSize={40} icon={  <Icon
          icon="mage:user-fill"
        />} dot customStatus="offline" />
    ),
  },
];

const AvatarDoc: React.FC = () => {
  return (
    <ComponentDocLayout
      title="Avatar Documentation"
      description={description}
      customProps={customProps}
      nativeProps={nativeProps}
      examples={examples}
    />
  );
};

export default AvatarDoc;
