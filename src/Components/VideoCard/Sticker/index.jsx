import React from "react";


import clock from "../../../Assets/icons/clock.svg";
import "./Sticker.scss";

export default function Sticker({isTime}){
 
    return (
       <div className="Sticker">
      <div className="Sticker__container">
      { isTime && <img className="Sticker__icon" src={clock} alt="image1" />}
<p className="Sticker__text">14:21</p>
       </div>
      </div>
     
    )
}