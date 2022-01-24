import React from 'react'
import { SingleItem } from './SingleItem';
export const SingleList = props => {
  const { single } = props
  return (
    <div className="cats">
      {
        single.map(item => {
          return (
            <SingleItem
              key={item.idMeal}
              idMeal={item.idMeal}
              strMeal={item.strMeal}
              strMealThumb={item.strMealThumb}
            >
            </SingleItem>
          )
        })
      }
    </div>
  )
}