import React, { useContext, useEffect } from 'react'
import { FoodContex } from '../contex'
export const Home = props => {
  const {
    setCats,
    stopLoading,
    loading,
    categories
  } = useContext(FoodContex)
  useEffect(() => {
    fetch('https://themealdb.com/api/json/v1/1/categories.php')
      .then((response) => response.json())
      .then((json) => {
        setCats(json.categories)
        setTimeout(() => {
          stopLoading()
        }, 2000);
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(categories)
  return (
    <div >
      <h1>Home</h1>
      {loading
        ? <h1>Loading...</h1>
        : (
          categories.map(item => {
            return <h1>{item.strCategory}</h1>
          })
        )
      }

    </div>
  )
}