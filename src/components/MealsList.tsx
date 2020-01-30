import React from 'react';
import moment from 'moment';

interface Meal {
  date: Date;
  meal: String;
  diet: String;
}
interface MealsListProps {
  meals: Meal[];
}

type MealListRender = JSX.Element;

const MealsList = (props: MealsListProps): JSX.Element => {
  console.log(props.meals);
  const mealListRender: MealListRender[] = props.meals.map(
    (meal: Meal, index: number): JSX.Element => {
      console.log(meal.date);
      const date = moment(meal.date).format('DD MM YYYY');
      return (
        <tr key={index}>
          <th>{date}</th>
          <th>{meal.meal}</th>
          <th>{meal.diet}</th>
        </tr>
      );
    }
  );
  console.log(typeof mealListRender);
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Meal</th>
            <th>Diet</th>
          </tr>
          {mealListRender}
        </tbody>
      </table>
    </div>
  );
};

export default MealsList;
