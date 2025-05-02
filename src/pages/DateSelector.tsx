// // DateRangeSelector.tsx
// import React, { useState } from 'react';
// import { DateRange, RangeKeyDict } from 'react-date-range';
// import { addDays, startOfMonth, endOfMonth, startOfYear } from 'date-fns';
// import 'react-date-range/dist/styles.css';
// import 'react-date-range/dist/theme/default.css'; // Default theme (we'll override with CSS)

// const presets = [
//   { label: 'Today', range: [new Date(), new Date()] },
//   { label: 'Last 7 Days', range: [addDays(new Date(), -6), new Date()] },
//   { label: 'Last 30 Days', range: [addDays(new Date(), -29), new Date()] },
//   { label: 'Last 3 Months', range: [addDays(new Date(), -90), new Date()] },
//   { label: 'Last 12 Months', range: [addDays(new Date(), -365), new Date()] },
//   { label: 'Month to date', range: [startOfMonth(new Date()), new Date()] },
//   { label: 'Year to date', range: [startOfYear(new Date()), new Date()] },
// ];

// const DateRangeSelector = () => {
//   const [selectionRange, setSelectionRange] = useState({
//     startDate: new Date(),
//     endDate: new Date(),
//     key: 'selection',
//   });

//   const handleSelect = (ranges: RangeKeyDict) => {
//     const range = ranges.selection;
//     setSelectionRange({
//       startDate: range.startDate ?? new Date(),
//       endDate: range.endDate ?? new Date(),
//       key: 'selection',
//     });
//   };
  
//   const applyPreset = (range: [Date, Date]) => {
//     setSelectionRange({
//       startDate: range[0],
//       endDate: range[1],
//       key: 'selection',
//     });
//   };

//   const handleApply = () => {
//     console.log('Applied Range:', selectionRange);
//   };

//   return (
//     <div
//       className="flex bg-white rounded-xl shadow-md p-4 gap-4"
//       style={{ width: 820 }}
//     >
//       {/* Left Preset Panel */}
//       <div className="w-40 border-r pr-4">
//         {presets.map((preset) => (
//           <button
//             key={preset.label}
//             onClick={() => applyPreset(preset.range as [Date, Date])}
//             className="block w-full text-left px-3 py-2 rounded hover:bg-gray-100 mb-1 text-sm font-medium"
//           >
//             {preset.label}
//           </button>
//         ))}
//         <button className="block w-full text-left px-3 py-2 mt-2 rounded bg-gray-100 font-semibold text-sm">
//           Custom
//         </button>
//       </div>

//       {/* Right Calendar */}
//       <div className="flex flex-col gap-2">
//         <DateRange
//           ranges={[selectionRange]}
//           onChange={handleSelect}
//           months={2}
//           direction="horizontal"
//           rangeColors={['#7e22ce']}
//           showPreview={false}
//         />
//         <div className="flex justify-end gap-3 mt-2">
//           <button className="px-4 py-2 text-sm border rounded text-gray-700 hover:bg-gray-100">
//             Cancel
//           </button>
//           <button
//             className="px-4 py-2 text-sm text-white bg-purple-600 rounded hover:bg-purple-700"
//             onClick={handleApply}
//           >
//             Apply
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DateRangeSelector;
// import { DatePicker, Select } from 'antd';
// import { LeftOutlined, RightOutlined } from '@ant-design/icons';
// import dayjs, { Dayjs } from 'dayjs';
// import React, { useState } from 'react';

// const { RangePicker } = DatePicker;

// const CustomRangePicker = () => {
//   const [panelMonth, setPanelMonth] = useState<Dayjs>(dayjs());
//   const [open, setOpen] = useState(false);

//   const handleMonthChange = (offset: number) => {
//     setPanelMonth(prev => prev.add(offset, 'month'));
//   };

//   const handleMonthSelect = (value: string) => {
//     const [monthName, year] = value.split(' ');
//     const newMonth = dayjs(`${monthName} ${year}`, 'MMMM YYYY');
//     setPanelMonth(newMonth);
//   };

