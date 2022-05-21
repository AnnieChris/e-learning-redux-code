const initialState = {
    items: [],
    loading: false,
    error:null,
};

const PostReducer = (state = initialState, action) => {
    switch(action.type){
        case "GETCOURSE_REQUEST":
            return{
                ...state,
                loading: true,
                error: null,
            };
            case "GETCOURSE_SUCCESS":
            return{
                ...state,
                loading: false,
                items: action.payload,                
            };
            case "GETCOURSE_FAILURE":
            return{
                ...state,
                loading: false,
                error: action.error,                
            };
            case "ADDUSER_REQUEST":
            return{
                ...state,
                loading: true,
                error: null,                
            };
            case "ADDUSER_SUCCESS":
            return{
                ...state,
                loading: false,
                error: action.payload,                
            };
            case "ADDUSER_FAILURE":
            return{
                ...state,
                loading: false,
                error: action.error,                
            };
            case "LOGIN_REQUEST":
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
            default: 
                return state;


    }
};
export default PostReducer;
export const currentUser = (state) => state.items.userName;