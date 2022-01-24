import React from 'react'
import { CatItem } from './CatItem';
export const CatsList = props => {
  const { categories } = props
  return (
    <div className="cats">
      {
        categories.map(item => {
          return (
            <CatItem
              key={item.idCategory}
              strCategory={item.strCategory}
              strCategoryDescription={item.strCategoryDescription}
              strCategoryThumb={item.strCategoryThumb}
            >
            </CatItem>
          )
        })
      }
    </div>
  )
}