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
    <ColumnWrapper>
      <TaskText completed={props.item.done}>{props.item.name}</TaskText>
      <AddTask completed={props.item.done}>
            {props.item.done
              ? "Completed " + moment(props.item.completed).fromNow()
              : "Added " + moment(props.item.added).fromNow()}
      </AddTask>
      </ColumnWrapper>
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
border-bottom: 1px solid;
width: 100%;
`

const Checkbox = styled.input`
min-width: 20px;
min-height: 20px;
background-color: white;
border-radius: 50%;
margin: 0px 20px
outline: none;
transition: ease-in-out 600ms;
&:checked {
  transform: rotate(360deg);
  opacity: 0.6;
}
&:hover {
  cursor: pointer;
}
`

const TaskText = styled.p`
font-size: 18px;
margin-right: 20px;
margin-left: 20px;
`

const ColumnWrapper = styled.div`
display:flex;
align-items: center;
flex-direction: column;
`

const Remove = styled.button`
background: transparent;
border: none;
&:hover {
  transition: ease-in-out 600ms;
  cursor: pointer;
  transform: rotateY(180deg);
}
`

const AddTask = styled.p`
  opacity: ${props => (props.completed ? "0.6" : "1")};
  font-size: 10px;
  margin-bottom: 10px;
`