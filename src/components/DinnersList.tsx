import React from 'react';
import moment from 'moment';
import Table from 'react-bootstrap/Table';

export interface Dinner {
  id: string;
  date: string;
  meal: string;
  diet: string;
}

interface DinnerListProps {
  dinners: Dinner[];
}

type DinnersListRender = JSX.Element;

const DinnersList = (props: DinnerListProps): JSX.Element => {
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
      <Table striped bordered hover size="sm" id="dinnersTable">
        <tbody>
          <tr>
            <th id="dateColumn">Date</th>
            <th id="mealColumn">Meal</th>
            <th>Diet</th>
          </tr>
          {DinnersListRender}
        </tbody>
      </Table>
    </div>
  );
};

export default DinnersList;
