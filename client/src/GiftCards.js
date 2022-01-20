import React, { useEffect, useState } from 'react';
import GiftProductCard from './GiftProductCard';

function GiftCards (){
const [products, setProducts] = useState([])
const [error, setError] = useState(null)

    useEffect(()=> {
        fetch("/giftcard")
        .then((resp)=> {
            if (resp.ok) return resp.json();
            throw new Error ('something went wrong while requesting products');
        })
        .then((items)=> setProducts(items))
        .catch((error)=> setError(error.message));
    }, [])
    if (error) return <h1>{error}</h1>;

    const giftCards = products.map((product)=> {
        return (
            <a href={`/products/${product.id}`}>
            <GiftProductCard 
            name={product.name} 
            price={product.price} 
            image={product.image} 
            color={product.color} 
            back_image={product.back_image} 
            id={product.id}
            key={product.id}/>
            </a>
        )
    })


    return(
        <div className="allcontainer">
            <div className="siderbar">
            
               <h5>Help </h5> 
                <p><a href="/refundpolicy">Returns + Exchanges</a></p>
                <p><a href="/*">Shipping</a></p>
                <p> International Shipping </p>
                <p><a href="/*">Orders + Payments</a></p>
                <p> Frequently Asked Questions</p>
                <p> Gift Cards </p>
                <p><a href="/*">Size Charts</a></p>
                <p> Rewards </p>
                <h5>Connect</h5>
                    <p>Contact Us</p>
                    {/* <p> Store Locations </p> */}
                <h5>Legal</h5>
                    <p>Current Promotions</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>Cookies</p>
                    <p>Unsubscribe</p>
            
            </div>
            <div className="butcontainer">
            <div className="adcontainer">
            </div>
            <div className="bannercontainer">
            <a href="/giftcardfaqs">
                <img src="https://images.ctfassets.net/q602vtcuu3w3/6IA2fYbfaPfmn931J5oaq2/d819780eeb0bbc2cbd7aad07d9236e36/21_HOLIDAY_GIFT_CARDS_LP_EM6.jpg?w=1050&q=80&fm=webp" alt="giftcardimage"/>
            </a>
                <img src="https://images.ctfassets.net/q602vtcuu3w3/1WlbpxdE78g9w7AfNKQU0m/4ef50fcf9e84d2445a86e74e55022fa9/21_HOLIDAY_GIFT_CARDS_LP_EM7.jpg?w=1050&q=80&fm=webp" alt="giftcardimage2" />
            </div>
            <div className="giftcardcontainer">
                {giftCards}
            </div>
            </div>
           
        </div>
    )
}


export default GiftCards;