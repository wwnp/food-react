import React, { useContext, useEffect } from 'react'
import { CAT_MOD, FoodContex } from '../contex'
import { CatsList } from './../components/CatsList';
import { Preloader } from './../components/Preloader';
import { PER_PAGE, randomCat } from '../auxiliary';
import { Search } from './../components/Search';
import { SearchItem } from '../components/SearchItem';
import { SEARCH_MOD } from './../contex';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Input, Link as MuLink, Pagination, PaginationItem, Stack, TextField } from '@mui/material'

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
    setHomeMode,
    setFilteredCategories,
    filteredCategories
  } = useContext(FoodContex)
  const location = useLocation()
  const navigate = useNavigate()

  const [page, setPage] = useState(1)
  const [outPosts, setOutPosts] = useState(filteredCategories)
  const [posts, setPosts] = useState([])

  useEffect(() => {

    fetch('https://themealdb.com/api/json/v1/1/categories.php')
      .then((response) => response.json())
      .then((json) => {
        // const searchCat = location.search.split('=')[1] // ex:Beef
        setCategories(json.categories)
        // setPosts(json.categories)
        setFilteredCategories(json.categories)
        // setFilteredCategories(
        //   location.search
        //     ? json.categories.filter((item) =>
        //       item.strCategory
        //         .toLowerCase()
        //         .includes(location.search.split('=')[1].toLowerCase())
        //     )
        //     : json.categories
        // )
        stopLoading()
      })
      .catch((err) => {
        setError('Error')
        stopLoading()
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSearch = (str) => {
    if (str.length >= 3) {
      setFilteredCategories(
        categories.filter(item => {
          // console.log(item.strCategory.toLowerCase(), str.toLowerCase())
          return item.strCategory
            .toLowerCase()
            .includes(str.toLowerCase())
        }
        )
      )
      navigate({
        pathname: '/',
        search: `?page=${page}&search=${str}`
      })
    }
    if (str.length === 0) {
      setFilteredCategories(
        categories.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
      )
      navigate({
        pathname: '/',
        search: `?page=${page}`
      })
    }
  }

  useEffect(() => {
    console.log(123)
    const indexLast = page * PER_PAGE
    const indexFirst = indexLast - PER_PAGE
    setOutPosts(filteredCategories.slice(indexFirst, indexLast))
    if(search) {
      navigate(`/?page=${page}&search=${search}`)
    }else {
      navigate(`/?page=${page}`)
    }

    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, filteredCategories])

  // const fetchCats = () => {
  //   setHomeMode(CAT_MOD)
  //   startLoading()
  //   fetch('https://themealdb.com/api/json/v1/1/categories.php')
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setCategories(json.categories)
  //       stopLoading()
  //     })
  // }

  const fetchSearchFood = (search) => {
    setMeal(null)
    setError('')
    startLoading()
    setHomeMode(SEARCH_MOD)
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.meals === null || Object.keys(json).length === 0) {
          setError('Not Found')
          stopLoading()
          return
        }
        setMeal(json.meals[0])
        stopLoading()
      })
      .catch(err => {
        setError('Error try later')
        stopLoading()

      })
  }

  // let output = null
  // if (homeMode === CAT_MOD && loading === false) {
  //   output = error
  //   ? <h1>{error}</h1>
  //   : <CatsList categories={categories}></CatsList>
  // }
  // if (homeMode === SEARCH_MOD && loading === false) {
  //   output = error
  //     ? <h1>{error}</h1>
  //     : (
  //       <SearchItem
  //         strMealThumb={searchMeal.strMealThumb}
  //         strMeal={searchMeal.strMeal}
  //         strInstructions={searchMeal.strInstructions}
  //         foodDetails={searchMeal}
  //         strYoutube={searchMeal.strYoutube}
  //         fetchCats={fetchCats}
  //       >
  //       </SearchItem>
  //     )
  // }

  const randomCategory = getRandomCategory()

  return (
    <main className='container'>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginBottom: '1rem' }}>
        <Link to={`categories/${randomCategory}`} className='btn btn-large black orange-text custom-hover-random' >Random category</Link>
        <Link to={`/random`} className='btn btn-large black orange-text hoverable custom-hover-random'>Random meal</Link>
      </div>
      <Search
        cb={handleSearch}
        fetchSearchFood={fetchSearchFood}
        setSearch={setSearch}
        search={search}
      >
      </Search>
      {loading
        ? <Preloader color={'yellow'}></Preloader>
        : (
          <CatsList categories={outPosts}></CatsList>
        )
      }
      <Stack>
        < Pagination
          variant="outlined"
          color="primary"
          count={Math.ceil(filteredCategories.length / PER_PAGE)}
          page={page}
          onChange={(_, num) => setPage(num)}
          sx={{ marginY: 3, marginX: 'auto' }}
          showFirstButton={true}
          showLastButton={true}
        // renderItem={
        //   (item) => (
        //     <PaginationItem
        //       component={Link}
        //       to={`/?page=${item.page}`}
        //       {...item}
        //     >
        //     </PaginationItem>
        //   )
        // }
        />
      </Stack>
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
function getPage(search) {
  const temp = search.indexOf('page') + 5
  return search.charAt(temp)
}
