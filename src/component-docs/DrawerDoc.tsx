import React, { useState } from "react";
import Drawer from "../components/drawer/Drawer";
import Button from "../components/button/Button";
import ComponentDocLayout from "./ComponentDocLayout";
import Badge from "../components/badge/Badge";
import { LeftIcon } from "../components/icons/LeftIcon";

const DrawerDoc: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const description = (
    <p className="text-base leading-relaxed">
      The <Badge type="filled" status="neutral" dot>Drawer</Badge> component is a customized version of Ant Design’s drawer.
      It extends core functionality with props like <Badge type="filled" status="info" dot>icon</Badge>,{" "}
      <Badge type="filled" status="info" dot>description</Badge>, and{" "}
      <Badge type="filled" status="info" dot>footerType</Badge>. It  removes the default close icon so you can provide
      your own.
    </p>
  );

  const customProps = (
    <ul className="list-disc list-inside text-base space-y-2">
      <li>
        <strong><Badge type="filled" status="neutral" dot>icon</Badge></strong> – A ReactNode shown to the right  of the drawer title as AntD close icon defualt was in left side so to place right side we introduced icon prop (e.g. a custom back button).
      </li>
      <li>
        <strong><Badge type="filled" status="neutral" dot>description</Badge></strong> – A paragraph shown below the title for context or secondary info.
      </li>
      <li>
        <strong><Badge type="filled" status="neutral" dot>footerType</Badge></strong> – Controls footer layout. Options:
        <ul className="list-disc list-inside ml-5">
          <li><code>right</code> (default): buttons align to the right</li>
          <li><code>stretch</code>: buttons fill available width</li>
          <li><code>stacked</code>: buttons are stacked vertically</li>
        </ul>
      </li>
      <li>
        <strong><Badge type="filled" status="neutral" dot>Custom close logic</Badge></strong> – The default close icon is disabled. Use your own trigger to close the drawer.
      </li>
      <li>
        <strong><Badge type="filled" status="neutral" dot>All native props</Badge></strong> – Fully supports all original Ant Design Drawer props.
      </li>
    </ul>
  );

  const nativeProps = (
    <p className="text-base leading-relaxed">
      All native Ant Design <code>Drawer</code> props are available and supported in this customized version.
    </p>
  );

  const examples = [
    {
      label: "Drawer with icon, description, and right footer",
      code: `<Drawer
  open={isDrawerOpen}
  onClose={() => setIsDrawerOpen(false)}
  icon={<Button Customtype="secondary" leftIcon={<LeftIcon />} />}
  title="Drawer Title"
  description="This is a drawer component."
  footerType="right"
  footer={[
    <Button key="cancel" Customtype="secondary">Cancel</Button>,
    <Button key="submit" Customtype="primary">Submit</Button>,
  ]}
>
  <p>Drawer content goes here.</p>
</Drawer>`,
      element: (() => {
        return (
          <>
            <Button onClick={() => setIsDrawerOpen(true)}>Open Drawer</Button>
            <Drawer
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              icon={<Button Customtype="secondary" leftIcon={<LeftIcon />} />}
              title="Drawer Title"
              description="This is a drawer component."
              footerType="right"
              footer={[
                <Button key="cancel" Customtype="secondary">Cancel</Button>,
                <Button key="submit" Customtype="primary">Submit</Button>,
              ]}
            >
              <p>Drawer content goes here.</p>
            </Drawer>
          </>
        );
      })(),
    },
  ];

  return (
    <ComponentDocLayout
      title="Drawer Documentation"
      description={description}
      customProps={customProps}
      nativeProps={nativeProps}
      examples={examples}
    />
  );
};

export default DrawerDoc;
