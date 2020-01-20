import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import styled from 'styled-components'
import moment from "moment"

export const Item = (props) => {
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.toggleDone(props.item.id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(tasks.actions.removeItem(props.item.id))
  }

  return (
    <TaskWrapper> 
        <Checkbox
          type='checkbox'
          checked={props.item.done}
          onChange={handleCheckboxClick} />
      <TaskText completed={props.item.done}>{props.item.name}</TaskText>
      <AddTask completed={props.item.done}>
            {props.item.done
              ? "Completed " + moment(props.item.completed).fromNow()
              : "Added " + moment(props.item.added).fromNow()}
      </AddTask>
      <Remove onClick={handleRemoveButtonClick}>
      🗑️
      </Remove>
    </TaskWrapper>
  )
}

const TaskWrapper = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 15px;
`

const Checkbox = styled.input`
width: 20px;
height: 20px;
background-color: white;
border-radius: 50%;
margin: 0px 20px
outline: none;
&:checked {
  opacity: 0.6;
}
`

const TaskText = styled.p`
font-size: 18px;
`

const Remove = styled.button`
background: transparent;
border: none;
&:hover {
  cursor: pointer;
}
`

const AddTask = styled.p`
  opacity: ${props => (props.completed ? "0.6" : "1")};
  font-size: 10px;
  margin: 0px;
`