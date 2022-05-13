import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import CheckBoxInput from './CheckBoxInput';
import './Clothing.css'

const Clothing = () => {
    const [products, setProducts] = useState([])
    const [filterColor, setFilterColor] = useState(null);
    const [filterPrice, setFilterPrice] = useState(null);
    const [filterType, setFilterType ] = useState(null);
    const [filterBy, setFilterBy] = useState(null)
    const [error, setError] = useState('');



    const [filteredProduct, setFilteredProduct] = useState(null)
    const [productFilter, setProductFilter] = useState(null)
    const [filterM, setFilterM] = useState(null)
   


    useEffect(()=> {
        fetch("/clothing")
        .then((resp)=> {
            if (resp.ok) return resp.json();
            throw new Error ('something went wrong while requesting products');
        })
        .then((items)=> setProducts(items))
        .catch((error)=> setError(error.message));
    }, [])
    if (error) return <h1>{error}</h1>;
    
    function priceFilter(){
        if (filteredProduct === "1"){
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
        }else if (filteredProduct === "2"){
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
        }else if (filteredProduct === "3"){
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
        
        if (filterM === "Type"){
           return products.filter((product)=> product.subtype.includes(filteredProduct)).map((product)=> {
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
    }else if (filterM === "Color"){
        return products.filter((product)=> product.color.includes(filteredProduct)).map((product)=> {
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
    } else if (filterM === "Price"){

        return priceFilter()

    }else {
        return allProducts()
    }}


const arr1 = ["Tops", "Bottoms", "Sweater", "Jacket", "Dress"]
const arr2 = ["Black", "White", "Multi", "Grey"]
const arr3 = ["1", "2", "3", "4"]


const arrMap = () => productFilter.map((product)=>  <CheckBoxInput product={product} key={product} setFilteredProduct={setFilteredProduct}/> )


function allProducts(){
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
    </Link>)
})}


    function handleClick(arr, str){
        setProductFilter(arr)
        setFilterM(str)
        setFilteredProduct(null)
    }

    return (
<div className="productscontainer">
        <div className="mainarea">

        </div>
        {/* <div className="pagecontainer">
            <div className="sidebar">
            <button value={1} onClick={()=>handleClick(arr1, "Type")}>Filter by Type</button>
            <button value={2} onClick={()=>handleClick(arr2, "Color")}>Filter By Color</button>
            <button value={3} onClick={()=>handleClick(arr3, "Price")}>Filter By Price</button>
            {productFilter ? arrMap() : null}
            {filteredProduct ? null : allProducts()}
            </div>
            <div className="itempage">
            {filterProducts()}
            </div>
        </div>
        <div className="reviewcontainer"></div> */}
        
    </div>
    )
}

export default Clothing;