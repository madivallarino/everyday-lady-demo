import React from 'react';

const CartItemCard = (props) => {
const { id, name, price, quantity, image, deleteFromCart, handleQuantity } = props

    return (
            <div className="cartcard">
                 <div className="leftside">
                    <img src={image} alt="cartitemcard"/>
                 </div>
                 <div className="rightside">
                 <h2>{name}</h2>
                 <p>{price}</p>
                 <select onChange={(e)=> handleQuantity(e.target.value, id)}>
                 <option>{quantity}</option>
                    {quantity === 1 ? null : <option value="1">1</option> }
                    {quantity === 2 ? null : <option value="2">2</option> }
                     {quantity === 3 ? null : <option value="3">3</option> }
                 </select>
                 <button onClick={()=> deleteFromCart(id)}>Remove From Cart</button>
                 </div>
            
            
            
            </div>
    )
}

export default CartItemCard;