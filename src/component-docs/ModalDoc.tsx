// components/docs/ModalDoc.tsx
import React, { useState } from "react";
import Modal from "../components/modal/Modal";
import Button from "../components/button/Button";
import ComponentDocLayout from "./ComponentDocLayout";
import { LeftIcon } from "../components/icons/LeftIcon";
import LabeledInputText from "../components/input/Labeled/LabeledInputText";
import Badge from "../components/badge/Badge";

const description = (
  <p className="text-base leading-relaxed">
    The <Badge type="filled" status="primary">Modal</Badge> component is an extended version of Ant Design's Modal,
    offering custom icon rendering, description support, flexible layout via <Badge type="stroke" status="info">footerType</Badge>,
    optional <Badge type="stroke" status="info">content</Badge> slot, and fully controllable <Badge type="stroke" status="info">customFooter</Badge>.
    It also introduces a <Badge type="stroke" status="info">variant</Badge> prop to toggle visual dividers between sections.
  </p>
);

const customProps = (
  <ul className="list-disc list-inside text-base space-y-2">
    <li>
      <strong><Badge type="filled" status="neutral" dot>icon</Badge></strong> – A ReactNode displayed to the left of the title (e.g., a back or close icon).
    </li>
    <li>
      <strong><Badge type="filled" status="neutral" dot>description</Badge></strong> – Optional text displayed directly below the title.
    </li>
    <li>
      <strong><Badge type="filled" status="neutral" dot>content</Badge></strong> – A custom ReactNode rendered between the description and the footer.
    </li>
    <li>
      <strong><Badge type="filled" status="neutral" dot>footerType</Badge></strong> – Controls the footer button layout:
      <ul className="ml-6 list-disc">
        <li><code>right</code> (default) – Buttons align to the right</li>
        <li><code>stretch</code> – Buttons expand to full width</li>
        <li><code>stacked</code> – Buttons appear stacked vertically</li>
      </ul>
    </li>
    <li>
      <strong><Badge type="filled" status="neutral" dot>variant</Badge></strong> – Defines layout divider style:
      <ul className="ml-6 list-disc">
        <li><code>default</code> – No dividers (default)</li>
        <li><code>divider</code> – Adds a border between header, content, and footer</li>
      </ul>
    </li>
    <li>
      <strong><Badge type="filled" status="neutral" dot>customFooter</Badge></strong> – Completely replaces the default Ant Design footer.
      Recommended when <code>onOk</code> and <code>onCancel</code> are not sufficient.
    </li>
    <li>
      <strong>...All native Ant Design Modal props</strong> are still supported.
    </li>
  </ul>
);

const nativeProps = (
  <p className="text-base leading-relaxed">
    All native Ant Design <code>Modal</code> props are supported in this component. However, if <code>customFooter</code> is used, the default <code>footer</code> and <code>onOk/onCancel</code> will be ignored for rendering.
  </p>
);

const ModalDoc: React.FC = () => {
  const [isDefaultOpen, setIsDefaultOpen] = useState(false);
  const [isDividerOpen, setIsDividerOpen] = useState(false);

  const sharedContent = (
    <>
      <p>Are you sure you want to delete this contact? This action is not reversible.</p>
      <LabeledInputText type="text" placeholder="Enter your name" label="Name" />
      <LabeledInputText type="email" placeholder="Enter your email" label="Email" />
    </>
  );

  const examples = [
    {
      label: "Modal (variant: default, footerType: right)",
      code: `<Modal
  open={isDefaultOpen}
  onCancel={() => setIsDefaultOpen(false)}
  icon={<Button Customtype="secondary" Customsize={40} leftIcon={<LeftIcon />} />}
  title="Modal"
  description="This is a description text."
  content={<YourContent />}
  footerType="right"
  variant="default"
  customFooter={[
    <Button key="cancel" Customtype="secondary" onClick={() => setIsDefaultOpen(false)}>Cancel</Button>,
    <Button key="submit" Customtype="primary" onClick={() => setIsDefaultOpen(false)}>Submit</Button>,
  ]}
/>`,
      element: (
        <>
          <Button onClick={() => setIsDefaultOpen(true)}>Open Default Modal</Button>
          <Modal
            open={isDefaultOpen}
            onCancel={() => setIsDefaultOpen(false)}
            icon={<Button Customtype="secondary" Customsize={40} leftIcon={<LeftIcon />} />}
            title="Modal"
            description="This is a description text."
            content={sharedContent}
            footerType="right"
            variant="default"
            customFooter={[
              <Button key="cancel" Customtype="secondary" onClick={() => setIsDefaultOpen(false)}>Cancel</Button>,
              <Button key="submit" Customtype="primary" onClick={() => setIsDefaultOpen(false)}>Submit</Button>,
            ]}
          />
        </>
      )
    },
    {
      label: "Modal (variant: divider, footerType: stacked)",
      code: `<Modal
  open={isDividerOpen}
  onCancel={() => setIsDividerOpen(false)}
  icon={<Button Customtype="secondary" Customsize={40} leftIcon={<LeftIcon />} />}
  title="Modal"
  description="Divider-style layout for better separation."
  content={<YourContent />}
  footerType="stacked"
  variant="divider"
  customFooter={[
    <Button key="cancel" Customtype="secondary" block onClick={() => setIsDividerOpen(false)}>Cancel</Button>,
    <Button key="submit" Customtype="primary" block onClick={() => setIsDividerOpen(false)}>Submit</Button>,
  ]}
/>`,
      element: (
        <>
          <Button onClick={() => setIsDividerOpen(true)}>Open Divider Modal</Button>
          <Modal
            open={isDividerOpen}
            onCancel={() => setIsDividerOpen(false)}
            icon={<Button Customtype="secondary" Customsize={40} leftIcon={<LeftIcon />} />}
            title="Modal"
            description="Divider-style layout for better separation."
            content={sharedContent}
            footerType="stacked"
            variant="divider"
            customFooter={[
              <Button key="cancel" Customtype="secondary" block onClick={() => setIsDividerOpen(false)}>Cancel</Button>,
              <Button key="submit" Customtype="primary" block onClick={() => setIsDividerOpen(false)}>Submit</Button>,
            ]}
          />
        </>
      )
    }
  ];

  return (
    <ComponentDocLayout
      title="Modal Documentation"
      description={description}
      customProps={customProps}
      nativeProps={nativeProps}
      examples={examples}
    />
  );
};

export default ModalDoc;
