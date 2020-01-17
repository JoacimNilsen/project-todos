import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tasks } from 'reducers/tasks'
import moment from 'moment'

export const Header = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.tasks.items)

  return (
     
     <div>
       <p>ToDo</p>
      <p>{moment().format("MMM Do")}</p>
     <p>{items.length} tasks</p>
      <button type='button' onClick={() => dispatch(tasks.actions.removeAll())}>
      Clear All
    </button>
    </div>
  )
}