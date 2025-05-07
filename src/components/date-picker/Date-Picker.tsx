import React from "react";
import { DatePicker as AntdDatePicker, ConfigProvider, DatePickerProps} from "antd";
import { useTheme } from "../../context-hook/ThemeProvider"; 
import { Themes } from "../foundation/Theme";
import type { RangePickerProps } from "antd/es/date-picker"; 
const { RangePicker } = AntdDatePicker;

interface CustomDatePickerProps {
  type?: "date" | "range"; // <-- control what to render
  datePickerProps?: DatePickerProps;
  rangePickerProps?: RangePickerProps;
}

const DatePicker: React.FC<CustomDatePickerProps> = ({
  type = "date",
  datePickerProps,
  rangePickerProps,
}) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];

  return (
    <ConfigProvider
      theme={{
        components: {
          DatePicker: {
            colorPrimary:currentTheme.primary.default,
            cellHoverBg:currentTheme.background.bg3,
            cellActiveWithRangeBg:currentTheme.primary.focus,
            colorBgElevated:currentTheme.background.bg2,
            colorBgContainer:currentTheme.background.bg2,
            colorSplit:currentTheme.stroke.decorative,
            colorText:currentTheme.text.t2Component,
            colorIcon:currentTheme.text.t3Subtitle,
            colorTextHeading:currentTheme.text.t2Component,
            colorTextDisabled:currentTheme.text.t3Disabled,
            colorTextPlaceholder:currentTheme.text.t2Component
            // more tokens...
          },
        },
      }}
    >
      {type === "date" ? (
        <AntdDatePicker {...datePickerProps} />
      ) : (
        <RangePicker {...rangePickerProps} />
      )}
    </ConfigProvider>
  );
};

export default DatePicker;
