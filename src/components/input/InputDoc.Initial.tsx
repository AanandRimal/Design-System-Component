// docs/InputDoc.tsx
import React from "react";
import { CheckOutlined, CopyOutlined } from "@ant-design/icons";
import { Divider, Typography, Card, ConfigProvider, message } from "antd";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "../../context-hook/ThemeProvider";
import { Themes } from "../foundation/Theme";
import Button from "../button/Button";
import Badge from "../badge/Badge";
import Input from "./Input";
import LabeledInputText from "./Labeled/LabeledInputText";

const { Title } = Typography;

const examples = [
  {
    label: "Standard Input (Text)",
    code: `<Input.Text customSize={36} placeholder="Enter text" />`,
    element: <Input.Text customSize={36} placeholder="Enter text" />,
  },
  {
    label: "Password Input",
    code: `<Input.Password customSize={40} placeholder="Enter password" />`,
    element: <Input.Password customSize={40} placeholder="Enter password" />,
  },
  {
    label: "OTP Input",
    code: `<Input.OTP " />`,
    element: <Input.OTP  />,
  },
  {
    label: "TextArea Input",
    code: `<Input.TextArea placeholder="Write your message..." />`,
    element: <Input.TextArea placeholder="Write your message..." />,
  },
  {
    label: "Search Input",
    code: `<Input.Search customSize={32} placeholder="Search..." />`,
    element: <Input.Search customSize={32} placeholder="Search..." />,
  },
  {
    label: "Card Input",
    code: `<Input.Card placeholder="Card Number" />`,
    element: <Input.Card placeholder="Card Number" />,
  },
  {
    label: "Select Input",
    code: `<Input.Select customSize={44} options={[{ label: "Option A", value: "a" }]} />`,
    element: (
      <Input.Select
        customSize={44}
        options={[{ label: "Option A", value: "a" }]}
      />
    ),
  },
  {
    label: "Labeled Input",
    code: `<LabeledInputText customSize={40} label="Username" bottomlabel="This will be shown publicly" />`,
    element: (
      <LabeledInputText
        customSize={40}
        label="Username"
        bottomLabel="This will be shown publicly"
      />
    ),
  },
];

const InputDoc: React.FC = () => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  const copyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    message.success("Copied to clipboard!");
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1000);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Divider: {
            colorSplit: currentTheme.stroke.strong,
          },
          Card: {
            colorBgContainer: currentTheme.background.bg1,
            colorText: currentTheme.text.t2Component,
            colorBorderSecondary: currentTheme.stroke.strong,
            colorTextHeading: currentTheme.text.t2Component,
          },
          Typography: {
            colorTextHeading: currentTheme.text.t1Title,
          },
        },
      }}
    >
      <div
        style={{
          backgroundColor: currentTheme.background.bg1,
          color: currentTheme.text.t2Component,
        }}
      >
        <Card bordered={false} className="shadow-md">
          <Title level={3}>Input Documentation</Title>
          <p className="text-base leading-relaxed">
            The <Badge type="filled" status="neutral" dot>Input</Badge> component
            extends Ant Design’s input with several types and enhancements like size
            control, OTP fields, card inputs, search fields, labeled versions, and more.
          </p>

          <Divider />

          <Title level={4}>Custom Props</Title>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>
              <strong>
                <Badge type="filled" status="neutral" dot>Input.Type</Badge>
              </strong>{" "}
              – Use different inputs like{" "}
              <Badge type="filled" status="primary">Input.Text</Badge>,{" "}
              <Badge type="filled" status="primary">Input.Password</Badge>,{" "}
              <Badge type="filled" status="primary">Input.OTP</Badge>,{" "}
              <Badge type="filled" status="primary">Input.TextArea</Badge>,{" "}
              <Badge type="filled" status="primary">Input.Search</Badge>,{" "}
              <Badge type="filled" status="primary">Input.Card</Badge>,{" "}
              <Badge type="filled" status="primary">Input.Select</Badge>.
            </li>
            <li>
              <strong>
                <Badge type="filled" status="neutral" dot>customSize</Badge>
              </strong>{" "}
              – Applicable for{" "}
              <Badge type="filled" status="info">Text</Badge>,{" "}
              <Badge type="filled" status="info">Password</Badge>,{" "}
              <Badge type="filled" status="info">Search</Badge>,{" "}
              <Badge type="filled" status="info">Select</Badge>. Sizes:{" "}
              <Badge type="filled" status="info">32</Badge>,{" "}
              <Badge type="filled" status="info">36</Badge>,{" "}
              <Badge type="filled" status="info">40</Badge>,{" "}
              <Badge type="filled" status="info">44</Badge>,{" "}
              <Badge type="filled" status="info">48</Badge>.{" "}
              <Badge type="filled" status="warning">OTP</Badge>,{" "}
              <Badge type="filled" status="warning">Card</Badge>, and{" "}
              <Badge type="filled" status="warning">TextArea</Badge> have default size 40.
            </li>
            <li>
              <strong>
                <Badge type="filled" status="neutral" dot>Status</Badge>
              </strong>{" "}
              – Supports{" "}
              <Badge type="filled" status="destructive">error</Badge> and{" "}
              <Badge type="filled" status="warning">warning</Badge> states for validation feedback.
            </li>
            <li>
              <strong>
                <Badge type="filled" status="neutral" dot>Labeled Inputs</Badge>
              </strong>{" "}
              – Use{" "}
              <Badge type="filled" status="primary">{`<LabeledInputText />`}</Badge> for labeled inputs with
              props like{" "}
              <Badge type="filled" status="info">label</Badge>,{" "}
              <Badge type="filled" status="info">bottomlabel</Badge>.
            </li>
          </ul>

          <Divider />

          <Title level={4}>Ant Design Supported Props</Title>
          <p className="text-base leading-relaxed">
            All native props like{" "}
            <Badge type="filled" status="neutral" dot>placeholder</Badge>,{" "}
            <Badge type="filled" status="neutral" dot>disabled</Badge>,{" "}
            <Badge type="filled" status="neutral" dot>value</Badge>,{" "}
            <Badge type="filled" status="neutral" dot>onChange</Badge>, and so on are supported.
          </p>

          <Divider />

          <Title level={4}>Examples</Title>
          <div className="space-y-6">
            {examples.map((ex, index) => (
              <Card
                key={index}
                title={ex.label}
                className="rounded-lg"
                extra={
                  <Button
                    icon={
                      copiedIndex === index ? (
                        <CheckOutlined />
                      ) : (
                        <CopyOutlined />
                      )
                    }
                    size="small"
                    onClick={() => copyCode(ex.code, index)}
                  >
                    {copiedIndex === index ? "Copied" : "Copy"}
                  </Button>
                }
              >
                <div className="mb-4">{ex.element}</div>
                <SyntaxHighlighter
                  language="jsx"
                  style={oneDark}
                  customStyle={{
                    borderRadius: "0.5rem",
                    padding: "1rem",
                    fontSize: "0.875rem",
                    width: "100%",
                  }}
                >
                  {ex.code}
                </SyntaxHighlighter>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </ConfigProvider>
  );
};

export default InputDoc;
