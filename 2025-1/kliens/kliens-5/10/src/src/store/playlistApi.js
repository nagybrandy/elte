import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const accessToken = JSON.parse(localStorage.getItem('user')).accessToken

// Define a service using a base URL and expected endpoints
export const playlistApi = createApi({
    reducerPath: 'playlist',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:3030',
        prepareHeaders: (headers, { getState }) => {
            headers.set('Authorization', `Bearer ${accessToken}`)
            return headers
        },
    }),
    endpoints: (build) => ({
        login: build.mutation({
            query: (user) => ({
                url: `/authentication`,
                method: 'POST',
                body: user,
            }),
        }),
        getAllTracks: build.query({
            query: () => ({
                url: `/tracks`,
                method: 'GET',
            }),
            providesTags: ['Tracks'],
        }),
        addTrack: build.mutation({
            query: (track) => ({
                url: `/tracks`,
                method: 'POST',
                body: track,
            }),
            invalidatesTags: ['Tracks'],
        }),
    })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation, useGetAllTracksQuery, useAddTrackMutation } = playlistApi