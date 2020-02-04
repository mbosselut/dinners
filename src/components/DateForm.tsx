import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChangeDate: (date: Date) => void;
  handleChangeInput: (item: any) => void;
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
            onChange={props.handleChangeDate}
            name="startDate"
            dateFormat="dd/MM/yyyy"
          />
          <label htmlFor="meal">Meal name :</label>

          <input
            type="text"
            name="meal"
            placeholder="Meal name"
            onChange={props.handleChangeInput}
          ></input>
          <label htmlFor="diet">Meal diet :</label>

          <select
            name="diet"
            onChange={props.handleChangeInput}
            defaultValue="Omnivore"
          >
            <option value="Omnivore">Omnivore</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Pescetarian">Pescetarian</option>
          </select>
        </div>
        <div className="form-group">
          <button className="btn btn-success">Add new meal</button>
        </div>
      </form>
    </div>
  );
};

export default DateForm;
