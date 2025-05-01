import React from "react";
import ComponentDocLayout from "./ComponentDocLayout";
import Badge from "../components/badge/Badge";
const ColorDocumentation: React.FC = () => {
  const description = (
    <p className="text-base leading-relaxed">
      Our color system is structured into two main layers:{" "}
      <Badge type="filled" status="info">Primitive Colors</Badge> and{" "}
      <Badge type="filled" status="info">Semantic Theme Tokens</Badge>. This modular setup helps ensure consistent usage of color throughout the design system while adapting to both light and dark themes.
    </p>
  );

  const customProps = (
    <ul className="list-disc list-inside space-y-2 text-base">
      <li>
        <strong>Primitive Colors</strong>: Low-level base tokens like{" "}
        <code>colors.primary[500]</code>, <code>colors.green[200]</code>, etc.
      </li>
      <li>
        <strong>Theme Tokens</strong>: Semantic mapping via the <code>Themes</code> object, accessible using keys like{" "}
        <code>Themes.light.primary.default</code>, <code>Themes.dark.neutral.hover</code>, etc.
      </li>
    </ul>
  );

  const nativeProps = (
    <p className="text-base leading-relaxed">
      While primitive colors are hard-coded, theme tokens support dynamic theming. Each semantic token (like{" "}
      <code>primary</code>, <code>success</code>, <code>destructive</code>) maps to multiple states including{" "}
      <code>default</code>, <code>hover</code>, <code>focus</code>, <code>accentBg</code>, <code>stroke</code>, and{" "}
      <code>textcolor</code>.
    </p>
  );

  const examples = [
    {
      label: "Accessing Primitive Colors",
      code: `
import { colors } from "../tokens/colors";

const purple = colors.primary[500];  // #A05CFF
const lightGreen = colors.green[100];  // #E6FEEF
const semiTransparentBlack = colors.ab[8]; // #17171C14
      `,
      element: (
        <div className="text-base">
          Example: <code>colors.primary[500]</code> → <span className="font-mono">#A05CFF</span>
        </div>
      ),
    },
    {
      label: "Accessing Theme Tokens",
      code: `
import { Themes } from "../themes";

const btnBg = Themes.light.primary.default;
const warningText = Themes.dark.warning.textcolor;
const strokeColor = Themes.light.neutral.stroke;
      `,
      element: (
        <div className="text-base">
          Example: <code>Themes.dark.success.hover</code> → Uses <code>colors.green[500]</code>
        </div>
      ),
    },
  ];

  const extra = (
    <div className="text-base leading-relaxed space-y-4">
      <p>
        The <code>colors</code> object defines a palette of low-level tokens, organized by hue (e.g.,{" "}
        <code>primary</code>, <code>green</code>, <code>red</code>, etc.) and shade (e.g.,{" "}
        <code>colors.primary[50]</code> through <code>[950]</code>).
      </p>
      <p>
        The <code>Themes</code> object provides semantic abstraction over these tokens for theme-safe use in components. Each theme (<code>light</code> or <code>dark</code>) includes mappings like:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li><code>primary</code>: main accent color for buttons, highlights</li>
        <li><code>neutral</code>: text and border neutral colors</li>
        <li><code>success</code>, <code>destructive</code>, <code>info</code>, <code>warning</code>: for status-related UI</li>
      </ul>
      <p>
        Every token has multiple states: <code>default</code>, <code>hover</code>, <code>focus</code>, <code>dark</code>,{" "}
        <code>accentBg</code>, <code>stroke</code>, and <code>textcolor</code> — all derived from primitive tokens to keep visual consistency.
      </p>
      <p>
        This approach allows centralized color management and smooth adaptation to themes.
      </p>
    </div>
  );

  return (
    <ComponentDocLayout
      title="Color System"
      description={description}
      customProps={customProps}
      nativeProps={nativeProps}
      examples={examples}
      extra={extra}
    />
  );
};

export default ColorDocumentation;
// import React, { useState } from "react";
// import { Card, ConfigProvider, Divider, Typography, message } from "antd";
// import { CheckOutlined, CopyOutlined } from "@ant-design/icons";
// import { useTheme } from "../context-hook/ThemeProvider";
// import { Themes } from "../components/foundation/Theme";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import Button from "../components/button/Button";
// type SemanticToken =
//   | "primary"
//   | "secondary"
//   | "neutral"
//   | "success"
//   | "destructive"
//   | "info"
//   | "warning";

// type SemanticKeys =
//   | "default"
//   | "hover"
//   | "focus"
//   | "accentBg"
//   | "stroke"
//   | "dark"
//   | "textcolor";

// const { Title, Paragraph, Text } = Typography;

// const ColorSystemDoc: React.FC = () => {
//   const { themeMode } = useTheme();
//   const theme = Themes[themeMode];
//   const semanticTokens: SemanticToken[] = [
//     "primary",
//     "secondary",
//     "neutral",
//     "success",
//     "destructive",
//     "info",
//     "warning",
//   ];
  
//   const semanticKeys: SemanticKeys[] = [
//     "default",
//     "hover",
//     "focus",
//     "accentBg",
//     "stroke",
//     "dark",
//   ];
  
//   const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

//   const copyCode = (code: string, index: number) => {
//     navigator.clipboard.writeText(code);
//     message.success("Copied to clipboard!");
//     setCopiedIndex(index);
//     setTimeout(() => setCopiedIndex(null), 500);
//   };

