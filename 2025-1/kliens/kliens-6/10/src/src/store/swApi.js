import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const starwarsApi = createApi({
  reducerPath: 'starwars',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.swapi.tech/api/' }),
  endpoints: (build) => ({
    getAllPeople: build.query({
      query: () => `people`,
    }),
    getOnePerson: build.query({
        query: (id) => `people/${id}`
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPeopleQuery, useGetOnePersonQuery } = starwarsApi