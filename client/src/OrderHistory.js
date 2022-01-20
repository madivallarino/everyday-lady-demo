import React, {useState, useEffect } from 'react';
import PastOrderedCart from './PastOrderedCart';

const OrderHistory = () => {
    const [pastCarts, setPastCarts ] = useState([])

    useEffect(()=> {
        fetch('/me')
        .then((r)=> r.json())
        .then((data)=> {
            setPastCarts(data.carts)
           
        })
    },[])

    console.log(pastCarts)
    
    function mapOrderHistory(){
        return pastCarts.map((item)=> <PastOrderedCart item={item} />)
     }



 
    return (
        <div className="orderhistorypage">
            Order History
                {mapOrderHistory()}
        </div>
    )
}

export default OrderHistory;