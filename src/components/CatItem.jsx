import React from 'react'
import { Link } from 'react-router-dom';
export const CatItem = props => {
  const { strCategory, strCategoryDescription, strCategoryThumb } = props
  return (
    <div className="col s12 m3">
      <div className="card ">
        <div className="card-image ">
          <img src={strCategoryThumb} alt='' />
          {/* <span className="card-title center-align">{strCategory}</span> */}
        </div>
        <div className="card-action">
          <Link to={`categories/` + strCategory}>{strCategory}</Link>
        </div>
      </div>
    </div>
  )
}