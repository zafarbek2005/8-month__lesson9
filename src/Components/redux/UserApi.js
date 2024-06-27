import { api } from "./index"

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    
    getProducts: build.query({
      query: (params) => ({ 
        url: '/products/search', 
        params 
      }),
      providesTags:["Product"]
    }),

 
  }),
 
})

export const {
 
  useGetProductsQuery,
} = productApi