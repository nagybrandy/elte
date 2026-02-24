import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = "http://localhost:3030"

export const nonogramApiSlice = createApi({
    reducerPath: 'nonogramApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
      getPuzzles: builder.query({
        query: () => ({
            url: 'puzzles',
        }),
        transformResponse: (response) => response.data,
      }),
      updatePuzzles: builder.mutation({
        query(body) {
            return {
                url: `puzzles`,
                method: 'POST',
                body,
            }
        },
      }),
      updateUsers: builder.mutation({
        query(body) {
            return {
            url: `users`,
            method: 'POST',
            body,
            }
        },
      }),
      loginUser: builder.mutation({
        query(body) {
            return {
            url: `authentication`,
            method: 'POST',
            body,
            }
        },
      }),
    }),
  })
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const { useGetPuzzlesQuery, useUpdatePuzzlesMutation, useUpdateUsersMutation, useLoginUserMutation } = nonogramApiSlice