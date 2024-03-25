import React, { useState } from "react";
import "./NavBar.css"
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import { useHistory, useNavigate } from "react-router-dom";




function NavBar() {

  const navigate=useNavigate()
  return (
    <div className="common-Nav">
        <div className="common-nav-left">
        <div className='common-nav-list'>
        <ul>
        <li>AdMavin</li>
                <li><Insta size={"1.5rem"} color={"black"}/></li>
                <li><Facebook size={"1.5rem"} color={"black"}/></li>
                <li><Twitter size={"1.5rem"} color={"black"}/></li>  
            </ul>
            </div>
        </div>
        <div className="common-nav-right">
        <div className='common-nav-list'>
            <ul>
                <li 
                onClick={()=>{navigate("/")}}>Files</li>
                 <li 
                onClick={()=>{navigate("/game")}}>Game</li>
                <li
                onClick={()=>{navigate("/element-transfer" )}}>Bucket</li>
                <li onClick={()=>{navigate("/infinite-scroll")}}>Infinite Scroll</li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default NavBar