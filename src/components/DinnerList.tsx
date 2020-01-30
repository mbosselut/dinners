import React from 'react';
import moment from 'moment';

interface Dinner {
  date: Date;
  meal: String;
  diet: String;
}
interface DinnerListProps {
  dinners: Dinner[];
}

type DinnersListRender = JSX.Element;

const dinnersList = (props: DinnerListProps): JSX.Element => {
  console.log(props.dinners);
  const DinnersListRender: DinnersListRender[] = props.dinners.map(
    (dinner: Dinner, index: number): JSX.Element => {
      console.log(dinner.date);
      const date = moment(dinner.date).format('DD MM YYYY');
      return (
        <tr key={index}>
          <th>{date}</th>
          <th>{dinner.meal}</th>
          <th>{dinner.diet}</th>
        </tr>
      );
    }
  );
  console.log(typeof DinnersListRender);
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Meal</th>
            <th>Diet</th>
          </tr>
          {DinnersListRender}
        </tbody>
      </table>
    </div>
  );
};

export default dinnersList;
