import React, { useContext, useEffect, useState } from 'react'
import { FoodContex } from './../contex';
import { SingleList } from './../components/SingleList';
import { Preloader } from './../components/Preloader';
import { useParams } from 'react-router';
import { createSearchParams, useNavigate } from "react-router-dom";
import { Pagination, Stack } from '@mui/material';
import { PER_PAGE } from '../auxiliary';
import { useLocation } from 'react-router-dom';
import { SearchTwo } from '../components/SearchTwo';

const queryString = require('query-string');
const NORMAL = 'NORMAL'
const SEARCH = 'SEARCH'

export const SingleCategory = props => {
  const location = useLocation()
  const navigate = useNavigate()
  const { name } = useParams()
  const { setSingle, stopLoading, single, loading } = useContext(FoodContex);

  const locationSearch = queryString.parse(location.search);
  const [mode, setMode] = useState(locationSearch.q ? SEARCH : NORMAL)
  const [page, setPage] = useState(+getPage(location.search) || 1)
  const [outPosts, setOutPosts] = useState([])
  const [preModPosts, setPreModPosts] = useState([])
  const [modPosts, setModPosts] = useState([])

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
  }, []);

  useEffect(() => {
    const asd = queryString.parse(location.search);

    const indexLast = page * PER_PAGE
    const indexFirst = indexLast - PER_PAGE

    if (mode === SEARCH) {
      console.log(single)
      console.log(asd)
      const modPostsQ = single.filter(meal => {
        return meal.strMeal.toLowerCase().includes(asd.q.toLowerCase())
      })
      setPreModPosts(modPostsQ)
      setModPosts(modPostsQ.slice(indexFirst, indexLast))
    }
    if (mode === NORMAL) {
      setOutPosts(single.slice(indexFirst, indexLast))
    }
    navigate({
      pathname: `/categories/${name}`,
      search: `?${createSearchParams({ ...asd, page })}`,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, single])


  const filterMeals = (value) => {
    setMode(SEARCH)
    setPage(1)
    const params = { page, q: value };
    navigate({
      pathname: `/categories/${name}`,
      search: `?${createSearchParams(params)}`,
    });
    const indexLast = page * PER_PAGE
    const indexFirst = indexLast - PER_PAGE
    const modPostsQ = single.filter(meal => meal.strMeal.toLowerCase().includes(value.toLowerCase()))
    setPreModPosts(modPostsQ)
    setModPosts(modPostsQ.slice(indexFirst, indexLast))
  }
  const resetAll = () => {
    setMode(NORMAL)
    setPage(1)
    const params = { page };
    const indexLast = page * PER_PAGE
    const indexFirst = indexLast - PER_PAGE
    setOutPosts(single.slice(indexFirst, indexLast))
    navigate({
      pathname: `/categories/${name}`,
      search: `?${createSearchParams(params)}`,
    });
  }


  return (
    <main className='container'>
      <div>
        <button className='btn orange lighten-2 left' onClick={() => navigate('/')}>Back</button>
        <h4 className='center-align' style={{ marginTop: '.25rem' }}>{name}</h4>
      </div>
      <SearchTwo handleSearch={filterMeals} handleReset={resetAll}></SearchTwo>
      <br />
      {
        loading
          ? <Preloader color={'yellow'}></Preloader>
          :
          mode === NORMAL
            ?
            outPosts.length === 0
              ? <h4>No results</h4>
              : <SingleList single={outPosts}></SingleList>
            : modPosts.length === 0
              ? <h4>No results</h4>
              : <SingleList single={modPosts}></SingleList>
      }
      <Stack>
        < Pagination
          style={{
            width: '100%'
          }}
          count={
            mode === NORMAL
              ? Math.ceil(single.length / PER_PAGE)
              : Math.ceil(preModPosts.length / PER_PAGE)
          }
          color="secondary"
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
    </main>
  )
}
function getPage(search) {
  const temp = search.indexOf('page') + 5
  return search.charAt(temp)
}