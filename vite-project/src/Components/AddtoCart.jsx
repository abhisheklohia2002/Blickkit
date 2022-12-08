import React from 'react'
import { Navbar } from './Navbar'
import "./shopping.css";
const AddtoCart = () => {
  return (
  <>
 <div>
 <Navbar/>
 </div>
  <div className = "shopping_bag">
  <div className = "header_bag">Cart item</div>
  <div className='product_item'>
<div>
    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/383480a.jpg?ts=1669367058" alt="" />
</div>
<div className  = "shopping_title">
<h3>Maggi Packet</h3>

</div>


<div className='AddToSubtract'>
<i class = "fas fa-minus"></i>
<input type="text" placeholder='2' />
<i class = "fas fa-plus"></i>

</div>

<div className="total">
    2000Rs
</div>
<div className="remove">
    <i class = "fas fa-trash-alt"></i>
</div>
   </div>



   </div>
   <div className='totalNumber'>
    20000
  </div>
   <div>
    <button>Checkout</button>
   </div>
  </>
  )
}

export default AddtoCart
