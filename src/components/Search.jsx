import React, { useContext } from 'react'
import { FoodContex } from '../contex';
export const Search = props => {
  const {search,setSearch} = useContext(FoodContex);
  // const {
  //   // setSearch,
  //   // search,
  //   // fetchSearchFood
  // } = props;
  const handleKey = e => {
    if(e.key === 'Enter'){
      handleSubmit()
    }
  }
  const handleSubmit = e => {
    props.cb(search)
  }
  return (
    <div className='input-field col s12'>
      <input
        type="search"
        placeholder='Start search'
        value={search}
        onChange={(e) => setSearch(e.target.value.trim())}
        onKeyDown={handleKey}
      />
      <button
        className='btn orange lighten-2'
        style={{ position: 'absolute', top: '0', right: '0' }}
        onClick={handleSubmit}
      >
        Send
      </button>
    </div>
  )
}