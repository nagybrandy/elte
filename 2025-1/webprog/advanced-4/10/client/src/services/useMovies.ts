import api from "./api"

export const useMovies = async () => {
    const response = await api.get("/movies")

    return response.data
}


export const addMovie = async (data: FormData) => {
    // When sending FormData, axios will automatically set the correct Content-Type with boundary
    console.log("asd")
    const response = await api.post('/movies', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });

    return response.data
}