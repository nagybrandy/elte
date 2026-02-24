import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import { starwarsApi } from './swApi'
import { playlistApi } from './playlistApi'

export default configureStore({
  reducer: {
    user: userReducer,
    [starwarsApi.reducerPath]: starwarsApi.reducer,
    [playlistApi.reducerPath]: playlistApi.reducer
    /*     tracks: tracksReducer, */
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(starwarsApi.middleware).concat(playlistApi.middleware),
})