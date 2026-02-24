import axios from "axios"

const user = JSON.parse(localStorage.getItem("user") || "{}")

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.data.token}`
    },
})

export default api


