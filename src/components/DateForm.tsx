import React, { useState, FormEvent, FormEventHandler } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, startDate: any) => void;
}

const DateForm = (props: DateFormProps): JSX.Element => {
  const [startDate, setStartDate] = useState<any>(new Date());
  const handleChange = (date: Date) => {
    setStartDate(date);
  };
  return (
    <div>
      <form onSubmit={props.handleSubmit(event, startDate)}>
        <div className="form-group">
          <label>Select Date: </label>
          <DatePicker
            selected={startDate}
            onChange={handleChange}
            name="startDate"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-success">Add Date</button>
        </div>
      </form>
    </div>
  );
};

export default DateForm;
