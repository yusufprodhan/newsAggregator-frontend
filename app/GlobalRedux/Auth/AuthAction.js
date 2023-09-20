import * as URL from '../../api/url';
import {logOut, updateUserData,updateUserFevData} from './AuthSlice';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import  secureLocalStorage  from  "react-secure-storage";

//create auth api
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BASE_URL,
    prepareHeaders: (headers, {getState}) => {
      const token = getState().auth.token;
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
    },
  }),
  //end points
  endpoints: builder => ({
    //user registration end points
    userRegister: builder.mutation({
      query(data) {
        const endPath = URL.register;
        return {
          url: `${endPath}`,
          method: 'POST',
          body: data,
        };
      }
    }),
    //user login endpoints
    userLogin: builder.mutation({
      query(data) {
        const endPath = URL.login;
        return {
          url: `${endPath}`,
          method: 'POST',
          body: data,
        };
      },
      async onQueryStarted(id, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
          secureLocalStorage.setItem('LoginData', data?.data);
          dispatch(updateUserData(data?.data));
        } catch (err) {
          console.log('error... ', err);
        }
      },
    }),
    //user logout endpoints
    userLogout: builder.mutation({
      query() {
        const endPath = URL.logout;
        return {
          url: `${endPath}`,
          method: 'POST',
        };
      },
      async onQueryStarted(id, {dispatch, queryFulfilled}) {
        try {
          await secureLocalStorage.removeItem('LoginData')
          dispatch(logOut());
        } catch (err) {
          console.log('error... ', err);
        }
      },
      invalidatesTags:['loginData']
    }),
    //user preference update
    userUpdatePreference: builder.mutation({
      query(data) {
        const endPath = URL.updatePreference;
        return {
          url: `${endPath}`,
          method: 'PUT',
          body: data,
        };
      },
      async onQueryStarted(id, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
          dispatch(updateUserFevData(data?.data));
        } catch (err) {
          console.log('error... ', err);
        }
      },
    }),
  }),
  tagTypes: ['loginData'],
});
export const {
  useUserRegisterMutation,
  useUserLoginMutation,
  useUserUpdatePreferenceMutation,
  useUserLogoutMutation
} = authApi;
