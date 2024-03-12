const API_ROOT = process.env.REACT_APP_BASE_URL;
export const API_URLS = {
    register: ()=> `${API_ROOT}api/v1/student/register`,
    login: ()=> `${API_ROOT}api/v1/student/login`,
    me: ()=> `${API_ROOT}api/v1/student/me`,
    logout: ()=> `${API_ROOT}api/v1/student/logout`,
    checkTokenValidity: ()=> `${API_ROOT}api/v1/student/checkTokenValidity`,
    getAccessTokenUrl: ()=> `${API_ROOT}api/getAccessToken`,
    checkUsername: (username)=> `${API_ROOT}api/v1/student/checkUsername?username=${username}`,
}
