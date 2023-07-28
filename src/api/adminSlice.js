// RTK query
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints

// Create the API service instance with a specific reducer path and base query function.
export const adminApi = createApi({
  reducerPath: "admin", // The name of the Redux slice where the generated reducer will be stored.
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }), // Base query function with the base URL for API requests.

  // Define the endpoints for API requests using the 'builder' object.
  endpoints: (builder) => ({
    // Define a query endpoint for fetching accounts data with a GET request.
    // The 'useGetAccountsQuery' hook will be generated for this endpoint.
    getAccounts: builder.query({
      // The 'query' function returns the relative URL for the 'getAccounts' endpoint.
      query: () => `accounts`,
      transformResponse:(response)=>response.sort((a,b)=>b.id-a.id),
      providesTags: ["accounts"],
    }),
    addAccount: builder.mutation({
      query: (amount, id) => ({
        url: "accounts",
        method: "POST",
        body: { amount, id },
      }),
      invalidatesTags: ["accounts"], //previous caching is old reload new
    }),
    deleteAccount: builder.mutation({
      query: (id) => ({
        url: `accounts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["accounts"], //previous caching is old reload new
    }),
    updateAccount: builder.mutation({
        // we can accept only single parameter in patch
      query: ({amount,id}) => ({
        url: `accounts/${id}`,
        method: "PATCH",
        body:{amount}
      }),
      invalidatesTags: ["accounts"], //previous caching is old reload new
    }),
    // Add more endpoints for other API requests if needed.
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints.

// The 'useGetAccountsQuery' hook is generated from the 'getAccounts' endpoint.
// It allows you to fetch accounts data using a GET request in your functional components.
export const {
  useGetAccountsQuery,
  useAddAccountMutation,
  useDeleteAccountMutation,
  useUpdateAccountMutation
} = adminApi;
