
const PastOrderedItem = ({product}) => {
    console.log(product)
    

    return (
        <div className="pastordereditem">
           {product.name}
           <img src={product.image} alt="product"/>
           {product.created_at}
        </div>
    )
}

export default PastOrderedItem;