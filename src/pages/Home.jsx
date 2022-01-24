import React, { useContext, useEffect } from 'react'
import { FoodContex } from '../contex'
import { CatsList } from './../components/CatsList';
import { Preloader } from './../components/Preloader';
import { randomCat } from '../auxiliary';
export const Home = props => {
  const {
    setCategories,
    stopLoading,
    loading,
    categories,
  } = useContext(FoodContex)
  useEffect(() => {
    fetch('https://themealdb.com/api/json/v1/1/categories.php')
      .then((response) => response.json())
      .then((json) => {
        setCategories(json.categories)
        stopLoading()
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const randomCategory = getRandomCategory()
  return (
    <main className='container'>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <a href={`categories/${randomCategory}`} className='btn btn-large black orange-text hoverable'>Random category</a>
        <a href={`/random`} className='btn btn-large black orange-text hoverable'>Random meal</a>
      </div>
      <hr style={{ margin: '20px 0 20px 0' }} />
      {loading
        ? <Preloader color={'yellow'}></Preloader>
        : (
          <CatsList categories={categories}></CatsList>
        )
      }
    </main>
  )
}
function getRandomCategory() {
  const randomNum = getRandomNumber(0, randomCat.length - 1)
  return randomCat[randomNum]

}
function getRandomNumber(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1))
}