import React from "react"
import ammper from "../assets/img/ammper.png"
import "../css/Header.css"

const Header = () => {
    return (
        <div className="header">
        <img src= {ammper} alt="logo Ammper" width={200}/>
      </div>
    )
}
export default Header