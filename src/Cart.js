import './Cart.css'
function Cart({product,addtocart}){
    return(
        <div className='style'>
            <img className='image' src={product.img}/>
            <h3>{product.Name}</h3>
            <h3>₹{product.price}</h3>
            <button onClick={function(){
                addtocart(product)
            }} >Add to cart</button>
        </div>
        
    )
}
export default Cart;