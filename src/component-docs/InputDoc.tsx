 // InputDoc.tsx
import React from "react";
import ComponentDocLayout from "./ComponentDocLayout";
import Badge from "../components/badge/Badge";
import Input from "../components/input/Input";
import LabeledInputText from "../components/input/Labeled/LabeledInputText";

const description = (
  <p className="text-base leading-relaxed">
    The <Badge type="filled" status="neutral" dot>Input</Badge> component supports multiple input types such as{" "}
    <Badge type="filled" status="primary">Text</Badge>,{" "}
    <Badge type="filled" status="primary">Password</Badge>,{" "}
    <Badge type="filled" status="primary">OTP</Badge>,{" "}
    <Badge type="filled" status="primary">TextArea</Badge>,{" "}
    <Badge type="filled" status="primary">Search</Badge>,{" "}
    <Badge type="filled" status="primary">Card</Badge>, and{" "}
    <Badge type="filled" status="primary">Select</Badge>.For Input with already built in Label we have LabeledInput component made so use {`<LabeledInput-Text,OTP,Password.../>`} Labeled inputs must be  provided top label and bottom
    description props to show.
  </p>
);

const customProps = (
  <ul className="list-disc list-inside text-base space-y-2">
    <li>
      <strong>
        <Badge type="filled" status="neutral" dot>Input.Type</Badge>
      </strong>{" "}
      – Use <Badge type="filled" status="primary">Input.Text</Badge>,{" "}
      <Badge type="filled" status="primary">Input.Password</Badge>,{" "}
      <Badge type="filled" status="primary">Input.Select</Badge>,{" "}
      <Badge type="filled" status="primary">Input.Search</Badge>,{" "}
      <Badge type="filled" status="primary">Input.TextArea</Badge>,{" "}
      <Badge type="filled" status="primary">Input.Card</Badge>,{" "}
      <Badge type="filled" status="primary">Input.OTP</Badge>
    </li>
    <li>
      <strong>
        <Badge type="filled" status="neutral" dot>customSize</Badge>
      </strong>{" "}
      – Available sizes:{" "}
      <Badge type="filled" status="info">32</Badge>,{" "}
      <Badge type="filled" status="info">36</Badge>,{" "}
      <Badge type="filled" status="info">40</Badge>,{" "}
      <Badge type="filled" status="info">44</Badge>,{" "}
      <Badge type="filled" status="info">48</Badge>. Default size for{" "}
      <Badge type="filled" status="warning">OTP</Badge>,{" "}
      <Badge type="filled" status="warning">Card</Badge>, and{" "}
      <Badge type="filled" status="warning">TextArea</Badge> is{" "}
      <Badge type="filled" status="info">40</Badge>.
    </li>
    <li>
      <strong>
        <Badge type="filled" status="neutral" dot>LabeledInputText</Badge>
      </strong>{" "}
      – To use inputs with label and description, use{" "}
      <Badge type="filled" status="primary">{`<LabeledInputText />`}</Badge> with{" "}
      <Badge type="filled" status="info">label</Badge> and{" "}
      <Badge type="filled" status="info">bottomlabel</Badge> props.
    </li>
    <li>
      <strong>
        <Badge type="filled" status="neutral" dot>Status</Badge>
      </strong>{" "}
      – Accepts{" "}
      <Badge type="filled" status="warning">warning</Badge> or{" "}
      <Badge type="filled" status="destructive">error</Badge> for status styling.
    </li>
  </ul>
);

const nativeProps = (
  <p className="text-base leading-relaxed">
    You can still use all native AntD props like{" "}
    <Badge type="filled" status="neutral" dot>placeholder</Badge>,{" "}
    <Badge type="filled" status="neutral" dot>value</Badge>,{" "}
    <Badge type="filled" status="neutral" dot>onChange</Badge>,{" "}
    <Badge type="filled" status="neutral" dot>disabled</Badge>, etc.
  </p>
);

const examples = [
  {
    label: "Text Input with Custom Size",
    code: `<Input.Text customSize={36} placeholder="Enter your name" />`,
    element: <Input.Text customSize={36} placeholder="Enter your name" />,
  },
  {
    label: "Password Input with Error Status",
    code: `<Input.Password customSize={40} status="error" placeholder="Enter your password" />`,
    element: (
      <Input.Password
        customSize={40}
        status="error"
        placeholder="Enter your password"
      />
    ),
  },
  {
    label: "OTP Input (Default Size 40)",
    code: `<Input.OTP  />`,
    element: <Input.OTP />,
  },
  {
    label: "TextArea Input with Default Size",
    code: `<Input.TextArea placeholder="Write your comment here..." />`,
    element: <Input.TextArea placeholder="Write your comment here..." />,
  },
  {
    label: "Labeled Input Text with Error",
    code: `<LabeledInputText customSize={36} label="Username" bottomLabel="This is your public display name" status="error" />`,
    element: (
      <LabeledInputText
        customSize={36}
        label="Username"
        bottomLabel="This is your public display name"
        status="error"
      />
    ),
  },
];

const InputDoc: React.FC = () => {
  return (
    <ComponentDocLayout
      title="Input Documentation"
      description={description}
      customProps={customProps}
      nativeProps={nativeProps}
      examples={examples}
    />
  );
};

export default InputDoc;
