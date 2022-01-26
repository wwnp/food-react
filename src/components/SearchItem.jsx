import React from 'react'
export const SearchItem = props => {
  const {
    strMealThumb,
    strMeal,
    strInstructions,
    foodDetails,
    strYoutube,
    fetchCats
  } = props
  return (
    <div className="row">
      <button className='btn' onClick={fetchCats}>Back</button>
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
