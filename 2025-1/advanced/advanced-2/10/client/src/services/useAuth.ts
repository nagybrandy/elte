import api from "./api"


export const loginUser = (user : {email: string, password: string})=> {
    const response = api.post("/login", user)

    return response
}