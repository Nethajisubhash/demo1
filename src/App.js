
import { useState } from "react"
import Allproducts from "./Allproducts.js"
import Cart from "./Cart.js"
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App (){
    const [cart,setCart]=useState([])
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route path='/cart' element={<Cart cart={cart}/>}/>
        <Route path='/allproducts' element={<Allproducts cart={cart} setCart={setCart} />}/>
        </Routes>
        </BrowserRouter>            
    </div>
  )
}


export default App