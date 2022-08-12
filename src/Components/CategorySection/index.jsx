import React from "react";

import VideoCard from "../VideoCard";
import "./CategorySection.scss";

export default function CategorySection(){

    return (
      <div className="CategorySection">
        <div className="CategorySection__head-wrapper">
        <h2 className="CategorySection__title">
        Design
        </h2>
        <button className="CategorySection__addVideo-btn">
      + addVideo
        </button>
        </div>
      <ul className="CategorySection__list">
        <li ><VideoCard/> </li>.
        <li ><VideoCard/> </li>
        <li ><VideoCard/> </li>
        <li ><VideoCard/> </li>
      </ul>
    </div>
    )
}