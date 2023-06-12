import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define our single API slice object
export const countryApi = createApi({
    // The cache reducer expects to be added at `state.api` (already default - this is optional)
    reducerPath: 'country',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005' }),
    // The "endpoints" represent operations and requests for this server
    endpoints: builder => ({
      // The `getPosts` endpoint is a "query" operation that returns data
      getCountries: builder.query({
        // The URL for the request is '/fakeApi/posts'
        query: () => '/country',
        providesTags: ['countrycache'] // fetch record from cache
      }),
      addNewCountry: builder.mutation({
        query: (newCountry) => ({
          url:'/country',
          method:'POST',
          body:newCountry
        }),
        invalidatesTags:['countrycache'] // old record remove from cache and fetch all record with new record
      }),
      deleteCountry:builder.mutation({
        query:(id) => ({
          url:`/country/${id}`,
          method:'DELETE'
        }),
        invalidatesTags:['countrycache']
      }),
      editCountry: builder.mutation({
        query: (edit) => ({
          url:'/country/'+edit.id,
          method:'PUT',
          body:edit
        }),
        invalidatesTags:['countrycache'] // old record remove from cache and fetch all record with new record
      }),
    })
  })
  
  // Export the auto-generated hook for the `getAccounts` query endpoint
  export const { useGetCountriesQuery,useAddNewCountryMutation,useDeleteCountryMutation,useEditCountryMutation} = countryApi