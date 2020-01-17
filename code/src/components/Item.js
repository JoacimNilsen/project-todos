import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'

export const Item = (props) => {
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.toggleNeedsMore(props.item.id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(tasks.actions.removeItem(props.item.id))
  }

  return (
    <li>
      {props.item.name}
      <label>
        Buy more
        <input
          type="checkbox"
          checked={props.item.needsMore}
          onChange={handleCheckboxClick} />
      </label>

      <button type="button" onClick={handleRemoveButtonClick}>
        Remove
      </button>
    </li>
  )
}