import { configureStore } from '@reduxjs/toolkit'
import like from './favorite'
import cart from './cart'

const store = configureStore({
  reducer: {
    like,
    cart
  },
})

export default store


