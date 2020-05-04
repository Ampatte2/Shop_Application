import type from "../actions/type";


const initialState = {
    Loaded:true,
    Auth: false,
    Error: false,
    Products: []
}

const shopState = (state=initialState, action) =>{
    switch(action.type){
        case type.IS_LOADED:
            return Object.assign({}, state, {Loaded:action.value});
        case type.IS_AUTH:
            return Object.assign({}, state, {Auth: action.value});
        case type.IS_ERROR:
            return Object.assign({}, state, {Error: action.error});
        case type.PRODUCTS:
            return Object.assign({}, state, {Products: [...action.value]})
        default:
            return state;
    }
}

export default shopState;
