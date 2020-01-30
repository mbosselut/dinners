import React, { useState, useEffect } from 'react';
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
        // err.message, err.response
      });
  }, []);

  return dinners;
};

const App: React.FC = (): JSX.Element => {
  // const [dinners, setDinners] = useState([]);

  // useEffect(() => {
  //   console.log('USE EFFECT');
  //   const result = await request
  //     .get('http://localhost:3004/dinners')
  //     .then(res => {
  //       res.body;
  //     })
  //     .catch(err => {
  //       // err.message, err.response
  //     });
  // });
  const dinners = useDinners();
  return (
    <div>
      <DateForm />
      <DinnersList dinners={dinners} />
    </div>
  );
};

export default App;
