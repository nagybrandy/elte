export interface Movie {
    id: number
    title: string
    description: string
    image_path: string
    duration: number
    director: string
    genre: string
    release_year: number
    created_at: string
    updated_at: string
    screenings: Screening[]
}

export interface Screening {
    id: number
    movie_id: number
    room_id: number
    start_time: string
    price: string
    created_at: string
    updated_at: string
}

export interface Room {
    id: number
    name: string
    created_at: string
    updated_at: string
}

