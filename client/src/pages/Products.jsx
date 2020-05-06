import React, {useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {getData} from "../store/actions"
import {ProductCarousel} from "../components"

export default function Products() {
    
    const dispatch = useDispatch();
    const products = useSelector(state=>state.main.Products);
    const cat = useSelector(state=>state.main.Category);
    const error = useSelector(state=>state.main.Error)
    const [index, setIndex] = useState(10);
    
    const handleClick = (change) =>{
        setIndex(index + change)
        dispatch(getData({index1: (index-10), index2: 10, category: cat }))
    }
    
    return (
        <div>
            {index>10 &&<button onClick={()=>handleClick(-10)}>Back</button>}
            {!error && <button onClick={()=>handleClick(10)}>Next</button>}
            {products && products.map((item, index)=>{
                
                return  <div key={index}>
                            <h1>{item.product_name}</h1>
                            <h2>{item.listing_price}</h2>
                            <h3>{item.sale_price}</h3>
                            <ProductCarousel images={item.images.split(",")}/>
                            <p>{item.description}</p>
                        </div>
            })}
        </div>
    )
}
