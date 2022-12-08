import React, { createContext } from 'react'
import { Navbar } from './Navbar'
import './body.css'
import { Banner } from './banner'
import Cart_body from './Cart_body'



  


export const Body = () => {



  return (
    <>
    <Navbar/>
    <div className = "body">
      <div className="img_body">
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=1440/layout-engine/2022-05/Group-33704.jpg" alt="" />
      </div>
    
    <div className='banner_flex'>
     <Banner img={"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2022-11/winter_PC-masthead-WEB.png"}/>
     <Banner img={"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2022-11/HFS-.jpeg"}/>
     <Banner img = {"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2022-06/morning-banner.jpg"} />
     <Banner img  = {"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2022-11/Winter_HH-masthead-WEB.png"} />
     <Banner img={"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2022-11/Winter_FB-masthead-WEB.png"} />
<Banner img={"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2022-10/gifting-store-Banner-Web.jpg"} />
     

    </div>

<div className='addCartheader'>
Everyday must-haves
</div>
    <div className = "cart_body" >
<Cart_body del={160} price={150} weight={"12 x 70g"} topic={"Maggi Masala Noodles-Pack of 12"} imgcart = "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/383480a.jpg?ts=1669367058" />
<Cart_body del={160} price={150} weight={"12 x 70g"} topic={"Maggi Masala Noodles-Pack of 12"} imgcart = "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/383480a.jpg?ts=1669367058" />
<Cart_body del={160} price={150} weight={"12 x 70g"} topic={"Maggi Masala Noodles-Pack of 12"} imgcart = "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/383480a.jpg?ts=1669367058" />
<Cart_body del={160} price={150} weight={"12 x 70g"} topic={"Maggi Masala Noodles-Pack of 12"} imgcart = "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/383480a.jpg?ts=1669367058" />
<Cart_body del={160} price={150} weight={"12 x 70g"} topic={"Maggi Masala Noodles-Pack of 12"} imgcart = "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/383480a.jpg?ts=1669367058" />
<Cart_body del={160} price={150} weight={"12 x 70g"} topic={"Maggi Masala Noodles-Pack of 12"} imgcart = "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/383480a.jpg?ts=1669367058" />
<Cart_body del={160} price={150} weight={"12 x 70g"} topic={"Maggi Masala Noodles-Pack of 12"} imgcart = "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/383480a.jpg?ts=1669367058" />



      
    </div>
    
    
    
    </div>
    </>
  )
}
