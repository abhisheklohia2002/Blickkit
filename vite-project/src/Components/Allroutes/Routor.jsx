import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import AddtoCart from '../AddtoCart';
import { Body } from '../Body';
import Login_page from '../Login_page';
import { Navbar } from '../Navbar';
import Register from '../Register';
export const Routor = () => {
  return (
    <Routes>
        <Route path="/" element={<Body/>} />
    <Route path = "/login" element = {<Login_page/>} />
    <Route path = "/registers" element = {<Register/>} />
    <Route path = "/cart" element = {<AddtoCart/>} />
      </Routes>
  )
}
