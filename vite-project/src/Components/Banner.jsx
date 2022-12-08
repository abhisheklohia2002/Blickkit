import React from 'react'
import "./body.css"
export const Banner = ({img}) => {
  return (
    <div>
     
        <img className = "img_banner" src={img} alt="" />
    </div>
  )
}
