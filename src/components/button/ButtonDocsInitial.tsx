import React, { useState } from "react";
import {
  Card,
  message,
  ConfigProvider,
  Divider,
  Typography,
} from "antd";
import { CheckOutlined, CopyOutlined } from "@ant-design/icons";
import { LeftIcon } from "../icons/LeftIcon";
import Button from "./Button";
import Badge from "../badge/Badge"; // ⬅️ Replace with actual path
import { Themes } from "../foundation/Theme";
import { useTheme } from "../../context-hook/ThemeProvider";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const { Title } = Typography;

const ButtonDoc: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];

  const copyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    message.success("Copied to clipboard!");
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1000);
  };

  const examples = [
    {
      label: "Success Button with Left Icon",
      code: `<Button Customtype="success" Customtize={40} leftIcon={<CheckOutlined />}>Success</Button>`,
      element: (
        <Button Customtype="success" Customsize={40} leftIcon={<LeftIcon />}>
          Success
        </Button>
      ),
    },
    {
      label: "Default Button with Right Icon",
      code: `<Button Customtype="primary" Customtsize={36} rightIcon={<ArrowRightOutlined />}>Next</Button>`,
      element: (
        <Button Customtype="primary" Customsize={36} rightIcon={<LeftIcon />}>
          Next
        </Button>
      ),
    },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {},
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
          Typography:{
            colorTextHeading:currentTheme.text.t1Title,
          }
        },
      }}
    >
      <div
        className=""
        style={{
          backgroundColor: currentTheme.background.bg1,
          color: currentTheme.text.t2Component,
        }}
      >
        <Card bordered={false} className="shadow-md ">
          <Title level={3}>Button Documentation</Title>
          <p className="text-base leading-relaxed">
            The <Badge type="filled" status="neutral" dot>Button</Badge> component extends Ant Design’s default{" "}
            <Badge type="filled" status="neutral" dot>Button</Badge> by supporting additional visual types, custom
            sizes, and icon support on both sides of the label.
          </p>

          <Divider />

          <Title level={4}>Custom Props</Title>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>
              <strong>
                <Badge type="filled" status="neutral" dot>customType</Badge>
              </strong>{" "}
              – Custom styles like{" "}
              <Badge type="filled" status="primary">primary</Badge>,{" "}
              <Badge type="filled" status="success">success</Badge>,{" "}
              <Badge type="filled" status="destructive">destructive</Badge>,{" "}
              <Badge type="filled" status="warning">warning</Badge>,{" "}
              <Badge type="filled" status="neutral">ghost</Badge>
            </li>
            <li>
              <strong>
                <Badge type="filled" status="neutral" dot>customSize</Badge>
              </strong>{" "}
              – Sizes:{" "}
              <Badge type="filled" status="info">32</Badge>,{" "}
              <Badge type="filled" status="info">36</Badge>,{" "}
              <Badge type="filled" status="info">40</Badge>,{" "}
              <Badge type="filled" status="info">44</Badge>,{" "}
              <Badge type="filled" status="info">48</Badge>
            </li>
            <li>
              <strong>
                <Badge type="filled" status="neutral" dot>leftIcon</Badge>
              </strong>{" "}
              – Accepts any valid React icon.
            </li>
            <li>
              <strong>
                <Badge type="filled" status="neutral" dot>rightIcon</Badge>
              </strong>{" "}
              – Accepts any valid React icon.
            </li>
          </ul>

          <Divider />

          <Title level={4}>Ant Design Supported Props</Title>
        <p className="text-base leading-relaxed" >
            You can still use all native AntD props like{" "}
            <Badge type="filled" status="neutral" dot>type</Badge>,{" "}
            <Badge type="filled" status="neutral" dot>danger</Badge>,{" "}
            <Badge type="filled" status="neutral" dot>shape</Badge>,{" "}
            <Badge type="filled" status="neutral" dot>block</Badge>,{" "}
            <Badge type="filled" status="neutral" dot>loading</Badge>, etc.
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
                      copiedIndex === index ? <CheckOutlined /> : <CopyOutlined />
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
                    width:"100%",
                  
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

export default ButtonDoc;
