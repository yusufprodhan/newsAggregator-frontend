"use client";
import * as URL from "../../api/url";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {newsList} from "../../api/url";

// Define a service using a base URL and expected endpoints
export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BASE_URL,
    // prepareHeaders: (headers, {getState}) => {
    //     const token = getState().auth.token;
    //     // If we have a token set in state, let's assume that we should be passing it.
    //     if (token) {
    //         headers.set('authorization', `Bearer ${token}`);
    //     }
    // },
}),
  endpoints: (builder) => ({
    getNewsList: builder.query({
      query: arg => {
        const {query} = arg;
        console.log('query :', query);
        return {
          url: `${URL.newsList}?${query ? query : ''}`,
        };
      },
    }),
  }),
  tagTypes:['newList'],
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetNewsListQuery} = newsApi
