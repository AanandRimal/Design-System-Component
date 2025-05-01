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
