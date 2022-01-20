import PastOrderedItem from "./PastOrderedItem";

function PastOrderedCart({item}){


function orderItems(){
   return item.cart_items.map((product)=> 
        <PastOrderedItem product={product} />
)
}
    return (
        <div>
           {orderItems()}
        </div>
    )
}

export default PastOrderedCart;