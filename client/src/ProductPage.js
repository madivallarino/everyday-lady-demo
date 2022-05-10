import { useEffect, useState } from 'react';
import React from 'react';
import LandingPageCard from './LandingPageCard';


const ProductPage = () => {
    const [product, setProduct ] = useState([]);
   const [allProducts, setAllProducts] = useState([])
   const [randomItems, setRandomItems ] = useState([]);
    const [showShipping, setShowShipping] = useState(false)
    const [flipPicture, setFlipPicture] = useState(false)
    const [reviews, setReviews ] = useState([])

useEffect(()=> {
    loadData(); 
},[])


const loadData = async () => {
    await fetch(`${window.location}`)
    .then((r)=> r.json())
    .then((data)=> {setProduct(data)
                    loadProducts(data)
                    loadReviews(data.name)
                console.log(data)})
                .catch(error => console.error(error))
}

const loadProducts = async (data) => {
    await fetch(`/${data.category}`)
    .then((r)=> r.json())
    .then((info)=> {
                    setAllProducts(info)
                    handleAlsoLike(info)
                    })
                    .catch(error => console.error(error))
}

const loadReviews = async (name) => {
    await fetch(`/specificreviews/${name}`)
    .then((r)=> r.json())
    .then((info)=> {
        console.log(info)
        setReviews(info)
    })
    .catch(error => console.error(error))
}


function handleReviews(arr){
   return arr.map((line)=> {
        return( 
            <div className="actualreview">
                <h2>{line.user.name} said: </h2>
                {handleStarRating(line.star_rating)}
                <p>{line.review}</p>
            </div>
        )
    })
}

function handleStarRating(num){
    if(num === 1){
        return '⭐'
    }else if (num === 2){
        return '⭐⭐'
    } else if (num === 3){
        return '⭐⭐⭐'
    } else if(num === 4){
        return '⭐⭐⭐⭐'
    }else if (num === 5){
        return '⭐⭐⭐⭐⭐'
    }
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
    .catch(error => console.error(error))
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
    .catch(error => console.error(error))
}

function handleStarAverage(arr){
    let total = 0;
    arr.map((line)=> total += line.star_rating)
    let number = (Math.round(total / arr.length))
    if (number === 1){
        return '⭐'
    } else if(number === 2){
        return '⭐⭐'
    }else if (number === 3){
        return '⭐⭐⭐'
    } else if (number === 4){
        return '⭐⭐⭐⭐'
    } else if (number === 5){
        return '⭐⭐⭐⭐⭐'
    }
}

const handleAlsoLike = (info) => {
 
 let oneItem = (info[Math.floor(Math.random()* info.length + 6)])
 let twoItem = (info[Math.floor(Math.random()* info.length + 3) ])
 let threeItem = (info[Math.floor(Math.random()* info.length + 2 ) ])
 let fourItem = (info[Math.floor(Math.random()* info.length)])
let fiveItem = (info[Math.floor(Math.random() * info.length)])
setRandomItems([oneItem, twoItem, threeItem, fourItem, fiveItem]) 

}

const randomItemsfunction = (randomItems) => {
       return randomItems.map((item)=> {
            return (
                <div className="randomitems"> 
                 <a href={`/products/${item.id}`}>
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
                                <h3>Star Rating: 
                                {(reviews === []) ?
                                    <h4>No Reviews Yet :(</h4> : 
                                    handleStarAverage(reviews)}</h3>
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
                            <img src={product.backimage} alt="back"/> 
                                : 
                            <img src={product.image} alt="forward"/>
                        }
                        </div>
                        <div className="extraimagescontainer">
                            <a  onClick={()=> setFlipPicture(true)}>
                            <img src={product.backimage} alt="back"/>
                            </a> 
                            <a  onClick={()=> setFlipPicture(false)}>
                             <img src={product.image} alt="forward" />
                            </a>
                    </div> 
                </div>
                <div className="reviewbox">
                    <div className="header">
                        <h3>Reviews: </h3> 
                         </div>
                        <div className="reviewbox">
                        {(reviews === []) ? 
                        <h4>No Reviews Yet :(</h4> : 
                        handleReviews(reviews)}
                            
                        </div>
                 </div>
            </div>
          <div className="alsolikebox">
            <div className="header">
                <h3>You May Also Like:</h3>
                </div>
            <div className="randombox">
             {randomItems ? randomItemsfunction(randomItems) : null}
          </div>
        </div>
        </div>
    )
}

export default ProductPage;


