import React from 'react'
import {useSelector} from "react-redux";

export default function AdminOrders() {
    const orders = useSelector(state=>state.admin.Orders)
    
    return (
        <div>
            {orders.map((item, index)=>{
                return <div key={index}>
                    <p>Name {item.product_name} Order ID {item.order_id} Price {item.price} Product ID{item.product_id} Date {item.date}</p>
                </div>
            })}
        </div>
    )
}
