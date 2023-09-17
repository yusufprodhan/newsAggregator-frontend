"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import {newsApi} from "@/app/GlobalRedux/News/NewsAction";

const rootReducer = combineReducers({
    [newsApi.reducerPath]: newsApi.reducer,
},);

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(
            newsApi.middleware
        ),
});

console.log('store', store);
