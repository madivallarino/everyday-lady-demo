import React, { useEffect, useState } from 'react'

const NavBar = () => {
  // const [cart, setCart] = useState([])
  const [user, setUser ] = useState(null)
  
 
  useEffect(()=> {
    fetch('/me').then((r)=> {
      if (r.ok){
        r.json().then((data)=> {
          setUser(data)
        })
      }
    })
  },[])

  // const cartNum =  cart.map((product)=> product.quantity) 

  // function totalItems(){
  //   let itemNum = 0;
  //     for(let i = 0; i < cartNum.length; i++){
  //         itemNum += cartNum[i];
  //     }
  //     return itemNum
  // }

function handleProfile(user){
  if(user === null){
    return <a href='/signin'>Signin</a> 
  } else if (user.name === 'guest'){
    return <a href='/signin'>Signin</a>
  } else {
   return <a href="/account/dashboard"><h4>Hey {user.name}</h4></a> 
  }
}



    return (
        <nav className="nav">
        <div className="companyheader">
        <a className="logo" href="/"> The Everyday Lady </a>
        </div>
        <div className="companylinks">
        <ul className="nav-links">
        <a href="/about"> <li>About</li></a>
        <a href="/home"><li> Home</li> </a>
        <a href="/lifestyle"><li> Lifestyle</li></a>
        <a href="/clothing"><li> Clothing</li></a>
        </ul>
        </div>
        <div className="searchbarandcart">
  
    
        
        <span className="signin">
       
        {handleProfile(user)} 
       </span>
       <form className="searchbar" >
      <input
        type="text"
        id="search"
        className="input"
        
        placeholder="Search ..."
      />
    
    </form>
    
    <a className="cta" href="/cart">
     <img src="https://toppng.com/uploads/preview/freebag-vector-retail-shopping-cart-bag-icon-11553505193l9s1kngqvt.png" alt="cart" className="cartlogo"/>

   </a> 
        </div>
      </nav>
    )
}

export default NavBar;