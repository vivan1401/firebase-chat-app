import { actionList } from "../actions/actionList";

const initState = {
    authError: null
}

const authReducer = (state = initState, action) =>{
    switch(action.type){
        case actionList.LOGIN_SUCCESS:
            console.log('LOGIN_SUCCESS')
            return{
                ...state,
                authError: null
            }
        case actionList.LOGIN_FAIL:
            console.log('LOGIN_FAIL')
            return{
                ...state,
                authError: action.errorMessage             
            }
        case actionList.LOGOUT:
            console.log('LOGOUT_SUCCESS')
            return state;
        default:
            return state;
    }
}

export default authReducer;