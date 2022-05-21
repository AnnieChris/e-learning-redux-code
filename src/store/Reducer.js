const initialState = {
    items: [],
    loading: false,
    error:null,
    data:null,
    loggedinUser:null,
};

const PostReducer = (state = initialState, action) => {
    switch(action.type){
        
        case "LOGIN_USER":
            return{
                ...state,
                loading: true,
                error: null,                
            };
        case "LOGIN_SUCCESS":
            return{
                ...state,
                loading: true,
                error: action.payload,                 
            };
        case "LOGIN_FAILURE":
            return{
                ...state,
                loading: false,
                error: action.error,                 
            };
            case "USER_COURSES":
                return{
                    ...state,
                    data: action.payload,
                    loggedinUser: action.loggedinUser            
                };
        default: 
            return state;


    }
};
export default PostReducer;
export const currentUser = (state) => state.items.userId;