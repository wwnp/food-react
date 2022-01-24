import React, { useContext, useEffect } from 'react'
import { FoodContex } from '../contex'
import { CatsList } from './../components/CatsList';
import { Preloader } from './../components/Preloader';
export const Home = props => {
  const {
    setCategories,
    stopLoading,
    loading,
    categories
  } = useContext(FoodContex)
  useEffect(() => {
    fetch('https://themealdb.com/api/json/v1/1/categories.php')
      .then((response) => response.json())
      .then((json) => {
        setCategories(json.categories)
        setTimeout(() => {
          stopLoading()
        }, 200);
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <main className='container'>
      {loading
        ? <Preloader color={'yellow'}></Preloader>
        : (
          <CatsList categories={categories}></CatsList>
        )
      }

    </main>
  )
}