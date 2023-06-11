import { configureStore } from '@reduxjs/toolkit'
import id from './slices/IdSlice'

export const store = configureStore({
  reducer: {
    id: id,
  },
})