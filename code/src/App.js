import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import styled from 'styled-components'

import { tasks } from 'reducers/tasks'

import { AddTask } from 'components/AddTask'
import { ItemList } from 'components/ItemList'
import { Header } from 'components/Header'

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <AppWrapper>
      <Header />
      <AddTask />
      <ItemList />
      </AppWrapper>
    </Provider>
  )
}

const AppWrapper = styled.main`
  @media (min-width: 668px) {
    width: 50%;
    margin: 20px auto;
  }
`