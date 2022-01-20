
function ProductCard(props){
    const {  name, price,  image} = props

    return(
        <div className="product-card">
        <span className="product-info">
        
        
        <img src={image} alt="producte"/>
        <span><h4 className="product-name"> ${price} <br/>{''}{''}{''}  {name}</h4></span>
       
        </span>
        </div>
    )
}

export default ProductCard;