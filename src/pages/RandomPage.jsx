import React, { useContext, useEffect } from 'react'
import { Preloader } from '../components/Preloader';
import { FoodContex } from './../contex';
import { useNavigate } from 'react-router-dom';

export const RandomPage = props => {
  const {
    loading,
    setRandomMeal,
    stopLoading,
    randomMeal
  } = useContext(FoodContex)

  const navigate = useNavigate()

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
      <div className='right-align'>
        <button className='btn orange lighten-2 ' onClick={() => navigate(-1)}>Back</button>
      </div>
      <hr style={{ margin: '40px 0 40px 0' }} />
      {
        loading
          ? <Preloader color={'yellow'}></Preloader>
          :
          <div className="row">
            <div className="col s12 m4">
              <img className='left-align' src={strMealThumb} alt="" width={'100%'} />
            </div>
            <div className="col s12 m8">
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
                    Object.keys(randomMeal).map(item => {
                      if (item.includes('strIngredient') && randomMeal[item]) {
                        return (
                          <tr
                            key={item}
                          >
                            <td>{randomMeal[item]}</td>
                            <td>
                              {
                                randomMeal[`strMeasure${item?.slice(13)}`]
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
            <div className="col s12">
              <hr style={{ margin: '40px 0 40px 0' }} />
              <iframe
                width="100%"
                height="515"
                src={`https://www.youtube.com/embed/${strYoutube?.slice(-11)}`}
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
