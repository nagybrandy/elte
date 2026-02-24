import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  isLoggedIn: localStorage.getItem('user') ? true : false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.user = action.payload
        state.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(action.payload))
    },

    logOut: (state) => {
        state.user = null
        state.isLoggedIn = false
        localStorage.removeItem('user')
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser, logOut } = userSlice.actions

export default userSlice.reducer