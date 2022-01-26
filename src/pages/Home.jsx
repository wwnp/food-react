import React, { useContext, useEffect } from 'react'
import { CAT_MOD, FoodContex } from '../contex'
import { CatsList } from './../components/CatsList';
import { Preloader } from './../components/Preloader';
import { randomCat } from '../auxiliary';
import { Search } from './../components/Search';
import { SearchItem } from '../components/SearchItem';
import { SEARCH_MOD } from './../contex';

export const Home = props => {
  const {
    setCategories,
    stopLoading,
    loading,
    categories,
    setSearch,
    search,
    startLoading,
    searchMeal,
    setMeal,
    setError,
    error,
    homeMode,
    setHomeMode
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

  const fetchSearchFood = (search) => {
    setMeal(null)
    setError('')
    startLoading()
    setHomeMode(SEARCH_MOD)
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.meals === null || Object.keys(json).length === 0) {
          setError('Error')
          stopLoading()
          return
        }
        setMeal(json.meals[0])
        stopLoading()
      })
      .catch(err => {
        setError('Error')
      })
  }

  const randomCategory = getRandomCategory()
  return (
    <main className='container'>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <a href={`categories/${randomCategory}`} className='btn btn-large black orange-text custom-hover-random' >Random category</a>
        <a href={`/random`} className='btn btn-large black orange-text hoverable custom-hover-random'>Random meal</a>
      </div>
      <hr style={{ margin: '40px 0 40px 0' }} />
      <Search
        fetchSearchFood={fetchSearchFood}
        setSearch={setSearch}
        search={search}
      >
      </Search>

      
      {loading
        ? <Preloader color={'yellow'}></Preloader>
        :
        homeMode === CAT_MOD
          ? <CatsList categories={categories}></CatsList>
          :
          error
            ? <h1>{error}</h1>
            : (
              <SearchItem
                strMealThumb={searchMeal.strMealThumb}
                strMeal={searchMeal.strMeal}
                strInstructions={searchMeal.strInstructions}
                foodDetails={searchMeal}
                strYoutube={searchMeal.strYoutube}
              >
              </SearchItem>
            )
      }
    </main >
  )
}
function getRandomCategory() {
  const randomNum = getRandomNumber(0, randomCat.length - 1)
  return randomCat[randomNum]

}
function getRandomNumber(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1))
}