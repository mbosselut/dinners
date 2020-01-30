import React from 'react';
import DateForm from './DateForm';
import MealsList from './MealsList';

const App = (): JSX.Element => {
  return (
    <div>
      <DateForm />
      <MealsList
        meals={[
          { date: new Date(), meal: 'Pasta', diet: 'Vegetarian' },
          { date: new Date(), meal: 'Ribs', diet: 'Meat' }
        ]}
      />
    </div>
  );
};

export default App;
