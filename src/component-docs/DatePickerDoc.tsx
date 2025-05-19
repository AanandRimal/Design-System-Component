import React from "react";
import ComponentDocLayout from "./ComponentDocLayout";
import DatePicker from "../components/date-picker/Date-Picker";
import Badge from "../components/badge/Badge";
import Button from "../components/button/Button";
import dayjs from "dayjs";

const description = (
  <p className="text-base leading-relaxed">
    The <Badge type="filled" status="primary">DatePicker</Badge> component is a wrapper around Ant Design’s date selection components, supporting both single-date and range modes via a <Badge type="filled" status="success">type</Badge> prop. It uses your design system’s theming and provides extended styling with custom navigation icons and optional footers.
  </p>
);

const customProps = (
  <ul className="list-disc list-inside text-base space-y-2">
    <li>
      <strong><Badge type="filled" status="neutral" dot>type</Badge></strong> – Accepts <Badge type="filled" status="info">"date"</Badge> or <Badge type="filled" status="info">"range"</Badge>. Determines whether the component renders a single DatePicker or a RangePicker.
    </li>
    <li>
      <strong><Badge type="stroke" status="info" dot>datePickerProps</Badge></strong> – All native AntD DatePicker props can be passed here when <code>type="date"</code>.
    </li>
    <li>
      <strong><Badge type="stroke" status="info" dot>rangePickerProps</Badge></strong> – All native AntD RangePicker props can be passed here when <code>type="range"</code>.
    </li>
  </ul>
);

const nativeProps = (
  <p className="text-base leading-relaxed">
    All native Ant Design <code>DatePicker</code> and <code>RangePicker</code> props are supported depending on the <code>type</code> specified. The component injects your theme’s colors and overrides some UI with custom icons and paddings while preserving expected behavior.
  </p>
);

const examples = [
  {
    label: "DatePicker with Footer Buttons",
    code: `
<DatePicker
  type="date"
  datePickerProps={{
    renderExtraFooter: () => (
      <div style={{ textAlign: "right" }}>
        <Button Customtype="secondary" style={{ marginRight: 8 }}>
          Clear
        </Button>
        <Button Customtype="primary">
          Apply
        </Button>
      </div>
    ),
  }}
/>`,
    element: (
      <DatePicker
        type="date"
        datePickerProps={{
          renderExtraFooter: () => (
            <div style={{ textAlign: "right" }}>
              <Button Customtype="secondary" style={{ marginRight: 8 }}>
                Clear
              </Button>
              <Button Customtype="primary">Apply</Button>
            </div>
          ),
        }}
      />
    ),
  },
  {
    label: "RangePicker with Presets and Footer",
    code: `
<DatePicker
  type="range"
  rangePickerProps={{
    defaultOpen: true,
    placeholder: ["Start date", "End date"],
    presets: [
      { label: "Today", value: [dayjs(), dayjs()] },
      { label: "Last 7 Days", value: [dayjs().subtract(7, "day"), dayjs()] },
      { label: "Last 30 Days", value: [dayjs().subtract(30, "day"), dayjs()] },
      { label: "Last 3 Months", value: [dayjs().subtract(3, "month"), dayjs()] },
      { label: "Last 12 Months", value: [dayjs().subtract(12, "month").startOf("month"), dayjs()] },
    ],
    renderExtraFooter: () => (
      <div style={{ textAlign: "right" }}>
        <Button Customtype="secondary" style={{ marginRight: 8 }}>
          Clear
        </Button>
        <Button Customtype="primary">Apply</Button>
      </div>
    ),
  }}
/>`,
    element: (
      <DatePicker
        type="range"
        rangePickerProps={{
          defaultOpen: true,
          placeholder: ["Start date", "End date"],
          presets: [
            { label: "Today", value: [dayjs(), dayjs()] },
            { label: "Last 7 Days", value: [dayjs().subtract(7, "day"), dayjs()] },
            { label: "Last 30 Days", value: [dayjs().subtract(30, "day"), dayjs()] },
            { label: "Last 3 Months", value: [dayjs().subtract(3, "month"), dayjs()] },
            {
              label: "Last 12 Months",
              value: [dayjs().subtract(12, "month").startOf("month"), dayjs()],
            },
          ],
          renderExtraFooter: () => (
            <div style={{ textAlign: "right" }}>
              <Button Customtype="secondary" style={{ marginRight: 8 }}>
                Clear
              </Button>
              <Button Customtype="primary">Apply</Button>
            </div>
          ),
        }}
      />
    ),
  },
];

const DatePickerDoc: React.FC = () => {
  return (
    <ComponentDocLayout
      title="DatePicker Documentation"
      description={description}
      customProps={customProps}
      nativeProps={nativeProps}
      examples={examples}
    />
  );
};

export default DatePickerDoc;
