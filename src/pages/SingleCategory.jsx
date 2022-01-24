import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { FoodContex } from './../contex';
import { SingleList } from './../components/SingleList';
import { Preloader } from './../components/Preloader';
export const SingleCategory = props => {
  const { setSingle, stopLoading, single, loading } = useContext(FoodContex);
  const location = useLocation()
  const needName = getNeededName(location.pathname)
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${needName}`)
      .then((response) => response.json())
      .then((json) => {
        setSingle(json.meals)
        setTimeout(() => {
          stopLoading()
        }, 500);
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(loading)
  return (
    <main className='container'>
      {
        loading
          ? <Preloader color={'yellow'}></Preloader>
          : <SingleList single={single}></SingleList>
      }

    </main>
  )
}
function getNeededName(string) {
  const indexSlice = string.indexOf('/', 1)
  return string.slice(indexSlice + 1, string.length).trim()
}