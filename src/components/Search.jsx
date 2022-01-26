import React from 'react'
export const Search = props => {
  const {
    setSearch,
    search,
    fetchSearchFood
  } = props;
  return (
    <div >
      <input
        type="search"
        placeholder='Start search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            fetchSearchFood(search)
          }
        }}
      />
    </div>
  )
}