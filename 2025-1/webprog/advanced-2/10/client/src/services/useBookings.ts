import api from "./api"

export const getAllBookings = () => {
    const response = api.get("/bookings")
    return response
}
