import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import productSlice from './productSlice'
import { productsApi } from './productsApiSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
    productsApi: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
