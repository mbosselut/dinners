import React, { useState, useEffect, FormEventHandler } from 'react';
import DateForm from './DateForm';
import DinnersList from './DinnersList';
import { Dinner } from './DinnersList';
import request from 'superagent';

// Temporary placeholder data
// const dinnersTemp: Dinner[] = [
//   { date: '01-01-2020', meal: 'Pasta', diet: 'Vegetarian' },
//   { date: '02-01-2020', meal: 'Ribs', diet: 'Meat' }
// ];

const useDinners = () => {
  const [dinners, setDinners] = useState([]);

  useEffect(() => {
    console.log('USE EFFECT');
    request
      .get('http://localhost:3004/dinners')
      .then(res => {
        setDinners(res.body);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return dinners;
};

const App: React.FC = (): JSX.Element => {
  const dinners = useDinners();

  const addNewDinner = (event: Event | undefined, startDate: any): void => {
    if (event) {
      event.preventDefault();
    }
    const newDinner = {
      id: '38',
      date: startDate,
      meal: 'Pad thai',
      diet: 'Meat'
    };
    request
      .post('http://localhost:3004/dinners')
      .send(newDinner)
      .then(res => {
        console.log('COUCOU');
      })
      .catch(err => console.log(err));
  };
  // const addNewDinner: React.FormEventHandler<HTMLFormElement> = event => {
  //   console.log(event);
  // };

  return (
    <div>
      <DateForm handleSubmit={addNewDinner} />
      <DinnersList dinners={dinners} />
    </div>
  );
};

export default App;
