import { createSelector, createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('cart') || '{}')
const saveToLocalStorage = (state) =>
  localStorage.setItem('cart', JSON.stringify(state))

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state[action.payload.id] = action.payload
      state[action.payload.id].quantity = 1
      saveToLocalStorage(state)
    },
    removeFromCart: (state, action) => {
      delete state[action.payload]
      saveToLocalStorage(state)
    },
    addOne: (state, action) => {
      state[action.payload].quantity++
      saveToLocalStorage(state)
    },
    removeOne: (state, action) => {
      if (state[action.payload].quantity > 1) {
        state[action.payload].quantity--
        saveToLocalStorage(state)
      }
    },
  },
})

export const getItemsCount = createSelector(
  (state) => Object.values(state.cart),
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0)
)

export const { addToCart, removeFromCart, addOne, removeOne } =
  cartSlice.actions

export default cartSlice.reducer
