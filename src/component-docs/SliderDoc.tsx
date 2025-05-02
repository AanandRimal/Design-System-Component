// components/docs/SliderDoc.tsx
import React from "react";
import ComponentDocLayout from "./ComponentDocLayout";
import Slider from "../components/sliders/Slider";
import Badge from "../components/badge/Badge";

const description = (
  <p className="text-base leading-relaxed">
    The <Badge type="filled" status="primary">Slider</Badge> component is a customized version of Ant Design’s Slider.
    It supports <Badge type="filled" status="info" dot>theming</Badge> and <Badge type="stroke" status="success" dot>custom styles</Badge> to match our design system,
    while maintaining all native functionality from Ant Design.
  </p>
);

const customProps = (
  <ul className="list-disc list-inside text-base space-y-2">
    <li>
      <strong><Badge type="filled" status="info">Theming support</Badge></strong> – The slider is visually customized to fit our system theme for colors, track style, and thumb appearance.
    </li>
    <li>
      <strong><Badge type="filled" status="neutral">Styled</Badge></strong> – It supports inline style for width or full custom styling through <code>style</code> prop or class names.
    </li>
    <li>
      <strong><Badge type="stroke" status="warning">Fully supports Ant Design props</Badge></strong> like <code>defaultValue</code>, <code>min</code>, <code>max</code>, <code>step</code>, <code>onChange</code>, etc.
    </li>
  </ul>
);

const nativeProps = (
  <p className="text-base leading-relaxed">
    All Ant Design <code>Slider</code> props are supported. 
    The component only overrides internal styling to match your theme and does not affect core functionality.
  </p>
);

const examples = [
  {
    label: "Slider with width 100px",
    code: `<Slider defaultValue={15} style={{ width: 100 }} />`,
    element: <Slider defaultValue={15} style={{ width: 100 }} />,
  },
  {
    label: "Slider with width 300px",
    code: `<Slider defaultValue={30} style={{ width: 300 }} />`,
    element: <Slider defaultValue={30} style={{ width: 300 }} />,
  },
  {
    label: "Slider with width 400px",
    code: `<Slider defaultValue={40} style={{ width: 400 }} />`,
    element: <Slider defaultValue={40} style={{ width: 400 }} />,
  },
  {
    label: "Slider with width 500px",
    code: `<Slider defaultValue={50} style={{ width: 500 }} />`,
    element: <Slider defaultValue={50} style={{ width: 500 }} />,
  },
  {
    label: "Slider with width 600px",
    code: `<Slider defaultValue={80} style={{ width: 600 }} />`,
    element: <Slider defaultValue={80} style={{ width: 600 }} />,
  },
  {
    label: "Slider with width 700px",
    code: `<Slider defaultValue={100} style={{ width: 700 }} />`,
    element: <Slider defaultValue={100} style={{ width: 700 }} />,
  },
];

const SliderDoc: React.FC = () => {
  return (
    <ComponentDocLayout
      title="Slider Documentation"
      description={description}
      customProps={customProps}
      nativeProps={nativeProps}
      examples={examples}
    />
  );
};

export default SliderDoc;
