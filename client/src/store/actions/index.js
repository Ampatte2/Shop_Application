import type from "./type";
import {postLogin, postRegister, postGetData, postUserData, postAdminLogin} from "../../api"
import {batch} from "react-redux"

export function isLoaded(value){
    return {type: type.IS_LOADED, value}
}

export function isAuth(value){
    return {type: type.IS_AUTH, value}
}

export function isAdmin(value){
    return {type: type.IS_ADMIN, value}
}

export function isError(error){
    return {type: type.IS_ERROR, error}
}

export function adminOrders(value){
    return {type: type.ADMIN_ORDERS, value}
}
export function products(value){
    return {type: type.PRODUCTS, value}
}
export function category(value){
    return {type: type.CATEGORY, value}
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

export function getData(data){
    return function(dispatch){
        dispatch(isLoaded(false));
        return postGetData(data).then(res=>{
            if(res.data.error){
                dispatch(isError(res.data.error))
            }else{
                
                batch(()=>{
                    dispatch(products(res.data))
                    dispatch(isError(false))
                    dispatch(category(data.category))
                    });
            }
            
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
                
                localStorage.setItem("token", res.data.token);
                batch(()=>{
                    dispatch(isAdmin(true))
                    dispatch(adminOrders(res.data.orders))
                })
            }

        })
    }
}