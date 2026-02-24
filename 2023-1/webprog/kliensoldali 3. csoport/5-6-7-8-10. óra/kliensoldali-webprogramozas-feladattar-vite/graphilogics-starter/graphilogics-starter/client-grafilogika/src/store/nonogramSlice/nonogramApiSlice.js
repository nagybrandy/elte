import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = "http://localhost:3030"
// Define a service using a base URL and expected endpoints
export const nonogramApiSlice = createApi({
  reducerPath: 'nonogramApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPuzzles: builder.query({
      query: () => ({
        url: "puzzles"
      }),
      transformResponse: (r)=> r.data
    }),
    newPuzzle: builder.mutation({
      query(body){
        return {
          url: "puzzles",
          method: "POST",
          body
        }
      }
    }),
    newUser: builder.mutation({
      query(body){
        return {
          url: "users",
          method: "POST",
          body
        }
      }
    }),
    login: builder.mutation({
      query(body){
        return {
          url: "authentication",
          method: "POST",
          body
        }
      }
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPuzzlesQuery, 
               useNewPuzzleMutation,
               useLoginMutation,
               useNewUserMutation
              } = nonogramApiSlice