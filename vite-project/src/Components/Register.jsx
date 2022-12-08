import "./register.css"
import { Button} from '@mui/material'
import { Box, height } from '@mui/system'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import {Link }from "react-router-dom"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIcon from '@mui/icons-material/Phone';
import { Navbar } from "./Navbar";
const Register = () => {
  return (
  <>
 
  <Box className = "login_logo1">
    <Link to = "/">
  <img className='img_login1' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Blinkit-yellow-app-icon.svg/900px-Blinkit-yellow-app-icon.svg.png?20211213105121" alt="" />
    </Link>
  
  </Box>
  <form className='form_login1' action="">
  <h3 className='header1'>Register</h3>
  <div className='label1'><label htmlFor="">Username</label></div>
<Box>
<AccountCircleIcon  style = {{position:"absolute",top:"15.4vw",left:"36vw"}} />
<input className='textinput1'

  placeholder="Enter your username"
  style={{ width: 400,height:30}}
  type= "text"
/>
</Box>
<div className='label1'>  <label htmlFor="">Phone</label></div>
<Box>
  
  <PhoneIcon style = {{position:"absolute",top:"21.2vw",left:"36vw"}} />  
<input className='textinput1'
  type = "number" min = "0"
  placeholder="Enter your Number"
  style={{ width: 400,height:30}}
/>



</Box>
<div className='label1'><label htmlFor="">Email</label></div>
<Box>
<EmailIcon   style = {{position:"absolute",top:"26.8vw",left:"36vw"}} />
<input className='textinput1'

  placeholder="Enter your Email"
  style={{ width: 400,height:30}}
  type= "email"
/>
</Box>
<div className='label1'><label htmlFor="">Password</label></div>
<Box>
<LockIcon  style = {{position:"absolute",top:"32.6vw",left:"36vw"}} />
<input className='textinput1'

  placeholder="Enter your Password"
  style={{ width: 400,height:30}}
  type= "password"
/>
</Box>

<Box>
<Button style = {{border:"2px solid black",color:"black",background:"lightblue",width:"7vw"}}>
    Register
</Button>
</Box>

<Box className = "login_box1">
    <Box>
<Link to = "/login">
Already Account

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

export default Register
