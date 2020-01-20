import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'

export const AddTask = () => {
  const [task, setTask] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    dispatch(tasks.actions.addItem(task))
    setTask('')
  }

  return (
    <InputWrapper>
      <AddButton 
      disabled={task.length === 0}
      onClick={handleSubmit}>
        +
      </AddButton>
      <Input 
      type="text" 
      value={task} 
      onChange={(e) => setTask(e.target.value)}
      placeholder='Add task' 
      onKeyPress={(e) => {e.key === 'Enter' && handleSubmit()}}/>
    </InputWrapper>
  )
}

const InputWrapper = styled.section`
display: flex;
align-items: center;
height: 50px;
margin-bottom: 7px;
border-bottom: 1px solid grey;
`

const AddButton = styled.button`
color: black;
background: transparent;
border: none;
height: 25px;
width: 25px;
&:hover {
  cursor: pointer;
}
`

const Input = styled.input`
font-size: 20px;
width: 100%;
background: transparent;
border: none;
text-transform: italic;
&:focus {
  outline-style: none;
  border-bottom: 1px dashed #666;
}
`
