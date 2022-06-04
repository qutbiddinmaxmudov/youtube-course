import { configureStore } from '@reduxjs/toolkit'
import like from './favoriteSlice'

const store = configureStore({
  reducer: {
    like,
  },
})

export default store


