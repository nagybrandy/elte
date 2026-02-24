import api from "./api"

export const useLogin = async (payload: { email: string, password: string }) => {
    const response = await api.post("/login", payload)

    return response.data
}


