import { useEffect, useState } from 'react';
import React from 'react';
import OrderCard from './OrderCard';
import WishListCard from './WishListCard'

const Dashboard = ({handleLogout}) => {
    const [ pastCarts, setPastCarts ] = useState([]);
    const [ wishList, setWishList ] = useState([]);
    const [ userInfo, setUserInfo ] = useState([]);
    const [refresh, setRefresh] = useState(false)
    const [see, setSee] = useState(false)
    const [show, setShow] = useState(false)

useEffect(()=> {
    fetch('/me')
    .then((r)=> r.json())
    .then((data)=> {
        setUserInfo({
            id: data.id,
            email: data.email, 
            name: data.name})
            purchasedCarts(data.id)
    })
},[refresh])

useEffect(()=> {
    fetch('/wishlist')
    .then((r)=> r.json())
    .then((data)=> setWishList(data.wish_list_items))
},[refresh])

function purchasedCarts(id){
    fetch(`/orderedcarts/${id}`)
    .then((r)=> r.json())
    .then((data)=> setPastCarts(data))
}

function deleteFromList(id){
    fetch(`/deletelistitem/${id}`, {
        method: "DELETE",
    }).then((setRefresh(!refresh)))
}


function mapOrderHistory(){
   return pastCarts.map((item)=> <OrderCard item={item} userId={userInfo.id}/>)
}

// function updateUserInfo(){
//     fetch(`/updateuserinfo`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type" : "application/json"
//         }, body: JSON.stringify({

//         })
//     }).then((r)=> r.json)
//       .then((data)=> console.log(data))
// }



function handleCart(item){  
    fetch(`/addtocart/${item.id}`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify({price: item.price, 
                                name: item.name,
                                image: item.image,
                                quantity: 1})
    }).then((r)=> r.json())
    .then(fetch(`/deletelistitem/${item.id}`, {
        method: "DELETE",
    })).then((setRefresh(!refresh)))
}

const wishListItems = wishList.map((item)=> {return <WishListCard item={item} deleteFromList={deleteFromList} handleCart={handleCart}/>})

    return (
        <div className="dashboardcontainer">
        <div className="accountsidebar">
                <h5>Account</h5>
                <p>Account Settings</p>
                <p><a href="/orderhistory">Order History</a></p>
                <p><a href="/*">Wish List</a></p>
               <h5>Help </h5> 
                <p><a href="/returnpolicy">Returns + Exchanges</a></p>
                <p> Shipping </p>
                <p> International Shipping </p>
                <p> Orders + Payments </p>
                <p> Frequently Asked Questions</p>
                <p> <a href="/giftcard">Gift Cards </a></p>
                <p> Size Charts </p>
                <p> Rewards </p>
                <h5>Connect</h5>
                    <p>Contact Us</p>
                    <p> Store Locations </p>
                <h5>Legal</h5>
                    <p>Current Promotions</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>Cookies</p>
                    <p>Unsubscribe</p>
            </div>
        <div className="accountdashboard">
        <button className="logoutbtn" onClick={handleLogout}>Logout</button>
            <div className="settings">
                <div className="settings2">
                <div className="accountinfo">
                <span><h2> Account Info </h2><a onClick={()=> setSee(!see)}>Manage</a></span>
                {see ? null :
                <> 
                <p>{userInfo.name}</p>
                <p>{userInfo.email}</p> 
                <p>Phone Number: </p>
                <p>Subscribed ? </p></>
                }
                
                <form className={ see ? null : "closed"}>
                <label>Email: <input></input>
                <button>Update</button></label>
                <label>Name: <input></input><button>Update</button></label>
                <label>Phone Number:<input></input><button>Update</button></label>
                <div>
                <label>Do you want to receive our emails?</label>
                <br/>
                <label>Yes<input type="checkbox"></input></label>
                <label>No<input type="checkbox"></input></label>
                  
                 </div>
                </form>

                </div>
                <div className="accountinfo">
                <span><h2>Addresses & Payments</h2> <a  onClick={()=> setShow(!show)}>Manage</a></span>
                {show ? 
                <>
                    <p>Home Address:</p>
                    <p>Saved Cards:</p>
                </>: 
                null}
                </div>
                
                </div>
            </div>
            <div className="settings">
               <div className="header">
               <h3>WishList</h3>
               </div>
               <div className="settingsbox">
                {wishListItems}
               </div>
            </div>
            <div className="settings5">
               <div className="header">
                <h3>Order History</h3>
                <p>Click on Order Number to reveal the order </p>
               </div>
               <div className="settingsbox">
                 {mapOrderHistory()} 
               </div>
              
            </div>
        </div>
       
        </div>
    )
}

export default Dashboard;