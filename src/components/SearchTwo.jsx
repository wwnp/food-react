import React, { useState } from 'react'

export const SearchTwo = ({ handleSearch = Function.prototype, handleReset = Function.prototype, q = '' }) => {
  const [value, setValue] = useState(q)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e.target.value)
    }
  }
  const handleSendButton = () => {
    handleSearch(value)
  }
  const handleResetButton = () => {
    setValue('')
    handleReset()
  }
  return (
    <div>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} onKeyDown={handleKeyDown} />
      <button className='btn orange lighten-2 mr-2' onClick={handleSendButton}>Search</button>
      <button className='btn red lighten-2 ' onClick={handleResetButton}>Reset</button>
    </div>
  )
}