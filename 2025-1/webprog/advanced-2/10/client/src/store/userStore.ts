import { json } from 'stream/consumers'
import { create } from 'zustand'

type Store = {
  user: {
    name: string | null
    isLoggedIn: boolean
    email: string | null
    role: string | null
    token: string | null
    data?: {
      token: string
      user: {
        id: number
        role: string
        name: string
        email: string
        email_verified_at: string | null
      }
    }
    message?: string
    status?: string
  }
  login: (user: any) => void
  logout: () => void
}

const userStore = create<Store>()((set) => ({
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}').user : {
    name: null,
    isLoggedIn: false,
    email: null,
    role: null,
    token: null
  },
  login: (payload) => set((state) => {
    localStorage.setItem('user', JSON.stringify({ user: { ...state.user, ...payload, isLoggedIn: true } }))
    return ({ user: { ...state.user, ...payload, isLoggedIn: true } })
  }),
  logout: () => {
    localStorage.removeItem('user')
    set((state) => ({ user: { ...state.user, isLoggedIn: false } }))
  },
}))


export default userStore