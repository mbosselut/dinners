import React, { useState, FormEvent } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateForm = (): JSX.Element => {
  const [startDate, setStartDate] = useState<any>(new Date());
  const handleChange = (date: Date) => {
    setStartDate(date);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
