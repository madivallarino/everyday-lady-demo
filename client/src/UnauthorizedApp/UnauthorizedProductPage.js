import { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import ProductCard from '../ProductCard';
import LandingPageCard from '../LandingPageCard';
import React from 'react';

const ProductPage = () => {
    const [product, setProduct ] = useState([]);
    const [allProducts, setAllProducts ] = useState([]);
   const [randomItems, setRandomItems ] = useState([]);
    const [showShipping, setShowShipping] = useState(false)
    const [flipPicture, setFlipPicture] = useState(false)

useEffect(()=> {
    loadData(); 
},[])


const loadData = async () => {
    await fetch(`${window.location}`)
    .then((r)=> r.json())
    .then((data)=> {setProduct(data)
                    loadProducts(data)
                console.log(data)})
}

const loadProducts = async (data) => {
    await fetch(`/${data.category}s`)
    .then((r)=> r.json())
    .then((info)=> {setAllProducts(info)
                    handleAlsoLike(info)
                    })
}





function handleCart(product){  
    fetch(`/addtocart/${product.id}`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify({price: product.price, 
                                name: product.name,
                                image: product.image,
                                quantity: 1})
    }).then((r)=> r.json())
    .then(data => console.log(data))
}

function handleWishList(product){
    fetch(`/addtowishlist/${product.id}`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify({price: product.price, 
                                name: product.name,
                                image: product.image,
                                })
    }).then((r)=> r.json())
    .then(data => console.log(data))
}


const handleAlsoLike = (info) => {
  console.log(info)
 let oneItem = (info[Math.floor(Math.random()* info.length + 6)])
 let twoItem = (info[Math.floor(Math.random()* info.length + 3) ])
 let threeItem = (info[Math.floor(Math.random()* info.length + 2 ) ])
 let fourItem = (info[Math.floor(Math.random()* info.length)])
let fiveItem = (info[Math.floor(Math.random() * info.length)])
setRandomItems([oneItem, twoItem, threeItem, fourItem, fiveItem]) 

}

const randomItemsfunction = (info) => {
       return info.map((item)=> {
            return (
                <div className="randomitems"> 
                 <a href={`/products/${product.id}`}>
                <LandingPageCard name={item.name} image={item.image} />
                </a>
                </div>
            )
        })
    
}



    return (
        <div className="productpagecontainer">
            <div className="bigbox">
                <div className="mainbox">
                <div className="detailscontainer">
                        <h1>{product.name}</h1>
                            <h3>Description:</h3>
                                <p>{product.desc}</p>
                                <h3>Color: {product.color}</h3>
                                <h3>Star Rating: </h3>
                                 <button onClick={()=> handleCart(product)}>Add to Bag</button>
                                    <button onClick={()=> handleWishList(product)}>Add to WishList</button>
                                    <a onClick={() => setShowShipping(!showShipping)}><h3>Shipping *</h3></a>
                                    {showShipping ?  <table>
                                                     <tr>
                                                     <th>Method</th>
                                                     <th>Shipping Time</th>
                                                    <th>Cost</th>
                                                    </tr>
                                                        <tr>
                                                        <td>Standard</td>
                                                         <td>Arrives in 5-8 Business Days</td>
                                                         <td>$4.49 on orders under $49.99. FREE on orders over $50</td>
                                                         </tr>
                                                        <tr>
                                                         <td>Express</td>
                                                        <td>Arrives in 2-3 business days</td>
                                                        <td>$14.95</td>
                                                         </tr>
                                                         <tr>
                                                            <td>Rush</td>
                                                            <td>Arrives in 1-2 days</td>
                                                             <td>$21.95</td>
                                                         </tr>
                                                        <tr>
                                                            <td>Truck</td>
                                                            <td>Arrives in 2-4 weeks once shipped</td>
                                                             <td>Costs May Vary</td>
                                                        </tr>
                                                            </table> : null}
                        </div>
                <div className="mainimagecontainer">
                        {flipPicture ? 
                            <img src={product.backimage}/> 
                                : 
                            <img src={product.image} />
                        }
                        </div>
                        <div className="extraimagescontainer">
                            <a onClick={()=> setFlipPicture(true)}>
                            <img src={product.backimage}/>
                            </a> 
                            <a onClick={()=> setFlipPicture(false)}>
                             <img src={product.image}/>
                            </a>
                    </div> 
                </div>
                <div className="reviewbox">
                    <div className="header">
                        <h3>Reviews: </h3> 
                         </div>
                        <div className="reviewbox"></div>
                 </div>
            </div>
          <div className="alsolikebox">
            <div className="header">
                <h3>You May Also Like:</h3>
                </div>
            <div className="randombox">
             {randomItems ? randomItemsfunction  (randomItems) : null}
          </div>
        </div>
        </div>
    )
}

export default ProductPage;


