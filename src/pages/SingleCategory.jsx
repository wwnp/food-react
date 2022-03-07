import React, { useContext, useEffect, useState } from 'react'
import { FoodContex } from './../contex';
import { SingleList } from './../components/SingleList';
import { Preloader } from './../components/Preloader';
import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";
import { Pagination, Stack } from '@mui/material';
import { PER_PAGE } from '../auxiliary';

export const SingleCategory = props => {
  const { setSingle, stopLoading, single, loading } = useContext(FoodContex);

  const { name } = useParams()

  const navigate = useNavigate()

  const [page, setPage] = useState(1)

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

  const indexOfLastPost = page * PER_PAGE
  const indexOfFirstPost = indexOfLastPost - PER_PAGE
  const currentPosts = single.slice(indexOfFirstPost, indexOfLastPost)
  return (
    <main className='container'>

      <div>

        <button className='btn orange lighten-2 right' onClick={() => navigate(-1)}>Back</button>
        <h4 className='center-align' style={{marginTop:'.25rem'}}>{name}</h4>
      </div>


      <hr style={{ margin: '0 0 20px 0' }} />
      {
        loading
          ? <Preloader color={'yellow'}></Preloader>
          : <SingleList single={currentPosts}></SingleList>
      }
      <Stack>
        < Pagination
          style={{
            width: '100%'
          }}
          count={Math.ceil(single.length / PER_PAGE)}
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
// function getNeededName(string) {
//   const indexSlice = string.indexOf('/', 1)
//   return string.slice(indexSlice + 1, string.length).trim()
// }