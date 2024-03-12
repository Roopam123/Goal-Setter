import {TOKEN_KEY,REFRESH_KEY,API_URLS,setItemInLocalStorage,getItemFromLocalStorage,removeItemFromLocalStorage} from '../utils'



const checkTokenValidity = async(token)=>{
    let apiUrl = API_URLS.checkTokenValidity();

    const headers = {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`
    }

    const config = {
        method: "GET",
        headers: {
            ...headers
        }
    }

    try{
        const response = await fetch(apiUrl, config);
        const data = await response.json();

        if(data.isValid !== true){
            return false;
        }

        return true;
    }catch(err){
        return false;
        
    }
}

const getAccessToken = async(refress_token)=>{
    let apiUrl = API_URLS.getAccessTokenUrl();

    const headers = {
        'content-type': 'application/json'
    }
    let body = {refress_token,};
    body = JSON.stringify(body);

    const config = {
        method: "POST",
        headers: {
            ...headers
        },
        body,
    }

    try{
        const response = await fetch(apiUrl, config);
        const data = await response.json();

        return data;

    }catch(err){
        return {
            message: err.message,
            success: false
        };
        
    }


}

const customFetch = async(url, {body, ...customConfig})=>{
    // const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
    const token = window.localStorage.getItem(TOKEN_KEY);
    const refresh_token = window.localStorage.getItem(REFRESH_KEY);



 
    const headers = {
        'content-type': 'application/json',
    }

    try{

    if(token){
        let isValid = await checkTokenValidity(token);
        if(isValid === true){
            headers.Authorization = `Bearer ${token}`;
        }else{
           // get new tokens
           let data = await getAccessToken(refresh_token);
           if(data.success){
              // set new tokens in LS
              setItemInLocalStorage(TOKEN_KEY, data.data.access_token);
              setItemInLocalStorage(REFRESH_KEY, data.data.refress_token);

              headers.Authorization = `Bearer ${data.data.access_token}`;
           }else{
            return {
                message: data.message,
                success: false
            }
           }
        }
        
    }

   

    const config = {
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        },
    }


    if(body){
        config.body = JSON.stringify(body);
    }

  
        const response = await fetch(url, config);
        const data = await response.json();
        // console.log(data);

        if(data.success){
            // console.log(data);
            return {
                data: data.data,
                success: true,
                message: data.message
            };
        }

        // throw new Error(data.message);
        return {
            message:data.message,
            success: false
        }

    }catch(error){
        console.error(error);
        return {
            message: error.message,
            success: false
        }
    }
}

export const register = (body)=>{
    return customFetch(API_URLS.register(), {
        method: "POST",
        body,
    });
}

export const login = (body)=>{
    return customFetch(API_URLS.login(), {
        method: "POST",
        body,
    })
}

export const me = ()=>{
    return customFetch(API_URLS.me(), {
        method: "GET"
    })
}

export const logout = ()=>{
    return customFetch(API_URLS.logout(), {
        method: "DELETE"
    })
}

export const checkUsername = (username)=>{
    return customFetch(API_URLS.checkUsername(username), {
        method: "GET"
    });
}