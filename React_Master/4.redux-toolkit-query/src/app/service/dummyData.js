import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    //Get all products (reading the data)
    getAllProduct: builder.query({
      query: () => "/products",
    }),
    getproductById: builder.query({
      query: (id) => `/products/${id}`,
    }),
    addNewProduct: builder.mutation({
      query: (newProduct) => ({
        url: `/products/add`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newProduct,
      }),
      updateProduct: builder.mutation({
        query: ({ id, updatedProduct }) => ({
          url: `/products/${id}`,
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: updatedProduct,
        }),
        deleteProduct: builder.mutation({
          query: (id) => ({
            url: `/products/${id}`,
            method: "DELETE",
          }),
        }),
      }),
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useGetproductByIdQuery,
  useAddNewProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApi;
