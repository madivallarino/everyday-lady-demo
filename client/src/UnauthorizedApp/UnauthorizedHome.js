import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard';

const UnauthorizedHome = () => {
    const [products, setProducts] = useState([])
    const [filterColor, setFilterColor] = useState(null);
    const [filterPrice, setFilterPrice] = useState(null);
    const [filterType, setFilterType ] = useState(null);
    const [error, setError] = useState('');

    useEffect(()=> {
        fetch("/homes")
        .then((resp)=> {
            if (resp.ok) return resp.json();
            throw new Error ('something went wrong while requesting products');
        })
        .then((items)=> setProducts(items))
        .catch((error)=> setError(error.message));
    }, [])
    if (error) return <h1>{error}</h1>;
    
    function priceFilter(){
        if (filterPrice == "1"){
            return products.filter((product)=> (product.price < 25 ) ).map((product)=> {
                return(
                <Link to={`/products/${product.id}`}>
                <ProductCard 
                   name={product.name} 
                   price={product.price} 
                   image={product.image} 
                   color={product.color} 
                   back_image={product.back_image} 
                   id={product.id}/>
                 </Link>
                )
            })
        }else if (filterPrice == "2"){
           return products.filter((product)=> (product.price < 50 && product.price > 25)).map((product)=> {
                return(
                    <Link to={`/products/${product.id}`}>
                    <ProductCard 
                       name={product.name} 
                       price={product.price} 
                       image={product.image} 
                       color={product.color} 
                       back_image={product.back_image} 
                       id={product.id}/>
                     </Link>
                )
            })
        }else if (filterPrice == "3"){
            return products.filter((product)=> (product.price < 150 && product.price > 50)).map((product)=> {
                return(
                    <Link to={`/products/${product.id}`}>
                    <ProductCard 
                       name={product.name} 
                       price={product.price} 
                       image={product.image} 
                       color={product.color} 
                       back_image={product.back_image} 
                       id={product.id}/>
                     </Link>
                )
            })
        }else{
           return products.filter((product)=> product.price > 150).map((product)=> {
                return (
                    <Link to={`/products/${product.id}`}>
                    <ProductCard 
                       name={product.name} 
                       price={product.price} 
                       image={product.image} 
                       color={product.color} 
                       back_image={product.back_image} 
                       id={product.id}/>
                     </Link>
                )
            })
        }
    }

    function filterProducts(){
        if(filterPrice !== null && filterType !== null) {
            console.log('this is firing')
            // return products.filter((product)=> (product.color.includes(filterColor) && product.subtype.includes(filterType)).map((product)=> {
            //     return(
            //         <Link to={`/products/${product.id}`}>
            //         <ProductCard 
            //            name={product.name} 
            //            price={product.price} 
            //            image={product.image} 
            //            color={product.color} 
            //            back_image={product.back_image} 
            //            id={product.id}/>
            //    </Link>
            //     )
            // }))
        } else if (filterType != null && filterColor == null){
           return products.filter((product)=> product.subtype.includes(filterType)).map((product)=> {
                return ( 
                    <Link to={`/products/${product.id}`}>
                         <ProductCard 
                            name={product.name} 
                            price={product.price} 
                            image={product.image} 
                            color={product.color} 
                            back_image={product.back_image} 
                            id={product.id}/>
                    </Link>
                )}) 
    }else if (filterColor != null && filterType == null){
        return products.filter((product)=> product.color.includes(filterColor)).map((product)=> {
            return (
                <Link to={`/products/${product.id}`}>
                         <ProductCard 
                            name={product.name} 
                            price={product.price} 
                            image={product.image} 
                            color={product.color} 
                            back_image={product.back_image} 
                            id={product.id}/>
                    </Link>
            )
        })
    } else if (filterPrice != null){

        return priceFilter()

    }else {
        return products.map((product)=> {
            return (
                 <Link to={`/products/${product.id}`}>
        <ProductCard 
        name={product.name} 
        price={product.price} 
        image={product.image} 
        color={product.color} 
        back_image={product.back_image} 
        id={product.id}/>
        </Link>
            )
        })
    }}




    return (
<div className="everythingcontainer">
        <div className="pagecontainer">
            <div className="sidebar">
            <div className="typeFilter">
            <h3>Filter By Type: </h3>
              <p> <input type="checkbox" value="Living" onClick={(e)=> setFilterType(e.target.value)}/> Kitchen/Living </p> 
                <p>  <input type="checkbox" value="Lighting" onClick={(e)=> setFilterType(e.target.value)}/> Lighting</p>
                <p> <input type="checkbox" value="Bath" onClick={(e)=> setFilterType(e.target.value)}/> Bath</p>
            <p> <input type="checkbox" value="Decor" onClick={(e)=> setFilterType(e.target.value)}/> Decor </p>
           <p> <input type="checkbox" value="Furniture" onClick={(e)=> setFilterType(e.target.value)}/> Furniture </p>
           
            </div>
            <div className="colorFilter">
                <h3>Filter By Color: </h3>
                    <p>  <input type="checkbox" id={"Black"} value="Black" onClick={(event)=> setFilterColor(event.target.value)} /> Black</p> 
                    <p><input type="checkbox"id={"White"} value="White" onClick={(event)=> setFilterColor(event.target.value)} /> White</p>
                    <p> <input type="checkbox" id={"Multi"} value="Multi" onClick={(event)=> setFilterColor(event.target.value)} /> Multi</p>
                    <p> <input type="checkbox" id={"Grey"} value="Grey" onClick={(event)=> setFilterColor(event.target.value)} /> Grey</p>
        </div>
        <div className="priceFilter">
        <h3>Filter By Price: </h3>
          <p>  <input type="checkbox" value="1" onClick={(e)=> setFilterPrice(e.target.value)}/> Under $25</p> 
            <p> <input type="checkbox" value="2" onClick={(e)=> setFilterPrice(e.target.value)}/> $25 - $50</p>
        <p>  <input type="checkbox" value="3" onClick={(e)=> setFilterPrice(e.target.value)}/> Under $150</p>
       <p> <input type="checkbox" value="4" onClick={(e)=> setFilterPrice(e.target.value)}/> $150+</p>
        </div>
            </div>
            <div className="itempage">
            {filterProducts()}
            </div>
        </div>
        <div className="reviewcontainer"></div>
        
    </div>
    )
}

export default UnauthorizedHome;