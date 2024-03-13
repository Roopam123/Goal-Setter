const API_ROOT = process.env.REACT_APP_BASE_URL;
export const API_URLS = {
    register: ()=> `${API_ROOT}api/v1/student/register`,
    login: ()=> `${API_ROOT}api/v1/student/login`,
    me: ()=> `${API_ROOT}api/v1/student/me`,
    logout: ()=> `${API_ROOT}api/v1/student/logout`,
    checkTokenValidity: ()=> `${API_ROOT}api/v1/student/checkTokenValidity`,
    getAccessTokenUrl: ()=> `${API_ROOT}api/v1/student/getAccessToken`,
    checkUsername: (username)=> `${API_ROOT}api/v1/student/checkUsername?username=${username}`,
    getGoalsOfUser: ()=> `${API_ROOT}api/v1/goal/getGoalsOfUser`,
    createGoal: ()=> `${API_ROOT}api/v1/goal/createGoal`,
    deleteGoal: (goal_id)=> `${API_ROOT}api/v1/goal/deleteGoal?id=${goal_id}`,
    updateGoal: ()=> `${API_ROOT}api/v1/goal/updateGoal`
}
