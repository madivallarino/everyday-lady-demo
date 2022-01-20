import React from 'react';


const WishListCard = ({item, deleteFromList, handleCart}) => {

 

    return (
        <div className="wishlistitem">
            <h2>{item.name}</h2>
            
            <img src={item.image} />
            <span>
            <button onClick={()=> handleCart(item)}>Move to Cart</button>
            <button onClick={()=> deleteFromList(item.id)}>Remove</button>
            </span>
            
        </div>
    )
}

export default WishListCard