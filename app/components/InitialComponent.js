"use client";
import {useEffect} from "react";
import secureLocalStorage from "react-secure-storage";
import {updateUserData} from "@/app/GlobalRedux/Auth/AuthSlice";
import {useDispatch} from "react-redux";

export default function InitialComponent({ children, component }) {
    const dispatch = useDispatch();
    useEffect(() => {
        checkLogin();
    }, []);

    //check login and set into auth state if reload
    const checkLogin = async ()=>{
        let loginData = await secureLocalStorage.getItem('LoginData');
        if(loginData && loginData.token){
            dispatch(updateUserData(loginData))
        }
    }
    return children
}
