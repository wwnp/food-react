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
    handleReset(value)
  }
  return (
    <div>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} onKeyDown={handleKeyDown} />
      <button onClick={handleSendButton}>Send</button>
      <button onClick={handleResetButton}>Reset</button>
    </div>
  )
}