import React from "react";

import VideoCard from "../VideoCard";
import { useSelector } from 'react-redux'


import "./CategoryVideoList.scss";

export default function CategoryVideoList({data, videos}){
 // const videosByCategory =useSelector(state=>state.VideosReducer)
 console.log(videos, "====")
    return (
      <div className="CategorySection">
        <div className="CategorySection__head-wrapper">
        <h2 className="CategorySection__title">
        {data.Name}
        </h2>
        <button className="CategorySection__addVideo-btn">
      + addVideo
        </button>
        <button className="CategorySection__addVideo-btn">
      See all
        </button>
        </div>
      <ul className="CategorySection__list">
        { videos.map((el)=>{
return <li> <VideoCard key={el.id} data={el} isTime={true}/> </li>
        })
        }
      </ul>
    </div>
    )
}