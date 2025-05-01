// components/docs/ComponentDocTemplate.tsx
import React from "react";
import { Card, ConfigProvider, Divider, Typography, message } from "antd";
import { CheckOutlined, CopyOutlined } from "@ant-design/icons";
import { useTheme } from "../context-hook/ThemeProvider";
import { Themes } from "../components/foundation/Theme";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Button from "../components/button/Button";

const { Title } = Typography;

type Example = {
  label: string;
  code: string;
  element: React.ReactNode;
};

type ComponentDocTemplateProps = {
  title: string;
  description: React.ReactNode;
  customProps?: React.ReactNode;
  nativeProps?: React.ReactNode;
  examples: Example[];
  extra?: React.ReactNode; 
};

const ComponentDocLayout: React.FC<ComponentDocTemplateProps> = ({
  title,
  description,
  customProps,
  nativeProps,
  examples,
  extra,
}) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  const copyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    message.success("Copied to clipboard!");
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 500);
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
      <div style={{ backgroundColor: currentTheme.background.bg1, color: currentTheme.text.t2Component }}>
        <Card bordered={false} className="shadow-md">
          <Title level={3}>{title}</Title>
          <div className="text-base leading-relaxed">{description}</div>

          {customProps && (
            <>
              <Divider />
              <Title level={4}>Custom Props</Title>
              {customProps}
            </>
          )}

          {nativeProps && (
            <>
              <Divider />
              <Title level={4}>Ant Design Supported Props</Title>
              {nativeProps}
            </>
          )}

          <Divider />
          <Title level={4}>Examples</Title>
          <div className="space-y-6">
            {examples.map((ex, index) => (
              <Card
                key={index}
                title={ex.label}
                extra={
                  <Button
                    icon={copiedIndex === index ? <CheckOutlined /> : <CopyOutlined />}
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
          {extra && (
  <>
    <Divider />
    <Title level={4}>More Details</Title>
    {extra}
  </>
)}
        </Card>
      </div>
    </ConfigProvider>
  );
};

export default ComponentDocLayout;
