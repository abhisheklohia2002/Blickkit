import React from 'react'
import "./cart.css"
export default function Cart_body({imgcart,topic,weight,price,del}) {
  return (
    <>
     
      <div className='cartbag'>
        <img src={imgcart} alt="" />
        <p style={{paddingLeft:"6px"}}>{topic}</p>
       <p style={{color:"lightgray",paddingLeft:"6px"}}> {weight} </p>
       <p style = {{display:"flex",marginTop:"10px",paddingLeft:"6px"}}>
       <p > <p> {price} </p>
       <p><del style={{color:"lightgray",paddingLeft:"6px"}}>  {del} </del></p> 
       </p>
       <button style={{height:"2.5vw",width:"6vw",marginLeft:"3vw",fontSize:"15px ",fontWeight:"800",background:"lightgray",color:"darkgreen",border:"2px solid green",borderRadius:"8px"}}>ADD</button> </p>
      </div>

    </>
  )
}
