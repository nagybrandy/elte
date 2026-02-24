import { create } from 'zustand'

type Store = {
  user: {
    name: string | null
    isLoggedIn: boolean
    email: string | null
    data: {
      token: string
      user: {
        created_at: string
        email: string
        email_verified_at: string | null
        id: number
        name: string
        role: string
        updated_at: string
      }
    }
  }
  login: (user: { name: string, email: string }) => void
  logout: () => void
}



const userStore = create<Store>()((set) => ({
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}') : {
    name: null,
    isLoggedIn: false,
    email: null,
    data: {
      token: '',
      user: {
        created_at: '',
        email: '',
        email_verified_at: null,
        id: 0,
        name: '',
        role: '',
        updated_at: ''
      }
    }
  },
  login: (payload) => set((state) => {
    localStorage.setItem('user', JSON.stringify(payload))
    return ({ user: { ...state.user, ...payload, isLoggedIn: true } })
  }),
  logout: () => set((state) => {
    localStorage.removeItem('user')
    return ({ user: { ...state.user, isLoggedIn: false, data: { ...state.user.data, token: '' } } })
  }),
}))


export default userStore