//   const customPanelRender = (panelNode: React.ReactNode) => {
//     return (
//       <div style={{ padding: 8 }}>
//         <style>
//           {`
//             .custom-calendar-dropdown .ant-picker-panel-container .ant-picker-header {
//               display: none !important;
//             }
//           `}
//         </style>

//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             padding: '0.5rem 1rem',
//             alignItems: 'center',
//           }}
//         >
//           <Select
//             value={panelMonth.format('MMMM YYYY')}
//             onChange={handleMonthSelect}
//             dropdownMatchSelectWidth={false}
//             bordered={false}
//             style={{ fontWeight: 500 }}
//             options={Array.from({ length: 24 }).map((_, i) => {
//               const date = dayjs().startOf('month').add(i - 12, 'month');
//               return {
//                 label: date.format('MMMM YYYY'),
//                 value: date.format('MMMM YYYY'),
//               };
//             })}
//           />

//           <div style={{ display: 'flex', gap: 8 }}>
//             <LeftOutlined
//               onClick={() => handleMonthChange(-1)}
//               style={{ cursor: 'pointer', color: '#888' }}
//             />
//             <RightOutlined
//               onClick={() => handleMonthChange(1)}
//               style={{ cursor: 'pointer', color: '#888' }}
//             />
//           </div>
//         </div>

//         {/* Calendar */}
//         <div className="custom-calendar-content">{panelNode}</div>
//       </div>
//     );
//   };

//   return (
//     <RangePicker
//       style={{ width: 500 }}
//       open={open}
//       onOpenChange={(status) => {
//         setOpen(status);
//         if (status) setPanelMonth(dayjs()); // reset to current month when opened
//       }}
//       panelRender={customPanelRender}
//       pickerValue={panelMonth} // 👈 This syncs the calendar view!
//       onCalendarChange={(dates) => {
//         // optional: keep panelMonth synced with selected date
//         if (dates?.[0]) {
//           setPanelMonth(dates[0]);
//         }
//       }}
//       dropdownClassName="custom-calendar-dropdown"
//       format="YYYY-MM-DD"
//     />
//   );
// };

// export default CustomRangePicker;
import { DatePicker, Select, ConfigProvider, DatePickerProps } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react';

const { RangePicker } = DatePicker;

type Mode = 'single' | 'range';

interface CustomDatePickerProps {
  mode?: Mode;
  datePickerProps?: DatePickerProps;
  rangePickerProps?: RangePickerProps;
}

const getMonthOptions = () => {
  return Array.from({ length: 24 }).map((_, i) => {
    const date = dayjs().startOf('month').add(i - 12, 'month');
    return {
      label: date.format('MMMM YYYY'),
      value: date.format('MMMM YYYY'),
    };
  });
};

const CalendarHeader = ({
  panelMonth,
  setPanelMonth,
  side,
  syncPanelMonth,
}: {
  panelMonth: Dayjs;
  setPanelMonth: (date: Dayjs) => void;
  side: 'left' | 'right';
  syncPanelMonth: (newMonth: Dayjs, side: 'left' | 'right') => void;
}) => {
  const handleMonthSelect = (value: string) => {
    const newMonth = dayjs(value, 'MMMM YYYY');
    setPanelMonth(newMonth);
    syncPanelMonth(newMonth, side);
  };

  const handleMonthChange = (offset: number) => {
    const newMonth = panelMonth.add(offset, 'month');
    setPanelMonth(newMonth);
    syncPanelMonth(newMonth, side);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.5rem 1rem',
        alignItems: 'center',
      }}
    >
      <Select
        value={panelMonth.format('MMMM YYYY')}
        onChange={handleMonthSelect}
        dropdownMatchSelectWidth={false}
        bordered={false}
        style={{ fontWeight: 500 }}
        options={getMonthOptions()}
      />
      <div style={{ display: 'flex', gap: 8 }}>
        <LeftOutlined
          onClick={() => handleMonthChange(-1)}
          style={{ cursor: 'pointer', color: '#888' }}
        />
        <RightOutlined
          onClick={() => handleMonthChange(1)}
          style={{ cursor: 'pointer', color: '#888' }}
        />
      </div>
    </div>
  );
};


