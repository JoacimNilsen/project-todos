import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: 1, name: 'Milk', needsMore: false },
      { id: 2, name: 'Butter', needsMore: true },
      { id: 3, name: 'Cheese', needsMore: false }
    ]
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push({ id: Date.now(), name: action.payload })
    },
    removeItem: (state, action) => {
      // find 'cheese' or whatever item
      // remove it from the items array
      // id = 3
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    removeAll: (state, action) => {
      state.items = []
    },
    toggleNeedsMore: (state, action) => {
      console.log(action.payload)
      // find 'cheese'
      const foundItem = state.items.find(item => item.id === action.payload)

      // toggle the value of needsMore
      if (foundItem) {
        foundItem.needsMore = !foundItem.needsMore
      }
    }
  }
})