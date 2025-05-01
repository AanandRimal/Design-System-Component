// components/docs/TypographyDoc.tsx
import React from "react";
import ComponentDocLayout from "./ComponentDocLayout";
import Badge from "../components/badge/Badge";

const TypographyDoc: React.FC = () => {
  const description = (
    <p className="text-base leading-relaxed">
      Our <Badge type="filled" status="neutral" dot>Typography</Badge> system defines consistent font sizing, line heights, and font weights using Tailwind utility classes. It is divided into two main categories: <Badge type="filled" status="primary" dot> Headings (h1–h6)</Badge>  and <Badge type="filled" status="success" dot >Body Text (x-small to large whihc is large,medium,base,small,x-small).</Badge>
    </p>
  );

  const customProps = (
    <div className="space-y-3 text-base">
      <p>
        <strong>Headings:</strong> <code>text-h1-medium</code> to <code>text-h6-bold</code><br />
        Each heading level supports <Badge type="filled" status="info">medium</Badge>,{" "}
        <Badge type="filled" status="info">semibold</Badge>, and{" "}
        <Badge type="filled" status="info">bold</Badge> fontweight.
      </p>
      <p>
        <strong>Body Text:</strong> <code>text-large-regular</code> to <code>text-x-small-semibold</code><br />
        Body sizes support <Badge type="filled" status="info">regular</Badge>,{" "}
        <Badge type="filled" status="info">medium</Badge>, and{" "}
        <Badge type="filled" status="info">semibold</Badge> font weights.
      </p>
      <p>
      <strong>Using:</strong> <code>text-h1-bold</code> this will select text with h1 heading then for addig bold we do  <code>font-bold</code> <code>then only we will have text with h1 heading and font bold .</code>
      </p>
    </div>
  );

  const nativeProps = (
    <p className="text-base leading-relaxed">
      Use  <code>font-medium</code>, <code>font-semibold</code>, and <code>font-bold</code> for font weight . 
    </p>
  );

  const examples = [
    {
      label: "Heading Examples",
      code: `
<div className="text-h1-bold font-bold">Heading 1 Bold</div>
<div className="text-h2-semibold font-semibold">Heading 2 Semibold</div>
<div className="text-h3-medium font-medium">Heading 3 Medium</div>`,
      element: (
        <div className="space-y-2">
          <div className="text-h1-bold font-bold">Heading 1 Bold</div>
          <div className="text-h2-semibold font-semibold">Heading 2 Semibold</div>
          <div className="text-h3-medium font-medium">Heading 3 Medium</div>
        </div>
      ),
    },
    {
      label: "Body Text Examples",
      code: `
<div className="text-large-regular font-regular">Large Regular</div>
<div className="text-base-medium font-medium">Base Medium</div>
<div className="text-x-small-semibold font-semibold">X-Small Semibold</div>
`,
      element: (
        <div className="space-y-2">
          <div className="text-large-regular font-regular">Large Regular</div>
          <div className="text-base-medium font-medium">Base Medium</div>
          <div className="text-x-small-semibold font-semibold">X-Small Semibold</div>
        </div>
      ),
    },
  ];

  const extra = (
    <div className="space-y-4 text-base leading-relaxed">
      <h3 className="text-lg font-semibold">How to Use</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Use <code>text-h1-bold</code>, <code>text-h3-medium</code>, etc. for headings.</li>
        <li>Use <code>text-base-semibold</code>, <code>text-small-regular</code>, etc. for paragraph or label text.</li>
        <li>Optional: apply Tailwind font weight utilities like <code>font-bold</code> to override or reinforce styles.</li>
      </ul>
      <p>
        This system keeps typography consistent across all components, ensuring readability and design coherence.
      </p>
    </div>
  );

  return (
    <ComponentDocLayout
      title="Typography Documentation"
      description={description}
      customProps={customProps}
      nativeProps={nativeProps}
      examples={examples}
      extra={extra}
    />
  );
};

export default TypographyDoc;
