// import dotenv from 'dotenv';
// require('dotenv').config() 

// dotenv.config();
const API_ROOT = process.env.REACT_APP_BASE_URL;
export const API_URLS = {
    register: ()=> `${API_ROOT}api/v1/student/register`,
    checkTokenValidity: ()=> `${API_ROOT}api/v1/student/checkTokenValidity`,
    getAccessTokenUrl: ()=> `${API_ROOT}api/getAccessToken`,
    login: ()=> `${API_ROOT}api/v1/student/login`,
    me:()=>`${API_ROOT}api/v1/student/me`,
}
export const {TOKEN_KEY,REFRESH_KEY} = process.env;