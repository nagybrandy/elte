import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { ProductId } from '../types'

export interface CartItem {
  productId: ProductId
  qty: number
}

export interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProductId>) => {
      const item = state.items.find((i) => i.productId === action.payload)
      if (item) {
        item.qty += 1
      } else {
        state.items.push({ productId: action.payload, qty: 1 })
      }
    },
    dec: (state, action: PayloadAction<ProductId>) => {
      const index = state.items.findIndex((i) => i.productId === action.payload)
      if (index === -1) return
      if (state.items[index].qty <= 1) {
        state.items.splice(index, 1)
      } else {
        state.items[index].qty -= 1
      }
    },
    remove: (state, action: PayloadAction<ProductId>) => {
      state.items = state.items.filter((i) => i.productId !== action.payload)
    },
    clear: (state) => {
      state.items = []
    },
  },
})

export const { add, dec, remove, clear } = cartSlice.actions
export default cartSlice.reducer
