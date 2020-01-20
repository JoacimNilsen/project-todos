import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tasks } from 'reducers/tasks'
import moment from 'moment'
import styled from 'styled-components'

export const Header = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.tasks.items)

  return (
     
     <HeaderWrapper>
       <LeftWrapper>
       <HeadText>ToDo</HeadText>
      <p>{moment().format("MMM Do")}</p>
      </LeftWrapper>
      <RightWrapper>
     <TaskCounter>{items.length} tasks</TaskCounter>
      <ClearAll onClick={() => dispatch(tasks.actions.removeAll())}>
      Clear All
    </ClearAll>
    </RightWrapper>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.section`
display: flex;
align-items: center;
justify-content: space-between;
background: #EAEAEA;
padding: 15px;
`

const LeftWrapper = styled.section`
margin-top: 10px;
`

const HeadText = styled.h1`
font-size: 22px;
margin: 0;
`

const RightWrapper = styled.section`
margin-bottom: 20px;
`

const TaskCounter = styled.p`
margin-left: 15px;
`

const ClearAll = styled.button`
background: #427bf5;
color: white;
text-transform: uppercase;
font-size: 14px;
padding: 5px;
border-radius: 7px;
border: none;
&:hover {
  cursor: pointer;
}
`