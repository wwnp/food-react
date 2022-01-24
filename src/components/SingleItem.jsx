import React from 'react'
import { useLocation } from 'react-router-dom';
export const SingleItem = props => {
  const location = useLocation()
  const { idMeal, strMeal, strMealThumb } = props
  return (
    <div className="col s12 m3">
      <div className="card ">
        <div className="card-image ">
          <img src={strMealThumb} alt='' />
          {/* <span className="card-title center-align">{strMeal}</span> */}
        </div>
        <div className="card-action" >
          <a style={{display:'flex',alignItems:'center', height:'100px', fontSize:'1.1rem'}} href={location.pathname + '/' + idMeal}>{strMeal}</a>
        </div>
      </div>
    </div>
  )
}