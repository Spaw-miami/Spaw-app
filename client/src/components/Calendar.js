import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, { formatDate, parseDate,} from'react-day-picker/moment';
import 'moment/locale/it';




export default function Example() {
  return (
    <div>
      <p>Please Select a Day:</p>
      <DayPickerInput
        formatDate={formatDate}
        parseDate={parseDate}
        placeholder={`${formatDate(new Date())}`}
      />
    </div>
  );
}
