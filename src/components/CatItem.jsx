import React from 'react'
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
          <a href={`categories/` + strCategory}>{strCategory}</a>
        </div>
      </div>
    </div>
  )
}