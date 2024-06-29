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

    postSignIn: build.mutation({
      query: (body) => ({
        url: "/auth/sign-in",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
 
  }),
 
})

export const {
  usePostSignInMutation,
  useGetProductsQuery,
} = productApi