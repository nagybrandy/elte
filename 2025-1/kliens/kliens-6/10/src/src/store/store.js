import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import { starwarsApi } from './swApi'
import { playlistsApi } from './playlistsApi'

export default configureStore({
  reducer: {
    user: userReducer,
    [starwarsApi.reducerPath]: starwarsApi.reducer,
    [playlistsApi.reducerPath]: playlistsApi.reducer
    /*     tracks: tracksReducer, */
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(starwarsApi.middleware).concat(playlistsApi.middleware),
})