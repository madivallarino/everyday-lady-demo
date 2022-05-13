import { useEffect, useState, useRef } from "react"
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PayPal from "./PayPal";
import React from "react";
import ReactDOM from "react-dom"
import CartItemCard from './CartItemCard'


const CartPage = () => {
    const [cartItems, setCartItems ] = useState([])
    const [cartID, setCartID] = useState([])
    const [discount, setDiscount] = useState([])
    const [refresh, setRefresh ] = useState(false)
    
 useEffect(() => {
    fetch('/cart').then((r) => {
      if (r.ok) {
        r.json().then((data) =>
        {
        setCartItems(data.cart_items)
        setDiscount(data.discount)
        setCartID(data.id)} );
      }
    });
  }, [refresh]);
  
  

function deleteFromCart(id){
    fetch(`/deleteitem/${id}`, {
        method: "DELETE",
    }).then(setRefresh(!refresh))
}

function handleQuantity(props, id){
    fetch(`/quantity/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify({quantity: props})
    })
}



const cartList = cartItems.map((item)=> {
    return (
        <CartItemCard 
        id={item.id}
        name={item.name} 
        price={item.price} 
        quantity={item.quantity} 
        image={item.image}
        deleteFromCart={deleteFromCart}
        handleQuantity={handleQuantity}
        />
    )
})
const prices = cartItems.map((item)=> item.price * item.quantity)

function submitOrder(id){ 
    console.log(id)
    fetch(`/purchased/${id}`, {
        method: "PATCH", 
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify({purchased: true})
    }).then(window.location.href="/orders")
}

function totalPrice(){
    let total = 0
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

function submitDiscount(e, id){
        // change boolean to true and clear session cart  
        e.preventDefault() 
    fetch(`/discount/${id}`, {
        method: "PATCH", 
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify({discount: true})
    }).then(setRefresh(!refresh))
}



    return (
            <div>
              

                
           <PayPal />
           {/* {cartList} */}
                      {/* <button onClick={()=> submitOrder(cartID)}>Submit Order</button>
                <h4>Total: ${discount ? handleDiscountTotal() : totalPrice()}</h4>
                <form onSubmit={(e)=> submitDiscount(e, cartID)}><label>Discount Code</label><input></input><button>Apply</button></form> */}
            </div>
    )
}

export default CartPage;