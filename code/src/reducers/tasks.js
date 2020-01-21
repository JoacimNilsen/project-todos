import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: []
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