//   const examples = [
//     {
//       label: "Accessing Semantic Color (Primary)",
//       code: `const primaryColor = Themes.light.primary.default;`,
//       element: <div style={{ backgroundColor: theme.primary.default, padding: 16, color: theme.primary.textcolor }}>Primary Color Preview</div>,
//     },
//     {
//       label: "Using Primitive Background",
//       code: `const bgColor = Themes.dark.background.bg2;`,
//       element: <div style={{ backgroundColor: theme.background.bg2, padding: 16 }}>Dark Background Preview</div>,
//     },
//   ];

//   return (
//     <ConfigProvider
//       theme={{
//         components: {
//           Divider: { colorSplit: theme.stroke.strong },
//           Card: {
//             colorBgContainer: theme.background.bg1,
//             colorText: theme.text.t2Component,
//             colorBorderSecondary: theme.stroke.strong,
//           },
//           Typography: {
//             colorTextHeading: theme.text.t1Title,
//           },
//         },
//       }}
//     >
//       <div style={{ backgroundColor: theme.background.bg1, padding: 24 }}>
//         <Card bordered={false}>
//           <Title level={3}>Color System Documentation</Title>
//           <Paragraph>
//             This color system is divided into two layers: <Text strong>primitive tokens</Text> (core values like background, text, etc.) and
//             <Text strong> semantic tokens</Text> (status-based or theme-based values like primary, success, warning, etc.).
//           </Paragraph>

//           <Divider />

//           <Title level={4}>🎨 Primitive Colors</Title>
//           <Paragraph>
//             These are base color mappings used throughout the theme:
//           </Paragraph>

//           <Title level={5}>1. Background</Title>
//           <ul>
//             <li><code>bg0 - bg5</code>: Layered grayscale surfaces</li>
//             <li><code>bg2Hover</code>: Hover layer</li>
//             <li><code>tabBg</code>: Special case for tabs</li>
//           </ul>

//           <Title level={5}>2. Text</Title>
//           <ul>
//             <li><code>t1Title</code>: High emphasis</li>
//             <li><code>t2Subtitle</code>: Secondary info</li>
//             <li><code>t2Component</code>: UI label</li>
//             <li><code>t3Disabled</code>: Muted/disabled</li>
//             <li><code>inverse</code>: For dark on light and vice versa</li>
//           </ul>

//           <Title level={5}>3. Fill</Title>
//           <ul>
//             <li><code>f1 - f4</code>: Soft background fills for UI components</li>
//           </ul>

//           <Title level={5}>4. Stroke</Title>
//           <ul>
//             <li><code>strong</code>: Borders with emphasis</li>
//             <li><code>decorative</code>: Light UI borders</li>
//           </ul>

//           <Title level={5}>5. Inverse</Title>
//           <ul>
//             <li><code>inverseblack</code> and <code>inversewhite</code>: For inverted UIs</li>
//           </ul>

//           <Divider />

//           <Title level={4}>🌈 Semantic Colors</Title>
//           <Paragraph>These tokens are mapped from the color palette based on theme mode:</Paragraph>

//           {semanticTokens.map((token) => (
//   <div key={token} style={{ marginBottom: 12 }}>
//     <Title level={5}>{token}</Title>
//     <div style={{ display: "flex", gap: 16 }}>
//       {semanticKeys.map((key) => (
//         <div
//           key={key}
//           style={{
//             backgroundColor: theme[token][key],
//             padding: 16,
//             color: theme[token].textcolor,
//             borderRadius: 8,
//             width: 120,
//             textAlign: "center",
//           }}
//         >
//           {key}
//         </div>
//       ))}
//     </div>
//   </div>
// ))}


//           <Divider />

//           <Title level={4}>📁 Palette Sources</Title>
//           <ul>
//             <li><code>colors.grey[50–950]</code>: Neutral grayscale</li>
//             <li><code>colors.primary</code>: Brand color shades</li>
//             <li><code>colors.green, red, orange, blue</code>: Status colors</li>
//             <li><code>colors.ab, colors.aw</code>: Alpha-based fill/stroke layers for light/dark</li>
//           </ul>

//           <Divider />

//           <Title level={4}>🧪 Examples</Title>
//           <div className="space-y-6">
//             {examples.map((ex, index) => (
//               <Card
//                 key={index}
//                 title={ex.label}
//                 extra={
//                   <Button
//                     icon={copiedIndex === index ? <CheckOutlined /> : <CopyOutlined />}
//                     size="small"
//                     onClick={() => copyCode(ex.code, index)}
//                   >
//                     {copiedIndex === index ? "Copied" : "Copy"}
//                   </Button>
//                 }
//               >
//                 <div className="mb-4">{ex.element}</div>
//                 <SyntaxHighlighter
//                   language="tsx"
//                   style={oneDark}
//                   customStyle={{
//                     borderRadius: 8,
//                     padding: "1rem",
//                     fontSize: "0.875rem",
//                     width: "100%",
//                   }}
//                 >
//                   {ex.code}
//                 </SyntaxHighlighter>
//               </Card>
//             ))}
//           </div>
//         </Card>
//       </div>
//     </ConfigProvider>
//   );
// };

// export default ColorSystemDoc;
