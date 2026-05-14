import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { addProduct } from './productsSlice'


// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/', headers: {
    Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZW1vQGRlbW8uaHUiLCJpYXQiOjE3Nzc4ODU5MDh9.8xKWUZESVgE5bfx6ExVpUGamFhHN0yfXOhZRxDhubzg"
  }}),
  tagTypes : ["Product"],
  endpoints: (build) => ({
    getAllProducts: build.query<any, void>({
      query: () => `products`,
      providesTags: ["Product"]
    }),
    addProduct: build.mutation<any,any>({
        query: (body) => ({
            url: `products`,
            method: 'POST',
            body,
        }),
    invalidatesTags: ["Product"]
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery, useAddProductMutation} = productsApi