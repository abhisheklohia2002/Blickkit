import { Button} from '@mui/material'
import { Box, height } from '@mui/system'
import React from 'react'
import "./body.css"
import {Link }from "react-router-dom"

import LockIcon from '@mui/icons-material/Lock';
import PhoneIcon from '@mui/icons-material/Phone';
const Login_page = () => {
  return (
  <>
  <Box className = "login_logo">
    <Link to = "/">
  <img className='img_login' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Blinkit-yellow-app-icon.svg/900px-Blinkit-yellow-app-icon.svg.png?20211213105121" alt="" />
    </Link>
  
  </Box>
  <form className='form_login' action="">
  <h3 className='header'>Login</h3>
<div className='label'>  <label htmlFor="">Phone</label></div>
<Box>
  
  <PhoneIcon style = {{position:"absolute",top:"19vw",left:"36vw"}} />  
<input className='textinput'
  type = "number" min = "0"
  placeholder="Enter your Number"
  style={{ width: 400,height:30}}
/>



</Box>
<div className='label'><label htmlFor="">Password</label></div>
<Box>
<LockIcon  style = {{position:"absolute",top:"24.6vw",left:"36vw"}} />
<input className='textinput'

  placeholder="Enter your Password"
  style={{ width: 400,height:30}}
  type= "password"
/>
</Box>
<Box>
<Button style = {{border:"2px solid black",color:"black",background:"lightblue",width:"5vw"}}>
    Login
</Button>
</Box>

<Box className = "login_box">
    <Box>
<Link to = "/registers">
Create an Account

</Link>
    </Box>
    <Box>
        Forgot Account
    </Box>
</Box>
  </form>
  
  </>
  )
}

export default Login_page
