import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Preloader } from '../components/Preloader';
import { FoodContex } from './../contex';
export const SingleFood = props => {
  const { setFoodDetails, foodDetails, loading, stopLoading } = useContext(FoodContex);
  const { strMeal, strInstructions } = foodDetails
  const location = useLocation()
  const idFood = getIdFromAddress(location.pathname)
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idFood}`)
      .then((response) => response.json())
      .then((json) => {
        setFoodDetails(json.meals[0])
        setTimeout(() => {
          stopLoading()
        }, 2000);
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <main className='container'>
      {
        loading
          ? <Preloader color={'yellow'}></Preloader>
          : (
            <div className="row">
              <div className="col s6 push-s3">
                <div>
                  <h1>{strMeal}</h1>
                  <p>{strInstructions}</p>
                </div>
              </div>
            </div>
          )
      }
    </main>
  )
}
function getIdFromAddress(pathname) {
  const index = pathname.lastIndexOf('/')
  return pathname.slice(index + 1, pathname.length)
}