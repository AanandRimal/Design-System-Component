// components/docs/SpinnerDoc.tsx
import React from "react";
import Spin from "../components/spinner/Spin";
import Badge from "../components/badge/Badge";
import ComponentDocLayout from "./ComponentDocLayout";
import LoadingCircle from "../components/icons/LoadingCircle";

const description = (
  <p className="text-base leading-relaxed">
    The <Badge type="filled" status="primary">Spinner</Badge> component is a customized version of Ant Design’s <code>Spin</code>. 
    It uses a custom <Badge type="filled" status="info" dot>circular loader</Badge> icon and introduces a <Badge type="stroke" status="success">customSize</Badge> prop 
    to control its size via icon rather than the native spinner size.
  </p>
);

const customProps = (
  <ul className="list-disc list-inside text-base space-y-2">
    <li>
      <strong><Badge type="filled" status="success">customSize</Badge></strong> – Defines the visual size of the spinner by controlling the size of the custom loader icon. 
      Supports: <Badge type="filled" status="info">20</Badge>,{" "}
        <Badge type="filled" status="info">24</Badge>, or {" "}
        <Badge type="filled" status="info">36</Badge>,
        <Badge type="filled" status="info">40</Badge>,


    </li>
    <li>
      <strong><Badge type="filled" status="info">Custom loader indicator</Badge></strong> – Uses a <code>&lt;LoadingCircle /&gt;</code> as the spinner icon for a consistent, themed appearance.
    </li>
    <li>
      <strong><Badge type="stroke" status="warning">All Ant Design Spin props supported</Badge></strong> – Including <code>tip</code>, <code>delay</code>, <code>spinning</code>, <code>size</code> (although overridden), etc.
    </li>
  </ul>
);

const nativeProps = (
  <p className="text-base leading-relaxed">
    All native Ant Design <code>Spin</code> props are fully supported. Note that the native <code>size</code> prop is visually overridden by the custom loader via <code>customSize</code>.
  </p>
);

const examples = [
  {
    label: "Spinner with tip and size 20",
    code: `<Spin tip="Loading" indicator={<LoadingCircle customSize={20} />} />`,
    element: <Spin tip="Loading" indicator={<LoadingCircle customSize={20} />} />,
  },
  {
    label: "Spinner with size 24",
    code: `<Spin indicator={<LoadingCircle customSize={24} />} />`,
    element: <Spin indicator={<LoadingCircle customSize={24} />} />,
  },
  {
    label: "Spinner with size 40",
    code: `<Spin indicator={<LoadingCircle customSize={40} />} />`,
    element: <Spin indicator={<LoadingCircle customSize={40} />} />,
  },
  {
    label: "Spinner using size  (36)",
    code: `<Spin customSize={36} indicator={<LoadingCircle customSize={36} />} />`,
    element: <Spin customSize={36} indicator={<LoadingCircle customSize={36} />} />,
  },
];

const SpinnerDoc: React.FC = () => {
  return (
    <ComponentDocLayout
      title="Spinner Documentation"
      description={description}
      customProps={customProps}
      nativeProps={nativeProps}
      examples={examples}
    />
  );
};

export default SpinnerDoc;
