import { createSlice } from '@reduxjs/toolkit'
import type { Product } from '../types'
import products from './../data/products.json'

export interface ProductState {
  products: Product[],
}
const initialState: ProductState = {
  products
}
export const productSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    emptyProducts: state => {
      state.products = []
    },
    addToProducts: (state, action: any) => {
      state.products.push(action.payload)
    },
  }
})

// Action creators are generated for each case reducer function
export const { addToProducts, emptyProducts } = productSlice.actions

export default productSlice.reducer