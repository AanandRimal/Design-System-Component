// src/components/CustomDatePicker.tsx
import React from 'react';
import MyDatePicker from './MyDatePicker';

interface CustomDatePickerProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ value, onChange }) => {
  return (
    <MyDatePicker
      value={value}
      onChange={(newDate) => {
        onChange(newDate);
      }}
      panelRender={(panelNode) => (
        <div style={{ padding: 8, borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ marginBottom: 8 }}>📅 Custom Header</div>
          {panelNode}
        </div>
      )}
      presets={[
        { label: 'Yesterday', value: new Date(Date.now() - 24 * 60 * 60 * 1000) },
        { label: 'Last Week', value: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) },
        { label: 'Last Month', value: new Date(new Date().setMonth(new Date().getMonth() - 1)) },
      ]}
      style={{ width: 260 }}
      format="yyyy-MM-dd"
    />
  );
};

export default CustomDatePicker;
