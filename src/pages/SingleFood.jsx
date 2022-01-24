import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Preloader } from '../components/Preloader';
import { FoodContex } from './../contex';
export const SingleFood = props => {
  const { setFoodDetails, foodDetails, loading, stopLoading, setError, error } = useContext(FoodContex);
  const { strMeal, strInstructions, strMealThumb, strYoutube } = foodDetails
  const location = useLocation()
  const idFood = getIdFromAddress(location.pathname)
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idFood}`)
      .then((response) => response.json())
      .then((json) => {
        setFoodDetails(json.meals[0])
        setTimeout(() => {
          stopLoading()
        }, 100);
      })
      .catch((error) => {
        setError('Error. Try later')
        setTimeout(() => {
          stopLoading()
        }, 1000);
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <main className='container'>
      {
        loading
          ? <Preloader color={'yellow'}></Preloader>
          :
          error !== ''
            ? <h1>{error}</h1>
            : (
              <div className="row">
                <div className="col s6">
                  <img className='left-align' src={strMealThumb} alt="" width={'100%'} />
                </div>
                <div className="col s6">
                  <h1>{strMeal}</h1>
                  <p>{strInstructions}</p>
                </div>
                <div className="col s12">
                  <hr style={{ margin: '40px 0 40px 0' }} />
                  <iframe
                    width="100%"
                    height="515"
                    src={strYoutube}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  >
                  </iframe>
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