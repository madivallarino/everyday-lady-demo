import React from 'react';

function GiftProductCard(props){
    const {  name,  image } = props

    return(
        <div className="product-card">
        <span className="product-info">
        <h4 className="product-name">{name}</h4>
        <img src={image} alt="product"/>
        </span>
        </div>
    )
}

export default GiftProductCard;