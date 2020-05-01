import type from "../actions/type";


const initialState = {
    AdminAuth:false,
    Orders:{}
}

const adminState = (state=initialState, action) =>{
    switch(action.type){
        case type.IS_ADMIN:
            return Object.assign({}, state, {AdminAuth: action.value});
        default:
            return state;
    }
}

export default adminState;