import { 
    addDays,
    addMonths,
    addYears,
    differenceInCalendarDays,
    endOfMonth,
    endOfWeek,
    format,
    getDate,
    getMonth,
    getYear,
    isAfter,
    isBefore,
    isEqual,
    isSameDay,
    isSameMonth,
    isSameYear,
    parse,
    setHours,
    setMinutes,
    setSeconds,
    startOfMonth,
    startOfWeek,
  } from 'date-fns';
  
  const dateFnsGenerateConfig = {
    // parse / format
    format,
    parse,
    
    // get
    getYear,
    getMonth,
    getDate,
    
    // set
    setHours,
    setMinutes,
    setSeconds,
    
    // compare
    isAfter,
    isBefore,
    isEqual,
    isSameDay,
    isSameMonth,
    isSameYear,
    
    // calculate
    addMonths,
    addYears,
    addDays,
    differenceInCalendarDays,
    
    // start / end
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
  };
  
  export default dateFnsGenerateConfig;
  