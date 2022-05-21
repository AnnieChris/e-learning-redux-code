import http from "./http-common";

//let LoggedIn = [];
export const addUserAction = (postData) =>async(dispatch, getstate) => {
    dispatch({ type:"ADDUSER_REQUEST" })
    try
    {
        const response = await http.post("addUser", postData);

        dispatch({ type:"ADDUSER_SUCESS", payload: response.data })
        console.log("Data::",response.data);

    }
    catch(error)
    {
        dispatch({ type:"ADDUSER_FAILURE", error })
    }
};
export const loginAction = (postData, navigate) => async (dispatch, getState) => {

    
    dispatch({type: "LOGIN_REQUEST"})
    await http.post('user/login',postData).then(function (response) {
       
        console.log(response.data);
                    
        if(response.data){
            console.log('Login Success');
            dispatch(getUserCourses(postData.userId, navigate));
        }
        else{
            console.log('Login failed');
            dispatch({ type:"LOGIN_FAILURE",  payload: response.data  })
            navigate("/invalidLogin");
        }
    })
};
export const getUserCourses = (userID, navigate) => async (dispatch, getState) => {
    
    dispatch({type: "LOGIN_REQUEST"})
    await http.post('course/usercourses',userID).then(function (response) {
       
        console.log(response.data);
        dispatch({ type:"USER_COURSES",  payload: response.data, loggedinUser:  userID})
        navigate("/home");

    })
};