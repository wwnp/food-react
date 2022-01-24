import React, { useContext, useEffect } from 'react'
import { Preloader } from '../components/Preloader';
import { FoodContex } from './../contex';
export const RandomPage = props => {
  const {
    loading,
    setRandomMeal,
    stopLoading,
    randomMeal
  } = useContext(FoodContex)
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((json) => {
        setRandomMeal(json.meals[0])
        stopLoading()
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { strMeal, strMealThumb, strInstructions, strYoutube } = randomMeal
  return (
    <main className='container'>
      {
        loading
          ? <Preloader color={'yellow'}></Preloader>
          :
          <div className="row">
            <div className="col s4">
              <img className='left-align' src={strMealThumb} alt="" width={'100%'} />
            </div>
            <div className="col s8">
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
      }
    </main>
  )
}
