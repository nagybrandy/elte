import { createSlice } from '@reduxjs/toolkit'
import type { Product } from '../types'

export interface CartState {
  products: Product[],
  qty: number;
}
const initialState: CartState= {
  products: [],
  qty: 0,
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    emptyCart: state => {
      state.products = []
      state.qty = 0
    },
    addToCart: (state, action: any) => {
      state.products.push(action.payload)
    },
  }
})

// Action creators are generated for each case reducer function
export const { emptyCart, addToCart } = cartSlice.actions

export default cartSlice.reducer