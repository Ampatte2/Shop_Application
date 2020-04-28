import type from "./type";

export function isLoaded(value){
    return {type:type.IS_LOADED, value}
}
export function isAuth(value){
    return {type:type.IS_AUTH, value}
}