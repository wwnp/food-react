import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
export const SingleItem = props => {
  const location = useLocation()
  const { idMeal, strMeal, strMealThumb } = props
  return (
    <div className="col s12 m3">
      <div className="card ">
        <div className="card-image ">
          <img src={strMealThumb} alt='' />
        </div>
        <div className="card-action" >
          <Link style={{display:'flex',alignItems:'center', height:'100px', fontSize:'1.1rem'}} to={location.pathname + '/' + idMeal}>{strMeal}</Link>
        </div>
      </div>
    </div>
  )
}