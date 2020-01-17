import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'

export const AddTask = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(tasks.actions.addItem(name))
    setName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        +
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>

      <button type="submit">Add item</button>
    </form>
  )
}