import type from "../actions/type";

const initialState = {
    isLoaded:true,
    isAuth: false
}

const shopState = (state=initialState, action) =>{
    switch(action.type){
        case type.IS_LOADED:
            return Object.assign({}, state, {isLoaded:action.value});
        case type.IS_AUTH:
            return Object.assign({}, state, {isAuth: action.value});
        default:
            return state;
    }
}

export default shopState;
