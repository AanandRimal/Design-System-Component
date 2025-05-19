import React from "react";
import {
  DatePicker as AntdDatePicker,
  ConfigProvider,
  DatePickerProps,
} from "antd";
import {Icon} from "@iconify/react";
import type { RangePickerProps } from "antd/es/date-picker";
import { useTheme } from "../../context-hook/ThemeProvider";
import { Themes } from "../foundation/Theme";
import Badge from "../badge/Badge";
const { RangePicker } = AntdDatePicker;
interface CustomDatePickerProps {
  type?: "date" | "range";
  datePickerProps?: DatePickerProps;
  rangePickerProps?: RangePickerProps;
}

// const StyledPickerWrapper = styled.div`
//   .ant-picker-panel {
//     padding: 120px; 
//     background-color:"red"
//   }

//   .ant-picker-header {
//     padding: 8px 16px;
//   }

//   .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner {
//     border-radius: 6px;
//   }
// `;

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
            cellHeight: 36,
            cellWidth: 36,
            borderRadiusSM: 8,
             lineWidth: 1,
            marginXS: 0,
            paddingXXS: 1.333,
      hoverBorderColor:currentTheme.primary.hover,
            colorPrimary: currentTheme.primary.default,
            cellHoverBg: currentTheme.fill.f2,
            cellActiveWithRangeBg: currentTheme.primary.focus,
            colorBgElevated: currentTheme.background.bg2,
            colorBgContainer: currentTheme.background.bg2,
            colorSplit: currentTheme.stroke.decorative,
            colorText: currentTheme.text.t2Component,
            colorIcon: currentTheme.text.t3Subtitle,
            colorIconHover: currentTheme.text.t3Subtitle,
            colorTextHeading: currentTheme.text.t2Component,
            colorTextDisabled: currentTheme.text.t4Disabled,
            colorTextPlaceholder: currentTheme.text.t2Component,
          },
        },
      }}
    >
        {type === "date" ? (
          <AntdDatePicker  superNextIcon={null} superPrevIcon={null}  prevIcon= { <Badge size={28} type="stroke" status="neutral" icon={<Icon icon="mage:chevron-left" />}/>}  nextIcon={<Badge size={28} type="stroke" status="neutral" icon={<Icon icon="mage:chevron-right" />}/>}  {...datePickerProps} />
        ) : (
          <RangePicker  superNextIcon={null} superPrevIcon={null}   prevIcon= { <Badge size={28} type="stroke" status="neutral" icon={<Icon icon="mage:chevron-left" />}/>}  nextIcon={<Badge size={28} type="stroke" status="neutral" icon={<Icon icon="mage:chevron-right" />}/>} {...rangePickerProps} />
        )}
           <style>
        {`
         .ant-picker-body {
      padding: ${type === "date" ? "8px 0px 12px 0px" : "8px 0px 0px 0px"} !important;
    }
      .ant-picker-ranges{
      display:${type === "date" ? "none" : ""} none !important;}

   ${type === "date" ? `
      .ant-picker-header {
        padding: 16px 0px 0px 0px !important;
      }
      .ant-picker-panel {
        padding: 0px 12px 0px 12px !important;
      }
    ` : ""
  }

.ant-picker-header{
border-bottom:none !important;

}
  .ant-picker-body{
  padding:8px 0px 0px 0px !important;
    }
 .ant-picker-cell-inner {
  padding: 8px 7px 8px 7px !important;
  line-height: 20px !important;
  font-weight: 500 !important;
        } 
  .ant-picker-panels{
   display: flex;
        gap: 24px;
padding: 16px 12px 0px 12px !important;
     }

         thead th {
    color: ${currentTheme.text.t3Subtitle} !important;
    font-weight: 500 !important;
    font-size: 13px !important; 
  }   
    .ant-picker-presets ul li {
  padding: 6px 12px 6px 12px !important;}
}
  .ant-picker-footer-extra {
   padding:0px !important;
   border-bottom: none !important;
    }
   .ant-picker-dropdown .ant-picker-footer-extra:not(:last-child) {
      border-bottom: none !important;
    }
      .ant-picker-footer {
    padding: 12px 12px 12px 12px !important;
    }
        .ant-picker-range-arrow {
      display: none !important;}
        `}
      </style>

    </ConfigProvider>
  );
};

export default DatePicker;