const CustomDatePickerr: React.FC<CustomDatePickerProps> = ({ mode = 'single',datePickerProps,rangePickerProps }) => {
  const [open, setOpen] = useState(false);
  const [panelMonthLeft, setPanelMonthLeft] = useState(dayjs());
  const [panelMonthRight, setPanelMonthRight] = useState(dayjs().add(1, 'month'));
  const syncPanelMonth = (newMonth: Dayjs, side: 'left' | 'right') => {
    if (side === 'left') {
      const right = newMonth.add(1, 'month');
      setPanelMonthRight(right);
    } else {
      const left = newMonth.subtract(1, 'month');
      setPanelMonthLeft(left);
    }
  };
  
  const renderPanel = (panelNode: React.ReactNode) => {
    const children = React.Children.toArray(panelNode as React.ReactNode);

    const sharedPanelStyles = {
    
      display: 'flex',
      flexDirection: 'column' as const,
    };

    if (mode === 'single') {
      return (
        <div style={{ padding: 8 }}>
          <style>
            {`
              .custom-calendar-dropdown .ant-picker-panel-container .ant-picker-header {
                display: none !important;
              }
            `}
          </style>
          <CalendarHeader
  panelMonth={panelMonthLeft}
  setPanelMonth={setPanelMonthLeft}
  side="left"
  syncPanelMonth={syncPanelMonth}
/>
          <div>{panelNode}</div>
        </div>
      );
    }

    // Range mode
    return (
      <div
        style={{
          display: 'flex',
          padding: 8,
          gap: 0,
          border: '1px solid #ddd',
          borderRadius: 8,
          backgroundColor: '#fff',
        }}
      >
        <style>
          {`
            .custom-calendar-dropdown .ant-picker-panel-container .ant-picker-header {
              display: none !important;
            }
          `}
        </style>

        <div
          style={{
            ...sharedPanelStyles,
            borderRight: '1px solid #eee',
            paddingRight: 8,
          }}
        >
         <CalendarHeader
  panelMonth={panelMonthLeft}
  setPanelMonth={setPanelMonthLeft}
  side="left"
  syncPanelMonth={syncPanelMonth}
/>
          <div>{children[0]}</div>
        </div>

        <div
          style={{
            ...sharedPanelStyles,
            paddingRight: 8,
          }}
        >
       <CalendarHeader
  panelMonth={panelMonthRight}
  setPanelMonth={setPanelMonthRight}
  side="right"
  syncPanelMonth={syncPanelMonth}
/>
          <div>{children[1]}</div>
        </div>
      </div>
    );
  };

  const sharedProps = {
    open,
    onOpenChange: (status: boolean) => {
      setOpen(status);
      if (status) {
        setPanelMonthLeft(dayjs());
        setPanelMonthRight(dayjs().add(1, 'month'));
      }
    },
    panelRender: renderPanel,
    dropdownClassName: 'custom-calendar-dropdown',
    format: 'YYYY-MM-DD',
  };

  return mode === 'single' ? (
    <DatePicker
      {...sharedProps}
      {...datePickerProps}
      value={panelMonthLeft}
      onChange={(date) => date && setPanelMonthLeft(date)}
      pickerValue={panelMonthLeft}
    
    />
  ) : (
    <RangePicker
      {...sharedProps}
      {...rangePickerProps}
      pickerValue={[panelMonthLeft, panelMonthRight]}
      onCalendarChange={(dates) => {
        if (dates?.[0]) setPanelMonthLeft(dates[0]);
        if (dates?.[1]) setPanelMonthRight(dates[1]);
      }}
    />
  );
};

export default CustomDatePickerr;
