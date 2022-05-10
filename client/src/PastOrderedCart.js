import PastOrderedItem from "./PastOrderedItem";
import React from 'react';

function PastOrderedCart({item}){


function orderItems(){
   return item.cart_items.map((product)=> 
        <PastOrderedItem product={product} />
)
}
    return (
        <div>
           {orderItems()}
        </div>
    )
}

export default PastOrderedCart;