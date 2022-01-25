import React, { useContext, useEffect } from 'react'
import { FoodContex } from './../contex';
import { SingleList } from './../components/SingleList';
import { Preloader } from './../components/Preloader';
import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";

export const SingleCategory = props => {
  const { setSingle, stopLoading, single, loading } = useContext(FoodContex);

  const { name } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
      .then((response) => response.json())
      .then((json) => {
        setSingle(json.meals)
        setTimeout(() => {
          stopLoading()
        }, 500);
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <main className='container'>
      <h2 className='center-align'>{name}</h2>

      <div className='right-align'>
        <button className='btn orange lighten-2 ' onClick={() => navigate(-1)}>Back</button>
      </div>

      <hr style={{ margin: '40px 0 40px 0' }} />
      {
        loading
          ? <Preloader color={'yellow'}></Preloader>
          : <SingleList single={single}></SingleList>
      }
    </main>
  )
}
// function getNeededName(string) {
//   const indexSlice = string.indexOf('/', 1)
//   return string.slice(indexSlice + 1, string.length).trim()
// }