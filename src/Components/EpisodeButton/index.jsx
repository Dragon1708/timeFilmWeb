import React from "react";
import { useDispatch } from 'react-redux'
import { SetCategoryId } from '../../redux/slices/FilterSlice'
import playIcon from "../../Assets/icons/play-square.svg";
import play_black from "../../Assets/icons/play-square_black.svg";
import plus from "../../Assets/icons/plus.svg";

import "./EpisodeButton.scss";


export default function EpisodeButton({index,isActive, isAdd, onSelectEpisode}){

    const onSelect=()=>{
        console.log("onSelectEpisode")
        onSelectEpisode(index)
      }      

    return (
   <button className={!isActive? "EpisodeButton" : "EpisodeButton-active"} onClick={()=>onSelect()}>
{ !isAdd && <p className='EpisodeButton__title'>{index}</p>}
    <img className="EpisodeButton__icon" 
          src={isAdd ? plus: !isActive? play_black : playIcon}
          alt="image1" />
   </button>
    )
}