import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import '.././index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DateForm from './DateForm';
import DinnersList from './DinnersList';
import { Dinner } from './DinnersList';
import request from 'superagent';

// Temporary placeholder data
// const dinnersTemp: Dinner[] = [
//   { date: '01-01-2020', meal: 'Pasta', diet: 'Vegetarian' },
//   { date: '02-01-2020', meal: 'Ribs', diet: 'Meat' }
// ];
const url = 'http://localhost:4000/dinner';
// const url = 'https://dinners-api.herokuapp.com/dinner';

const App: React.FC = (): JSX.Element => {
  const [startDate, setStartDate] = useState<any>(new Date());
  const [meal, setMeal] = useState<string>('');
  const [diet, setDiet] = useState<string>('Omnivore');
  const [dinners, setDinners] = useState<Array<Dinner>>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('USE EFFECT IS CALLED');
    request
      .get(url)
      .then(res => {
        setDinners(res.body);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleChangeDate = (date: Date): void => {
    setStartDate(date);
    console.log('startDate', startDate);
  };

  const handleChangeInput = (item: ChangeEvent<HTMLFormElement>): void => {
    switch (item.target.name) {
      case 'meal':
        setMeal(item.target.value);
        break;
      case 'diet':
        setDiet(item.target.value);
        break;
    }
  };

  const addNewDinner = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const newDinner = {
      id: Math.floor(Math.random() * Math.floor(1000)).toString(),
      date: startDate,
      meal: meal,
      diet: diet
    };
    request
      .post(url)
      .send(newDinner)
      .then(res => {
        console.log('ADDING A NEW DINNER TO DB', res.body);
        const updatedDinners: Dinner[] = [...dinners];
        updatedDinners.push(newDinner);
        setDinners(updatedDinners);
      })
      .catch(handlePostResponse);
  };

  function handlePostResponse(response: any) {
    setError('Sorry, a dinner already exists at this date');
  }

  const errorMessage = error ? <p>{error}</p> : null;

  return (
    <div>
      <DateForm
        handleSubmit={addNewDinner}
        handleChangeDate={handleChangeDate}
        startDate={startDate}
        handleChangeInput={handleChangeInput}
      />
      {errorMessage}
      <DinnersList dinners={dinners} />
    </div>
  );
};

export default App;
