"use client";
import * as URL from "../../api/url";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {newsList} from "../../api/url";

// create newsApi
export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BASE_URL,
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
export const {useGetNewsListQuery} = newsApi
