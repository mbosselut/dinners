import React from 'react';
import moment from 'moment';

export interface Dinner {
  date: string;
  meal: string;
  diet: string;
}
interface DinnerListProps {
  dinners: Dinner[];
}

type DinnersListRender = JSX.Element;

const dinnersList = (props: DinnerListProps): JSX.Element => {
  const DinnersListRender: DinnersListRender[] = props.dinners.map(
    (dinner: Dinner, index: number): JSX.Element => {
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
