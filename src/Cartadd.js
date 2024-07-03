import React from 'react'
import './Cart1.css'


function Cartadd(image,Name) {
  return (
    <div className='main'>
    <div>
    <img className='img' src={image}/>
    </div>
     <h3>{Name}</h3>
     
 </div>

  )
}

export default Cartadd