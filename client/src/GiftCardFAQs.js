

function GiftCardFAQs(){



    return(
        <div className="FAQscontainer">
            <div className="siderbar">
            
                <h5>Help </h5> 
                <p><a href="/refundpolicy">Returns + Exchanges</a></p>
                <p><a href="/*" >Shipping</a></p>
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
            <div className="FAQs">
                <div className="giftcardd">
                    <div>
                    <h2>Gift Cards</h2>
                    </div>
                    <div className="giftcardimages">
                    <img src="https://images.ctfassets.net/q602vtcuu3w3/3IqyXyeAeIucsMIK04qSkm/25bc691145b9e5eab83478ee847a6fda/uo_ui-web-helpinfo_about_giftcard_asset_062821-v1.jpg?q=80&w=420&fm=webp" alt="firstimage"/>
                    <img src="https://images.ctfassets.net/q602vtcuu3w3/47SkhXUXXGyk6YsaAA8eW/c0769b22d50808421ccca5cc103691fa/Group_11.jpg?q=80&w=420&fm=webp" alt="secondimage"/> 
                    </div>
                </div>
                <div className="giftcardinfo">
                    <h3>About Gift Cards</h3>
                        <p>All Gift Cards can be purchased <a href="/*">here</a> and are available in any amount between $25 - $1,000 USD.</p>
                    <h3>E-Gift Cards</h3>
                        <p>E-Gift Cards are sent to your selected recipient via email. E-Gift Cards are sent within an hour of being ordered. You will receive an email confirmation that your E-Gift Card was sent, along with the email address it was sent to. 
                        <br/>
                        Don't want to send it right away? You can also choose a future date for delivery!</p>
                    <h3>Lost Cards</h3>
                        <p>Gift Cards that are purchased through our website are bearer documents. The Everyday Lady is unable to reissue Gift Cards that have been lost or stolen.</p>
                </div>
                <div className="giftcardd">
                    <h2>GiftCard Balance</h2>
                    <p>You can check your balance anytime here</p>
                    <form>
                        <label>Gift Card Number *</label>
                        <input></input>
                        <label>PIN</label>
                        <input></input>
                        <button type="submit">Check Balance</button>
                    </form>
                </div>

            </div>
            <div className="sidebar"></div>
            
        </div>
    )
}

export default GiftCardFAQs