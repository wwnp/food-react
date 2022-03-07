import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Preloader } from '../components/Preloader';
import { FoodContex } from './../contex';
import { useNavigate } from 'react-router-dom';

export const SingleFood = props => {
  const { setFoodDetails, foodDetails, loading, stopLoading, setError, error } = useContext(FoodContex);
  const { strMeal, strInstructions, strMealThumb, strYoutube } = foodDetails

  const { foodId } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
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
      <div className='left-align'>
        <button className='btn orange lighten-2 ' onClick={() => navigate(-1)}>Back</button>
      </div>
      <hr style={{ margin: '20px 0 20px 0' }} />
      {
        loading
          ? <Preloader color={'yellow'}></Preloader>
          :
          error !== ''
            ? <h1>{error}</h1>
            : (
              <div className="row">
                <div className="col s12 m6">
                  <img className='left-align' src={strMealThumb} alt="" width={'100%'} />
                </div>
                <div className="col s12 m6">
                  <h1 style={{ margin: '0' }}>{strMeal}</h1>
                  <textarea name="inctr" id="" cols="10" rows="15" defaultValue={strInstructions}></textarea>
                </div>

                <div className="col s12">
                  <hr style={{ margin: '40px 0 40px 0' }} />
                  <table>
                    <thead>
                      <tr>
                        <th>Ingredient</th>
                        <th>Measure</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        Object.keys(foodDetails).map(item => {
                          if (item.includes('strIngredient') && foodDetails[item]) {
                            return (
                              <tr
                                key={item}
                              >
                                <td>{foodDetails[item]}</td>
                                <td>
                                  {
                                    foodDetails[`strMeasure${item.slice(13)}`]
                                  }
                                </td>
                              </tr>
                            )
                          }
                          return null
                        })
                      }
                    </tbody>
                  </table>
                </div>

                {strYoutube ? (
                  <div className='row'>
                    <div className="col s12">
                      <hr style={{ margin: '40px 0 40px 0' }} />
                      <h5 style={{ margin: '2rem 0 1.5rem' }}>
                        Video Recipe
                      </h5>
                      <iframe
                        title={strMeal}
                        src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
                        allowFullScreen
                        width={'100%'}
                        height={'400px'}
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            )
      }
    </main>
  )
}
// function getIdFromAddress(pathname) {
//   const index = pathname.lastIndexOf('/')
//   return pathname.slice(index + 1, pathname.length)
// }