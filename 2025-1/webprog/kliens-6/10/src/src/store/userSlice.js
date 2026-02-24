import { createSlice } from '@reduxjs/toolkit'

const user_string = localStorage.getItem('user')
const initialState = user_string ? JSON.parse(user_string) : {
  user: null,
  isLoggedIn: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.user = action.payload
        state.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(state))
    },
    logOut: (state) => {
        state.user = null
        localStorage.removeItem('user')
        state.isLoggedIn = false
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser, logOut } = userSlice.actions

export default userSlice.reducer