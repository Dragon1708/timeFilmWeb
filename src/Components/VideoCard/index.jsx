import React from "react";

import Sticker from "./Sticker";
import dotsVertical from "../../Assets/icons/dots-vertical.svg";
import eye from "../../Assets/icons/eye.svg";
import "./VideoCard.scss";

export default function VideoCard(){
 
    return (
       <div className="VideoCard">
          <div className="VideoCard__image-wrapper">
          <img className="VideoCard__img" src={"https://img1.ak.crunchyroll.com/i/spire1/58233f610abc458778ac5726573c8e0a1645014684_main.jpg"} alt="image1" />
      { true &&   <div className="VideoCard__stickers">
          <Sticker isTime={true}/>
       <Sticker />
          </div>}
         {false && <div className="VideoCard__settings">
            <ul className="VideoCard__settings-wrapper">
                <li className="VideoCard__setting-item">
                <img className="VideoCard__icon" src={eye} alt="image1" />
                <p>Send To bookmark</p>
                </li>
                <li className="VideoCard__setting-item">
                <img className="VideoCard__icon" src={eye} alt="image1" />
                <p>Send To views</p>
                </li>
                <li className="VideoCard__setting-item">
                <img className="VideoCard__icon" src={eye} alt="image1" />
                <p>Delete</p>
                </li>
            </ul>
          </div>}
          </div>
   <div className="VideoCard__bottom">
   <h2 className="VideoCard__title">Wonder Egg Priores</h2>
   <button className="VideoCard__toggle">
   <img className="VideoCard__icon" src={dotsVertical} alt="dotsVertical" />
   </button>
   </div>
 
       </div>
    )
}