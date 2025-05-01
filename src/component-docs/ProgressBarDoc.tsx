// components/docs/ProgressDoc.tsx
import React from "react";
import ComponentDocLayout from "./ComponentDocLayout";
import Badge from "../components/badge/Badge";
import Progress from "../components/progress-bar/ProgressBar";
import ProgressWithLabel from "../components/progress-bar/ProgressWithLabel";

const description = (
  <p className="text-base leading-relaxed">
    The <Badge type="filled" status="primary">Progress</Badge> component is a wrapper around Ant Design’s native progress bar. 
    To support more contextual clarity in UI, we’ve also introduced an enhanced version: 
    <Badge type="filled" status="success">ProgressWithLabel</Badge> which adds support for a 
    <Badge type="stroke" status="info" dot>label</Badge> above and a 
    <Badge type="stroke" status="info" dot>bottomLabel</Badge> below the progress bar.
  </p>
);

const customProps = (
  <ul className="list-disc list-inside text-base space-y-2">
    <li>
      <strong><Badge type="filled" status="neutral" dot>label</Badge></strong> – Optional. Text shown above the progress bar, commonly used for naming the context or step.
    </li>
    <li>
      <strong><Badge type="filled" status="neutral" dot>bottomLabel</Badge></strong> – Optional. Text shown below the progress bar, useful for descriptions, help text, or secondary feedback.
    </li>
    <li>
      <strong><Badge type="stroke" status="info">All Ant Design Progress props supported</Badge></strong> – You can pass all native props like <code>percent</code>, <code>status</code>, <code>showInfo</code>, etc.
    </li>
  </ul>
);

const nativeProps = (
  <p className="text-base leading-relaxed">
    The <Badge type="filled" status="primary">Progress</Badge> component supports all native Ant Design props.
    If no label or bottomLabel is needed, use <code>{"<Progress />"}</code> directly. 
    Otherwise, use <code>{"<ProgressWithLabel />"}</code> for labeled variants.
  </p>
);

const examples = [
  {
    label: "Simple Progress (Ant Design wrapper)",
    code: `<Progress percent={40} />`,
    element: <Progress percent={40} />,
  },
  {
    label: "ProgressWithLabel (top label only)",
    code: `<ProgressWithLabel percent={70} label="Label" />`,
    element: <ProgressWithLabel percent={70} label="Label" />,
  },
  {
    label: "ProgressWithLabel (bottom label only)",
    code: `<ProgressWithLabel percent={50} bottomLabel="Help Text" />`,
    element: <ProgressWithLabel percent={50} bottomLabel="Help Text" />,
  },
  {
    label: "ProgressWithLabel (top & bottom label)",
    code: `<ProgressWithLabel percent={85} label="Label" bottomLabel="HelpText" />`,
    element: <ProgressWithLabel percent={85} label="Label" bottomLabel="HelpText" />,
  },
];

const ProgressDoc: React.FC = () => {
  return (
    <ComponentDocLayout
      title="Progress Documentation"
      description={description}
      customProps={customProps}
      nativeProps={nativeProps}
      examples={examples}
    />
  );
};

export default ProgressDoc;
