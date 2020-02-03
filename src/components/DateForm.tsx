import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (date: Date) => void;
  startDate: Date;
}

const DateForm = (props: DateFormProps): JSX.Element => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div className="form-group">
          <label>Select Date: </label>
          <DatePicker
            selected={props.startDate}
            onChange={props.handleChange}
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
