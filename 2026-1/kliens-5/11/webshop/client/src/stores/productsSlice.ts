import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { mockProducts } from '../data/mockProducts'
import type { Product } from '../types'

export interface ProductsState {
  items: Product[]
}

const initialState: ProductsState = {
  items: mockProducts,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload)
    },
  },
})

export const { addProduct } = productsSlice.actions
export default productsSlice.reducer
