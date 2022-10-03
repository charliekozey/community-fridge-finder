import React, { useState } from 'react'

export default function NewFridgeForm({ submitNew }) {

  const [value, setValue] = useState('')
  const [displayNewForm, setDisplayNewForm] = useState(true)
  console.log(value)

  function handleSubmit(e) {
    e.preventDefault()
    submitNew(value)
    setValue('')
    setDisplayNewForm(!displayNewForm)
  }

  if (displayNewForm === true) {

    return (    
      <div>
          <form onSubmit={handleSubmit}>
              <label htmlFor="location">Fridge Location: </label>
              <input onChange={(e) => setValue(e.target.value)} value={value} type="text" id="location" name="location" />
              <input type="submit"/>
          </form>
      </div>
    )
  }

  else return <div className="view-container-message">New fridge submitted! ${value}</div>
}
