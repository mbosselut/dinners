import React from 'react';
import DateForm from './DateForm';
import DinnersList from './DinnerList';

const App = (): JSX.Element => {
  return (
    <div>
      <DateForm />
      <DinnersList
        dinners={[
          { date: new Date(), meal: 'Pasta', diet: 'Vegetarian' },
          { date: new Date(), meal: 'Ribs', diet: 'Meat' }
        ]}
      />
    </div>
  );
};

export default App;
