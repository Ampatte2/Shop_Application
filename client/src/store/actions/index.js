import type from "./type";
import {postLogin, postRegister, postGetData, postUserData, postAdminLogin} from "../../api"
import {batch} from "react-redux"

export function isLoaded(value){
    return {type:type.IS_LOADED, value}
}

export function isAuth(value){
    return {type:type.IS_AUTH, value}
}

export function isError(error){
    return {type:type.IS_ERROR, error}
}

export function userLogin(user){
    return function(dispatch){
        dispatch(isLoaded(false))
        return postLogin(user).then(res=>{
            dispatch(isLoaded(true));
            if(res.data.token){
                localStorage.setItem("token", res.data.token);

                batch(()=>{
                    dispatch(isAuth(true))
                    dispatch(isError(false))
                    });

            }else if (res.data.error){
                dispatch(isError(res.data.error))
            }
        })
    }
}

export function userRegister(user){
    return function(dispatch){
        dispatch(isLoaded(false))
        return postRegister(user).then(res=>{
            dispatch(isLoaded(true));
            if(res.data.token){
                localStorage.setItem("token", res.data.token);

                batch(()=>{
                    dispatch(isAuth(true))
                    dispatch(isError(false))
                    });

            }else if (res.data.error){
                dispatch(isError(res.data.error))
            }
        })
    }

}
export function userData(token){
    return function(dispatch){
        dispatch(isLoaded(false))
        return postUserData(token).then(res=>{

        })
    }
}
export function getData(){
    return function(dispatch){
        dispatch(isLoaded(false))
        return postGetData().then(res=>{

        })
    }
}

export function adminLogin(user){
    return function(dispatch){
        dispatch(isLoaded(false))
        return postAdminLogin(user).then(res=>{
            dispatch(isLoaded(true))
            console.log(res)
            if(res.data.error){                    
                    dispatch(isError(res.data.error))
            }else{
                batch(()=>{

                })
            }

        })
    }
}