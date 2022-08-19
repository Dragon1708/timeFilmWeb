import React from "react";


import clock from "../../../Assets/icons/clock.svg";
import "./Sticker.scss";

export default function Sticker({timeCode, currentEpisode}){

    return (
       <div className="Sticker">
      <div className="Sticker__container">
      { timeCode && <img className="Sticker__icon" src={clock} alt="image1" />}
<p className="Sticker__text">{timeCode?
`${timeCode[0]}:${timeCode[1]}:${timeCode[2]}`:currentEpisode[1] }</p>
       </div>
      </div>
     
    )
}