// components/docs/BannerDoc.tsx
import React from "react";
import ComponentDocLayout from "./ComponentDocLayout";
import Banner from "../components/banner/Banner";
import Button from "../components/button/Button";
import { Space } from "antd";
import { LeftIcon } from "../components/icons/LeftIcon";
import Badge from "../components/badge/Badge";

const description = (
  <div className="text-base leading-relaxed space-y-4">
    <p>
      The <Badge type="filled" status="neutral" dot>Banner</Badge> component is a wrapper over Ant Design’s{" "}
      <code>Alert</code> with the <code>banner</code> prop enabled, customized for streamlined use and extended styling.
    </p>
    <p>
      It visually stands out for persistent messaging at the top of pages or sections. We support both types of banners: 
      one with a title (message + description) and another with just a description, based on the props passed.
    </p>
    <p>
      Internally, it uses <code>{`<Alert banner />`}</code> but is exposed as a clean custom <code>{`<Banner />`}</code> component with extended flexibility and unified theming.
    </p>
  </div>
);

const customProps = (
  <ul className="list-disc list-inside text-base space-y-2">
    <li>
      <strong><Badge type="filled" status="neutral" dot>Customtype</Badge></strong> – Custom status style for the banner. Options:
      <Badge type="filled" status="primary">primary</Badge>,{" "}
      <Badge type="filled" status="info">info</Badge>,{" "}
      <Badge type="filled" status="success">success</Badge>,{" "}
      <Badge type="filled" status="warning">warning</Badge>,{" "}
      <Badge type="filled" status="destructive">destructive</Badge>,{" "}
      <Badge type="filled" status="neutral">neutral</Badge>,{" "}
      <Badge type="filled" status="neutral">inverse</Badge>
    </li>
    <li>
      <strong><Badge type="filled" status="neutral" dot>message</Badge></strong> –  Used to render the banner with a heading/title.
    </li>
    <li>
      <strong><Badge type="filled" status="neutral" dot>description</Badge></strong> – Acts as the body/content of the banner. If message is omitted, the banner becomes a description-only banner.
    </li>
    <li>
      <strong><Badge type="filled" status="neutral" dot>icon</Badge></strong> –  Adds a custom icon on the left.
    </li>
    <li>
      <strong><Badge type="filled" status="neutral" dot>action</Badge></strong> –  Renders action buttons or controls on the right.
    </li>
  </ul>
);

const nativeProps = (
  <p className="text-base leading-relaxed">
    All native Ant Design <code>Alert</code> props are supported, including{" "}
    <Badge type="filled" status="neutral" dot>closable</Badge>,{" "}
    <Badge type="filled" status="neutral" dot>showIcon</Badge>,{" "}
    <Badge type="filled" status="neutral" dot>icon</Badge>, and{" "}
    <Badge type="filled" status="neutral" dot>onClose</Badge>.
  </p>
);

const examples = [
  {
    label: "Banner with Title and Description",
    code: `<Banner
  Customtype="primary"
  message="This is Title"
  description="This is a Description Text"
  action={
    <Space>
      <Button Customtype="secondary">Button Label</Button>
    </Space>
  }
  closable
  showIcon
  icon={<LeftIcon />}
/>`,
    element: (
      <Banner
        Customtype="primary"
        message="This is Title"
        description="This is a Description Text"
        action={
          <Space>
            <Button Customtype="secondary">Button Label</Button>
          </Space>
        }
        closable
        showIcon
        icon={<LeftIcon />}
      />
    ),
  },
  {
    label: "Banner with Description Only",
    code: `<Banner
  Customtype="destructive"
  description="This is a Description Text"
  action={
    <Space>
      <Button Customtype="secondary">Button Label</Button>
    </Space>
  }
  closable
  showIcon
  icon={<LeftIcon />}
/>`,
    element: (
      <Banner
        Customtype="destructive"
        description="This is a Description Text"
        action={
          <Space>
            <Button Customtype="secondary">Button Label</Button>
          </Space>
        }
        closable
        showIcon
        icon={<LeftIcon />}
      />
    ),
  },
];

const BannerDoc: React.FC = () => {
  return (
    <ComponentDocLayout
      title="Banner Documentation"
      description={description}
      customProps={customProps}
      nativeProps={nativeProps}
      examples={examples}
    />
  );
};

export default BannerDoc;
