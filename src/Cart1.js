import React from 'react'
import Cartadd from './Cartadd'

function Cart1({cart}){
  return (
    <div>
       {
        cart.map(function(product){
            return(
                <Cartadd image={product.img} Name={product.Name} price={product.price}/>
                )
            })

       }

    </div>
  )
}

export default Cart1