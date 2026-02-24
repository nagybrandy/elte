import axios from "axios"

const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}').user.data.token : null
const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    },
})

export default api


