import React from 'react'
import { useSelector } from 'react-redux'
import { Item } from 'components/Item'
import styled from 'styled-components'

export const ItemList = () => {
  const items = useSelector((state) => state.tasks.items)

  if (items.length === 0) {
    return (
      <Wrapper>
        <NoTask>
          Add a new task{' '}
          <span role="img" aria-label="pointing-finger">
            ☝️
          </span>
        </NoTask>
      </Wrapper>
    )
  }

  return (
    <ItemListWrapper>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ItemListWrapper>
  )
}

const ItemListWrapper = styled.section`
margin: 0;
`

const NoTask = styled.p`
`

const Wrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.4;
  font-size: 30px;
`