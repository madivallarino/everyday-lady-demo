import PastItem from './PastItem'
import React, { useState } from 'react';

const OrderCard = ({item, userId}) => {
    const [show, setShow] = useState(false)
   


    function handleItems(userId){
       console.log(userId)
       return item.cart_items.map((item)=> <PastItem item={item} userId={userId}/>)
    }

 
  
const prices = item.cart_items.map((item)=> item.price * item.quantity)

function handlePrice(){
    if (item.discount === true){
        return handleDiscountTotal()
    }else {
        return totalPrice()
    }
}


function totalPrice(){
    let total = 0; 
    for (let i = 0; i < prices.length; i++){
        total += prices[i]
    } return total 
}

function handleDiscountTotal(){
    let total = totalPrice()
    let discount = total * 0.25
    let reduced = total - discount
    return Math.trunc(reduced)
}

    return (
        <div className="ordercard">
        
        <a onClick={() => setShow(!show)}> Order Number: {item.id} </a> 
        <div className={show ? "order2" : "closed"}>
             { show ? handleItems(userId) : null}
        </div>
        {/* <div className={show ? "order1" : "closed"}>
            {show ? `$${handlePrice()}.00` : null}
        </div> */}
        </div>
       
    )
}

export default OrderCard;

