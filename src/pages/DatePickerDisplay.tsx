import React from "react";
import dayjs from "dayjs";
import CustomDatePicker from "../components/date-picker/Date-Picker";
import Button from "../components/button/Button";

const DatePickerDisplay: React.FC = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      <CustomDatePicker
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

      <CustomDatePicker
        type="range"
        rangePickerProps={{
          defaultOpen: true,
          placeholder: ["Start date", "End date"],
          presets: [
            {
              label: "Today",
              value: [dayjs(), dayjs()],
            },
            {
              label: "Last 7 Days",
              value: [dayjs().subtract(7, "day"), dayjs()],
            },
            {
              label: "Last 30 Days",
              value: [dayjs().subtract(30, "day"), dayjs()],
            },
            {
              label: "Last 3 Months",
              value: [dayjs().subtract(3, "month"), dayjs()],
            },
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
    </div>
  );
};

export default DatePickerDisplay;
