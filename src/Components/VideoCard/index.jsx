import React from "react";

import Sticker from "./Sticker";
import dotsVertical from "../../Assets/icons/dots-vertical.svg";
import eye from "../../Assets/icons/eye.svg";
import { useNavigate  } from "react-router-dom";
import "./VideoCard.scss";

export default function VideoCard({data}){
 const {imgURL, title, timeCode, currentEpisode}=data
 const [showSetting, SetShowSetting]=React.useState(false)

 const navigate = useNavigate();

 const updateVideo=() => {
   console.log(data.id)
 navigate('Details', data.id);
 }


    return (
       <div className="VideoCard">
          <div className="VideoCard__image-wrapper"  >
          <img className="VideoCard__img" 
        onClick={updateVideo}
          src={imgURL!==''? 
          imgURL:"https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-13.png"} 
          alt="image1" />
      { true &&   <div className="VideoCard__stickers">
          <Sticker 
          timeCode={timeCode}/>
       <Sticker currentEpisode={currentEpisode}/>
          </div>}
         {showSetting && <div className="VideoCard__settings">
            <ul className="VideoCard__settings-wrapper">
                <li className="VideoCard__settings-item">
                <img className="VideoCard__icon" src={eye} alt="image1" />
                <p>Send To bookmark</p>
                </li>
                <li className="VideoCard__settings-item">
                <img className="VideoCard__icon" src={eye} alt="image1" />
                <p>Send To views</p>
                </li>
                <li className="VideoCard__settings-item">
                <img className="VideoCard__icon" src={eye} alt="image1" />
                <p>Delete</p>
                </li>
            </ul>
          </div>}
          </div>
   <div className="VideoCard__bottom">
   <h2 className="VideoCard__title">{title}</h2>
   <button onClick={()=>SetShowSetting(!showSetting)} className="VideoCard__toggle">
   <img className="VideoCard__icon" src={dotsVertical} alt="dotsVertical" />
   </button>
   </div>
 
       </div>
    )
}