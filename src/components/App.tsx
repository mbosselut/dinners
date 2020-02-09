import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import '.././index.css';
import DateForm from './DateForm';
import DinnersList from './DinnersList';
import { Dinner } from './DinnersList';
import request from 'superagent';

// Temporary placeholder data
// const dinnersTemp: Dinner[] = [
//   { date: '01-01-2020', meal: 'Pasta', diet: 'Vegetarian' },
//   { date: '02-01-2020', meal: 'Ribs', diet: 'Meat' }
// ];

const App: React.FC = (): JSX.Element => {
  const [startDate, setStartDate] = useState<any>(new Date());
  const [meal, setMeal] = useState<string>('');
  const [diet, setDiet] = useState<string>('Omnivore');
  const [dinners, setDinners] = useState<Array<Dinner>>([]);

  useEffect(() => {
    console.log('USE EFFECT IS CALLED');
    request
      .get('https://dinners-api.herokuapp.com/dinner')
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
      .post('https://dinners-api.herokuapp.com/dinner')
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
        handleChangeDate={handleChangeDate}
        startDate={startDate}
        handleChangeInput={handleChangeInput}
      />
      <DinnersList dinners={dinners} />
    </div>
  );
};

export default App;
