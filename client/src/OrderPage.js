import React, { useEffect, useState } from "react";

const OrderPage = ({user}) => {

    

    return (
        <div className="orderpage">
            <div className="orderconfirmation"> 
                <h2>Thank You For Your Order!</h2>
                <h3>You'll receive an email confirmation shortly!</h3>
                <h3><a href="/">Keep Shopping -> </a></h3>
                <h3><a href="/account/dashboard"> Go To Dashboard -> </a> </h3>
             </div>
           
        </div>
    )
}

export default OrderPage;