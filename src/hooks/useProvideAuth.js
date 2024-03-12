import { useState, useEffect } from "react";
import { login as userLogin, me, logout as userLogout } from "../api";
import { TOKEN_KEY, REFRESH_KEY, getItemFromLocalStorage, setItemInLocalStorage, removeItemFromLocalStorage } from "../utils";

const useProvideAuth = ()=>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const userToken = getItemFromLocalStorage(TOKEN_KEY);
        async function fetchData(){
            if(userToken){
                let user =  await me();
                user = user.data;
                setUser(user);
            }
            setLoading(false);
        }
        fetchData();

    }, []);

    const login = async(username, password)=>{
        const body = {username, password};
        let response = await userLogin(body);
        if(response.success){
            setItemInLocalStorage(TOKEN_KEY, response.data.access_token);
            setItemInLocalStorage(REFRESH_KEY, response.data.refresh_token);
            let user = await me();
            if(user.success){
                setUser(user.data);
                return {
                    success: true,
                }
            }else{
                return {
                    success: false,
                    message: response.message
                }
            }
            
            
        }else{
            return {
                success: false,
                message: response.message
            }
        }
    }

    const logout = async()=>{
        await userLogout();
        removeItemFromLocalStorage(TOKEN_KEY);
        removeItemFromLocalStorage(REFRESH_KEY);
        setUser(null);
        return;
    }

    return {
        user, loading, login, logout,
    }
}


export default useProvideAuth;


