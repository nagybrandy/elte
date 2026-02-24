import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const token = JSON.parse(localStorage.getItem('user')).user.accessToken
console.log(token)

export const playlistsApi = createApi({
    reducerPath: 'playlists',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:3030',
        prepareHeaders: (headers, api) => {
            headers.set('Authorization', `Bearer ${token}`)
            return headers
        }
     }),
    endpoints: (build) => ({
        login: build.mutation({
            query: (body) => ({
                url: `/authentication`,
                method: 'POST',
                body,
            }),
        }),
        getAllTracks: build.query({
            query: () => `tracks?$limit=30`,
            providesTags: ['tracks']
        }),
        addNewTrack: build.mutation({
            query: (body) => ({
                url: `/tracks`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['tracks']
        }),
    })
})

export const { useLoginMutation, useGetAllTracksQuery, useAddNewTrackMutation } = playlistsApi