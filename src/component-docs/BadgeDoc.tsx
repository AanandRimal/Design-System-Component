// components/docs/BadgeDoc.tsx
import React from "react";
import ComponentDocLayout from "./ComponentDocLayout";
import Badge from "../components/badge/Badge";
import Avatar from "../components/avatars/Avatar";
import { Icon } from "@iconify/react";

const description = (
    <p className="text-base leading-relaxed">
      The <Badge type="filled" status="neutral" dot>Badge</Badge> component is a fully custom-designed utility,
      built independently from Ant Design. It allows visual indicators through various combinations
      of <strong>status</strong>, <strong>type</strong>, <strong>size</strong>, and optionally with <strong>dot</strong>, <strong>icon</strong>, or <strong>avatar</strong>.
    </p>
  );

const customProps = (
  <ul className="list-disc list-inside text-base space-y-2">
    <li>
      <strong><Badge type="filled" status="neutral" dot>type</Badge></strong> – Defines visual style:{" "}
      <Badge type="filled" status="info">filled</Badge>,{" "}
      <Badge type="stroke" status="info">stroke</Badge>,{" "}
      <Badge type="solid" status="info">solid</Badge>
    </li>
    <li>
      <strong><Badge type="filled" status="neutral" dot>status</Badge></strong> – Sets color/status context. Available options:{" "}
      <Badge type="filled" status="success">success</Badge>,{" "}
      <Badge type="filled" status="info">info</Badge>,{" "}
      <Badge type="filled" status="warning">warning</Badge>,{" "}
      <Badge type="filled" status="destructive">destructive</Badge>,{" "}
      <Badge type="filled" status="primary">primary</Badge>,{" "}
      <Badge type="filled" status="neutral">neutral</Badge>
    </li>
    <li>
      <strong><Badge type="filled" status="neutral" dot>size</Badge></strong> – Badge size. Supported values:{" "}
      <Badge type="filled" status="info">20</Badge>,{" "}
      <Badge type="filled" status="info">24</Badge>,{" "}
      <Badge type="filled" status="info">28</Badge>
    </li>
    <li>
      <strong><Badge type="filled" status="neutral" dot>dot</Badge></strong> – Boolean. Enables a small status dot beside the text or element.
    </li>
    <li>
      <strong><Badge type="filled" status="neutral" dot>icon</Badge></strong> – Replaces the dot with a ReactNode (icon/avatar/etc.). Cannot be used simultaneously with <code>dot</code>.
    </li>
    <li>
      <strong><Badge type="filled" status="neutral" dot>children</Badge></strong> – Text or element displayed beside the badge icon/dot.
    </li>
  </ul>
);

const nativeProps = (
  <p className="text-base leading-relaxed">
    This is a custom component, so native Ant Design <code>Badge</code> props are not supported. It is built fully custommized for complete control and customization.
  </p>
);

const examples = [
  {
    label: "Dot Badge (Filled, Success)",
    code: `<Badge type="filled" status="success" size={20} dot>Online</Badge>`,
    element: <Badge type="filled" status="success" size={20} dot>Online</Badge>,
  },
  {
    label: "Icon Badge (Stroke, Destructive)",
    code: `<Badge type="stroke" status="destructive" size={24} icon={<Icon icon="mage:select-box" />}>Error</Badge>`,
    element: (
      <Badge type="stroke" status="destructive" size={24} icon={<Icon icon="mage:select-box" />}>
        Error
      </Badge>
    ),
  },
  {
    label: "Avatar Badge (Solid, Primary)",
    code: `<Badge
  type="solid"
  status="primary"
  size={28}
  icon={<Avatar customSize={16} src={<img src={"./Female 2.png"} alt="avatar" />} />}
>
  User
</Badge>`,
    element: (
      <Badge
        type="solid"
        status="primary"
        size={28}
        icon={<Avatar customSize={16} src={<img src={"./Female 2.png"} alt="avatar" />} />}
      >
        User
      </Badge>
    ),
  },
];

const BadgeDoc: React.FC = () => {
  return (
    <ComponentDocLayout
      title="Badge Documentation"
      description={description}
      customProps={customProps}
      nativeProps={nativeProps}
      examples={examples}
    />
  );
};

export default BadgeDoc;
