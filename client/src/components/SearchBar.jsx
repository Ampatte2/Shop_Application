import React, {useState, useReducer} from 'react';
import {useDispatch} from "react-redux";
import {getData} from "../store/actions"

function reducer(state, action){
    switch(action.type){
        case "listPrice":
            return {...state, listPrice: action.payload}
        case "discount":
            return {...state, discount: action.payload}
        case "description":
            return {...state, description: action.payload}
        case "product":
            return {...state, product: action.payload}
        case "category":
            return {...state, category: action.payload}
        default:
            return state
    }
}


export const SearchBar = (props) => {

    const initial = {listPrice:undefined, discount:false, description:undefined, product: undefined, category: undefined}
    const storeDispatch = useDispatch();
    const [state, dispatch] = useReducer(reducer, initial);

    const submit = (e) =>{
        e.preventDefault()
        storeDispatch(getData(state));
    }

    return (
        <div>
            <form name ="search-form" onSubmit={(e)=>submit(e)}>
            <input type="text" placeholder="Product" onChange={(e)=>dispatch({type: "product", payload: e.target.value})}/>
            <input type="text" placeholder="Description" onChange={(e)=>dispatch({type: "description", payload: e.target.value})}/>
            <input type="number" placeholder="listPrice" onChange={(e)=>dispatch({type: "listPrice", payload: e.target.value})}/>
            <label htmlFor="Discount" >OnSale</label>
            <input type="checkbox" placeholder="Discount" name="Discount" onChange={(e)=>dispatch({type: "discount", payload: !state.discount})}/>
            <input type="checkbox" placeholder="Category"/>
            <button type="submit">Search</button>
            </form>
        </div>
    )
}
