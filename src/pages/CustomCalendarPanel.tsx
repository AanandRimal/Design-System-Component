// CustomCalendar.tsx
import React from 'react';
import PickerPanel from 'rc-picker/es/PickerPanel';
import type { Dayjs } from 'dayjs';
import 'rc-picker/assets/index.css';
import generateConfig from 'rc-picker/es/generate/dayjs';
import enUS from 'rc-picker/es/locale/en_US'; // Import a working locale

interface CustomCalendarProps {
  value: Dayjs;
  onSelect: (date: Dayjs) => void;
  defaultValue?: Dayjs;
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({ value, onSelect, defaultValue }) => {
  return (
    <PickerPanel
      generateConfig={generateConfig}
      locale={enUS}
      value={value}
      onSelect={onSelect}
      defaultValue={defaultValue}
    />
  );
};

export default CustomCalendar;
