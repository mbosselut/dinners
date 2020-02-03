import React, { useState, useEffect, FormEvent } from 'react';
import DateForm from './DateForm';
import DinnersList from './DinnersList';
import { Dinner } from './DinnersList';
import request from 'superagent';

// Temporary placeholder data
// const dinnersTemp: Dinner[] = [
//   { date: '01-01-2020', meal: 'Pasta', diet: 'Vegetarian' },
//   { date: '02-01-2020', meal: 'Ribs', diet: 'Meat' }
// ];

// Previous attempt using a custom hook instead of having useEffect inside the component
// const useDinners = () => {
//   // const [dinners, setDinners] = useState([]);

//   useEffect(() => {
//     console.log('USE EFFECT');
//     request
//       .get('http://localhost:3004/dinners')
//       .then(res => {
//         setDinners(res.body);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }, []);

//   return dinners;
// };

const App: React.FC = (): JSX.Element => {
  const [startDate, setStartDate] = useState<any>(new Date());
  const [dinners, setDinners] = useState<Array<Dinner>>([]);

  useEffect(() => {
    console.log('USE EFFECT IS CALLED');
    request
      .get('http://localhost:3004/dinners')
      .then(res => {
        setDinners(res.body);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleChange = (date: Date) => {
    setStartDate(date);
    console.log('startDate', startDate);
  };

  const addNewDinner = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newDinner = {
      id: '41',
      date: startDate,
      meal: 'Pad thai',
      diet: 'Meat'
    };
    request
      .post('http://localhost:3004/dinners')
      .send(newDinner)
      .then(res => {
        console.log('ADDING A NEW DINNER TO DB', res.body);
        const updatedDinners: Dinner[] = [...dinners];
        updatedDinners.push(newDinner);
        setDinners(updatedDinners);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <DateForm
        handleSubmit={addNewDinner}
        handleChange={handleChange}
        startDate={startDate}
      />
      <DinnersList dinners={dinners} />
    </div>
  );
};

export default App;
