"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import {newsApi} from "@/app/GlobalRedux/News/NewsAction";
import AuthSlice from './Auth/AuthSlice';
import {authApi} from "@/app/GlobalRedux/Auth/AuthAction";

const rootReducer = combineReducers({
    auth: AuthSlice,
    [authApi.reducerPath]: authApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
},);

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(
            newsApi.middleware,
            authApi.middleware
        ),
});

// console.log('store', store);
