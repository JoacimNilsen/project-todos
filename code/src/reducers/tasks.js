import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: 1, name: 'Milk', done: false, completed: Date.now(), added: Date.now()},
      { id: 2, name: 'Butter', done: true, completed: Date.now(), added: Date.now()},
      { id: 3, name: 'Cheese and the some Cheese and the some Cheese and the some Cheese and the some Cheese and the some ', done: false, completed: Date.now(), added: Date.now()}
    ]
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push({ 
      id: Date.now(),
      name: action.payload, 
      done: false,
      added: Date.now()
    })
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    removeAll: (state, action) => {
      state.items = []
    },
    toggleDone: (state, action) => {
      const foundItem = state.items.find(item => item.id === action.payload)

      if (foundItem) {
        foundItem.done = !foundItem.done
        if (foundItem.done === true) foundItem.completed = Date.now()
      }
    }
  }
})