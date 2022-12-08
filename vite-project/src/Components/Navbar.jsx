import React from 'react'
import "./navbar.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import {Link }from "react-router-dom"

export const Navbar = () => {
    const nav = useNavigate()
const handleLogin = ()=>{
nav("/login")
}


const handleClickAdd = () => {
    nav("/cart")
}

  return (
    <div className='main_nav'>
<div className  = "img_nav">

<div style={{borderRight:"2px solid lightgray"}}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Blinkit-yellow-app-icon.svg/900px-Blinkit-yellow-app-icon.svg.png?20211213105121" alt="" />
</div>
<div className='p'>
   <p> Delivery in 17 minutes</p>
   <input type="none" name="" id="" />
</div>



</div>
<div className='second_nav'>
<div>
    <SearchIcon style = {{position:"absolute",top:"1.2vw",height:"5vw",left:"31vw",width:"2vw",color:"lightgray"}} /><input placeholder='search for products' type="text" name="" id=""  className = "input_nav" />
</div>


< div onClick = {handleLogin} style = {{paddingTop:"1vw"}}>
    <h2 style={{fontWeight:"lighter",fontFamily:"sans-serif",fontSize:"22px"}}>Login</h2>
</div>
<div>
    <div onClick = {handleClickAdd} to = "/cart" className = "btn_nav" > <ShoppingCartIcon/> My Cart</div>
</div>


</div>



    </div>
  )
}
