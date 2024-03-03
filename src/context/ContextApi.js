import React,{useState,useEffect,createContext} from "react";
import {me} from '../api'


export const Context = createContext();
export const AppContext = () => {
    const [userInfo,setUserInfo] = useState("");
    useEffect(()=>{
        handelMe();
    },[])

    const handelMe = async()=>{
        try {
            const response = await me();
            if (response.success) {
                setUserInfo(response?.data)
            }
        } catch (error) {
            console.log("me function",error);
        }
    }
    return(
        <Context.Provider value={userInfo}>
            
        </Context.Provider>
    )
}
